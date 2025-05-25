"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamViSdkConfig = void 0;
const api2_1 = require("./generated/api2");
class StreamViSdkConfig {
    constructor({ accessToken, basePath = 'https://napi.streamvi.io' }) {
        this._accessToken = accessToken;
        this._basePath = basePath;
    }
    get configuration() {
        return new api2_1.Configuration({
            basePath: this._basePath,
            accessToken: this._accessToken,
            baseOptions: {
                headers: {
                    Authorization: `oauth ${this._accessToken}`
                }
            }
        });
    }
    set accessToken(token) {
        this._accessToken = token;
    }
    get accessToken() {
        return this._accessToken;
    }
}
exports.StreamViSdkConfig = StreamViSdkConfig;
