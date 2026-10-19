"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamViSdkConfig = void 0;
const configuration_1 = require("./generated/api2/configuration");
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
class StreamViSdkConfig {
    /**
     * Создает новый экземпляр конфигурации SDK
     *
     * @param config - Объект конфигурации
     * @param config.accessToken - Токен доступа для авторизации API запросов
     * @param config.basePath - Базовый URL API (по умолчанию: https://napi.streamvi.io)
     */
    constructor({ accessToken, basePath = 'https://napi.streamvi.io' }) {
        this._accessToken = accessToken;
        this._configuration = new configuration_1.Configuration({
            basePath,
            accessToken,
            baseOptions: { headers: { Authorization: `oauth ${accessToken}` } },
        });
    }
    /**
     * Возвращает объект конфигурации для API клиентов
     *
     * @returns Конфигурация с настроенной авторизацией и базовым путем
     */
    get configuration() {
        return this._configuration;
    }
    /**
     * Устанавливает новый токен доступа
     *
     * @param token - Новый токен доступа
     */
    set accessToken(token) {
        var _a;
        this._accessToken = token;
        this._configuration.accessToken = token;
        this._configuration.baseOptions = {
            ...this._configuration.baseOptions,
            headers: {
                ...(_a = this._configuration.baseOptions) === null || _a === void 0 ? void 0 : _a.headers,
                Authorization: `oauth ${token}`,
            },
        };
    }
    /**
     * Возвращает текущий токен доступа
     *
     * @returns Текущий токен доступа
     */
    get accessToken() {
        return this._accessToken;
    }
}
exports.StreamViSdkConfig = StreamViSdkConfig;
