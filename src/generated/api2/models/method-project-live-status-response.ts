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
import type { MethodProjectLiveStatusInfo } from './method-project-live-status-info';
// May contain unused imports in some cases
// @ts-ignore
import type { MethodProjectLiveStatusVideo } from './method-project-live-status-video';

/**
 * 
 * @export
 * @interface MethodProjectLiveStatusResponse
 */
export interface MethodProjectLiveStatusResponse {
    /**
     * Live group count
     * @type {number}
     * @memberof MethodProjectLiveStatusResponse
     */
    'live_groups_count': number;
    /**
     * Stream id
     * @type {number}
     * @memberof MethodProjectLiveStatusResponse
     */
    'stream_id'?: number;
    /**
     * Url live stream
     * @type {string}
     * @memberof MethodProjectLiveStatusResponse
     */
    'url'?: string;
    /**
     * App name
     * @type {string}
     * @memberof MethodProjectLiveStatusResponse
     */
    'app'?: string;
    /**
     * Date
     * @type {string}
     * @memberof MethodProjectLiveStatusResponse
     */
    'date'?: string;
    /**
     * Stream status
     * @type {string}
     * @memberof MethodProjectLiveStatusResponse
     */
    'status'?: string;
    /**
     * Stream resolution
     * @type {string}
     * @memberof MethodProjectLiveStatusResponse
     */
    'resolution'?: string;
    /**
     * Broadcast id
     * @type {number}
     * @memberof MethodProjectLiveStatusResponse
     */
    'broadcast_id'?: number;
    /**
     * Action
     * @type {string}
     * @memberof MethodProjectLiveStatusResponse
     */
    'action'?: string;
    /**
     * Stream info
     * @type {MethodProjectLiveStatusInfo}
     * @memberof MethodProjectLiveStatusResponse
     */
    'info'?: MethodProjectLiveStatusInfo;
    /**
     * Video info
     * @type {MethodProjectLiveStatusVideo}
     * @memberof MethodProjectLiveStatusResponse
     */
    'video'?: MethodProjectLiveStatusVideo;
}

