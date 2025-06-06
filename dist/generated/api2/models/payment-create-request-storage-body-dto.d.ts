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
 * @interface PaymentCreateRequestStorageBodyDto
 */
export interface PaymentCreateRequestStorageBodyDto {
    /**
     * Version
     * @type {string}
     * @memberof PaymentCreateRequestStorageBodyDto
     */
    'v': PaymentCreateRequestStorageBodyDtoVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof PaymentCreateRequestStorageBodyDto
     */
    'language': PaymentCreateRequestStorageBodyDtoLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof PaymentCreateRequestStorageBodyDto
     */
    'project_id': number;
    /**
     * Code
     * @type {string}
     * @memberof PaymentCreateRequestStorageBodyDto
     */
    'type': PaymentCreateRequestStorageBodyDtoTypeEnum;
    /**
     * Amount
     * @type {number}
     * @memberof PaymentCreateRequestStorageBodyDto
     */
    'amount': number;
    /**
     * Period
     * @type {string}
     * @memberof PaymentCreateRequestStorageBodyDto
     */
    'plan_period': PaymentCreateRequestStorageBodyDtoPlanPeriodEnum;
    /**
     * Storage plan id
     * @type {number}
     * @memberof PaymentCreateRequestStorageBodyDto
     */
    'plan_storage_id': number;
    /**
     * Space GB
     * @type {number}
     * @memberof PaymentCreateRequestStorageBodyDto
     */
    'plan_storage_value': number;
}
export declare const PaymentCreateRequestStorageBodyDtoVEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type PaymentCreateRequestStorageBodyDtoVEnum = typeof PaymentCreateRequestStorageBodyDtoVEnum[keyof typeof PaymentCreateRequestStorageBodyDtoVEnum];
export declare const PaymentCreateRequestStorageBodyDtoLanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type PaymentCreateRequestStorageBodyDtoLanguageEnum = typeof PaymentCreateRequestStorageBodyDtoLanguageEnum[keyof typeof PaymentCreateRequestStorageBodyDtoLanguageEnum];
export declare const PaymentCreateRequestStorageBodyDtoTypeEnum: {
    readonly Restream: "restream";
    readonly Transcoding: "transcoding";
    readonly Storage: "storage";
    readonly Topup: "topup";
};
export type PaymentCreateRequestStorageBodyDtoTypeEnum = typeof PaymentCreateRequestStorageBodyDtoTypeEnum[keyof typeof PaymentCreateRequestStorageBodyDtoTypeEnum];
export declare const PaymentCreateRequestStorageBodyDtoPlanPeriodEnum: {
    readonly Month: "month";
    readonly Year: "year";
};
export type PaymentCreateRequestStorageBodyDtoPlanPeriodEnum = typeof PaymentCreateRequestStorageBodyDtoPlanPeriodEnum[keyof typeof PaymentCreateRequestStorageBodyDtoPlanPeriodEnum];
//# sourceMappingURL=payment-create-request-storage-body-dto.d.ts.map