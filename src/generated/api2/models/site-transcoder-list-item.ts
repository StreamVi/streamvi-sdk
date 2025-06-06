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
import type { SiteTranscoderChannelItem } from './site-transcoder-channel-item';

/**
 * 
 * @export
 * @interface SiteTranscoderListItem
 */
export interface SiteTranscoderListItem {
    /**
     * Id
     * @type {number}
     * @memberof SiteTranscoderListItem
     */
    'id': number;
    /**
     * Name
     * @type {string}
     * @memberof SiteTranscoderListItem
     */
    'name': string;
    /**
     * createdAt
     * @type {string}
     * @memberof SiteTranscoderListItem
     */
    'createdAt': string;
    /**
     * fps
     * @type {number}
     * @memberof SiteTranscoderListItem
     */
    'fps'?: number;
    /**
     * video bitrate
     * @type {number}
     * @memberof SiteTranscoderListItem
     */
    'vBitrate'?: number;
    /**
     * audio bitrate
     * @type {number}
     * @memberof SiteTranscoderListItem
     */
    'aBitrate'?: number;
    /**
     * width
     * @type {number}
     * @memberof SiteTranscoderListItem
     */
    'width'?: number;
    /**
     * height
     * @type {number}
     * @memberof SiteTranscoderListItem
     */
    'height'?: number;
    /**
     * rotation
     * @type {number}
     * @memberof SiteTranscoderListItem
     */
    'rotation'?: number;
    /**
     * B-Frames
     * @type {number}
     * @memberof SiteTranscoderListItem
     */
    'bFrames'?: number;
    /**
     * Status
     * @type {string}
     * @memberof SiteTranscoderListItem
     */
    'status': SiteTranscoderListItemStatusEnum;
    /**
     * Video codec
     * @type {string}
     * @memberof SiteTranscoderListItem
     */
    'videoCodec': SiteTranscoderListItemVideoCodecEnum;
    /**
     * B-Frames
     * @type {Array<SiteTranscoderChannelItem>}
     * @memberof SiteTranscoderListItem
     */
    'channels': Array<SiteTranscoderChannelItem>;
}

export const SiteTranscoderListItemStatusEnum = {
    Active: 'active',
    Inactive: 'inactive'
} as const;

export type SiteTranscoderListItemStatusEnum = typeof SiteTranscoderListItemStatusEnum[keyof typeof SiteTranscoderListItemStatusEnum];
export const SiteTranscoderListItemVideoCodecEnum = {
    H264: 'h264',
    Hevc: 'hevc'
} as const;

export type SiteTranscoderListItemVideoCodecEnum = typeof SiteTranscoderListItemVideoCodecEnum[keyof typeof SiteTranscoderListItemVideoCodecEnum];


