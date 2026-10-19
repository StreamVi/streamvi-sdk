# Changelog

## 3.0.0 (2026-10-20)

Generated with OpenAPI Generator 7.13.0 from the production schema at
https://api-v2.streamvi.io/method/apidoc-json.
The exact source SHA-256 is recorded in `openapi-source.json`.

### API changes

- 354 operations, up from 281 in version 2.0.0. No existing route was removed from the source schema.
- 73 new operations, including integration settings, administrators, webhooks, access, invitations and connected accounts; plugin catalogs and installation; integration project templates; project management, invitations and activity.
- Updated request and response models, OAuth account/project scheme declarations and API method descriptions.
- Optional request correlation through the `X-Client-Request-Id` HTTP header.
- Regenerated JavaScript, TypeScript declarations and API reference from the same schema. Query and JSON body version defaults are retained using the SDK release helpers.

### Upgrading from 2.x

This is a major release because generated call signatures can change when the API adds parameters. Recompile the consuming application after upgrading.

Methods that previously accepted only transport options now accept a request object first. For example:

```ts
// 2.x
await api.rtmpServerUpV1(options);

// 3.0.0
await api.rtmpServerUpV1({}, options);
```

Calls without options can still omit both arguments. The HTTP path is unchanged.

The low-level `*ApiFp` and `*ApiAxiosParamCreator` functions also have new positional header arguments before transport options. Check their generated signatures, or use the API class/factory with named request properties:

```ts
await api.methodRtmpServerListLocationsUnauthorizedV1({
  language: 'en',
  'X-Client-Request-Id': '2c3d4e5f-1234-4567-89ab-0123456789ab',
}, { timeout: 5000 });
```

The Axios template now quotes request property names and uses bracket access, so hyphenated HTTP header names produce valid TypeScript. The regression test checks header, token and version transmission through both the class and factory clients against a local HTTP server.

The generated API includes endpoints with different access requirements. A method's presence in the SDK does not grant permission to call it. Use the token type and scopes specified in the [API reference](https://dev.streamvi.io/).

`StreamViSdkConfig` still accepts a raw access token and adds the `oauth` prefix. Set `basePath: 'https://api-v2.streamvi.io'` explicitly to use the production endpoint used for this release; the configuration's existing default remains `https://napi.streamvi.io`.
