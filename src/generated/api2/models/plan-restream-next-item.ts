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
 * @interface PlanRestreamNextItem
 */
export interface PlanRestreamNextItem {
    /**
     * Plan restream id
     * @type {number}
     * @memberof PlanRestreamNextItem
     */
    'id': number;
    /**
     * Max channels
     * @type {number}
     * @memberof PlanRestreamNextItem
     */
    'channel_max'?: number;
    /**
     * Max bitrate
     * @type {number}
     * @memberof PlanRestreamNextItem
     */
    'bitrate_max'?: number;
    /**
     * Date start tariff
     * @type {string}
     * @memberof PlanRestreamNextItem
     */
    'date_start': string;
}

