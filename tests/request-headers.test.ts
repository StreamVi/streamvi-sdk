import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { RtmpServerApi, RtmpServerApiFactory, StreamViSdkConfig } from '../src';

describe('Generated request headers', () => {
  it('preserves hyphenated header names through both the class and factory clients', async () => {
    const captured: Array<{ url: string; requestId: string | string[] | undefined; authorization: string | undefined }> = [];
    const server = createServer((request, response) => {
      captured.push({
        url: request.url!,
        requestId: request.headers['x-client-request-id'],
        authorization: request.headers.authorization,
      });
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(JSON.stringify({ results: [{ name: 'Test', host: 'test.invalid', url: 'test.invalid' }] }));
    });
    await new Promise<void>((resolve, reject) => {
      server.once('error', reject);
      server.listen(0, '127.0.0.1', resolve);
    });

    try {
      const configuration = new StreamViSdkConfig({
        accessToken: 'local-test-token',
        basePath: `http://127.0.0.1:${(server.address() as AddressInfo).port}`,
      }).configuration;
      const clients = [new RtmpServerApi(configuration), RtmpServerApiFactory(configuration)];
      const requestId = '2c3d4e5f-1234-4567-89ab-0123456789ab';
      for (const client of clients) {
        const response = await client.methodRtmpServerListLocationsUnauthorizedV1(
          { language: 'en', 'X-Client-Request-Id': requestId },
          { proxy: false, timeout: 5000 },
        );
        expect(response.data.results[0].host).toBe('test.invalid');
      }
      expect(captured).toHaveLength(2);
      for (const request of captured) {
        const url = new URL(request.url, 'http://127.0.0.1');
        expect(url.pathname).toBe('/method/rtmp_server/list_locations_unauthorized');
        expect(url.searchParams.get('v')).toBe('1');
        expect(url.searchParams.get('language')).toBe('en');
        expect(request.requestId).toBe(requestId);
        expect(request.authorization).toBe('oauth local-test-token');
      }
    } finally {
      await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
    }
  });
});
