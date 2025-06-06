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
 * @interface SiteTelegramSetSettingsRequestDto
 */
export interface SiteTelegramSetSettingsRequestDto {
    /**
     * Filter mode
     * @type {number}
     * @memberof SiteTelegramSetSettingsRequestDto
     */
    'filter_mode': SiteTelegramSetSettingsRequestDtoFilterModeEnum;
    /**
     * Message ID
     * @type {number}
     * @memberof SiteTelegramSetSettingsRequestDto
     */
    'message_id'?: number;
    /**
     * Message Link
     * @type {string}
     * @memberof SiteTelegramSetSettingsRequestDto
     */
    'link'?: string;
}

export const SiteTelegramSetSettingsRequestDtoFilterModeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;

export type SiteTelegramSetSettingsRequestDtoFilterModeEnum = typeof SiteTelegramSetSettingsRequestDtoFilterModeEnum[keyof typeof SiteTelegramSetSettingsRequestDtoFilterModeEnum];


