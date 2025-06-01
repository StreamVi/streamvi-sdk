/**
 * @fileoverview StreamVi SDK - библиотека для работы с API StreamVi
 * 
 * Этот пакет предоставляет TypeScript/JavaScript SDK для работы с API StreamVi,
 * включая все необходимые типы, интерфейсы и клиенты API.
 * 
 * @example
 * ```typescript
 * import { StreamViSdkConfig } from 'streamvi-sdk';
 * import { UserProjectApi } from 'streamvi-sdk';
 * 
 * const config = new StreamViSdkConfig({ accessToken: 'your_token' });
 * const userProjectApi = new UserProjectApi(config.configuration);
 * ```
 * 
 * @version 1.0.1
 * @author StreamVi <info@streamvi.io>
 * @license MIT
 */

// Экспорт сгенерированного API
export * from './generated/api2';

// Экспорт конфигурации SDK
export { StreamViSdkConfig } from './streamvi-sdk-config';
