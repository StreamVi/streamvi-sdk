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
import type { InternalNotifyTypeActionText } from './internal-notify-type-action-text';

/**
 * 
 * @export
 * @interface InternalNotifyTypeAction
 */
export interface InternalNotifyTypeAction {
    /**
     * Action name
     * @type {string}
     * @memberof InternalNotifyTypeAction
     */
    'name': InternalNotifyTypeActionNameEnum;
    /**
     * Action value
     * @type {string}
     * @memberof InternalNotifyTypeAction
     */
    'value': string;
    /**
     * Type
     * @type {string}
     * @memberof InternalNotifyTypeAction
     */
    'type': InternalNotifyTypeActionTypeEnum;
    /**
     * text
     * @type {Array<InternalNotifyTypeActionText>}
     * @memberof InternalNotifyTypeAction
     */
    'text': Array<InternalNotifyTypeActionText>;
    /**
     * Icon (special symbol)
     * @type {string}
     * @memberof InternalNotifyTypeAction
     */
    'icon': string;
    /**
     * Action group id
     * @type {string}
     * @memberof InternalNotifyTypeAction
     */
    'group_id': string;
    /**
     * Group actions
     * @type {string}
     * @memberof InternalNotifyTypeAction
     */
    'group_type': InternalNotifyTypeActionGroupTypeEnum;
}

export const InternalNotifyTypeActionNameEnum = {
    ExternalLink: 'external_link',
    CabinetLink: 'cabinet_link',
    LandingLink: 'landing_link',
    Link: 'link',
    Accept: 'accept',
    Decline: 'decline',
    Accept1: 'accept_1',
    Accept2: 'accept_2',
    Accept3: 'accept_3'
} as const;

export type InternalNotifyTypeActionNameEnum = typeof InternalNotifyTypeActionNameEnum[keyof typeof InternalNotifyTypeActionNameEnum];
export const InternalNotifyTypeActionTypeEnum = {
    Primary: 'primary',
    Secondary: 'secondary',
    Link: 'link'
} as const;

export type InternalNotifyTypeActionTypeEnum = typeof InternalNotifyTypeActionTypeEnum[keyof typeof InternalNotifyTypeActionTypeEnum];
export const InternalNotifyTypeActionGroupTypeEnum = {
    Toggle: 'toggle',
    Select: 'select',
    Default: 'default'
} as const;

export type InternalNotifyTypeActionGroupTypeEnum = typeof InternalNotifyTypeActionGroupTypeEnum[keyof typeof InternalNotifyTypeActionGroupTypeEnum];


