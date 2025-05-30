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
/**
 *
 * @export
 * @interface PaySettingBodyDto
 */
export interface PaySettingBodyDto {
    /**
     * Version
     * @type {string}
     * @memberof PaySettingBodyDto
     */
    'v': PaySettingBodyDtoVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof PaySettingBodyDto
     */
    'language': PaySettingBodyDtoLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof PaySettingBodyDto
     */
    'project_id': number;
    /**
     * Countrie id
     * @type {number}
     * @memberof PaySettingBodyDto
     */
    'countrie_id': number;
    /**
     * Organization
     * @type {number}
     * @memberof PaySettingBodyDto
     */
    'organization_id'?: number | null;
    /**
     * Pay system id
     * @type {number}
     * @memberof PaySettingBodyDto
     */
    'pay_system_id': number;
    /**
     * E-mail
     * @type {string}
     * @memberof PaySettingBodyDto
     */
    'email': string;
    /**
     * Additional information about the payment
     * @type {string}
     * @memberof PaySettingBodyDto
     */
    'description'?: string | null;
}
export declare const PaySettingBodyDtoVEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type PaySettingBodyDtoVEnum = typeof PaySettingBodyDtoVEnum[keyof typeof PaySettingBodyDtoVEnum];
export declare const PaySettingBodyDtoLanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type PaySettingBodyDtoLanguageEnum = typeof PaySettingBodyDtoLanguageEnum[keyof typeof PaySettingBodyDtoLanguageEnum];
//# sourceMappingURL=pay-setting-body-dto.d.ts.map