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
 * @interface CreatePullKeyRequest
 */
export interface CreatePullKeyRequest {
    /**
     * Version
     * @type {string}
     * @memberof CreatePullKeyRequest
     */
    'v': CreatePullKeyRequestVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof CreatePullKeyRequest
     */
    'language': CreatePullKeyRequestLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof CreatePullKeyRequest
     */
    'project_id': number;
    /**
     * Provider oauth
     * @type {string}
     * @memberof CreatePullKeyRequest
     */
    'transport': CreatePullKeyRequestTransportEnum;
    /**
     * Name
     * @type {string}
     * @memberof CreatePullKeyRequest
     */
    'name'?: string;
}

export const CreatePullKeyRequestVEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;

export type CreatePullKeyRequestVEnum = typeof CreatePullKeyRequestVEnum[keyof typeof CreatePullKeyRequestVEnum];
export const CreatePullKeyRequestLanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;

export type CreatePullKeyRequestLanguageEnum = typeof CreatePullKeyRequestLanguageEnum[keyof typeof CreatePullKeyRequestLanguageEnum];
export const CreatePullKeyRequestTransportEnum = {
    Rtmp: 'rtmp',
    Srt: 'srt',
    Hls: 'hls'
} as const;

export type CreatePullKeyRequestTransportEnum = typeof CreatePullKeyRequestTransportEnum[keyof typeof CreatePullKeyRequestTransportEnum];


