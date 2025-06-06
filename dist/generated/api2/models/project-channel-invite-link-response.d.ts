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
import type { ProjectChannelInviteChannelLinkResponse } from './project-channel-invite-channel-link-response';
/**
 *
 * @export
 * @interface ProjectChannelInviteLinkResponse
 */
export interface ProjectChannelInviteLinkResponse {
    /**
     * Unique id
     * @type {number}
     * @memberof ProjectChannelInviteLinkResponse
     */
    'project_channel_invite_id': number;
    /**
     * Channel id
     * @type {number}
     * @memberof ProjectChannelInviteLinkResponse
     */
    'channel_id': number;
    /**
     * Project id (in invite for project id)
     * @type {number}
     * @memberof ProjectChannelInviteLinkResponse
     */
    'to_project_id': number | null;
    /**
     * Access type
     * @type {number}
     * @memberof ProjectChannelInviteLinkResponse
     */
    'access_type': number;
    /**
     * Date create
     * @type {string}
     * @memberof ProjectChannelInviteLinkResponse
     */
    'date': string;
    /**
     * Secret key for link
     * @type {string}
     * @memberof ProjectChannelInviteLinkResponse
     */
    'secret': string;
    /**
     * Email
     * @type {string}
     * @memberof ProjectChannelInviteLinkResponse
     */
    'email': string | null;
    /**
     * If rejected then true
     * @type {boolean}
     * @memberof ProjectChannelInviteLinkResponse
     */
    'reject': boolean | null;
    /**
     * The user who granted access
     * @type {number}
     * @memberof ProjectChannelInviteLinkResponse
     */
    'from_user_id': number | null;
    /**
     * Project info
     * @type {ProjectChannelInviteChannelLinkResponse}
     * @memberof ProjectChannelInviteLinkResponse
     */
    'channel_'?: ProjectChannelInviteChannelLinkResponse;
}
//# sourceMappingURL=project-channel-invite-link-response.d.ts.map