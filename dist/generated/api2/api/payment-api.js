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
exports.PaymentListV1VEnum = exports.PaymentListV1LanguageEnum = exports.PaymentGetStatusV1VEnum = exports.PaymentGetStatusV1LanguageEnum = exports.PaymentCreateV1VEnum = exports.PaymentCreateV1LanguageEnum = exports.PaymentApi = exports.PaymentApiFactory = exports.PaymentApiFp = exports.PaymentApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
const common_1 = require("../common");
// @ts-ignore
const base_1 = require("../base");
/**
 * PaymentApi - axios parameter creator
 * @export
 */
const PaymentApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create payment item for pay system
         * @param {PaymentCreateV1LanguageEnum} language Current language
         * @param {PaymentCreateV1Request} paymentCreateV1Request
         * @param {PaymentCreateV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paymentCreateV1: async (language, paymentCreateV1Request, v, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('paymentCreateV1', 'language', language);
            // verify required parameter 'paymentCreateV1Request' is not null or undefined
            (0, common_1.assertParamExists)('paymentCreateV1', 'paymentCreateV1Request', paymentCreateV1Request);
            const localVarPath = `/method/payment`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
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
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(paymentCreateV1Request, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @param {PaymentGetStatusV1LanguageEnum} language Current language
         * @param {number} payId Pay order id
         * @param {number} projectId Project id
         * @param {PaymentGetStatusV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paymentGetStatusV1: async (language, payId, projectId, v, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('paymentGetStatusV1', 'language', language);
            // verify required parameter 'payId' is not null or undefined
            (0, common_1.assertParamExists)('paymentGetStatusV1', 'payId', payId);
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('paymentGetStatusV1', 'projectId', projectId);
            const localVarPath = `/method/payment`;
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
            if (payId !== undefined) {
                localVarQueryParameter['payId'] = payId;
            }
            if (projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
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
         * @param {PaymentListV1LanguageEnum} language Current language
         * @param {PaymentListV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {number} [pageSize] Number of results
         * @param {number} [page] Page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paymentListV1: async (language, v, pageSize, page, options = {}) => {
            // verify required parameter 'language' is not null or undefined
            (0, common_1.assertParamExists)('paymentListV1', 'language', language);
            const localVarPath = `/method/payment/list`;
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
            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
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
exports.PaymentApiAxiosParamCreator = PaymentApiAxiosParamCreator;
/**
 * PaymentApi - functional programming interface
 * @export
 */
const PaymentApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.PaymentApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create payment item for pay system
         * @param {PaymentCreateV1LanguageEnum} language Current language
         * @param {PaymentCreateV1Request} paymentCreateV1Request
         * @param {PaymentCreateV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async paymentCreateV1(language, paymentCreateV1Request, v, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.paymentCreateV1(language, paymentCreateV1Request, v, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['PaymentApi.paymentCreateV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @param {PaymentGetStatusV1LanguageEnum} language Current language
         * @param {number} payId Pay order id
         * @param {number} projectId Project id
         * @param {PaymentGetStatusV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async paymentGetStatusV1(language, payId, projectId, v, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.paymentGetStatusV1(language, payId, projectId, v, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['PaymentApi.paymentGetStatusV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @param {PaymentListV1LanguageEnum} language Current language
         * @param {PaymentListV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {number} [pageSize] Number of results
         * @param {number} [page] Page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async paymentListV1(language, v, pageSize, page, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.paymentListV1(language, v, pageSize, page, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['PaymentApi.paymentListV1']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
exports.PaymentApiFp = PaymentApiFp;
/**
 * PaymentApi - factory interface
 * @export
 */
const PaymentApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.PaymentApiFp)(configuration);
    return {
        /**
         *
         * @summary Create payment item for pay system
         * @param {PaymentApiPaymentCreateV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paymentCreateV1(requestParameters, options) {
            return localVarFp.paymentCreateV1(requestParameters.language, requestParameters.paymentCreateV1Request, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @param {PaymentApiPaymentGetStatusV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paymentGetStatusV1(requestParameters, options) {
            return localVarFp.paymentGetStatusV1(requestParameters.language, requestParameters.payId, requestParameters.projectId, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @param {PaymentApiPaymentListV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paymentListV1(requestParameters, options) {
            return localVarFp.paymentListV1(requestParameters.language, requestParameters.v, requestParameters.pageSize, requestParameters.page, options).then((request) => request(axios, basePath));
        },
    };
};
exports.PaymentApiFactory = PaymentApiFactory;
/**
 * PaymentApi - object-oriented interface
 * @export
 * @class PaymentApi
 * @extends {BaseAPI}
 */
class PaymentApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create payment item for pay system
     * @param {PaymentApiPaymentCreateV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    paymentCreateV1(requestParameters, options) {
        return (0, exports.PaymentApiFp)(this.configuration).paymentCreateV1(requestParameters.language, requestParameters.paymentCreateV1Request, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @param {PaymentApiPaymentGetStatusV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    paymentGetStatusV1(requestParameters, options) {
        return (0, exports.PaymentApiFp)(this.configuration).paymentGetStatusV1(requestParameters.language, requestParameters.payId, requestParameters.projectId, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @param {PaymentApiPaymentListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    paymentListV1(requestParameters, options) {
        return (0, exports.PaymentApiFp)(this.configuration).paymentListV1(requestParameters.language, requestParameters.v, requestParameters.pageSize, requestParameters.page, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.PaymentApi = PaymentApi;
/**
 * @export
 */
exports.PaymentCreateV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.PaymentCreateV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.PaymentGetStatusV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.PaymentGetStatusV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.PaymentListV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
};
/**
 * @export
 */
exports.PaymentListV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
