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
 * @interface InternalNotifyTypeActionText
 */
export interface InternalNotifyTypeActionText {
    /**
     * Language for indexing
     * @type {string}
     * @memberof InternalNotifyTypeActionText
     */
    'language': InternalNotifyTypeActionTextLanguageEnum;
    /**
     * Language ISO
     * @type {string}
     * @memberof InternalNotifyTypeActionText
     */
    'language_iso': InternalNotifyTypeActionTextLanguageIsoEnum;
    /**
     * Title value
     * @type {string}
     * @memberof InternalNotifyTypeActionText
     */
    'title': string;
    /**
     * Title of complited value
     * @type {string}
     * @memberof InternalNotifyTypeActionText
     */
    'complited_title': string;
}

export const InternalNotifyTypeActionTextLanguageEnum = {
    Russian: 'russian',
    English: 'english',
    None: 'none'
} as const;

export type InternalNotifyTypeActionTextLanguageEnum = typeof InternalNotifyTypeActionTextLanguageEnum[keyof typeof InternalNotifyTypeActionTextLanguageEnum];
export const InternalNotifyTypeActionTextLanguageIsoEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;

export type InternalNotifyTypeActionTextLanguageIsoEnum = typeof InternalNotifyTypeActionTextLanguageIsoEnum[keyof typeof InternalNotifyTypeActionTextLanguageIsoEnum];


