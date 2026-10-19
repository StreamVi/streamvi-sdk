import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { ProjectApi, ProjectApiFactory, RtmpServerApi, StreamViSdkConfig } from '../src';

it('uses a replacement token in existing clients without changing another connection', async () => {
  const captured: Array<{ path: string; token?: string; marker?: string | string[] }> = [];
  const server = createServer((req, res) => {
    captured.push({ path: req.url!, token: req.headers.authorization, marker: req.headers['x-test-marker'] });
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ data: { id: 17, name: 'Local project' }, results: [] }));
  });
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const basePath = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
    const config = new StreamViSdkConfig({ accessToken: 'old-test-token', basePath });
    config.configuration.baseOptions.headers['X-Test-Marker'] = 'preserved';
    const project = new ProjectApi(config.configuration);
    const factory = ProjectApiFactory(config.configuration);
    const locations = new RtmpServerApi(config.configuration);
    const other = new ProjectApi(new StreamViSdkConfig({ accessToken: 'other-test-token', basePath }).configuration);
    const request = { language: 'ru' as const, project_id: 17 };
    const transport = { proxy: false as const, timeout: 5000 };
    const callExistingClients = async () => {
      await project.userProjectGetProjectInfoV1(request, transport);
      await factory.userProjectGetProjectInfoV1(request, transport);
      await locations.methodRtmpServerListLocationsUnauthorizedV1({ language: 'ru' }, transport);
    };
    await callExistingClients();
    config.accessToken = 'new-test-token';
    await callExistingClients();
    await other.userProjectGetProjectInfoV1(request, transport);
    expect(captured.map(item => item.token)).toEqual([
      ...Array(3).fill('oauth old-test-token'),
      ...Array(3).fill('oauth new-test-token'),
      'oauth other-test-token',
    ]);
    expect(captured.slice(0, 6).every(item => item.marker === 'preserved')).toBe(true);
    for (const item of captured) {
      expect(new URL(item.path, basePath).searchParams.get('v')).toBe('1');
    }
  } finally {
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});
