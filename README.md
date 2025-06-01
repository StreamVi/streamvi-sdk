# StreamVi SDK

Library for working with StreamVi API along with OAuth authorization example using [passport-streamvi](https://www.npmjs.com/package/passport-streamvi) library.

API methods documentation is available at: [https://dev.streamvi.io](https://dev.streamvi.io)

## Features

- ✅ StreamVi SDK library for TypeScript/JavaScript
- ✅ Ready-to-use examples with OAuth2 authorization

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the project root:

```bash
STREAMVI_CLIENT_ID=your_client_id
STREAMVI_CLIENT_SECRET=your_client_secret
CALLBACK_URL=http://localhost:3000/auth/streamvi/callback
PORT=3000
```

## Usage

### Running example server for StreamVi authorization

```bash
npm run example
```

Open http://localhost:3000 and login via StreamVi.

### Example of getting project information via SDK

```typescript
import { StreamViSdkConfig } from './src/streamvi-sdk-config';
import { UserProjectApi, UserProjectGetProjectInfoV1LanguageEnum } from './src/generated/api2/api/user-project-api';

async function getProjectInfo(accessToken: string, projectId: number, language: UserProjectGetProjectInfoV1LanguageEnum = UserProjectGetProjectInfoV1LanguageEnum.Ru) {
  const sdkConfig = new StreamViSdkConfig({ accessToken });
  const userProjectApi = new UserProjectApi(sdkConfig.configuration);

  const response = await userProjectApi.userProjectGetProjectInfoV1({
    language: language,
    projectId: projectId
  });
  return response.data;
}
```

### Example of using PaySetting API with version 3

```typescript
import { StreamViSdkConfig } from './src/streamvi-sdk-config';
import { PaySettingApi, PaySettingGetSettingV3LanguageEnum } from './src/generated/api2/api/pay-setting-api';

async function getPaySettings(accessToken: string, projectId: number, language: PaySettingGetSettingV3LanguageEnum = PaySettingGetSettingV3LanguageEnum.Ru) {
  const sdkConfig = new StreamViSdkConfig({ accessToken });
  const paySettingApi = new PaySettingApi(sdkConfig.configuration);

  const response = await paySettingApi.paySettingGetSettingV3({
    language: language,
    projectId: projectId
  });
  return response.data;
}
```

## Available APIs

After generation, the following API clients are available:

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

The full list is available in `src/generated/api2/api.ts`

## Project Structure

```
src/
├── generated/
│   └── api2/           # Generated API client
├── scripts/            # API generation scripts
└── streamvi-sdk-config.ts      # SDK configuration

example/
├── server.ts           # Main server file
├── config/
│   ├── passport.ts     # Passport.js configuration
│   └── session.ts      # Session configuration
├── routes/
│   └── index.ts        # Application routes
└── helpers/            # Helper functions
```

## Example Application

The `example/` folder contains a complete Express application demonstrating:

- Authorization via StreamVi OAuth2
- Getting project information
- Authorization error handling
- User session management
- Proper error display and user feedback

### Example Structure

- **server.ts** - main server file with middleware setup and environment validation
- **config/passport.ts** - StreamVi authorization strategy configuration with proper error handling
- **config/session.ts** - Express session settings with security considerations
- **routes/index.ts** - routes for authorization, data display, and comprehensive error handling

### Example Functionality

1. **Home page** (`/`) - displays project information with avatar and details, or offers authorization
2. **Authorization** (`/auth/streamvi`) - redirects to StreamVi for authorization
3. **Callback** (`/auth/streamvi/callback`) - handles authorization result with detailed error processing
4. **Logout** (`/logout`) - clears user session and redirects to home
5. **Error handling** (`/login`) - displays authorization errors with detailed information
6. **Session management** - stores access tokens and project IDs securely

### Authorization Flow

The example demonstrates a complete OAuth2 flow:

1. User visits the home page
2. If not authorized, they see a login button
3. Clicking login redirects to StreamVi OAuth2 endpoint
4. After authorization, StreamVi redirects back with authorization code
5. The callback handler exchanges the code for access token
6. Access token and project ID are stored in session
7. User is redirected to home page showing project information

### Error Handling

The example includes comprehensive error handling:

- **Environment validation** - checks for required environment variables on startup
- **Authorization errors** - displays detailed error messages from StreamVi
- **API errors** - shows API response errors with full context
- **Session errors** - handles session destruction and recreation
- **Network errors** - graceful handling of network issues

## API Client Generation

The API client is automatically generated from the StreamVi OpenAPI specification with built-in error correction and optimization.

### Update API client

To update the API client after server changes:

```bash
npm run gen:api-prod
npm run build
```

This command downloads the latest API specification and generates an optimized TypeScript client.

> **For library developers**: See [README_DEVELOPMENT_EN.md](README_DEVELOPMENT_EN.md) for detailed information about the generation process, error correction, and development workflows.

## Scripts

- `npm run example` - run example server with authorization
- `npm run build` - build the project
- `npm run gen:api-prod` - generate API from production server
- `npm run lint` - code check

## License

MIT

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