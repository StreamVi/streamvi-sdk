"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamViSdkConfig = void 0;
// Экспорт сгенерированного API
__exportStar(require("./generated/api2"), exports);
// Экспорт конфигурации SDK
var streamvi_sdk_config_1 = require("./streamvi-sdk-config");
Object.defineProperty(exports, "StreamViSdkConfig", { enumerable: true, get: function () { return streamvi_sdk_config_1.StreamViSdkConfig; } });
