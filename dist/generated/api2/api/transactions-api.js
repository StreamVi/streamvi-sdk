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
exports.TransactionsListV1VEnum = exports.TransactionsListV1LanguageEnum = exports.TransactionsApi = exports.TransactionsApiFactory = exports.TransactionsApiFp = exports.TransactionsApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
const common_1 = require("../common");
// @ts-ignore
const base_1 = require("../base");
/**
 * TransactionsApi - axios parameter creator
 * @export
 */
const TransactionsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Transaction list for frontend
         * @param {TransactionsListV1LanguageEnum} language Current language
         * @param {number} projectId Project id
         * @param {TransactionsListV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {number} [limit] Number of results
         * @param {number} [offset] Page offset number
         * @param {string} [dateFrom] Date from
         * @param {string} [dateTo] Date to
         * @param {string} [code] Filter code transaction. example 1 or 1,2,3
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        transactionsListV1: async (language, projectId, v, limit, offset, dateFrom, dateTo, code, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('transactionsListV1', 'language', language);
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('transactionsListV1', 'projectId', projectId);
            const localVarPath = `/method/transactions/list`;
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
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (dateFrom !== undefined) {
                localVarQueryParameter['date_from'] = (dateFrom instanceof Date) ?
                    dateFrom.toISOString() :
                    dateFrom;
            }
            if (dateTo !== undefined) {
                localVarQueryParameter['date_to'] = (dateTo instanceof Date) ?
                    dateTo.toISOString() :
                    dateTo;
            }
            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
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
exports.TransactionsApiAxiosParamCreator = TransactionsApiAxiosParamCreator;
/**
 * TransactionsApi - functional programming interface
 * @export
 */
const TransactionsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.TransactionsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Transaction list for frontend
         * @param {TransactionsListV1LanguageEnum} language Current language
         * @param {number} projectId Project id
         * @param {TransactionsListV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {number} [limit] Number of results
         * @param {number} [offset] Page offset number
         * @param {string} [dateFrom] Date from
         * @param {string} [dateTo] Date to
         * @param {string} [code] Filter code transaction. example 1 or 1,2,3
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async transactionsListV1(language, projectId, v, limit, offset, dateFrom, dateTo, code, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.transactionsListV1(language, projectId, v, limit, offset, dateFrom, dateTo, code, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['TransactionsApi.transactionsListV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
exports.TransactionsApiFp = TransactionsApiFp;
/**
 * TransactionsApi - factory interface
 * @export
 */
const TransactionsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.TransactionsApiFp)(configuration);
    return {
        /**
         *
         * @summary Transaction list for frontend
         * @param {TransactionsApiTransactionsListV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        transactionsListV1(requestParameters, options) {
            return localVarFp.transactionsListV1(requestParameters.language, requestParameters.projectId, requestParameters.v, requestParameters.limit, requestParameters.offset, requestParameters.dateFrom, requestParameters.dateTo, requestParameters.code, options).then((request) => request(axios, basePath));
        },
    };
};
exports.TransactionsApiFactory = TransactionsApiFactory;
/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
class TransactionsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Transaction list for frontend
     * @param {TransactionsApiTransactionsListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    transactionsListV1(requestParameters, options) {
        return (0, exports.TransactionsApiFp)(this.configuration).transactionsListV1(requestParameters.language, requestParameters.projectId, requestParameters.v, requestParameters.limit, requestParameters.offset, requestParameters.dateFrom, requestParameters.dateTo, requestParameters.code, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.TransactionsApi = TransactionsApi;
/**
 * @export
 */
exports.TransactionsListV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.TransactionsListV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
