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
import type { PaginatedResponseOfBlogPageSiteResponse } from '../models';
/**
 * BlogPageApi - axios parameter creator
 * @export
 */
export const BlogPageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get blog page
         * @param {BlogPageGetV1LanguageEnum} language Current language
         * @param {string} url Url of page
         * @param {BlogPageGetV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogPageGetV1: async (language: BlogPageGetV1LanguageEnum, url: string, v?: BlogPageGetV1VEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            assertParamExists('blogPageGetV1', 'language', language)
            // verify required parameter 'url' is not null or undefined
            assertParamExists('blogPageGetV1', 'url', url)
            const localVarPath = `/method/blog/page/get`;
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

            if (url !== undefined) {
                localVarQueryParameter['url'] = url;
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
         * @summary Get list of blog pages
         * @param {BlogPageListV1LanguageEnum} language Current language
         * @param {BlogPageListV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {string} [s] String for search
         * @param {number} [limit] Number of results
         * @param {number} [offset] Page offset number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogPageListV1: async (language: BlogPageListV1LanguageEnum, v?: BlogPageListV1VEnum, s?: string, limit?: number, offset?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            assertParamExists('blogPageListV1', 'language', language)
            const localVarPath = `/method/blog/page/list`;
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

            if (s !== undefined) {
                localVarQueryParameter['s'] = s;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
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
 * BlogPageApi - functional programming interface
 * @export
 */
export const BlogPageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BlogPageApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get blog page
         * @param {BlogPageGetV1LanguageEnum} language Current language
         * @param {string} url Url of page
         * @param {BlogPageGetV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async blogPageGetV1(language: BlogPageGetV1LanguageEnum, url: string, v?: BlogPageGetV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedResponseOfBlogPageSiteResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.blogPageGetV1(language, url, v, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BlogPageApi.blogPageGetV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get list of blog pages
         * @param {BlogPageListV1LanguageEnum} language Current language
         * @param {BlogPageListV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {string} [s] String for search
         * @param {number} [limit] Number of results
         * @param {number} [offset] Page offset number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async blogPageListV1(language: BlogPageListV1LanguageEnum, v?: BlogPageListV1VEnum, s?: string, limit?: number, offset?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedResponseOfBlogPageSiteResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.blogPageListV1(language, v, s, limit, offset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BlogPageApi.blogPageListV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BlogPageApi - factory interface
 * @export
 */
export const BlogPageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BlogPageApiFp(configuration)
    return {
        /**
         * 
         * @summary Get blog page
         * @param {BlogPageApiBlogPageGetV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogPageGetV1(requestParameters: BlogPageApiBlogPageGetV1Request, options?: RawAxiosRequestConfig): AxiosPromise<PaginatedResponseOfBlogPageSiteResponse> {
            return localVarFp.blogPageGetV1(requestParameters.language, requestParameters.url, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get list of blog pages
         * @param {BlogPageApiBlogPageListV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogPageListV1(requestParameters: BlogPageApiBlogPageListV1Request, options?: RawAxiosRequestConfig): AxiosPromise<PaginatedResponseOfBlogPageSiteResponse> {
            return localVarFp.blogPageListV1(requestParameters.language, requestParameters.v, requestParameters.s, requestParameters.limit, requestParameters.offset, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BlogPageApi - interface
 * @export
 * @interface BlogPageApi
 */
export interface BlogPageApiInterface {
    /**
     * 
     * @summary Get blog page
     * @param {BlogPageApiBlogPageGetV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogPageApiInterface
     */
    blogPageGetV1(requestParameters: BlogPageApiBlogPageGetV1Request, options?: RawAxiosRequestConfig): AxiosPromise<PaginatedResponseOfBlogPageSiteResponse>;

    /**
     * 
     * @summary Get list of blog pages
     * @param {BlogPageApiBlogPageListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogPageApiInterface
     */
    blogPageListV1(requestParameters: BlogPageApiBlogPageListV1Request, options?: RawAxiosRequestConfig): AxiosPromise<PaginatedResponseOfBlogPageSiteResponse>;

}

/**
 * Request parameters for blogPageGetV1 operation in BlogPageApi.
 * @export
 * @interface BlogPageApiBlogPageGetV1Request
 */
export interface BlogPageApiBlogPageGetV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof BlogPageApiBlogPageGetV1
     */
    readonly language: BlogPageGetV1LanguageEnum

    /**
     * Url of page
     * @type {string}
     * @memberof BlogPageApiBlogPageGetV1
     */
    readonly url: string

    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof BlogPageApiBlogPageGetV1
     */
    readonly v?: BlogPageGetV1VEnum
}

/**
 * Request parameters for blogPageListV1 operation in BlogPageApi.
 * @export
 * @interface BlogPageApiBlogPageListV1Request
 */
export interface BlogPageApiBlogPageListV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof BlogPageApiBlogPageListV1
     */
    readonly language: BlogPageListV1LanguageEnum

    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof BlogPageApiBlogPageListV1
     */
    readonly v?: BlogPageListV1VEnum

    /**
     * String for search
     * @type {string}
     * @memberof BlogPageApiBlogPageListV1
     */
    readonly s?: string

    /**
     * Number of results
     * @type {number}
     * @memberof BlogPageApiBlogPageListV1
     */
    readonly limit?: number

    /**
     * Page offset number
     * @type {number}
     * @memberof BlogPageApiBlogPageListV1
     */
    readonly offset?: number
}

/**
 * BlogPageApi - object-oriented interface
 * @export
 * @class BlogPageApi
 * @extends {BaseAPI}
 */
export class BlogPageApi extends BaseAPI implements BlogPageApiInterface {
    /**
     * 
     * @summary Get blog page
     * @param {BlogPageApiBlogPageGetV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogPageApi
     */
    public blogPageGetV1(requestParameters: BlogPageApiBlogPageGetV1Request, options?: RawAxiosRequestConfig) {
        return BlogPageApiFp(this.configuration).blogPageGetV1(requestParameters.language, requestParameters.url, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get list of blog pages
     * @param {BlogPageApiBlogPageListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogPageApi
     */
    public blogPageListV1(requestParameters: BlogPageApiBlogPageListV1Request, options?: RawAxiosRequestConfig) {
        return BlogPageApiFp(this.configuration).blogPageListV1(requestParameters.language, requestParameters.v, requestParameters.s, requestParameters.limit, requestParameters.offset, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const BlogPageGetV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;
export type BlogPageGetV1LanguageEnum = typeof BlogPageGetV1LanguageEnum[keyof typeof BlogPageGetV1LanguageEnum];
/**
 * @export
 */
export const BlogPageGetV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type BlogPageGetV1VEnum = typeof BlogPageGetV1VEnum[keyof typeof BlogPageGetV1VEnum];
/**
 * @export
 */
export const BlogPageListV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;
export type BlogPageListV1LanguageEnum = typeof BlogPageListV1LanguageEnum[keyof typeof BlogPageListV1LanguageEnum];
/**
 * @export
 */
export const BlogPageListV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type BlogPageListV1VEnum = typeof BlogPageListV1VEnum[keyof typeof BlogPageListV1VEnum];
