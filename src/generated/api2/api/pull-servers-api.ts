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
import type { PullServerListResponse } from '../models';
/**
 * PullServersApi - axios parameter creator
 * @export
 */
export const PullServersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get pull servers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pullServersGetPullServersV1: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/method/pull-servers/list`;
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
 * PullServersApi - functional programming interface
 * @export
 */
export const PullServersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PullServersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get pull servers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pullServersGetPullServersV1(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PullServerListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pullServersGetPullServersV1(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PullServersApi.pullServersGetPullServersV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PullServersApi - factory interface
 * @export
 */
export const PullServersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PullServersApiFp(configuration)
    return {
        /**
         * 
         * @summary Get pull servers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pullServersGetPullServersV1(options?: RawAxiosRequestConfig): AxiosPromise<PullServerListResponse> {
            return localVarFp.pullServersGetPullServersV1(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PullServersApi - interface
 * @export
 * @interface PullServersApi
 */
export interface PullServersApiInterface {
    /**
     * 
     * @summary Get pull servers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PullServersApiInterface
     */
    pullServersGetPullServersV1(options?: RawAxiosRequestConfig): AxiosPromise<PullServerListResponse>;

}

/**
 * PullServersApi - object-oriented interface
 * @export
 * @class PullServersApi
 * @extends {BaseAPI}
 */
export class PullServersApi extends BaseAPI implements PullServersApiInterface {
    /**
     * 
     * @summary Get pull servers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PullServersApi
     */
    public pullServersGetPullServersV1(options?: RawAxiosRequestConfig) {
        return PullServersApiFp(this.configuration).pullServersGetPullServersV1(options).then((request) => request(this.axios, this.basePath));
    }
}

