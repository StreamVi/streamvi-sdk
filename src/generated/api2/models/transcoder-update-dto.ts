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
 * @interface TranscoderUpdateDto
 */
export interface TranscoderUpdateDto {
    /**
     * Version
     * @type {string}
     * @memberof TranscoderUpdateDto
     */
    'v': TranscoderUpdateDtoVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof TranscoderUpdateDto
     */
    'language': TranscoderUpdateDtoLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'project_id': number;
    /**
     * Transcoder id
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'transcoder_id': number;
    /**
     * Width
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'width'?: number;
    /**
     * Height
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'height'?: number;
    /**
     * Fps
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'fps'?: number;
    /**
     * Video bitrate, kbps
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'vBitrate'?: number;
    /**
     * Audio bitrate, kbps
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'aBitrate'?: number;
    /**
     * Name
     * @type {string}
     * @memberof TranscoderUpdateDto
     */
    'name'?: string;
    /**
     * Rotation
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'rotation'?: number;
    /**
     * Rotation
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'bFrames'?: number;
    /**
     * ChannelIds
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'channelIds'?: number;
    /**
     * Video codec id
     * @type {number}
     * @memberof TranscoderUpdateDto
     */
    'videoCodecId': number;
}

export const TranscoderUpdateDtoVEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;

export type TranscoderUpdateDtoVEnum = typeof TranscoderUpdateDtoVEnum[keyof typeof TranscoderUpdateDtoVEnum];
export const TranscoderUpdateDtoLanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;

export type TranscoderUpdateDtoLanguageEnum = typeof TranscoderUpdateDtoLanguageEnum[keyof typeof TranscoderUpdateDtoLanguageEnum];


