import { Configuration } from './generated/api2/configuration';
/**
 * Конфигурация SDK для работы с API StreamVi
 *
 * @example
 * ```typescript
 * const config = new StreamViSdkConfig({
 *   accessToken: 'your_access_token',
 *   basePath: 'https://napi.streamvi.io'
 * });
 * ```
 */
export declare class StreamViSdkConfig {
    private _accessToken;
    private _basePath;
    /**
     * Создает новый экземпляр конфигурации SDK
     *
     * @param config - Объект конфигурации
     * @param config.accessToken - Токен доступа для авторизации API запросов
     * @param config.basePath - Базовый URL API (по умолчанию: https://napi.streamvi.io)
     */
    constructor({ accessToken, basePath }: {
        accessToken: string;
        basePath?: string;
    });
    /**
     * Возвращает объект конфигурации для API клиентов
     *
     * @returns Конфигурация с настроенной авторизацией и базовым путем
     */
    get configuration(): Configuration;
    /**
     * Устанавливает новый токен доступа
     *
     * @param token - Новый токен доступа
     */
    set accessToken(token: string);
    /**
     * Возвращает текущий токен доступа
     *
     * @returns Текущий токен доступа
     */
    get accessToken(): string;
}
//# sourceMappingURL=streamvi-sdk-config.d.ts.map