import express from 'express';
import type { AddressInfo } from 'node:net';
import { ProjectApi } from '../src';
import routes from '../example/routes';
import { getSessionMiddleware } from '../example/config/session';
import { createHash } from 'node:crypto';
import { beginOAuth, finishOAuth } from '../example/config/oauth';

const begin = () => beginOAuth('test-client', 'http://localhost:3000/auth/streamvi/callback');

afterEach(() => jest.restoreAllMocks());

it('exchanges a validated callback using the verifier for the original PKCE challenge', async () => {
  const { url, transaction } = begin();
  const request = jest.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({
    access_token: 'test-access-token', project_id: 17,
  }), { status: 200 }));
  const params = new URLSearchParams({ code: 'test-code', state: transaction.state });
  await expect(finishOAuth(params, transaction)).resolves.toEqual({ accessToken: 'test-access-token', projectId: 17 });
  const [endpoint, options] = request.mock.calls[0];
  expect(endpoint).toBe('https://api-v2.streamvi.io/site/oauth/token');
  const form = options!.body as URLSearchParams;
  expect(createHash('sha256').update(form.get('code_verifier')!).digest('base64url'))
    .toBe(new URL(url).searchParams.get('code_challenge'));
  expect(form.get('redirect_uri')).toBe(transaction.redirectUri);
  expect(form.get('client_id')).toBe('test-client');
  expect(form.get('code')).toBe('test-code');
  expect(form.has('client_secret')).toBe(false);
});

it('rejects missing, wrong, duplicated, expired and denied callbacks before a token request', async () => {
  const request = jest.spyOn(globalThis, 'fetch');
  const { transaction } = begin();
  const valid = new URLSearchParams({ code: 'test-code', state: transaction.state });
  const duplicate = new URLSearchParams(valid);
  duplicate.append('state', transaction.state);
  const denied = new URLSearchParams(valid);
  denied.set('error', 'access_denied');
  for (const params of [new URLSearchParams(), new URLSearchParams({ code: 'test-code' }),
    new URLSearchParams({ code: 'test-code', state: 'wrong' }), duplicate, denied]) {
    await expect(finishOAuth(params, transaction)).rejects.toThrow('Invalid or expired');
  }
  await expect(finishOAuth(valid)).rejects.toThrow('Invalid or expired');
  await expect(finishOAuth(valid, { ...transaction, expiresAt: Date.now() - 1 })).rejects.toThrow('Invalid or expired');
  expect(request).not.toHaveBeenCalled();
});

it('does not accept an error response or an incomplete project connection', async () => {
  const { transaction } = begin();
  const params = new URLSearchParams({ code: 'test-code', state: transaction.state });
  const request = jest.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('private details', { status: 400 }));
  await expect(finishOAuth(params, transaction)).rejects.toThrow('OAuth code exchange failed');
  for (const body of [{ project_id: 17 }, { access_token: 'token' }, { access_token: 'token', project_id: -1 }]) {
    request.mockResolvedValue(new Response(JSON.stringify(body)));
    await expect(finishOAuth(params, transaction)).rejects.toThrow('Invalid OAuth token response');
  }
});

it('consumes the session attempt, keeps the token off the page and rejects callback replay', async () => {
  const saved = { ...process.env };
  process.env.STREAMVI_CLIENT_ID = 'test-client';
  process.env.CALLBACK_URL = 'http://localhost:3000/auth/streamvi/callback';
  process.env.SESSION_SECRET = 'test-session-secret-never-used-in-production';
  const originalFetch = globalThis.fetch;
  let exchanges = 0;
  jest.spyOn(globalThis, 'fetch').mockImplementation((input, options) => {
    if (String(input) === 'https://api-v2.streamvi.io/site/oauth/token') {
      exchanges++;
      return Promise.resolve(new Response(JSON.stringify({ access_token: 'private-test-token', project_id: 17 })));
    }
    return originalFetch(input, options);
  });
  const project = jest.spyOn(ProjectApi.prototype, 'userProjectGetProjectInfoV1')
    .mockResolvedValue({ data: { data: { name: '<Test project>', project_id: 17 } } } as never);
  const app = express();
  app.use(getSessionMiddleware());
  app.use(routes);
  const server = app.listen(0, '127.0.0.1');
  await new Promise<void>(resolve => server.once('listening', resolve));
  const base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  try {
    const start = await originalFetch(`${base}/auth/streamvi`, { redirect: 'manual' });
    expect(start.status).toBe(302);
    const state = new URL(start.headers.get('location')!).searchParams.get('state')!;
    const cookie = start.headers.get('set-cookie')!.split(';')[0];
    const callback = `${base}/auth/streamvi/callback?${new URLSearchParams({ code: 'test-code', state })}`;
    const success = await originalFetch(callback, { redirect: 'manual', headers: { cookie } });
    expect(success.headers.get('location')).toBe('/');
    expect(exchanges).toBe(1);
    const connectedCookie = success.headers.get('set-cookie')!.split(';')[0];
    const page = await originalFetch(`${base}/`, { headers: { cookie: connectedCookie } });
    const html = await page.text();
    expect(html).toContain('&lt;Test project&gt;');
    expect(html).not.toContain('private-test-token');
    expect(project).toHaveBeenCalledWith({ language: 'ru', project_id: 17 });
    const replay = await originalFetch(callback, { redirect: 'manual', headers: { cookie: connectedCookie } });
    expect(replay.headers.get('location')).toBe('/login');
    expect(exchanges).toBe(1);
  } finally {
    process.env = saved;
    server.closeAllConnections();
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});
