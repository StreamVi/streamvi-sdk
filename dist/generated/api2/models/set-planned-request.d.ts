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
export declare const SetPlannedRequestVEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type SetPlannedRequestVEnum = typeof SetPlannedRequestVEnum[keyof typeof SetPlannedRequestVEnum];
export declare const SetPlannedRequestLanguageEnum: {
    readonly Ru: "ru";
    readonly En: "en";
    readonly Cn: "cn";
};
export type SetPlannedRequestLanguageEnum = typeof SetPlannedRequestLanguageEnum[keyof typeof SetPlannedRequestLanguageEnum];
//# sourceMappingURL=set-planned-request.d.ts.map