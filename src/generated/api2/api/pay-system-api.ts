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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ListOfPaySystemListResponse } from '../models';
// @ts-ignore
import type { SuccessResponse } from '../models';
/**
 * PaySystemApi - axios parameter creator
 * @export
 */
export const PaySystemApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {PaySystemCreateChallengeV1LanguageEnum} language Current language
         * @param {number} paymentId Payment id
         * @param {PaySystemCreateChallengeV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paySystemCreateChallengeV1: async (language: PaySystemCreateChallengeV1LanguageEnum, paymentId: number, v?: PaySystemCreateChallengeV1VEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            assertParamExists('paySystemCreateChallengeV1', 'language', language)
            // verify required parameter 'paymentId' is not null or undefined
            assertParamExists('paySystemCreateChallengeV1', 'paymentId', paymentId)
            const localVarPath = `/method/pay-system/payoneer/create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            } else {
                localVarQueryParameter['v'] = '1';
            }

            if (language !== undefined) {
                localVarQueryParameter['language'] = language;
            }

            if (paymentId !== undefined) {
                localVarQueryParameter['payment_id'] = paymentId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PaySystemCreateUnitpayV1LanguageEnum} language Current language
         * @param {number} paymentId Payment id
         * @param {PaySystemCreateUnitpayV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paySystemCreateUnitpayV1: async (language: PaySystemCreateUnitpayV1LanguageEnum, paymentId: number, v?: PaySystemCreateUnitpayV1VEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            assertParamExists('paySystemCreateUnitpayV1', 'language', language)
            // verify required parameter 'paymentId' is not null or undefined
            assertParamExists('paySystemCreateUnitpayV1', 'paymentId', paymentId)
            const localVarPath = `/method/pay-system/unitpay/create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            } else {
                localVarQueryParameter['v'] = '1';
            }

            if (language !== undefined) {
                localVarQueryParameter['language'] = language;
            }

            if (paymentId !== undefined) {
                localVarQueryParameter['payment_id'] = paymentId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Load available pay systems
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paySystemListV1: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/method/pay-system/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PaySystemApi - functional programming interface
 * @export
 */
export const PaySystemApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PaySystemApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {PaySystemCreateChallengeV1LanguageEnum} language Current language
         * @param {number} paymentId Payment id
         * @param {PaySystemCreateChallengeV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async paySystemCreateChallengeV1(language: PaySystemCreateChallengeV1LanguageEnum, paymentId: number, v?: PaySystemCreateChallengeV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.paySystemCreateChallengeV1(language, paymentId, v, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaySystemApi.paySystemCreateChallengeV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {PaySystemCreateUnitpayV1LanguageEnum} language Current language
         * @param {number} paymentId Payment id
         * @param {PaySystemCreateUnitpayV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async paySystemCreateUnitpayV1(language: PaySystemCreateUnitpayV1LanguageEnum, paymentId: number, v?: PaySystemCreateUnitpayV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.paySystemCreateUnitpayV1(language, paymentId, v, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaySystemApi.paySystemCreateUnitpayV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Load available pay systems
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async paySystemListV1(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListOfPaySystemListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.paySystemListV1(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaySystemApi.paySystemListV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PaySystemApi - factory interface
 * @export
 */
export const PaySystemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PaySystemApiFp(configuration)
    return {
        /**
         * 
         * @param {PaySystemApiPaySystemCreateChallengeV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paySystemCreateChallengeV1(requestParameters: PaySystemApiPaySystemCreateChallengeV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SuccessResponse> {
            return localVarFp.paySystemCreateChallengeV1(requestParameters.language, requestParameters.payment_id, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PaySystemApiPaySystemCreateUnitpayV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paySystemCreateUnitpayV1(requestParameters: PaySystemApiPaySystemCreateUnitpayV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SuccessResponse> {
            return localVarFp.paySystemCreateUnitpayV1(requestParameters.language, requestParameters.payment_id, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Load available pay systems
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paySystemListV1(options?: RawAxiosRequestConfig): AxiosPromise<ListOfPaySystemListResponse> {
            return localVarFp.paySystemListV1(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PaySystemApi - interface
 * @export
 * @interface PaySystemApi
 */
export interface PaySystemApiInterface {
    /**
     * 
     * @param {PaySystemApiPaySystemCreateChallengeV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaySystemApiInterface
     */
    paySystemCreateChallengeV1(requestParameters: PaySystemApiPaySystemCreateChallengeV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SuccessResponse>;

    /**
     * 
     * @param {PaySystemApiPaySystemCreateUnitpayV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaySystemApiInterface
     */
    paySystemCreateUnitpayV1(requestParameters: PaySystemApiPaySystemCreateUnitpayV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SuccessResponse>;

    /**
     * 
     * @summary Load available pay systems
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaySystemApiInterface
     */
    paySystemListV1(options?: RawAxiosRequestConfig): AxiosPromise<ListOfPaySystemListResponse>;

}

/**
 * Request parameters for paySystemCreateChallengeV1 operation in PaySystemApi.
 * @export
 * @interface PaySystemApiPaySystemCreateChallengeV1Request
 */
export interface PaySystemApiPaySystemCreateChallengeV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof PaySystemApiPaySystemCreateChallengeV1
     */
    readonly language: PaySystemCreateChallengeV1LanguageEnum

    /**
     * Payment id
     * @type {number}
     * @memberof PaySystemApiPaySystemCreateChallengeV1
     */
    readonly payment_id: number

    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof PaySystemApiPaySystemCreateChallengeV1
     */
    readonly v?: PaySystemCreateChallengeV1VEnum
}

/**
 * Request parameters for paySystemCreateUnitpayV1 operation in PaySystemApi.
 * @export
 * @interface PaySystemApiPaySystemCreateUnitpayV1Request
 */
export interface PaySystemApiPaySystemCreateUnitpayV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof PaySystemApiPaySystemCreateUnitpayV1
     */
    readonly language: PaySystemCreateUnitpayV1LanguageEnum

    /**
     * Payment id
     * @type {number}
     * @memberof PaySystemApiPaySystemCreateUnitpayV1
     */
    readonly payment_id: number

    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof PaySystemApiPaySystemCreateUnitpayV1
     */
    readonly v?: PaySystemCreateUnitpayV1VEnum
}

/**
 * PaySystemApi - object-oriented interface
 * @export
 * @class PaySystemApi
 * @extends {BaseAPI}
 */
export class PaySystemApi extends BaseAPI implements PaySystemApiInterface {
    /**
     * 
     * @param {PaySystemApiPaySystemCreateChallengeV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaySystemApi
     */
    public paySystemCreateChallengeV1(requestParameters: PaySystemApiPaySystemCreateChallengeV1Request, options?: RawAxiosRequestConfig) {
        return PaySystemApiFp(this.configuration).paySystemCreateChallengeV1(requestParameters.language, requestParameters.payment_id, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PaySystemApiPaySystemCreateUnitpayV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaySystemApi
     */
    public paySystemCreateUnitpayV1(requestParameters: PaySystemApiPaySystemCreateUnitpayV1Request, options?: RawAxiosRequestConfig) {
        return PaySystemApiFp(this.configuration).paySystemCreateUnitpayV1(requestParameters.language, requestParameters.payment_id, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Load available pay systems
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaySystemApi
     */
    public paySystemListV1(options?: RawAxiosRequestConfig) {
        return PaySystemApiFp(this.configuration).paySystemListV1(options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const PaySystemCreateChallengeV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;
export type PaySystemCreateChallengeV1LanguageEnum = typeof PaySystemCreateChallengeV1LanguageEnum[keyof typeof PaySystemCreateChallengeV1LanguageEnum];
/**
 * @export
 */
export const PaySystemCreateChallengeV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type PaySystemCreateChallengeV1VEnum = typeof PaySystemCreateChallengeV1VEnum[keyof typeof PaySystemCreateChallengeV1VEnum];
/**
 * @export
 */
export const PaySystemCreateUnitpayV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;
export type PaySystemCreateUnitpayV1LanguageEnum = typeof PaySystemCreateUnitpayV1LanguageEnum[keyof typeof PaySystemCreateUnitpayV1LanguageEnum];
/**
 * @export
 */
export const PaySystemCreateUnitpayV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type PaySystemCreateUnitpayV1VEnum = typeof PaySystemCreateUnitpayV1VEnum[keyof typeof PaySystemCreateUnitpayV1VEnum];
