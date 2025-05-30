"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * StreamVi Backend
 * API
 *
 * The version of the OpenAPI document: 3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RtmpServerStateV1VEnum = exports.RtmpServerStateV1IntervalEnum = exports.RtmpServerStateV1LanguageEnum = exports.RtmpServerListV1VEnum = exports.RtmpServerListV1IntervalEnum = exports.RtmpServerListV1LanguageEnum = exports.RtmpServerGraphV1VEnum = exports.RtmpServerGraphV1TypeEnum = exports.RtmpServerGraphV1IntervalEnum = exports.RtmpServerGraphV1LanguageEnum = exports.MethodRtmpServerListLocationsUnauthorizedV1VEnum = exports.MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum = exports.RtmpServerApi = exports.RtmpServerApiFactory = exports.RtmpServerApiFp = exports.RtmpServerApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
const common_1 = require("../common");
// @ts-ignore
const base_1 = require("../base");
/**
 * RtmpServerApi - axios parameter creator
 * @export
 */
const RtmpServerApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Rtmp locations server list example for unauthorized
         * @param {MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum} language Current language
         * @param {MethodRtmpServerListLocationsUnauthorizedV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        methodRtmpServerListLocationsUnauthorizedV1: async (language, v, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('methodRtmpServerListLocationsUnauthorizedV1', 'language', language);
            const localVarPath = `/method/rtmp_server/list_locations_unauthorized`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            }
            else {
                localVarQueryParameter['v'] = '1';
            }
            if (language !== undefined) {
                localVarQueryParameter['language'] = language;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Graph of rtmp servers
         * @param {RtmpServerGraphV1LanguageEnum} language Current language
         * @param {RtmpServerGraphV1IntervalEnum} interval Interval state in hours
         * @param {RtmpServerGraphV1TypeEnum} type Type graph
         * @param {RtmpServerGraphV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rtmpServerGraphV1: async (language, interval, type, v, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('rtmpServerGraphV1', 'language', language);
            // verify required parameter 'interval' is not null or undefined
            (0, common_1.assertParamExists)('rtmpServerGraphV1', 'interval', interval);
            // verify required parameter 'type' is not null or undefined
            (0, common_1.assertParamExists)('rtmpServerGraphV1', 'type', type);
            const localVarPath = `/method/rtmp_server/graph`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            }
            else {
                localVarQueryParameter['v'] = '1';
            }
            if (language !== undefined) {
                localVarQueryParameter['language'] = language;
            }
            if (interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary List rtmp servers
         * @param {RtmpServerListV1LanguageEnum} language Current language
         * @param {number} projectId Project id
         * @param {RtmpServerListV1IntervalEnum} interval Interval state in hours
         * @param {RtmpServerListV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rtmpServerListV1: async (language, projectId, interval, v, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('rtmpServerListV1', 'language', language);
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('rtmpServerListV1', 'projectId', projectId);
            // verify required parameter 'interval' is not null or undefined
            (0, common_1.assertParamExists)('rtmpServerListV1', 'interval', interval);
            const localVarPath = `/method/rtmp_server/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            }
            else {
                localVarQueryParameter['v'] = '1';
            }
            if (language !== undefined) {
                localVarQueryParameter['language'] = language;
            }
            if (projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary State of rtmp servers
         * @param {RtmpServerStateV1LanguageEnum} language Current language
         * @param {RtmpServerStateV1IntervalEnum} interval Interval state in hours
         * @param {RtmpServerStateV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rtmpServerStateV1: async (language, interval, v, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('rtmpServerStateV1', 'language', language);
            // verify required parameter 'interval' is not null or undefined
            (0, common_1.assertParamExists)('rtmpServerStateV1', 'interval', interval);
            const localVarPath = `/method/rtmp_server/state`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            }
            else {
                localVarQueryParameter['v'] = '1';
            }
            if (language !== undefined) {
                localVarQueryParameter['language'] = language;
            }
            if (interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary State of rtmp servers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rtmpServerUpV1: async (options = {}) => {
            const localVarPath = `/method/rtmp_server/up`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.RtmpServerApiAxiosParamCreator = RtmpServerApiAxiosParamCreator;
/**
 * RtmpServerApi - functional programming interface
 * @export
 */
const RtmpServerApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.RtmpServerApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Rtmp locations server list example for unauthorized
         * @param {MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum} language Current language
         * @param {MethodRtmpServerListLocationsUnauthorizedV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async methodRtmpServerListLocationsUnauthorizedV1(language, v, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.methodRtmpServerListLocationsUnauthorizedV1(language, v, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['RtmpServerApi.methodRtmpServerListLocationsUnauthorizedV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @summary Graph of rtmp servers
         * @param {RtmpServerGraphV1LanguageEnum} language Current language
         * @param {RtmpServerGraphV1IntervalEnum} interval Interval state in hours
         * @param {RtmpServerGraphV1TypeEnum} type Type graph
         * @param {RtmpServerGraphV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rtmpServerGraphV1(language, interval, type, v, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.rtmpServerGraphV1(language, interval, type, v, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['RtmpServerApi.rtmpServerGraphV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @summary List rtmp servers
         * @param {RtmpServerListV1LanguageEnum} language Current language
         * @param {number} projectId Project id
         * @param {RtmpServerListV1IntervalEnum} interval Interval state in hours
         * @param {RtmpServerListV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rtmpServerListV1(language, projectId, interval, v, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.rtmpServerListV1(language, projectId, interval, v, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['RtmpServerApi.rtmpServerListV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @summary State of rtmp servers
         * @param {RtmpServerStateV1LanguageEnum} language Current language
         * @param {RtmpServerStateV1IntervalEnum} interval Interval state in hours
         * @param {RtmpServerStateV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rtmpServerStateV1(language, interval, v, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.rtmpServerStateV1(language, interval, v, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['RtmpServerApi.rtmpServerStateV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @summary State of rtmp servers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rtmpServerUpV1(options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.rtmpServerUpV1(options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['RtmpServerApi.rtmpServerUpV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
exports.RtmpServerApiFp = RtmpServerApiFp;
/**
 * RtmpServerApi - factory interface
 * @export
 */
const RtmpServerApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.RtmpServerApiFp)(configuration);
    return {
        /**
         *
         * @summary Rtmp locations server list example for unauthorized
         * @param {RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        methodRtmpServerListLocationsUnauthorizedV1(requestParameters, options) {
            return localVarFp.methodRtmpServerListLocationsUnauthorizedV1(requestParameters.language, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Graph of rtmp servers
         * @param {RtmpServerApiRtmpServerGraphV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rtmpServerGraphV1(requestParameters, options) {
            return localVarFp.rtmpServerGraphV1(requestParameters.language, requestParameters.interval, requestParameters.type, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary List rtmp servers
         * @param {RtmpServerApiRtmpServerListV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rtmpServerListV1(requestParameters, options) {
            return localVarFp.rtmpServerListV1(requestParameters.language, requestParameters.projectId, requestParameters.interval, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary State of rtmp servers
         * @param {RtmpServerApiRtmpServerStateV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rtmpServerStateV1(requestParameters, options) {
            return localVarFp.rtmpServerStateV1(requestParameters.language, requestParameters.interval, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary State of rtmp servers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rtmpServerUpV1(options) {
            return localVarFp.rtmpServerUpV1(options).then((request) => request(axios, basePath));
        },
    };
};
exports.RtmpServerApiFactory = RtmpServerApiFactory;
/**
 * RtmpServerApi - object-oriented interface
 * @export
 * @class RtmpServerApi
 * @extends {BaseAPI}
 */
class RtmpServerApi extends base_1.BaseAPI {
    /**
     *
     * @summary Rtmp locations server list example for unauthorized
     * @param {RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApi
     */
    methodRtmpServerListLocationsUnauthorizedV1(requestParameters, options) {
        return (0, exports.RtmpServerApiFp)(this.configuration).methodRtmpServerListLocationsUnauthorizedV1(requestParameters.language, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Graph of rtmp servers
     * @param {RtmpServerApiRtmpServerGraphV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApi
     */
    rtmpServerGraphV1(requestParameters, options) {
        return (0, exports.RtmpServerApiFp)(this.configuration).rtmpServerGraphV1(requestParameters.language, requestParameters.interval, requestParameters.type, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary List rtmp servers
     * @param {RtmpServerApiRtmpServerListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApi
     */
    rtmpServerListV1(requestParameters, options) {
        return (0, exports.RtmpServerApiFp)(this.configuration).rtmpServerListV1(requestParameters.language, requestParameters.projectId, requestParameters.interval, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary State of rtmp servers
     * @param {RtmpServerApiRtmpServerStateV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApi
     */
    rtmpServerStateV1(requestParameters, options) {
        return (0, exports.RtmpServerApiFp)(this.configuration).rtmpServerStateV1(requestParameters.language, requestParameters.interval, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary State of rtmp servers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApi
     */
    rtmpServerUpV1(options) {
        return (0, exports.RtmpServerApiFp)(this.configuration).rtmpServerUpV1(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.RtmpServerApi = RtmpServerApi;
/**
 * @export
 */
exports.MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.MethodRtmpServerListLocationsUnauthorizedV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.RtmpServerGraphV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.RtmpServerGraphV1IntervalEnum = {
    NUMBER_1: 1,
    NUMBER_3: 3,
    NUMBER_6: 6,
    NUMBER_12: 12,
    NUMBER_24: 24
};
/**
 * @export
 */
exports.RtmpServerGraphV1TypeEnum = {
    Performance: 'performance',
    Network: 'network',
    Cpu: 'cpu',
    Ram: 'ram',
    DeliveredPackages: 'deliveredPackages'
};
/**
 * @export
 */
exports.RtmpServerGraphV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.RtmpServerListV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.RtmpServerListV1IntervalEnum = {
    NUMBER_1: 1,
    NUMBER_3: 3,
    NUMBER_6: 6,
    NUMBER_12: 12,
    NUMBER_24: 24
};
/**
 * @export
 */
exports.RtmpServerListV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.RtmpServerStateV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.RtmpServerStateV1IntervalEnum = {
    NUMBER_1: 1,
    NUMBER_3: 3,
    NUMBER_6: 6,
    NUMBER_12: 12,
    NUMBER_24: 24
};
/**
 * @export
 */
exports.RtmpServerStateV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
