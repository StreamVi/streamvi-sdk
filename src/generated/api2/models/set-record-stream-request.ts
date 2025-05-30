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
 * @interface SetRecordStreamRequest
 */
export interface SetRecordStreamRequest {
    /**
     * Version
     * @type {string}
     * @memberof SetRecordStreamRequest
     */
    'v': SetRecordStreamRequestVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof SetRecordStreamRequest
     */
    'language': SetRecordStreamRequestLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof SetRecordStreamRequest
     */
    'project_id': number;
    /**
     * Record status
     * @type {boolean}
     * @memberof SetRecordStreamRequest
     */
    'record': boolean;
}

export const SetRecordStreamRequestVEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;

export type SetRecordStreamRequestVEnum = typeof SetRecordStreamRequestVEnum[keyof typeof SetRecordStreamRequestVEnum];
export const SetRecordStreamRequestLanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;

export type SetRecordStreamRequestLanguageEnum = typeof SetRecordStreamRequestLanguageEnum[keyof typeof SetRecordStreamRequestLanguageEnum];


