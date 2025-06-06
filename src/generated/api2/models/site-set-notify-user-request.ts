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
 * @interface SiteSetNotifyUserRequest
 */
export interface SiteSetNotifyUserRequest {
    /**
     * Project id
     * @type {number}
     * @memberof SiteSetNotifyUserRequest
     */
    'project_id': number;
    /**
     * Notify channel
     * @type {string}
     * @memberof SiteSetNotifyUserRequest
     */
    'notify_channel': SiteSetNotifyUserRequestNotifyChannelEnum;
    /**
     * Notify category
     * @type {string}
     * @memberof SiteSetNotifyUserRequest
     */
    'notify_category': SiteSetNotifyUserRequestNotifyCategoryEnum;
    /**
     * Set status
     * @type {string}
     * @memberof SiteSetNotifyUserRequest
     */
    'status': SiteSetNotifyUserRequestStatusEnum;
}

export const SiteSetNotifyUserRequestNotifyChannelEnum = {
    Telegram: 'telegram',
    Cabinet: 'cabinet',
    Mobile: 'mobile'
} as const;

export type SiteSetNotifyUserRequestNotifyChannelEnum = typeof SiteSetNotifyUserRequestNotifyChannelEnum[keyof typeof SiteSetNotifyUserRequestNotifyChannelEnum];
export const SiteSetNotifyUserRequestNotifyCategoryEnum = {
    Important: 'important',
    Stream: 'stream'
} as const;

export type SiteSetNotifyUserRequestNotifyCategoryEnum = typeof SiteSetNotifyUserRequestNotifyCategoryEnum[keyof typeof SiteSetNotifyUserRequestNotifyCategoryEnum];
export const SiteSetNotifyUserRequestStatusEnum = {
    Enable: 'enable',
    Disable: 'disable'
} as const;

export type SiteSetNotifyUserRequestStatusEnum = typeof SiteSetNotifyUserRequestStatusEnum[keyof typeof SiteSetNotifyUserRequestStatusEnum];


