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
 * @interface UpdateOptionsTrovoRequest
 */
export interface UpdateOptionsTrovoRequest {
    /**
     * Version
     * @type {string}
     * @memberof UpdateOptionsTrovoRequest
     */
    'v': UpdateOptionsTrovoRequestVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof UpdateOptionsTrovoRequest
     */
    'language': UpdateOptionsTrovoRequestLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof UpdateOptionsTrovoRequest
     */
    'project_id': number;
    /**
     * Channel id
     * @type {number}
     * @memberof UpdateOptionsTrovoRequest
     */
    'channel_id': number;
    /**
     * 
     * @type {string}
     * @memberof UpdateOptionsTrovoRequest
     */
    'title': string;
    /**
     * category id
     * @type {string}
     * @memberof UpdateOptionsTrovoRequest
     */
    'category_id': string;
    /**
     * category name
     * @type {string}
     * @memberof UpdateOptionsTrovoRequest
     */
    'category_name': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOptionsTrovoRequest
     */
    'audience': UpdateOptionsTrovoRequestAudienceEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateOptionsTrovoRequest
     */
    'lang': UpdateOptionsTrovoRequestLangEnum;
}

export const UpdateOptionsTrovoRequestVEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;

export type UpdateOptionsTrovoRequestVEnum = typeof UpdateOptionsTrovoRequestVEnum[keyof typeof UpdateOptionsTrovoRequestVEnum];
export const UpdateOptionsTrovoRequestLanguageEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;

export type UpdateOptionsTrovoRequestLanguageEnum = typeof UpdateOptionsTrovoRequestLanguageEnum[keyof typeof UpdateOptionsTrovoRequestLanguageEnum];
export const UpdateOptionsTrovoRequestAudienceEnum = {
    ChannelAudienceTypeFamilyfriendly: 'CHANNEL_AUDIENCE_TYPE_FAMILYFRIENDLY',
    ChannelAudienceTypeTeen: 'CHANNEL_AUDIENCE_TYPE_TEEN',
    ChannelAudienceTypeEighteenplus: 'CHANNEL_AUDIENCE_TYPE_EIGHTEENPLUS'
} as const;

export type UpdateOptionsTrovoRequestAudienceEnum = typeof UpdateOptionsTrovoRequestAudienceEnum[keyof typeof UpdateOptionsTrovoRequestAudienceEnum];
export const UpdateOptionsTrovoRequestLangEnum = {
    Ru: 'ru',
    En: 'en',
    Cn: 'cn'
} as const;

export type UpdateOptionsTrovoRequestLangEnum = typeof UpdateOptionsTrovoRequestLangEnum[keyof typeof UpdateOptionsTrovoRequestLangEnum];


