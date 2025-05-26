import { Configuration } from './generated/api2/configuration';

export class StreamViSdkConfig {
  private _accessToken: string;
  private _basePath: string;

  constructor({ accessToken, basePath = 'https://napi.streamvi.io' }: { accessToken: string, basePath?: string }) {
    this._accessToken = accessToken;
    this._basePath = basePath;
  }

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

  set accessToken(token: string) {
    this._accessToken = token;
  }

  get accessToken() {
    return this._accessToken;
  }
} 