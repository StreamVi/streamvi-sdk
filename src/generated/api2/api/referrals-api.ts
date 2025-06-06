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
import type { ErrorResponse } from '../models';
// @ts-ignore
import type { SiteTotalInfoReferralsResponse } from '../models';
/**
 * ReferralsApi - axios parameter creator
 * @export
 */
export const ReferralsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Total info
         * @param {ReferralsTotalInfoV1LanguageEnum} language Current language
         * @param {number} projectId Project id
         * @param {ReferralsTotalInfoV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        referralsTotalInfoV1: async (language: ReferralsTotalInfoV1LanguageEnum, projectId: number, v?: ReferralsTotalInfoV1VEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            assertParamExists('referralsTotalInfoV1', 'language', language)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('referralsTotalInfoV1', 'projectId', projectId)
            const localVarPath = `/method/referrals/info`;
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

            if (projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }


    
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
 * ReferralsApi - functional programming interface
 * @export
 */
export const ReferralsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReferralsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Total info
         * @param {ReferralsTotalInfoV1LanguageEnum} language Current language
         * @param {number} projectId Project id
         * @param {ReferralsTotalInfoV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async referralsTotalInfoV1(language: ReferralsTotalInfoV1LanguageEnum, projectId: number, v?: ReferralsTotalInfoV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SiteTotalInfoReferralsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.referralsTotalInfoV1(language, projectId, v, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReferralsApi.referralsTotalInfoV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ReferralsApi - factory interface
 * @export
 */
export const ReferralsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReferralsApiFp(configuration)
    return {
        /**
         * 
         * @summary Total info
         * @param {ReferralsApiReferralsTotalInfoV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        referralsTotalInfoV1(requestParameters: ReferralsApiReferralsTotalInfoV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SiteTotalInfoReferralsResponse> {
            return localVarFp.referralsTotalInfoV1(requestParameters.language, requestParameters.project_id, requestParameters.v, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReferralsApi - interface
 * @export
 * @interface ReferralsApi
 */
export interface ReferralsApiInterface {
    /**
     * 
     * @summary Total info
     * @param {ReferralsApiReferralsTotalInfoV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    referralsTotalInfoV1(requestParameters: ReferralsApiReferralsTotalInfoV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SiteTotalInfoReferralsResponse>;

}

/**
 * Request parameters for referralsTotalInfoV1 operation in ReferralsApi.
 * @export
 * @interface ReferralsApiReferralsTotalInfoV1Request
 */
export interface ReferralsApiReferralsTotalInfoV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof ReferralsApiReferralsTotalInfoV1
     */
    readonly language: ReferralsTotalInfoV1LanguageEnum

    /**
     * Project id
     * @type {number}
     * @memberof ReferralsApiReferralsTotalInfoV1
     */
    readonly project_id: number

    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof ReferralsApiReferralsTotalInfoV1
     */
    readonly v?: ReferralsTotalInfoV1VEnum
}

/**
 * ReferralsApi - object-oriented interface
 * @export
 * @class ReferralsApi
 * @extends {BaseAPI}
 */
export class ReferralsApi extends BaseAPI implements ReferralsApiInterface {
    /**
     * 
     * @summary Total info
     * @param {ReferralsApiReferralsTotalInfoV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    public referralsTotalInfoV1(requestParameters: ReferralsApiReferralsTotalInfoV1Request, options?: RawAxiosRequestConfig) {
        return ReferralsApiFp(this.configuration).referralsTotalInfoV1(requestParameters.language, requestParameters.project_id, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const ReferralsTotalInfoV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;
export type ReferralsTotalInfoV1LanguageEnum = typeof ReferralsTotalInfoV1LanguageEnum[keyof typeof ReferralsTotalInfoV1LanguageEnum];
/**
 * @export
 */
export const ReferralsTotalInfoV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type ReferralsTotalInfoV1VEnum = typeof ReferralsTotalInfoV1VEnum[keyof typeof ReferralsTotalInfoV1VEnum];
