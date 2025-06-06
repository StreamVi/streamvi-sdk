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



/**
 * 
 * @export
 * @interface SitePromoApplyResponse
 */
export interface SitePromoApplyResponse {
    /**
     * Result apply code
     * @type {string}
     * @memberof SitePromoApplyResponse
     */
    'result': SitePromoApplyResponseResultEnum;
}

export const SitePromoApplyResponseResultEnum = {
    TopUp: 'top_up',
    Tariff: 'tariff'
} as const;

export type SitePromoApplyResponseResultEnum = typeof SitePromoApplyResponseResultEnum[keyof typeof SitePromoApplyResponseResultEnum];


