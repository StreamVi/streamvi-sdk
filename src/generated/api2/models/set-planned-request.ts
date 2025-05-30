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
 * @interface SetPlannedRequest
 */
export interface SetPlannedRequest {
    /**
     * Version
     * @type {string}
     * @memberof SetPlannedRequest
     */
    'v': SetPlannedRequestVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof SetPlannedRequest
     */
    'language': SetPlannedRequestLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof SetPlannedRequest
     */
    'project_id': number;
    /**
     * Channel id
     * @type {number}
     * @memberof SetPlannedRequest
     */
    'channel_id': number;
    /**
     * 
     * @type {string}
     * @memberof SetPlannedRequest
     */
    'id'?: string;
}

export const SetPlannedRequestVEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;

export type SetPlannedRequestVEnum = typeof SetPlannedRequestVEnum[keyof typeof SetPlannedRequestVEnum];
export const SetPlannedRequestLanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;

export type SetPlannedRequestLanguageEnum = typeof SetPlannedRequestLanguageEnum[keyof typeof SetPlannedRequestLanguageEnum];


