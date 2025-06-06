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
exports.HelpPageStructureV1VEnum = exports.HelpPageStructureV1LanguageEnum = exports.HelpPageListV1VEnum = exports.HelpPageListV1LanguageEnum = exports.HelpPageGetV1VEnum = exports.HelpPageGetV1LanguageEnum = exports.HelpPageApi = exports.HelpPageApiFactory = exports.HelpPageApiFp = exports.HelpPageApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
const common_1 = require("../common");
// @ts-ignore
const base_1 = require("../base");
/**
 * HelpPageApi - axios parameter creator
 * @export
 */
const HelpPageApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get help page
         * @param {HelpPageGetV1LanguageEnum} language Current language
         * @param {string} url Url of page
         * @param {HelpPageGetV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helpPageGetV1: async (language, url, v, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('helpPageGetV1', 'language', language);
            // verify required parameter 'url' is not null or undefined
            (0, common_1.assertParamExists)('helpPageGetV1', 'url', url);
            const localVarPath = `/method/help/page/get`;
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
            if (url !== undefined) {
                localVarQueryParameter['url'] = url;
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
         * @summary Get list of help pages
         * @param {HelpPageListV1LanguageEnum} language Current language
         * @param {HelpPageListV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {string} [s] String for search
         * @param {number} [limit] Number of results
         * @param {number} [offset] Page offset number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helpPageListV1: async (language, v, s, limit, offset, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('helpPageListV1', 'language', language);
            const localVarPath = `/method/help/page/search`;
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
            if (s !== undefined) {
                localVarQueryParameter['s'] = s;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
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
         * @summary Get structure of help pages
         * @param {HelpPageStructureV1LanguageEnum} language Current language
         * @param {HelpPageStructureV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helpPageStructureV1: async (language, v, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('helpPageStructureV1', 'language', language);
            const localVarPath = `/method/help/page/structure`;
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
    };
};
exports.HelpPageApiAxiosParamCreator = HelpPageApiAxiosParamCreator;
/**
 * HelpPageApi - functional programming interface
 * @export
 */
const HelpPageApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.HelpPageApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Get help page
         * @param {HelpPageGetV1LanguageEnum} language Current language
         * @param {string} url Url of page
         * @param {HelpPageGetV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async helpPageGetV1(language, url, v, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.helpPageGetV1(language, url, v, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['HelpPageApi.helpPageGetV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @summary Get list of help pages
         * @param {HelpPageListV1LanguageEnum} language Current language
         * @param {HelpPageListV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {string} [s] String for search
         * @param {number} [limit] Number of results
         * @param {number} [offset] Page offset number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async helpPageListV1(language, v, s, limit, offset, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.helpPageListV1(language, v, s, limit, offset, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['HelpPageApi.helpPageListV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @summary Get structure of help pages
         * @param {HelpPageStructureV1LanguageEnum} language Current language
         * @param {HelpPageStructureV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async helpPageStructureV1(language, v, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.helpPageStructureV1(language, v, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['HelpPageApi.helpPageStructureV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
exports.HelpPageApiFp = HelpPageApiFp;
/**
 * HelpPageApi - factory interface
 * @export
 */
const HelpPageApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.HelpPageApiFp)(configuration);
    return {
        /**
         *
         * @summary Get help page
         * @param {HelpPageApiHelpPageGetV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helpPageGetV1(requestParameters, options) {
            return localVarFp.helpPageGetV1(requestParameters.language, requestParameters.url, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get list of help pages
         * @param {HelpPageApiHelpPageListV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helpPageListV1(requestParameters, options) {
            return localVarFp.helpPageListV1(requestParameters.language, requestParameters.v, requestParameters.s, requestParameters.limit, requestParameters.offset, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get structure of help pages
         * @param {HelpPageApiHelpPageStructureV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helpPageStructureV1(requestParameters, options) {
            return localVarFp.helpPageStructureV1(requestParameters.language, requestParameters.v, options).then((request) => request(axios, basePath));
        },
    };
};
exports.HelpPageApiFactory = HelpPageApiFactory;
/**
 * HelpPageApi - object-oriented interface
 * @export
 * @class HelpPageApi
 * @extends {BaseAPI}
 */
class HelpPageApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get help page
     * @param {HelpPageApiHelpPageGetV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HelpPageApi
     */
    helpPageGetV1(requestParameters, options) {
        return (0, exports.HelpPageApiFp)(this.configuration).helpPageGetV1(requestParameters.language, requestParameters.url, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get list of help pages
     * @param {HelpPageApiHelpPageListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HelpPageApi
     */
    helpPageListV1(requestParameters, options) {
        return (0, exports.HelpPageApiFp)(this.configuration).helpPageListV1(requestParameters.language, requestParameters.v, requestParameters.s, requestParameters.limit, requestParameters.offset, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get structure of help pages
     * @param {HelpPageApiHelpPageStructureV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HelpPageApi
     */
    helpPageStructureV1(requestParameters, options) {
        return (0, exports.HelpPageApiFp)(this.configuration).helpPageStructureV1(requestParameters.language, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.HelpPageApi = HelpPageApi;
/**
 * @export
 */
exports.HelpPageGetV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.HelpPageGetV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.HelpPageListV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.HelpPageListV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.HelpPageStructureV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.HelpPageStructureV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
