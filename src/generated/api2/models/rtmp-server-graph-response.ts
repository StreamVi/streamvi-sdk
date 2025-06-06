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


// May contain unused imports in some cases
// @ts-ignore
import type { TCountryChartData } from './tcountry-chart-data';

/**
 * 
 * @export
 * @interface RtmpServerGraphResponse
 */
export interface RtmpServerGraphResponse {
    /**
     * Type of graph to display
     * @type {string}
     * @memberof RtmpServerGraphResponse
     */
    'type': RtmpServerGraphResponseTypeEnum;
    /**
     * Time line for graph [timestamp]
     * @type {Array<number>}
     * @memberof RtmpServerGraphResponse
     */
    'timeLine': Array<number>;
    /**
     * 
     * @type {Array<TCountryChartData>}
     * @memberof RtmpServerGraphResponse
     */
    'countries': Array<TCountryChartData>;
}

export const RtmpServerGraphResponseTypeEnum = {
    Performance: 'performance',
    Network: 'network',
    Cpu: 'cpu',
    Ram: 'ram',
    DeliveredPackages: 'deliveredPackages'
} as const;

export type RtmpServerGraphResponseTypeEnum = typeof RtmpServerGraphResponseTypeEnum[keyof typeof RtmpServerGraphResponseTypeEnum];


