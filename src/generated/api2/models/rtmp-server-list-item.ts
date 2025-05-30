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
import type { CountryItem } from './country-item';
// May contain unused imports in some cases
// @ts-ignore
import type { RtmpServerLoading } from './rtmp-server-loading';
// May contain unused imports in some cases
// @ts-ignore
import type { RtmpServerPlatformQuality } from './rtmp-server-platform-quality';

/**
 * 
 * @export
 * @interface RtmpServerListItem
 */
export interface RtmpServerListItem {
    /**
     * City
     * @type {string}
     * @memberof RtmpServerListItem
     */
    'city': string;
    /**
     * Rtmp url
     * @type {string}
     * @memberof RtmpServerListItem
     */
    'url': string;
    /**
     * Country
     * @type {CountryItem}
     * @memberof RtmpServerListItem
     */
    'country': CountryItem;
    /**
     * Network load of the selected time
     * @type {RtmpServerLoading}
     * @memberof RtmpServerListItem
     */
    'network': RtmpServerLoading;
    /**
     * CPU load of the selected time
     * @type {RtmpServerLoading}
     * @memberof RtmpServerListItem
     */
    'cpu': RtmpServerLoading;
    /**
     * RAM load of the selected time
     * @type {RtmpServerLoading}
     * @memberof RtmpServerListItem
     */
    'ram': RtmpServerLoading;
    /**
     * Quality connection of pool
     * @type {number}
     * @memberof RtmpServerListItem
     */
    'quality': number;
    /**
     * Sort index
     * @type {number}
     * @memberof RtmpServerListItem
     */
    'index': number;
    /**
     * Quality in string format
     * @type {string}
     * @memberof RtmpServerListItem
     */
    'serverStatus': RtmpServerListItemServerStatusEnum;
    /**
     * Quality array
     * @type {Array<RtmpServerPlatformQuality>}
     * @memberof RtmpServerListItem
     */
    'platforms': Array<RtmpServerPlatformQuality>;
}

export const RtmpServerListItemServerStatusEnum = {
    Good: 'good',
    Problem: 'problem',
    Bad: 'bad'
} as const;

export type RtmpServerListItemServerStatusEnum = typeof RtmpServerListItemServerStatusEnum[keyof typeof RtmpServerListItemServerStatusEnum];


