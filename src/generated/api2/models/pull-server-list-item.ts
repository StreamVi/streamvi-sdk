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
import type { PullServerTransports } from './pull-server-transports';

/**
 * 
 * @export
 * @interface PullServerListItem
 */
export interface PullServerListItem {
    /**
     * City
     * @type {string}
     * @memberof PullServerListItem
     */
    'city': string;
    /**
     * Ping host
     * @type {string}
     * @memberof PullServerListItem
     */
    'pingHost': string;
    /**
     * Transports
     * @type {PullServerTransports}
     * @memberof PullServerListItem
     */
    'url': PullServerTransports;
    /**
     * Country
     * @type {CountryItem}
     * @memberof PullServerListItem
     */
    'country': CountryItem;
}

