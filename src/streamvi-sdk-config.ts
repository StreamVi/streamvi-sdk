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
export class StreamViSdkConfig {
  private _accessToken: string;
  private _basePath: string;

  /**
   * Создает новый экземпляр конфигурации SDK
   * 
   * @param config - Объект конфигурации
   * @param config.accessToken - Токен доступа для авторизации API запросов
   * @param config.basePath - Базовый URL API (по умолчанию: https://napi.streamvi.io)
   */
  constructor({ accessToken, basePath = 'https://napi.streamvi.io' }: { accessToken: string, basePath?: string }) {
    this._accessToken = accessToken;
    this._basePath = basePath;
  }

  /**
   * Возвращает объект конфигурации для API клиентов
   * 
   * @returns Конфигурация с настроенной авторизацией и базовым путем
   */
  get configuration() {
    return new Configuration({
      basePath: this._basePath,
      accessToken: this._accessToken,
      baseOptions: {
        headers: {
          Authorization: `oauth ${this._accessToken}`
        }
      }
    });
  }

  /**
   * Устанавливает новый токен доступа
   * 
   * @param token - Новый токен доступа
   */
  set accessToken(token: string) {
    this._accessToken = token;
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