# StreamVi SDK (Axios-based)

Библиотека для работы с API StreamVi вместе с примером авторизации через OAuth с помощью библиотеки [passport-streamvi](https://www.npmjs.com/package/passport-streamvi).

Документация по API методам доступна на: [https://dev.streamvi.io](https://dev.streamvi.io)

## Возможности

- ✅ SDK библиотека StreamVi для TypeScript/JavaScript
- ✅ Готовые примеры использования с авторизацией OAuth2

## Альтернативная версия

Доступна альтернативная версия библиотеки, которая использует нативный `fetch` API вместо axios: [streamvi-sdk-fetch](https://github.com/StreamVi/streamvi-sdk-fetch)

Эта версия может быть предпочтительной для проектов, где важен размер бандла или требуется использование нативного fetch API.

## Установка

### Установка из GitHub репозитория

Установите напрямую из GitHub репозитория:

```bash
npm install git+https://github.com/StreamVi/streamvi-sdk.git
```

Или с указанием конкретной версии/тега:

```bash
npm install git+https://github.com/StreamVi/streamvi-sdk.git#v1.0.2
```

### Локальная установка для разработки

```bash
npm install
```

## Импорт модулей

### Базовая конфигурация SDK

```typescript
import { StreamViSdkConfig } from 'streamvi-sdk';

const config = new StreamViSdkConfig({ 
  accessToken: 'ваш_токен_доступа' 
});
```

### Импорт API-клиентов

Импортируйте конкретные API-клиенты по необходимости:

```typescript
import { 
  UserProjectApi,
  PaySettingApi,
  ChannelApi,
  BroadcastApi 
} from 'streamvi-sdk';
```

Или импортируйте все API сразу:

```typescript
import * as StreamViAPIs from 'streamvi-sdk';
```

### Импорт типов и перечислений

```typescript
import { 
  UserProjectGetProjectInfoV1LanguageEnum,
  PaySettingGetSettingV3LanguageEnum 
} from 'streamvi-sdk';
```

## Конфигурация

Создайте файл `.env` в корне проекта:

```bash
STREAMVI_CLIENT_ID=ваш_client_id
STREAMVI_CLIENT_SECRET=ваш_client_secret
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
import { StreamViSdkConfig } from 'streamvi-sdk';
import { UserProjectApi, UserProjectGetProjectInfoV1LanguageEnum } from 'streamvi-sdk';

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

### Пример использования PaySetting API с версией 3

```typescript
import { StreamViSdkConfig } from 'streamvi-sdk';
import { PaySettingApi, PaySettingGetSettingV3LanguageEnum } from 'streamvi-sdk';

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

## Доступные API

После генерации доступны следующие API-клиенты:

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

Список также доступен в `src/generated/api2/api.ts`

## Структура проекта

```
src/
├── generated/
│   └── api2/           # Сгенерированный API-клиент
├── scripts/            # Скрипты генерации API
└── streamvi-sdk-config.ts      # Конфигурация SDK

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
- Правильное отображение ошибок и обратную связь с пользователем

### Структура примера

- **server.ts** — основной файл сервера с настройкой middleware и валидацией окружения
- **config/passport.ts** — конфигурация стратегии авторизации StreamVi с правильной обработкой ошибок
- **config/session.ts** — настройки сессий Express с учетом безопасности
- **routes/index.ts** — маршруты для авторизации, отображения данных и комплексной обработки ошибок

### Функциональность примера

1. **Главная страница** (`/`) — отображает информацию о проекте с аватаром и деталями, или предлагает авторизацию
2. **Авторизация** (`/auth/streamvi`) — перенаправляет на StreamVi для авторизации
3. **Callback** (`/auth/streamvi/callback`) — обрабатывает результат авторизации с детальной обработкой ошибок
4. **Выход** (`/logout`) — очищает сессию пользователя и перенаправляет на главную
5. **Обработка ошибок** (`/login`) — отображает ошибки авторизации с подробной информацией
6. **Управление сессиями** — безопасно хранит токены доступа и ID проектов

### Поток авторизации

Пример демонстрирует полный поток OAuth2:

1. Пользователь посещает главную страницу
2. Если не авторизован, видит кнопку входа
3. Нажатие на вход перенаправляет на OAuth2 endpoint StreamVi
4. После авторизации StreamVi перенаправляет обратно с кодом авторизации
5. Обработчик callback обменивает код на токен доступа
6. Токен доступа и ID проекта сохраняются в сессии
7. Пользователь перенаправляется на главную страницу с информацией о проекте

### Обработка ошибок

Пример включает комплексную обработку ошибок:

- **Валидация окружения** — проверяет наличие необходимых переменных окружения при запуске
- **Ошибки авторизации** — отображает подробные сообщения об ошибках от StreamVi
- **Ошибки API** — показывает ошибки ответов API с полным контекстом
- **Ошибки сессий** — обрабатывает уничтожение и пересоздание сессий
- **Сетевые ошибки** — корректная обработка проблем с сетью

## Генерация API-клиента

API-клиент автоматически генерируется из OpenAPI спецификации StreamVi со встроенной коррекцией ошибок и оптимизацией.

### Обновление API-клиента

Чтобы обновить API-клиент после изменений на сервере:

```bash
npm run gen:api-prod
npm run build
```

Эта команда скачивает последнюю спецификацию API и генерирует оптимизированный TypeScript клиент.

> **Для разработчиков библиотеки**: См. [README_DEVELOPMENT.md](README_DEVELOPMENT.md) для подробной информации о процессе генерации, коррекции ошибок и рабочих процессах разработки.

## Скрипты

- `npm run example` — запуск примера сервера с авторизацией
- `npm run build` — сборка проекта
- `npm run gen:api-prod` — генерация API с production-сервера
- `npm run lint` — проверка кода

## Лицензия

MIT

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