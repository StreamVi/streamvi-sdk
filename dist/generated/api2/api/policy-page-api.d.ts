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
import type { GetPolicyStructureDto } from '../models';
/**
 * PolicyPageApi - axios parameter creator
 * @export
 */
export declare const PolicyPageApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get policy page
     * @param {PolicyPageGetItemV1LanguageEnum} language Current language
     * @param {PolicyPageGetItemV1FileNameEnum} fileName Policy file name
     * @param {PolicyPageGetItemV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    policyPageGetItemV1: (language: PolicyPageGetItemV1LanguageEnum, fileName: PolicyPageGetItemV1FileNameEnum, v?: PolicyPageGetItemV1VEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get policy structure
     * @param {PolicyPageGetStructureV1LanguageEnum} language Current language
     * @param {PolicyPageGetStructureV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    policyPageGetStructureV1: (language: PolicyPageGetStructureV1LanguageEnum, v?: PolicyPageGetStructureV1VEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * PolicyPageApi - functional programming interface
 * @export
 */
export declare const PolicyPageApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get policy page
     * @param {PolicyPageGetItemV1LanguageEnum} language Current language
     * @param {PolicyPageGetItemV1FileNameEnum} fileName Policy file name
     * @param {PolicyPageGetItemV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    policyPageGetItemV1(language: PolicyPageGetItemV1LanguageEnum, fileName: PolicyPageGetItemV1FileNameEnum, v?: PolicyPageGetItemV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @summary Get policy structure
     * @param {PolicyPageGetStructureV1LanguageEnum} language Current language
     * @param {PolicyPageGetStructureV1VEnum} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    policyPageGetStructureV1(language: PolicyPageGetStructureV1LanguageEnum, v?: PolicyPageGetStructureV1VEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPolicyStructureDto>>;
};
/**
 * PolicyPageApi - factory interface
 * @export
 */
export declare const PolicyPageApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Get policy page
     * @param {PolicyPageApiPolicyPageGetItemV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    policyPageGetItemV1(requestParameters: PolicyPageApiPolicyPageGetItemV1Request, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @summary Get policy structure
     * @param {PolicyPageApiPolicyPageGetStructureV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    policyPageGetStructureV1(requestParameters: PolicyPageApiPolicyPageGetStructureV1Request, options?: RawAxiosRequestConfig): AxiosPromise<GetPolicyStructureDto>;
};
/**
 * PolicyPageApi - interface
 * @export
 * @interface PolicyPageApi
 */
export interface PolicyPageApiInterface {
    /**
     *
     * @summary Get policy page
     * @param {PolicyPageApiPolicyPageGetItemV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyPageApiInterface
     */
    policyPageGetItemV1(requestParameters: PolicyPageApiPolicyPageGetItemV1Request, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @summary Get policy structure
     * @param {PolicyPageApiPolicyPageGetStructureV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyPageApiInterface
     */
    policyPageGetStructureV1(requestParameters: PolicyPageApiPolicyPageGetStructureV1Request, options?: RawAxiosRequestConfig): AxiosPromise<GetPolicyStructureDto>;
}
/**
 * Request parameters for policyPageGetItemV1 operation in PolicyPageApi.
 * @export
 * @interface PolicyPageApiPolicyPageGetItemV1Request
 */
export interface PolicyPageApiPolicyPageGetItemV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof PolicyPageApiPolicyPageGetItemV1
     */
    readonly language: PolicyPageGetItemV1LanguageEnum;
    /**
     * Policy file name
     * @type {'refund' | 'terms-of-use' | 'using-cookie' | 'acceptable-use' | 'privacy-notice'}
     * @memberof PolicyPageApiPolicyPageGetItemV1
     */
    readonly fileName: PolicyPageGetItemV1FileNameEnum;
    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof PolicyPageApiPolicyPageGetItemV1
     */
    readonly v?: PolicyPageGetItemV1VEnum;
}
/**
 * Request parameters for policyPageGetStructureV1 operation in PolicyPageApi.
 * @export
 * @interface PolicyPageApiPolicyPageGetStructureV1Request
 */
export interface PolicyPageApiPolicyPageGetStructureV1Request {
    /**
     * Current language
     * @type {'ru' | 'en' | 'cn'}
     * @memberof PolicyPageApiPolicyPageGetStructureV1
     */
    readonly language: PolicyPageGetStructureV1LanguageEnum;
    /**
     * Version (automatically defaults to 1 based on method version, can be overridden)
     * @type {'1' | '2' | '3'}
     * @memberof PolicyPageApiPolicyPageGetStructureV1
     */
    readonly v?: PolicyPageGetStructureV1VEnum;
}
/**
 * PolicyPageApi - object-oriented interface
 * @export
 * @class PolicyPageApi
 * @extends {BaseAPI}
 */
export declare class PolicyPageApi extends BaseAPI implements PolicyPageApiInterface {
    /**
     *
     * @summary Get policy page
     * @param {PolicyPageApiPolicyPageGetItemV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyPageApi
     */
    policyPageGetItemV1(requestParameters: PolicyPageApiPolicyPageGetItemV1Request, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Get policy structure
     * @param {PolicyPageApiPolicyPageGetStructureV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyPageApi
     */
    policyPageGetStructureV1(requestParameters: PolicyPageApiPolicyPageGetStructureV1Request, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<GetPolicyStructureDto, any>>;
}
/**
 * @export
 */
export declare const PolicyPageGetItemV1LanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type PolicyPageGetItemV1LanguageEnum = typeof PolicyPageGetItemV1LanguageEnum[keyof typeof PolicyPageGetItemV1LanguageEnum];
/**
 * @export
 */
export declare const PolicyPageGetItemV1FileNameEnum: {
    readonly Refund: "refund";
    readonly TermsOfUse: "terms-of-use";
    readonly UsingCookie: "using-cookie";
    readonly AcceptableUse: "acceptable-use";
    readonly PrivacyNotice: "privacy-notice";
};
export type PolicyPageGetItemV1FileNameEnum = typeof PolicyPageGetItemV1FileNameEnum[keyof typeof PolicyPageGetItemV1FileNameEnum];
/**
 * @export
 */
export declare const PolicyPageGetItemV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type PolicyPageGetItemV1VEnum = typeof PolicyPageGetItemV1VEnum[keyof typeof PolicyPageGetItemV1VEnum];
/**
 * @export
 */
export declare const PolicyPageGetStructureV1LanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type PolicyPageGetStructureV1LanguageEnum = typeof PolicyPageGetStructureV1LanguageEnum[keyof typeof PolicyPageGetStructureV1LanguageEnum];
/**
 * @export
 */
export declare const PolicyPageGetStructureV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type PolicyPageGetStructureV1VEnum = typeof PolicyPageGetStructureV1VEnum[keyof typeof PolicyPageGetStructureV1VEnum];
//# sourceMappingURL=policy-page-api.d.ts.map