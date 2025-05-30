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
 * @interface SetNotifyUserRequest
 */
export interface SetNotifyUserRequest {
    /**
     * Project id
     * @type {number}
     * @memberof SetNotifyUserRequest
     */
    'project_id': number;
    /**
     * Notify channel
     * @type {string}
     * @memberof SetNotifyUserRequest
     */
    'notify_channel': SetNotifyUserRequestNotifyChannelEnum;
    /**
     * Notify category
     * @type {string}
     * @memberof SetNotifyUserRequest
     */
    'notify_category': SetNotifyUserRequestNotifyCategoryEnum;
    /**
     * Set status
     * @type {string}
     * @memberof SetNotifyUserRequest
     */
    'status': SetNotifyUserRequestStatusEnum;
}
export declare const SetNotifyUserRequestNotifyChannelEnum: {
    readonly Telegram: "telegram";
    readonly Cabinet: "cabinet";
    readonly Mobile: "mobile";
};
export type SetNotifyUserRequestNotifyChannelEnum = typeof SetNotifyUserRequestNotifyChannelEnum[keyof typeof SetNotifyUserRequestNotifyChannelEnum];
export declare const SetNotifyUserRequestNotifyCategoryEnum: {
    readonly Important: "important";
    readonly Stream: "stream";
};
export type SetNotifyUserRequestNotifyCategoryEnum = typeof SetNotifyUserRequestNotifyCategoryEnum[keyof typeof SetNotifyUserRequestNotifyCategoryEnum];
export declare const SetNotifyUserRequestStatusEnum: {
    readonly Enable: "enable";
    readonly Disable: "disable";
};
export type SetNotifyUserRequestStatusEnum = typeof SetNotifyUserRequestStatusEnum[keyof typeof SetNotifyUserRequestStatusEnum];
//# sourceMappingURL=set-notify-user-request.d.ts.map