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
 * @interface SiteUpdateChatTelegramRequest
 */
export interface SiteUpdateChatTelegramRequest {
    /**
     * Version
     * @type {string}
     * @memberof SiteUpdateChatTelegramRequest
     */
    'v': SiteUpdateChatTelegramRequestVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof SiteUpdateChatTelegramRequest
     */
    'language': SiteUpdateChatTelegramRequestLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof SiteUpdateChatTelegramRequest
     */
    'project_id': number;
    /**
     * Channel id
     * @type {number}
     * @memberof SiteUpdateChatTelegramRequest
     */
    'channel_id': number;
    /**
     * link
     * @type {string}
     * @memberof SiteUpdateChatTelegramRequest
     */
    'link'?: string;
    /**
     * select
     * @type {number}
     * @memberof SiteUpdateChatTelegramRequest
     */
    'select'?: number;
    /**
     * messageId
     * @type {number}
     * @memberof SiteUpdateChatTelegramRequest
     */
    'messageId'?: number;
}
export declare const SiteUpdateChatTelegramRequestVEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type SiteUpdateChatTelegramRequestVEnum = typeof SiteUpdateChatTelegramRequestVEnum[keyof typeof SiteUpdateChatTelegramRequestVEnum];
export declare const SiteUpdateChatTelegramRequestLanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type SiteUpdateChatTelegramRequestLanguageEnum = typeof SiteUpdateChatTelegramRequestLanguageEnum[keyof typeof SiteUpdateChatTelegramRequestLanguageEnum];
//# sourceMappingURL=site-update-chat-telegram-request.d.ts.map