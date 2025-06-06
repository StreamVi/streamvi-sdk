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
 * @interface SiteLiveRestreamInfoItem
 */
export interface SiteLiveRestreamInfoItem {
    /**
     * Restream id
     * @type {number}
     * @memberof SiteLiveRestreamInfoItem
     */
    'id': number;
    /**
     * Channel id
     * @type {number}
     * @memberof SiteLiveRestreamInfoItem
     */
    'channel_id': number;
    /**
     * Channel name
     * @type {string}
     * @memberof SiteLiveRestreamInfoItem
     */
    'channel_name': string;
    /**
     * Channel type
     * @type {string}
     * @memberof SiteLiveRestreamInfoItem
     */
    'channel_type': string;
    /**
     * Stream url
     * @type {string}
     * @memberof SiteLiveRestreamInfoItem
     */
    'url'?: string;
    /**
     * Count of viewers
     * @type {number}
     * @memberof SiteLiveRestreamInfoItem
     */
    'viewer'?: number;
    /**
     * Count of message
     * @type {number}
     * @memberof SiteLiveRestreamInfoItem
     */
    'message'?: number;
    /**
     * Count of like
     * @type {number}
     * @memberof SiteLiveRestreamInfoItem
     */
    'like'?: number;
}

