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
import { type RequestArgs, BaseAPI } from '../base';
import type { ListOfRtmpServerLocationResponse } from '../models';
import type { RtmpServerGraphResponse } from '../models';
import type { RtmpServerListResponse } from '../models';
import type { RtmpServerStateResponse } from '../models';
/**
 * RtmpServerApi - axios parameter creator
 * @export
 */
export declare const RtmpServerApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Rtmp locations server list example for unauthorized
     * @param {MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum} language Current language
     * @param {MethodRtmpServerListLocationsUnauthorizedV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    methodRtmpServerListLocationsUnauthorizedV1: (language: MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum, v?: MethodRtmpServerListLocationsUnauthorizedV1VEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
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
    rtmpServerGraphV1: (language: RtmpServerGraphV1LanguageEnum, interval: RtmpServerGraphV1IntervalEnum, type: RtmpServerGraphV1TypeEnum, v?: RtmpServerGraphV1VEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
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
    rtmpServerListV1: (language: RtmpServerListV1LanguageEnum, projectId: number, interval: RtmpServerListV1IntervalEnum, v?: RtmpServerListV1VEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary State of rtmp servers
     * @param {RtmpServerStateV1LanguageEnum} language Current language
     * @param {RtmpServerStateV1IntervalEnum} interval Interval state in hours
     * @param {RtmpServerStateV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rtmpServerStateV1: (language: RtmpServerStateV1LanguageEnum, interval: RtmpServerStateV1IntervalEnum, v?: RtmpServerStateV1VEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary State of rtmp servers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rtmpServerUpV1: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * RtmpServerApi - functional programming interface
 * @export
 */
export declare const RtmpServerApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Rtmp locations server list example for unauthorized
     * @param {MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum} language Current language
     * @param {MethodRtmpServerListLocationsUnauthorizedV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    methodRtmpServerListLocationsUnauthorizedV1(language: MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum, v?: MethodRtmpServerListLocationsUnauthorizedV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListOfRtmpServerLocationResponse>>;
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
    rtmpServerGraphV1(language: RtmpServerGraphV1LanguageEnum, interval: RtmpServerGraphV1IntervalEnum, type: RtmpServerGraphV1TypeEnum, v?: RtmpServerGraphV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RtmpServerGraphResponse>>;
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
    rtmpServerListV1(language: RtmpServerListV1LanguageEnum, projectId: number, interval: RtmpServerListV1IntervalEnum, v?: RtmpServerListV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RtmpServerListResponse>>;
    /**
     *
     * @summary State of rtmp servers
     * @param {RtmpServerStateV1LanguageEnum} language Current language
     * @param {RtmpServerStateV1IntervalEnum} interval Interval state in hours
     * @param {RtmpServerStateV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rtmpServerStateV1(language: RtmpServerStateV1LanguageEnum, interval: RtmpServerStateV1IntervalEnum, v?: RtmpServerStateV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RtmpServerStateResponse>>;
    /**
     *
     * @summary State of rtmp servers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rtmpServerUpV1(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>>;
};
/**
 * RtmpServerApi - factory interface
 * @export
 */
export declare const RtmpServerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Rtmp locations server list example for unauthorized
     * @param {RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    methodRtmpServerListLocationsUnauthorizedV1(requestParameters: RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1Request, options?: RawAxiosRequestConfig): AxiosPromise<ListOfRtmpServerLocationResponse>;
    /**
     *
     * @summary Graph of rtmp servers
     * @param {RtmpServerApiRtmpServerGraphV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rtmpServerGraphV1(requestParameters: RtmpServerApiRtmpServerGraphV1Request, options?: RawAxiosRequestConfig): AxiosPromise<RtmpServerGraphResponse>;
    /**
     *
     * @summary List rtmp servers
     * @param {RtmpServerApiRtmpServerListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rtmpServerListV1(requestParameters: RtmpServerApiRtmpServerListV1Request, options?: RawAxiosRequestConfig): AxiosPromise<RtmpServerListResponse>;
    /**
     *
     * @summary State of rtmp servers
     * @param {RtmpServerApiRtmpServerStateV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rtmpServerStateV1(requestParameters: RtmpServerApiRtmpServerStateV1Request, options?: RawAxiosRequestConfig): AxiosPromise<RtmpServerStateResponse>;
    /**
     *
     * @summary State of rtmp servers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rtmpServerUpV1(options?: RawAxiosRequestConfig): AxiosPromise<object>;
};
/**
 * RtmpServerApi - interface
 * @export
 * @interface RtmpServerApi
 */
export interface RtmpServerApiInterface {
    /**
     *
     * @summary Rtmp locations server list example for unauthorized
     * @param {RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApiInterface
     */
    methodRtmpServerListLocationsUnauthorizedV1(requestParameters: RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1Request, options?: RawAxiosRequestConfig): AxiosPromise<ListOfRtmpServerLocationResponse>;
    /**
     *
     * @summary Graph of rtmp servers
     * @param {RtmpServerApiRtmpServerGraphV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApiInterface
     */
    rtmpServerGraphV1(requestParameters: RtmpServerApiRtmpServerGraphV1Request, options?: RawAxiosRequestConfig): AxiosPromise<RtmpServerGraphResponse>;
    /**
     *
     * @summary List rtmp servers
     * @param {RtmpServerApiRtmpServerListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApiInterface
     */
    rtmpServerListV1(requestParameters: RtmpServerApiRtmpServerListV1Request, options?: RawAxiosRequestConfig): AxiosPromise<RtmpServerListResponse>;
    /**
     *
     * @summary State of rtmp servers
     * @param {RtmpServerApiRtmpServerStateV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApiInterface
     */
    rtmpServerStateV1(requestParameters: RtmpServerApiRtmpServerStateV1Request, options?: RawAxiosRequestConfig): AxiosPromise<RtmpServerStateResponse>;
    /**
     *
     * @summary State of rtmp servers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApiInterface
     */
    rtmpServerUpV1(options?: RawAxiosRequestConfig): AxiosPromise<object>;
}
/**
 * Request parameters for methodRtmpServerListLocationsUnauthorizedV1 operation in RtmpServerApi.
 * @export
 * @interface RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1Request
 */
export interface RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1
     */
    readonly language: MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum;
    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1
     */
    readonly v?: MethodRtmpServerListLocationsUnauthorizedV1VEnum;
}
/**
 * Request parameters for rtmpServerGraphV1 operation in RtmpServerApi.
 * @export
 * @interface RtmpServerApiRtmpServerGraphV1Request
 */
export interface RtmpServerApiRtmpServerGraphV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof RtmpServerApiRtmpServerGraphV1
     */
    readonly language: RtmpServerGraphV1LanguageEnum;
    /**
     * Interval state in hours
     * @type {1 | 3 | 6 | 12 | 24}
     * @memberof RtmpServerApiRtmpServerGraphV1
     */
    readonly interval: RtmpServerGraphV1IntervalEnum;
    /**
     * Type graph
     * @type {'performance' | 'network' | 'cpu' | 'ram' | 'deliveredPackages'}
     * @memberof RtmpServerApiRtmpServerGraphV1
     */
    readonly type: RtmpServerGraphV1TypeEnum;
    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof RtmpServerApiRtmpServerGraphV1
     */
    readonly v?: RtmpServerGraphV1VEnum;
}
/**
 * Request parameters for rtmpServerListV1 operation in RtmpServerApi.
 * @export
 * @interface RtmpServerApiRtmpServerListV1Request
 */
export interface RtmpServerApiRtmpServerListV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof RtmpServerApiRtmpServerListV1
     */
    readonly language: RtmpServerListV1LanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof RtmpServerApiRtmpServerListV1
     */
    readonly projectId: number;
    /**
     * Interval state in hours
     * @type {1 | 3 | 6 | 12 | 24}
     * @memberof RtmpServerApiRtmpServerListV1
     */
    readonly interval: RtmpServerListV1IntervalEnum;
    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof RtmpServerApiRtmpServerListV1
     */
    readonly v?: RtmpServerListV1VEnum;
}
/**
 * Request parameters for rtmpServerStateV1 operation in RtmpServerApi.
 * @export
 * @interface RtmpServerApiRtmpServerStateV1Request
 */
export interface RtmpServerApiRtmpServerStateV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof RtmpServerApiRtmpServerStateV1
     */
    readonly language: RtmpServerStateV1LanguageEnum;
    /**
     * Interval state in hours
     * @type {1 | 3 | 6 | 12 | 24}
     * @memberof RtmpServerApiRtmpServerStateV1
     */
    readonly interval: RtmpServerStateV1IntervalEnum;
    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof RtmpServerApiRtmpServerStateV1
     */
    readonly v?: RtmpServerStateV1VEnum;
}
/**
 * RtmpServerApi - object-oriented interface
 * @export
 * @class RtmpServerApi
 * @extends {BaseAPI}
 */
export declare class RtmpServerApi extends BaseAPI implements RtmpServerApiInterface {
    /**
     *
     * @summary Rtmp locations server list example for unauthorized
     * @param {RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApi
     */
    methodRtmpServerListLocationsUnauthorizedV1(requestParameters: RtmpServerApiMethodRtmpServerListLocationsUnauthorizedV1Request, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<import("../models").ListResponse, any>>;
    /**
     *
     * @summary Graph of rtmp servers
     * @param {RtmpServerApiRtmpServerGraphV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApi
     */
    rtmpServerGraphV1(requestParameters: RtmpServerApiRtmpServerGraphV1Request, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<RtmpServerGraphResponse, any>>;
    /**
     *
     * @summary List rtmp servers
     * @param {RtmpServerApiRtmpServerListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApi
     */
    rtmpServerListV1(requestParameters: RtmpServerApiRtmpServerListV1Request, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<RtmpServerListResponse, any>>;
    /**
     *
     * @summary State of rtmp servers
     * @param {RtmpServerApiRtmpServerStateV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApi
     */
    rtmpServerStateV1(requestParameters: RtmpServerApiRtmpServerStateV1Request, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<RtmpServerStateResponse, any>>;
    /**
     *
     * @summary State of rtmp servers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmpServerApi
     */
    rtmpServerUpV1(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<object, any>>;
}
/**
 * @export
 */
export declare const MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum = typeof MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum[keyof typeof MethodRtmpServerListLocationsUnauthorizedV1LanguageEnum];
/**
 * @export
 */
export declare const MethodRtmpServerListLocationsUnauthorizedV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type MethodRtmpServerListLocationsUnauthorizedV1VEnum = typeof MethodRtmpServerListLocationsUnauthorizedV1VEnum[keyof typeof MethodRtmpServerListLocationsUnauthorizedV1VEnum];
/**
 * @export
 */
export declare const RtmpServerGraphV1LanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type RtmpServerGraphV1LanguageEnum = typeof RtmpServerGraphV1LanguageEnum[keyof typeof RtmpServerGraphV1LanguageEnum];
/**
 * @export
 */
export declare const RtmpServerGraphV1IntervalEnum: {
    readonly NUMBER_1: 1;
    readonly NUMBER_3: 3;
    readonly NUMBER_6: 6;
    readonly NUMBER_12: 12;
    readonly NUMBER_24: 24;
};
export type RtmpServerGraphV1IntervalEnum = typeof RtmpServerGraphV1IntervalEnum[keyof typeof RtmpServerGraphV1IntervalEnum];
/**
 * @export
 */
export declare const RtmpServerGraphV1TypeEnum: {
    readonly Performance: "performance";
    readonly Network: "network";
    readonly Cpu: "cpu";
    readonly Ram: "ram";
    readonly DeliveredPackages: "deliveredPackages";
};
export type RtmpServerGraphV1TypeEnum = typeof RtmpServerGraphV1TypeEnum[keyof typeof RtmpServerGraphV1TypeEnum];
/**
 * @export
 */
export declare const RtmpServerGraphV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type RtmpServerGraphV1VEnum = typeof RtmpServerGraphV1VEnum[keyof typeof RtmpServerGraphV1VEnum];
/**
 * @export
 */
export declare const RtmpServerListV1LanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type RtmpServerListV1LanguageEnum = typeof RtmpServerListV1LanguageEnum[keyof typeof RtmpServerListV1LanguageEnum];
/**
 * @export
 */
export declare const RtmpServerListV1IntervalEnum: {
    readonly NUMBER_1: 1;
    readonly NUMBER_3: 3;
    readonly NUMBER_6: 6;
    readonly NUMBER_12: 12;
    readonly NUMBER_24: 24;
};
export type RtmpServerListV1IntervalEnum = typeof RtmpServerListV1IntervalEnum[keyof typeof RtmpServerListV1IntervalEnum];
/**
 * @export
 */
export declare const RtmpServerListV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type RtmpServerListV1VEnum = typeof RtmpServerListV1VEnum[keyof typeof RtmpServerListV1VEnum];
/**
 * @export
 */
export declare const RtmpServerStateV1LanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type RtmpServerStateV1LanguageEnum = typeof RtmpServerStateV1LanguageEnum[keyof typeof RtmpServerStateV1LanguageEnum];
/**
 * @export
 */
export declare const RtmpServerStateV1IntervalEnum: {
    readonly NUMBER_1: 1;
    readonly NUMBER_3: 3;
    readonly NUMBER_6: 6;
    readonly NUMBER_12: 12;
    readonly NUMBER_24: 24;
};
export type RtmpServerStateV1IntervalEnum = typeof RtmpServerStateV1IntervalEnum[keyof typeof RtmpServerStateV1IntervalEnum];
/**
 * @export
 */
export declare const RtmpServerStateV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type RtmpServerStateV1VEnum = typeof RtmpServerStateV1VEnum[keyof typeof RtmpServerStateV1VEnum];
//# sourceMappingURL=rtmp-server-api.d.ts.map