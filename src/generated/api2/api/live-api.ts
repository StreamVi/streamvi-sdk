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
import type { SiteLiveRestreamsInfoResponse } from '../models';
/**
 * LiveApi - axios parameter creator
 * @export
 */
export const LiveApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary View live info
         * @param {ControllersRestreamsV1LanguageEnum} language Current language
         * @param {number} projectId Project id
         * @param {number} broadcastId Broadcast id
         * @param {ControllersRestreamsV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        controllersRestreamsV1: async (language: ControllersRestreamsV1LanguageEnum, projectId: number, broadcastId: number, v?: ControllersRestreamsV1VEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            assertParamExists('controllersRestreamsV1', 'language', language)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('controllersRestreamsV1', 'projectId', projectId)
            // verify required parameter 'broadcastId' is not null or undefined
            assertParamExists('controllersRestreamsV1', 'broadcastId', broadcastId)
            const localVarPath = `/method/live/restreams`;
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

            if (broadcastId !== undefined) {
                localVarQueryParameter['broadcast_id'] = broadcastId;
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
 * LiveApi - functional programming interface
 * @export
 */
export const LiveApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LiveApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary View live info
         * @param {ControllersRestreamsV1LanguageEnum} language Current language
         * @param {number} projectId Project id
         * @param {number} broadcastId Broadcast id
         * @param {ControllersRestreamsV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async controllersRestreamsV1(language: ControllersRestreamsV1LanguageEnum, projectId: number, broadcastId: number, v?: ControllersRestreamsV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SiteLiveRestreamsInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.controllersRestreamsV1(language, projectId, broadcastId, v, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LiveApi.controllersRestreamsV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LiveApi - factory interface
 * @export
 */
export const LiveApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LiveApiFp(configuration)
    return {
        /**
         * 
         * @summary View live info
         * @param {LiveApiControllersRestreamsV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        controllersRestreamsV1(requestParameters: LiveApiControllersRestreamsV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SiteLiveRestreamsInfoResponse> {
            return localVarFp.controllersRestreamsV1(requestParameters.language, requestParameters.project_id, requestParameters.broadcast_id, requestParameters.v, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LiveApi - interface
 * @export
 * @interface LiveApi
 */
export interface LiveApiInterface {
    /**
     * 
     * @summary View live info
     * @param {LiveApiControllersRestreamsV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LiveApiInterface
     */
    controllersRestreamsV1(requestParameters: LiveApiControllersRestreamsV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SiteLiveRestreamsInfoResponse>;

}

/**
 * Request parameters for controllersRestreamsV1 operation in LiveApi.
 * @export
 * @interface LiveApiControllersRestreamsV1Request
 */
export interface LiveApiControllersRestreamsV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof LiveApiControllersRestreamsV1
     */
    readonly language: ControllersRestreamsV1LanguageEnum

    /**
     * Project id
     * @type {number}
     * @memberof LiveApiControllersRestreamsV1
     */
    readonly project_id: number

    /**
     * Broadcast id
     * @type {number}
     * @memberof LiveApiControllersRestreamsV1
     */
    readonly broadcast_id: number

    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof LiveApiControllersRestreamsV1
     */
    readonly v?: ControllersRestreamsV1VEnum
}

/**
 * LiveApi - object-oriented interface
 * @export
 * @class LiveApi
 * @extends {BaseAPI}
 */
export class LiveApi extends BaseAPI implements LiveApiInterface {
    /**
     * 
     * @summary View live info
     * @param {LiveApiControllersRestreamsV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LiveApi
     */
    public controllersRestreamsV1(requestParameters: LiveApiControllersRestreamsV1Request, options?: RawAxiosRequestConfig) {
        return LiveApiFp(this.configuration).controllersRestreamsV1(requestParameters.language, requestParameters.project_id, requestParameters.broadcast_id, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const ControllersRestreamsV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;
export type ControllersRestreamsV1LanguageEnum = typeof ControllersRestreamsV1LanguageEnum[keyof typeof ControllersRestreamsV1LanguageEnum];
/**
 * @export
 */
export const ControllersRestreamsV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type ControllersRestreamsV1VEnum = typeof ControllersRestreamsV1VEnum[keyof typeof ControllersRestreamsV1VEnum];
