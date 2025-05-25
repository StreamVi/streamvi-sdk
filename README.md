# StreamVi SDK

Test project for authorization via passport-streamvi and working with the StreamVi API.

## Features

- ✅ Authorization via StreamVi OAuth2
- ✅ Automatic TypeScript API client generation
- ✅ Typed interfaces for all API methods
- ✅ Refresh token support
- ✅ Ready-to-use usage examples

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the project root:

```env
STREAMVI_CLIENT_ID=your_client_id
STREAMVI_CLIENT_SECRET=your_client_secret
CALLBACK_URL=http://localhost:3000/auth/streamvi/callback
PORT=3000
```

## API Client Generation

### Automatic generation from production server

```bash
npm run gen:api-prod
```

This command:
1. Downloads the OpenAPI specification from `napi.streamvi.io`
2. Generates a TypeScript client in `src/generated/api2/`
3. Updates exports in `src/index.ts`

### Manual generation (if you have a local specification file)

```bash
# Place the OpenAPI specification file in temp/backend_v2.json
npm run gen-process
```

## Documentation Generation

To generate documentation, use:

```
npm run build:docs
```

## Code Formatting

To check formatting:

```
npm run prettier
```

To auto-format:

```
npm run format
```

## Usage

### Пример запуска сервера для авторизации через StreamVi

```bash
npm start
```

Откройте http://localhost:3000 и выполните вход через StreamVi.

### Пример получения информации о проекте через SDK

```typescript
import { StreamViSdkConfig } from './src/streamvi-sdk-config';
import { UserProjectApi, SiteUserProjectControllerGetProjectInfo1VEnum, SiteUserProjectControllerGetProjectInfo1LanguageEnum } from './src/generated/api2';

async function getProjectInfo(accessToken: string, projectId: number) {
  const sdkConfig = new StreamViSdkConfig({ accessToken });
  const userProjectApi = new UserProjectApi(sdkConfig.configuration);
  const response = await userProjectApi.siteUserProjectControllerGetProjectInfo1(
    SiteUserProjectControllerGetProjectInfo1VEnum._1,
    SiteUserProjectControllerGetProjectInfo1LanguageEnum.Ru,
    projectId
  );
  return response.data;
}
```

### Использование сгенерированных API-клиентов

```typescript
import { StreamViSdkConfig } from './src/streamvi-sdk-config';
import { UserApi, AuthApi } from './src/generated/api2';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const userApi = new UserApi(sdkConfig.configuration);
const authApi = new AuthApi(sdkConfig.configuration);

const profile = await userApi.siteUserControllerGetProfile1(
  '3', // версия API
  'ru' // язык
);
```

## Available APIs

After generation, the following API clients are available:

- `AnalyticsApi` - analytics
- `AuthApi` - authorization
- `BroadcastApi` - broadcasts
- `ChannelApi` - channels
- `PaymentApi` - payments
- `ProjectApi` - projects
- `UserApi` - users
- `StreamKeyApi` - stream keys
- And many more...

The full list is available in `src/generated/api2/api.ts`

## Scripts

- `npm start` - start development server
- `npm run build` - build the project
- `npm run gen:api-prod` - generate API from production server
- `npm run gen-process` - generate API from local file
- `npm run lint` - code check

## Project Structure

```
src/
├── generated/
│   └── api2/           # Generated API client
├── scripts/
│   ├── openapi-fetcher.mjs  # OpenAPI specification fetch script
│   └── process-api.js       # Post-processing script
├── index.ts            # Main file with authorization example
└── example-api-usage.ts # API usage example
```

## Development

### API Update

To update the API client after server changes:

```bash
npm run gen:api-prod
npm run build
```

### Adding new methods

1. Update the API on the server
2. Regenerate the client: `npm run gen:api-prod`
3. New methods will be available in the corresponding API classes

## License

MIT

## API Class Documentation

Detailed documentation for each generated API class is available at the links below:

- [AnalyticsApi](src/generated/api2/docs/AnalyticsApi.md)
- [AuthApi](src/generated/api2/docs/AuthApi.md)
- [BlogPageApi](src/generated/api2/docs/BlogPageApi.md)
- [BlogPageTagApi](src/generated/api2/docs/BlogPageTagApi.md)
- [BroadcastApi](src/generated/api2/docs/BroadcastApi.md)
- [CentrifugeApi](src/generated/api2/docs/CentrifugeApi.md)
- [ChannelApi](src/generated/api2/docs/ChannelApi.md)
- [ChannelSettingsApi](src/generated/api2/docs/ChannelSettingsApi.md)
- [ChatGatewayApi](src/generated/api2/docs/ChatGatewayApi.md)
- [HelpPageApi](src/generated/api2/docs/HelpPageApi.md)
- [LiveApi](src/generated/api2/docs/LiveApi.md)
- [MoneyFlowApi](src/generated/api2/docs/MoneyFlowApi.md)
- [NotifyHistoryApi](src/generated/api2/docs/NotifyHistoryApi.md)
- [NotifyUserApi](src/generated/api2/docs/NotifyUserApi.md)
- [PaySettingApi](src/generated/api2/docs/PaySettingApi.md)
- [PaymentApi](src/generated/api2/docs/PaymentApi.md)
- [PaySystemApi](src/generated/api2/docs/PaySystemApi.md)
- [PayoutApi](src/generated/api2/docs/PayoutApi.md)
- [PlanRestreamApi](src/generated/api2/docs/PlanRestreamApi.md)
- [PlanStorageApi](src/generated/api2/docs/PlanStorageApi.md)
- [PlanTranscodingApi](src/generated/api2/docs/PlanTranscodingApi.md)
- [PlatformsApi](src/generated/api2/docs/PlatformsApi.md)
- [PolicyPageApi](src/generated/api2/docs/PolicyPageApi.md)
- [ProjectApi](src/generated/api2/docs/ProjectApi.md)
- [ProjectChannelApi](src/generated/api2/docs/ProjectChannelApi.md)
- [ProjectChannelInviteApi](src/generated/api2/docs/ProjectChannelInviteApi.md)
- [ProjectHistoryApi](src/generated/api2/docs/ProjectHistoryApi.md)
- [PromoApi](src/generated/api2/docs/PromoApi.md)
- [PullServersApi](src/generated/api2/docs/PullServersApi.md)
- [ReferralsApi](src/generated/api2/docs/ReferralsApi.md)
- [ReleaseApi](src/generated/api2/docs/ReleaseApi.md)
- [RtmpServerApi](src/generated/api2/docs/RtmpServerApi.md)
- [SocialsApi](src/generated/api2/docs/SocialsApi.md)
- [StreamKeyApi](src/generated/api2/docs/StreamKeyApi.md)
- [StreamPullKeysApi](src/generated/api2/docs/StreamPullKeysApi.md)
- [TranscodersApi](src/generated/api2/docs/TranscodersApi.md)
- [TransactionsApi](src/generated/api2/docs/TransactionsApi.md)
- [UserApi](src/generated/api2/docs/UserApi.md)
- [UserProjectApi](src/generated/api2/docs/UserProjectApi.md) 