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
 * @interface UpdateOptionsYoutubeRequest
 */
export interface UpdateOptionsYoutubeRequest {
    /**
     * Version
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'v': UpdateOptionsYoutubeRequestVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'language': UpdateOptionsYoutubeRequestLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'project_id': number;
    /**
     * Channel id
     * @type {number}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'channel_id': number;
    /**
     *
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'title': string;
    /**
     *
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'description': string;
    /**
     * category id
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'category_id': string;
    /**
     * category name
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'category_name': string;
    /**
     * playlist id
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'playlist_id': string;
    /**
     *
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'audience': UpdateOptionsYoutubeRequestAudienceEnum;
    /**
     *
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'latency': UpdateOptionsYoutubeRequestLatencyEnum;
    /**
     *
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'privacy_video': UpdateOptionsYoutubeRequestPrivacyVideoEnum;
    /**
     *
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'image': string;
    /**
     *
     * @type {string}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'lang': UpdateOptionsYoutubeRequestLangEnum;
    /**
     *
     * @type {Set<string>}
     * @memberof UpdateOptionsYoutubeRequest
     */
    'tags': Set<string>;
}
export declare const UpdateOptionsYoutubeRequestVEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type UpdateOptionsYoutubeRequestVEnum = typeof UpdateOptionsYoutubeRequestVEnum[keyof typeof UpdateOptionsYoutubeRequestVEnum];
export declare const UpdateOptionsYoutubeRequestLanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type UpdateOptionsYoutubeRequestLanguageEnum = typeof UpdateOptionsYoutubeRequestLanguageEnum[keyof typeof UpdateOptionsYoutubeRequestLanguageEnum];
export declare const UpdateOptionsYoutubeRequestAudienceEnum: {
    readonly MarkForKids: "mark_for_kids";
    readonly MarkForNokids: "mark_for_nokids";
};
export type UpdateOptionsYoutubeRequestAudienceEnum = typeof UpdateOptionsYoutubeRequestAudienceEnum[keyof typeof UpdateOptionsYoutubeRequestAudienceEnum];
export declare const UpdateOptionsYoutubeRequestLatencyEnum: {
    readonly Normal: "normal";
    readonly Low: "low";
    readonly UltraLow: "ultraLow";
};
export type UpdateOptionsYoutubeRequestLatencyEnum = typeof UpdateOptionsYoutubeRequestLatencyEnum[keyof typeof UpdateOptionsYoutubeRequestLatencyEnum];
export declare const UpdateOptionsYoutubeRequestPrivacyVideoEnum: {
    readonly Private: "private";
    readonly Public: "public";
    readonly Unlisted: "unlisted";
};
export type UpdateOptionsYoutubeRequestPrivacyVideoEnum = typeof UpdateOptionsYoutubeRequestPrivacyVideoEnum[keyof typeof UpdateOptionsYoutubeRequestPrivacyVideoEnum];
export declare const UpdateOptionsYoutubeRequestLangEnum: {
    readonly Ru: "ru";
    readonly En: "en";
};
export type UpdateOptionsYoutubeRequestLangEnum = typeof UpdateOptionsYoutubeRequestLangEnum[keyof typeof UpdateOptionsYoutubeRequestLangEnum];
//# sourceMappingURL=update-options-youtube-request.d.ts.map