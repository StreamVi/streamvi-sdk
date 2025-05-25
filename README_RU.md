# StreamVi SDK

Тестовый проект для авторизации через passport-streamvi и работы с API StreamVi.

## Возможности

- ✅ Авторизация через StreamVi OAuth2
- ✅ Автоматическая генерация TypeScript API клиента
- ✅ Типизированные интерфейсы для всех методов API
- ✅ Поддержка refresh token
- ✅ Готовые примеры использования

## Установка

```bash
npm install
```

## Конфигурация

Создайте файл `.env` в корне проекта:

```env
STREAMVI_CLIENT_ID=ваш_client_id
STREAMVI_CLIENT_SECRET=ваш_client_secret
CALLBACK_URL=http://localhost:3000/auth/streamvi/callback
PORT=3000
```

## Генерация API-клиента

### Автоматическая генерация с production-сервера

```bash
npm run gen:api-prod
```

Эта команда:
1. Скачивает OpenAPI спецификацию с `napi.streamvi.io`
2. Генерирует TypeScript клиент в `src/generated/api2/`
3. Обновляет экспорты в `src/index.ts`

### Ручная генерация (если у вас есть локальный файл спецификации)

```bash
# Поместите OpenAPI спецификацию в temp/backend_v2.json
npm run gen-process
```

## Генерация документации

Для генерации документации используйте:

```
npm run build:docs
```

## Форматирование кода

Проверить форматирование:

```
npm run prettier
```

Автоформатирование:

```
npm run format
```

## Использование

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

## Доступные API

После генерации доступны следующие API-клиенты:

- `AnalyticsApi` — аналитика
- `AuthApi` — авторизация
- `BroadcastApi` — трансляции
- `ChannelApi` — каналы
- `PaymentApi` — платежи
- `ProjectApi` — проекты
- `UserApi` — пользователи
- `StreamKeyApi` — ключи трансляций
- И многие другие...

Полный список доступен в `src/generated/api2/api.ts`

## Скрипты

- `npm start` — запуск сервера для разработки
- `npm run build` — сборка проекта
- `npm run gen:api-prod` — генерация API с production-сервера
- `npm run gen-process` — генерация API из локального файла
- `npm run lint` — проверка кода

## Структура проекта

```
src/
├── generated/
│   └── api2/           # Сгенерированный API-клиент
├── scripts/
│   ├── openapi-fetcher.mjs  # Скрипт для загрузки OpenAPI спецификации
│   └── process-api.js       # Скрипт пост-обработки
├── index.ts            # Главный файл с примером авторизации
└── example-api-usage.ts # Пример использования API
```

## Разработка

### Обновление API

Чтобы обновить API-клиент после изменений на сервере:

```bash
npm run gen:api-prod
npm run build
```

### Добавление новых методов

1. Обновите API на сервере
2. Перегенерируйте клиент: `npm run gen:api-prod`
3. Новые методы появятся в соответствующих классах API

## Лицензия

MIT

## Документация по API-классам

Подробная документация для каждого сгенерированного API-класса доступна по ссылкам ниже:

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