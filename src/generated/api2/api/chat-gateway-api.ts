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
import type { MessageResponseDto } from '../models';
// @ts-ignore
import type { MethodChatHistoryResponse } from '../models';
// @ts-ignore
import type { MethodChatSendMessageRequestDto } from '../models';
// @ts-ignore
import type { SuccessResponse } from '../models';
/**
 * ChatGatewayApi - axios parameter creator
 * @export
 */
export const ChatGatewayApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Remove message
         * @param {MethodChatGatewayDeleteV1LanguageEnum} language Current language
         * @param {string} key Key
         * @param {number} broadcastId broadcast id
         * @param {string} eventId Event id
         * @param {MethodChatGatewayDeleteV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        methodChatGatewayDeleteV1: async (language: MethodChatGatewayDeleteV1LanguageEnum, key: string, broadcastId: number, eventId: string, v?: MethodChatGatewayDeleteV1VEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            assertParamExists('methodChatGatewayDeleteV1', 'language', language)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('methodChatGatewayDeleteV1', 'key', key)
            // verify required parameter 'broadcastId' is not null or undefined
            assertParamExists('methodChatGatewayDeleteV1', 'broadcastId', broadcastId)
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('methodChatGatewayDeleteV1', 'eventId', eventId)
            const localVarPath = `/method/chat/messages/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }

            if (broadcastId !== undefined) {
                localVarQueryParameter['broadcast_id'] = broadcastId;
            }

            if (eventId !== undefined) {
                localVarQueryParameter['event_id'] = eventId;
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
         * @summary Get one message
         * @param {MethodChatGatewayGetMessageV1LanguageEnum} language Current language
         * @param {string} key Key
         * @param {number} broadcastId broadcast id
         * @param {string} eventId Event id
         * @param {MethodChatGatewayGetMessageV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        methodChatGatewayGetMessageV1: async (language: MethodChatGatewayGetMessageV1LanguageEnum, key: string, broadcastId: number, eventId: string, v?: MethodChatGatewayGetMessageV1VEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            assertParamExists('methodChatGatewayGetMessageV1', 'language', language)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('methodChatGatewayGetMessageV1', 'key', key)
            // verify required parameter 'broadcastId' is not null or undefined
            assertParamExists('methodChatGatewayGetMessageV1', 'broadcastId', broadcastId)
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('methodChatGatewayGetMessageV1', 'eventId', eventId)
            const localVarPath = `/method/chat/messages/message`;
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

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }

            if (broadcastId !== undefined) {
                localVarQueryParameter['broadcast_id'] = broadcastId;
            }

            if (eventId !== undefined) {
                localVarQueryParameter['event_id'] = eventId;
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
         * @summary List history message
         * @param {MethodChatGatewayHistoryV1LanguageEnum} language Current language
         * @param {string} key Key
         * @param {number} broadcastId broadcast id
         * @param {MethodChatGatewayHistoryV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        methodChatGatewayHistoryV1: async (language: MethodChatGatewayHistoryV1LanguageEnum, key: string, broadcastId: number, v?: MethodChatGatewayHistoryV1VEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            assertParamExists('methodChatGatewayHistoryV1', 'language', language)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('methodChatGatewayHistoryV1', 'key', key)
            // verify required parameter 'broadcastId' is not null or undefined
            assertParamExists('methodChatGatewayHistoryV1', 'broadcastId', broadcastId)
            const localVarPath = `/method/chat/messages`;
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

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
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
        /**
         * 
         * @summary Send message
         * @param {MethodChatGatewaySendV1LanguageEnum} language Current language
         * @param {string} key Key
         * @param {number} broadcastId 
         * @param {MethodChatSendMessageRequestDto} methodChatSendMessageRequestDto 
         * @param {MethodChatGatewaySendV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        methodChatGatewaySendV1: async (language: MethodChatGatewaySendV1LanguageEnum, key: string, broadcastId: number, methodChatSendMessageRequestDto: MethodChatSendMessageRequestDto, v?: MethodChatGatewaySendV1VEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            assertParamExists('methodChatGatewaySendV1', 'language', language)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('methodChatGatewaySendV1', 'key', key)
            // verify required parameter 'broadcastId' is not null or undefined
            assertParamExists('methodChatGatewaySendV1', 'broadcastId', broadcastId)
            // verify required parameter 'methodChatSendMessageRequestDto' is not null or undefined
            assertParamExists('methodChatGatewaySendV1', 'methodChatSendMessageRequestDto', methodChatSendMessageRequestDto)
            const localVarPath = `/method/chat/messages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }

            if (broadcastId !== undefined) {
                localVarQueryParameter['broadcast_id'] = broadcastId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(methodChatSendMessageRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ChatGatewayApi - functional programming interface
 * @export
 */
export const ChatGatewayApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChatGatewayApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Remove message
         * @param {MethodChatGatewayDeleteV1LanguageEnum} language Current language
         * @param {string} key Key
         * @param {number} broadcastId broadcast id
         * @param {string} eventId Event id
         * @param {MethodChatGatewayDeleteV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async methodChatGatewayDeleteV1(language: MethodChatGatewayDeleteV1LanguageEnum, key: string, broadcastId: number, eventId: string, v?: MethodChatGatewayDeleteV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.methodChatGatewayDeleteV1(language, key, broadcastId, eventId, v, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatGatewayApi.methodChatGatewayDeleteV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get one message
         * @param {MethodChatGatewayGetMessageV1LanguageEnum} language Current language
         * @param {string} key Key
         * @param {number} broadcastId broadcast id
         * @param {string} eventId Event id
         * @param {MethodChatGatewayGetMessageV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async methodChatGatewayGetMessageV1(language: MethodChatGatewayGetMessageV1LanguageEnum, key: string, broadcastId: number, eventId: string, v?: MethodChatGatewayGetMessageV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MessageResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.methodChatGatewayGetMessageV1(language, key, broadcastId, eventId, v, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatGatewayApi.methodChatGatewayGetMessageV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List history message
         * @param {MethodChatGatewayHistoryV1LanguageEnum} language Current language
         * @param {string} key Key
         * @param {number} broadcastId broadcast id
         * @param {MethodChatGatewayHistoryV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async methodChatGatewayHistoryV1(language: MethodChatGatewayHistoryV1LanguageEnum, key: string, broadcastId: number, v?: MethodChatGatewayHistoryV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MethodChatHistoryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.methodChatGatewayHistoryV1(language, key, broadcastId, v, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatGatewayApi.methodChatGatewayHistoryV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Send message
         * @param {MethodChatGatewaySendV1LanguageEnum} language Current language
         * @param {string} key Key
         * @param {number} broadcastId 
         * @param {MethodChatSendMessageRequestDto} methodChatSendMessageRequestDto 
         * @param {MethodChatGatewaySendV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async methodChatGatewaySendV1(language: MethodChatGatewaySendV1LanguageEnum, key: string, broadcastId: number, methodChatSendMessageRequestDto: MethodChatSendMessageRequestDto, v?: MethodChatGatewaySendV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MessageResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.methodChatGatewaySendV1(language, key, broadcastId, methodChatSendMessageRequestDto, v, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatGatewayApi.methodChatGatewaySendV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ChatGatewayApi - factory interface
 * @export
 */
export const ChatGatewayApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChatGatewayApiFp(configuration)
    return {
        /**
         * 
         * @summary Remove message
         * @param {ChatGatewayApiMethodChatGatewayDeleteV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        methodChatGatewayDeleteV1(requestParameters: ChatGatewayApiMethodChatGatewayDeleteV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SuccessResponse> {
            return localVarFp.methodChatGatewayDeleteV1(requestParameters.language, requestParameters.key, requestParameters.broadcast_id, requestParameters.event_id, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get one message
         * @param {ChatGatewayApiMethodChatGatewayGetMessageV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        methodChatGatewayGetMessageV1(requestParameters: ChatGatewayApiMethodChatGatewayGetMessageV1Request, options?: RawAxiosRequestConfig): AxiosPromise<MessageResponseDto> {
            return localVarFp.methodChatGatewayGetMessageV1(requestParameters.language, requestParameters.key, requestParameters.broadcast_id, requestParameters.event_id, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List history message
         * @param {ChatGatewayApiMethodChatGatewayHistoryV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        methodChatGatewayHistoryV1(requestParameters: ChatGatewayApiMethodChatGatewayHistoryV1Request, options?: RawAxiosRequestConfig): AxiosPromise<MethodChatHistoryResponse> {
            return localVarFp.methodChatGatewayHistoryV1(requestParameters.language, requestParameters.key, requestParameters.broadcast_id, requestParameters.v, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Send message
         * @param {ChatGatewayApiMethodChatGatewaySendV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        methodChatGatewaySendV1(requestParameters: ChatGatewayApiMethodChatGatewaySendV1Request, options?: RawAxiosRequestConfig): AxiosPromise<MessageResponseDto> {
            return localVarFp.methodChatGatewaySendV1(requestParameters.language, requestParameters.key, requestParameters.broadcast_id, requestParameters.MethodChatSendMessageRequestDto, requestParameters.v, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ChatGatewayApi - interface
 * @export
 * @interface ChatGatewayApi
 */
export interface ChatGatewayApiInterface {
    /**
     * 
     * @summary Remove message
     * @param {ChatGatewayApiMethodChatGatewayDeleteV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatGatewayApiInterface
     */
    methodChatGatewayDeleteV1(requestParameters: ChatGatewayApiMethodChatGatewayDeleteV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SuccessResponse>;

    /**
     * 
     * @summary Get one message
     * @param {ChatGatewayApiMethodChatGatewayGetMessageV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatGatewayApiInterface
     */
    methodChatGatewayGetMessageV1(requestParameters: ChatGatewayApiMethodChatGatewayGetMessageV1Request, options?: RawAxiosRequestConfig): AxiosPromise<MessageResponseDto>;

    /**
     * 
     * @summary List history message
     * @param {ChatGatewayApiMethodChatGatewayHistoryV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatGatewayApiInterface
     */
    methodChatGatewayHistoryV1(requestParameters: ChatGatewayApiMethodChatGatewayHistoryV1Request, options?: RawAxiosRequestConfig): AxiosPromise<MethodChatHistoryResponse>;

    /**
     * 
     * @summary Send message
     * @param {ChatGatewayApiMethodChatGatewaySendV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatGatewayApiInterface
     */
    methodChatGatewaySendV1(requestParameters: ChatGatewayApiMethodChatGatewaySendV1Request, options?: RawAxiosRequestConfig): AxiosPromise<MessageResponseDto>;

}

/**
 * Request parameters for methodChatGatewayDeleteV1 operation in ChatGatewayApi.
 * @export
 * @interface ChatGatewayApiMethodChatGatewayDeleteV1Request
 */
export interface ChatGatewayApiMethodChatGatewayDeleteV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof ChatGatewayApiMethodChatGatewayDeleteV1
     */
    readonly language: MethodChatGatewayDeleteV1LanguageEnum

    /**
     * Key
     * @type {string}
     * @memberof ChatGatewayApiMethodChatGatewayDeleteV1
     */
    readonly key: string

    /**
     * broadcast id
     * @type {number}
     * @memberof ChatGatewayApiMethodChatGatewayDeleteV1
     */
    readonly broadcast_id: number

    /**
     * Event id
     * @type {string}
     * @memberof ChatGatewayApiMethodChatGatewayDeleteV1
     */
    readonly event_id: string

    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof ChatGatewayApiMethodChatGatewayDeleteV1
     */
    readonly v?: MethodChatGatewayDeleteV1VEnum
}

/**
 * Request parameters for methodChatGatewayGetMessageV1 operation in ChatGatewayApi.
 * @export
 * @interface ChatGatewayApiMethodChatGatewayGetMessageV1Request
 */
export interface ChatGatewayApiMethodChatGatewayGetMessageV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof ChatGatewayApiMethodChatGatewayGetMessageV1
     */
    readonly language: MethodChatGatewayGetMessageV1LanguageEnum

    /**
     * Key
     * @type {string}
     * @memberof ChatGatewayApiMethodChatGatewayGetMessageV1
     */
    readonly key: string

    /**
     * broadcast id
     * @type {number}
     * @memberof ChatGatewayApiMethodChatGatewayGetMessageV1
     */
    readonly broadcast_id: number

    /**
     * Event id
     * @type {string}
     * @memberof ChatGatewayApiMethodChatGatewayGetMessageV1
     */
    readonly event_id: string

    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof ChatGatewayApiMethodChatGatewayGetMessageV1
     */
    readonly v?: MethodChatGatewayGetMessageV1VEnum
}

/**
 * Request parameters for methodChatGatewayHistoryV1 operation in ChatGatewayApi.
 * @export
 * @interface ChatGatewayApiMethodChatGatewayHistoryV1Request
 */
export interface ChatGatewayApiMethodChatGatewayHistoryV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof ChatGatewayApiMethodChatGatewayHistoryV1
     */
    readonly language: MethodChatGatewayHistoryV1LanguageEnum

    /**
     * Key
     * @type {string}
     * @memberof ChatGatewayApiMethodChatGatewayHistoryV1
     */
    readonly key: string

    /**
     * broadcast id
     * @type {number}
     * @memberof ChatGatewayApiMethodChatGatewayHistoryV1
     */
    readonly broadcast_id: number

    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof ChatGatewayApiMethodChatGatewayHistoryV1
     */
    readonly v?: MethodChatGatewayHistoryV1VEnum
}

/**
 * Request parameters for methodChatGatewaySendV1 operation in ChatGatewayApi.
 * @export
 * @interface ChatGatewayApiMethodChatGatewaySendV1Request
 */
export interface ChatGatewayApiMethodChatGatewaySendV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof ChatGatewayApiMethodChatGatewaySendV1
     */
    readonly language: MethodChatGatewaySendV1LanguageEnum

    /**
     * Key
     * @type {string}
     * @memberof ChatGatewayApiMethodChatGatewaySendV1
     */
    readonly key: string

    /**
     * 
     * @type {number}
     * @memberof ChatGatewayApiMethodChatGatewaySendV1
     */
    readonly broadcast_id: number

    /**
     * 
     * @type {MethodChatSendMessageRequestDto}
     * @memberof ChatGatewayApiMethodChatGatewaySendV1
     */
    readonly MethodChatSendMessageRequestDto: MethodChatSendMessageRequestDto

    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof ChatGatewayApiMethodChatGatewaySendV1
     */
    readonly v?: MethodChatGatewaySendV1VEnum
}

/**
 * ChatGatewayApi - object-oriented interface
 * @export
 * @class ChatGatewayApi
 * @extends {BaseAPI}
 */
export class ChatGatewayApi extends BaseAPI implements ChatGatewayApiInterface {
    /**
     * 
     * @summary Remove message
     * @param {ChatGatewayApiMethodChatGatewayDeleteV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatGatewayApi
     */
    public methodChatGatewayDeleteV1(requestParameters: ChatGatewayApiMethodChatGatewayDeleteV1Request, options?: RawAxiosRequestConfig) {
        return ChatGatewayApiFp(this.configuration).methodChatGatewayDeleteV1(requestParameters.language, requestParameters.key, requestParameters.broadcast_id, requestParameters.event_id, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get one message
     * @param {ChatGatewayApiMethodChatGatewayGetMessageV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatGatewayApi
     */
    public methodChatGatewayGetMessageV1(requestParameters: ChatGatewayApiMethodChatGatewayGetMessageV1Request, options?: RawAxiosRequestConfig) {
        return ChatGatewayApiFp(this.configuration).methodChatGatewayGetMessageV1(requestParameters.language, requestParameters.key, requestParameters.broadcast_id, requestParameters.event_id, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List history message
     * @param {ChatGatewayApiMethodChatGatewayHistoryV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatGatewayApi
     */
    public methodChatGatewayHistoryV1(requestParameters: ChatGatewayApiMethodChatGatewayHistoryV1Request, options?: RawAxiosRequestConfig) {
        return ChatGatewayApiFp(this.configuration).methodChatGatewayHistoryV1(requestParameters.language, requestParameters.key, requestParameters.broadcast_id, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Send message
     * @param {ChatGatewayApiMethodChatGatewaySendV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatGatewayApi
     */
    public methodChatGatewaySendV1(requestParameters: ChatGatewayApiMethodChatGatewaySendV1Request, options?: RawAxiosRequestConfig) {
        return ChatGatewayApiFp(this.configuration).methodChatGatewaySendV1(requestParameters.language, requestParameters.key, requestParameters.broadcast_id, requestParameters.MethodChatSendMessageRequestDto, requestParameters.v, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const MethodChatGatewayDeleteV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;
export type MethodChatGatewayDeleteV1LanguageEnum = typeof MethodChatGatewayDeleteV1LanguageEnum[keyof typeof MethodChatGatewayDeleteV1LanguageEnum];
/**
 * @export
 */
export const MethodChatGatewayDeleteV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type MethodChatGatewayDeleteV1VEnum = typeof MethodChatGatewayDeleteV1VEnum[keyof typeof MethodChatGatewayDeleteV1VEnum];
/**
 * @export
 */
export const MethodChatGatewayGetMessageV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;
export type MethodChatGatewayGetMessageV1LanguageEnum = typeof MethodChatGatewayGetMessageV1LanguageEnum[keyof typeof MethodChatGatewayGetMessageV1LanguageEnum];
/**
 * @export
 */
export const MethodChatGatewayGetMessageV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type MethodChatGatewayGetMessageV1VEnum = typeof MethodChatGatewayGetMessageV1VEnum[keyof typeof MethodChatGatewayGetMessageV1VEnum];
/**
 * @export
 */
export const MethodChatGatewayHistoryV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;
export type MethodChatGatewayHistoryV1LanguageEnum = typeof MethodChatGatewayHistoryV1LanguageEnum[keyof typeof MethodChatGatewayHistoryV1LanguageEnum];
/**
 * @export
 */
export const MethodChatGatewayHistoryV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type MethodChatGatewayHistoryV1VEnum = typeof MethodChatGatewayHistoryV1VEnum[keyof typeof MethodChatGatewayHistoryV1VEnum];
/**
 * @export
 */
export const MethodChatGatewaySendV1LanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;
export type MethodChatGatewaySendV1LanguageEnum = typeof MethodChatGatewaySendV1LanguageEnum[keyof typeof MethodChatGatewaySendV1LanguageEnum];
/**
 * @export
 */
export const MethodChatGatewaySendV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type MethodChatGatewaySendV1VEnum = typeof MethodChatGatewaySendV1VEnum[keyof typeof MethodChatGatewaySendV1VEnum];
