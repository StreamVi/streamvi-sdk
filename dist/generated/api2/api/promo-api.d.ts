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
import type { SitePromoApplyResponse } from '../models';
import type { SitePromoCheckResponse } from '../models';
/**
 * PromoApi - axios parameter creator
 * @export
 */
export declare const PromoApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Apply code
     * @param {PromoApplyV1LanguageEnum} language Current language
     * @param {number} projectId Project id
     * @param {number} code Code
     * @param {PromoApplyV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    promoApplyV1: (language: PromoApplyV1LanguageEnum, projectId: number, code: number, v?: PromoApplyV1VEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Check code
     * @param {PromoCheckV1LanguageEnum} language Current language
     * @param {number} projectId Project id
     * @param {number} code Code
     * @param {PromoCheckV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    promoCheckV1: (language: PromoCheckV1LanguageEnum, projectId: number, code: number, v?: PromoCheckV1VEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * PromoApi - functional programming interface
 * @export
 */
export declare const PromoApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Apply code
     * @param {PromoApplyV1LanguageEnum} language Current language
     * @param {number} projectId Project id
     * @param {number} code Code
     * @param {PromoApplyV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    promoApplyV1(language: PromoApplyV1LanguageEnum, projectId: number, code: number, v?: PromoApplyV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SitePromoApplyResponse>>;
    /**
     *
     * @summary Check code
     * @param {PromoCheckV1LanguageEnum} language Current language
     * @param {number} projectId Project id
     * @param {number} code Code
     * @param {PromoCheckV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    promoCheckV1(language: PromoCheckV1LanguageEnum, projectId: number, code: number, v?: PromoCheckV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SitePromoCheckResponse>>;
};
/**
 * PromoApi - factory interface
 * @export
 */
export declare const PromoApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Apply code
     * @param {PromoApiPromoApplyV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    promoApplyV1(requestParameters: PromoApiPromoApplyV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SitePromoApplyResponse>;
    /**
     *
     * @summary Check code
     * @param {PromoApiPromoCheckV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    promoCheckV1(requestParameters: PromoApiPromoCheckV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SitePromoCheckResponse>;
};
/**
 * PromoApi - interface
 * @export
 * @interface PromoApi
 */
export interface PromoApiInterface {
    /**
     *
     * @summary Apply code
     * @param {PromoApiPromoApplyV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromoApiInterface
     */
    promoApplyV1(requestParameters: PromoApiPromoApplyV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SitePromoApplyResponse>;
    /**
     *
     * @summary Check code
     * @param {PromoApiPromoCheckV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromoApiInterface
     */
    promoCheckV1(requestParameters: PromoApiPromoCheckV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SitePromoCheckResponse>;
}
/**
 * Request parameters for promoApplyV1 operation in PromoApi.
 * @export
 * @interface PromoApiPromoApplyV1Request
 */
export interface PromoApiPromoApplyV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof PromoApiPromoApplyV1
     */
    readonly language: PromoApplyV1LanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof PromoApiPromoApplyV1
     */
    readonly projectId: number;
    /**
     * Code
     * @type {number}
     * @memberof PromoApiPromoApplyV1
     */
    readonly code: number;
    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof PromoApiPromoApplyV1
     */
    readonly v?: PromoApplyV1VEnum;
}
/**
 * Request parameters for promoCheckV1 operation in PromoApi.
 * @export
 * @interface PromoApiPromoCheckV1Request
 */
export interface PromoApiPromoCheckV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof PromoApiPromoCheckV1
     */
    readonly language: PromoCheckV1LanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof PromoApiPromoCheckV1
     */
    readonly projectId: number;
    /**
     * Code
     * @type {number}
     * @memberof PromoApiPromoCheckV1
     */
    readonly code: number;
    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof PromoApiPromoCheckV1
     */
    readonly v?: PromoCheckV1VEnum;
}
/**
 * PromoApi - object-oriented interface
 * @export
 * @class PromoApi
 * @extends {BaseAPI}
 */
export declare class PromoApi extends BaseAPI implements PromoApiInterface {
    /**
     *
     * @summary Apply code
     * @param {PromoApiPromoApplyV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromoApi
     */
    promoApplyV1(requestParameters: PromoApiPromoApplyV1Request, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<SitePromoApplyResponse, any>>;
    /**
     *
     * @summary Check code
     * @param {PromoApiPromoCheckV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromoApi
     */
    promoCheckV1(requestParameters: PromoApiPromoCheckV1Request, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<SitePromoCheckResponse, any>>;
}
/**
 * @export
 */
export declare const PromoApplyV1LanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type PromoApplyV1LanguageEnum = typeof PromoApplyV1LanguageEnum[keyof typeof PromoApplyV1LanguageEnum];
/**
 * @export
 */
export declare const PromoApplyV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type PromoApplyV1VEnum = typeof PromoApplyV1VEnum[keyof typeof PromoApplyV1VEnum];
/**
 * @export
 */
export declare const PromoCheckV1LanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type PromoCheckV1LanguageEnum = typeof PromoCheckV1LanguageEnum[keyof typeof PromoCheckV1LanguageEnum];
/**
 * @export
 */
export declare const PromoCheckV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type PromoCheckV1VEnum = typeof PromoCheckV1VEnum[keyof typeof PromoCheckV1VEnum];
//# sourceMappingURL=promo-api.d.ts.map