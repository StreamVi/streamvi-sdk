# StreamVi SDK

Тестовый проект для авторизации через passport-streamvi и работы с API StreamVi.

## Возможности

- ✅ Авторизация через StreamVi OAuth2
- ✅ Автоматическая генерация TypeScript API клиента
- ✅ Готовые примеры использования
- ✅ Модульная структура Express приложения

## Установка

```bash
npm install
```

## Конфигурация

Создайте файл `.env` в корне проекта:

```env
STREAMVI_CLIENT_ID=your_client_id
STREAMVI_CLIENT_SECRET=your_client_secret
CALLBACK_URL=http://localhost:3000/auth/streamvi/callback
PORT=3000
```

## Использование

### Запуск примера сервера для авторизации через StreamVi

```bash
npm run example
```

Откройте http://localhost:3000 и выполните вход через StreamVi.

### Пример получения информации о проекте через SDK

```typescript
import { StreamViSdkConfig } from './src/streamvi-sdk-config';
import { UserProjectApi, getProjectInfo1LanguageEnum } from './src/generated/api2/api/user-project-api';

async function getProjectInfo(accessToken: string, projectId: number, language: getProjectInfo1LanguageEnum = getProjectInfo1LanguageEnum.ru) {
  const sdkConfig = new StreamViSdkConfig({ accessToken });
  const userProjectApi = new UserProjectApi(sdkConfig.configuration);

  const response = await userProjectApi.getProjectInfo1({
    language: language,
    projectId: projectId
  });
  return response.data;
}
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

- `npm run example` - запуск примера сервера с авторизацией
- `npm run build` - сборка проекта
- `npm run gen:api-prod` - генерация API с продакшн сервера
- `npm run gen-process` - генерация API из файла temp/backend_v2.json
- `npm run lint` - проверка кода

## Структура проекта

```
src/
├── generated/
│   └── api2/           # Сгенерированный API клиент
├── scripts/
│   ├── openapi-fetcher.mjs  # Скрипт получения OpenAPI спецификации
│   └── process-api.js       # Скрипт постобработки
└── streamvi-sdk-config.ts   # Конфигурация SDK

example/
├── server.ts           # Основной файл сервера
├── config/
│   ├── passport.ts     # Конфигурация Passport.js
│   └── session.ts      # Конфигурация сессий
├── routes/
│   └── index.ts        # Маршруты приложения
└── helpers/            # Вспомогательные функции
```

## Пример приложения

В папке `example/` находится полноценное Express приложение, демонстрирующее:

- Авторизацию через StreamVi OAuth2
- Получение информации о проекте
- Обработку ошибок авторизации
- Управление сессиями пользователей

### Структура примера

- **server.ts** - основной файл сервера с настройкой middleware
- **config/passport.ts** - конфигурация стратегии авторизации StreamVi
- **config/session.ts** - настройки сессий Express
- **routes/index.ts** - маршруты для авторизации и отображения данных

### Функциональность примера

1. **Главная страница** (`/`) - отображает информацию о проекте или предлагает авторизацию
2. **Авторизация** (`/auth/streamvi`) - перенаправляет на StreamVi для авторизации
3. **Callback** (`/auth/streamvi/callback`) - обрабатывает результат авторизации
4. **Выход** (`/logout`) - очищает сессию пользователя
5. **Обработка ошибок** (`/login`) - отображает ошибки авторизации

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