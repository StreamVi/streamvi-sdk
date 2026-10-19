# StreamVi SDK Axios

Typed JavaScript/TypeScript client for the [StreamVi API](https://dev.streamvi.io/). Choose either the [Axios client](https://github.com/StreamVi/streamvi-sdk) or the [Fetch client](https://github.com/StreamVi/streamvi-sdk-fetch).

## Install the client

Use a supported Node.js release compatible with `engines` in [package.json](package.json), and Git:

```bash
npm install git+https://github.com/StreamVi/streamvi-sdk.git
```

Git installation builds the package. Keep the generated lockfile in your application. Changes and migration notes are in [CHANGELOG](CHANGELOG.md).

The client accepts an existing access token. OAuth client secrets, callback URLs and the demonstration server are not required to make each API request.

## Make a request

Obtain an OAuth token for the selected project and the `project:read` permission, then pass the raw token and internal numeric project ID to the client:

```ts
import { ProjectApi, StreamViSdkConfig } from 'streamvi-sdk';

const config = new StreamViSdkConfig({
  accessToken,
  basePath: 'https://api-v2.streamvi.io',
});
const api = new ProjectApi(config.configuration);
const response = await api.userProjectGetProjectInfoV1({ language: 'ru', project_id: projectId });
const project = response.data;
```

`accessToken` and `projectId` are values supplied by your server-side integration. The SDK adds the authorization header and the method version. Do not pass `v` for this call. Specify the production `basePath` as shown; the configuration's existing default is `https://napi.streamvi.io`.

Axios returns an HTTP response object. Its `data` is the StreamVi response body. Catch Axios errors and inspect `error.response?.status`; a network error may have no response. Do not log complete error/request objects containing credentials.

The generated API includes endpoints with different authorization requirements. Project integration tokens are intended for `/method/`; `/site/` methods require Cabinet authorization. A method in the SDK does not grant access to it. Check its token type and scopes in the API reference.

## Replace an access token

Keep a configuration for each connection. After the user reconnects, update that configuration:

```ts
config.accessToken = replacementAccessToken;
```

Subsequent requests through API clients already created from `config.configuration` use the new token. Other configurations are unaffected. This does not perform OAuth or refresh the token automatically.

## Run the OAuth example

The example is a separate development server in this repository. Installing the SDK into another application does not add an `example` script to that application. Follow [the example instructions](example/README.md) to clone the repository, configure OAuth and start it.

## Development

```bash
npm install
npm run build
npm run lint
npm run example:check
npm test -- --runInBand tests/token-update.test.ts tests/example-oauth.test.ts
```

Generated clients are under `src/generated/api2`. The generation process is described in [scripts/README.md](scripts/README.md); the source schema hash is recorded in `openapi-source.json`. Apply connection behavior in `StreamViSdkConfig`, so regeneration does not overwrite it.
