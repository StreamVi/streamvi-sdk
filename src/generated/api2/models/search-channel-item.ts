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
import type { SearchChannelCredentialDto } from './search-channel-credential-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SearchChannelCredentialsDto } from './search-channel-credentials-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SearchChannelItemStreamInfo } from './search-channel-item-stream-info';
// May contain unused imports in some cases
// @ts-ignore
import type { SearchChannelLiveUserDto } from './search-channel-live-user-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SearchChannelPlatformDto } from './search-channel-platform-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SearchChannelRtmpDto } from './search-channel-rtmp-dto';

/**
 * 
 * @export
 * @interface SearchChannelItem
 */
export interface SearchChannelItem {
    /**
     * name
     * @type {string}
     * @memberof SearchChannelItem
     */
    'name': string;
    /**
     * name
     * @type {string}
     * @memberof SearchChannelItem
     */
    'id': string;
    /**
     * Transcoder id
     * @type {number}
     * @memberof SearchChannelItem
     */
    'transcoderId'?: number;
    /**
     * group_id
     * @type {number}
     * @memberof SearchChannelItem
     */
    'group_id': number;
    /**
     * type
     * @type {string}
     * @memberof SearchChannelItem
     */
    'type': string;
    /**
     * photo_default
     * @type {string}
     * @memberof SearchChannelItem
     */
    'photo_default': string;
    /**
     * sell
     * @type {boolean}
     * @memberof SearchChannelItem
     */
    'sell': boolean;
    /**
     * price
     * @type {number}
     * @memberof SearchChannelItem
     */
    'price': number;
    /**
     * live
     * @type {boolean}
     * @memberof SearchChannelItem
     */
    'live': boolean;
    /**
     * status
     * @type {string}
     * @memberof SearchChannelItem
     */
    'status': SearchChannelItemStatusEnum;
    /**
     * user_id
     * @type {number}
     * @memberof SearchChannelItem
     */
    'user_id': number;
    /**
     * active
     * @type {boolean}
     * @memberof SearchChannelItem
     */
    'active': boolean;
    /**
     * guestsNum
     * @type {number}
     * @memberof SearchChannelItem
     */
    'guestsNum': number;
    /**
     * guestRights
     * @type {number}
     * @memberof SearchChannelItem
     */
    'guestRights': number | null;
    /**
     * usageType
     * @type {number}
     * @memberof SearchChannelItem
     */
    'usageType': number;
    /**
     * companyRole
     * @type {number}
     * @memberof SearchChannelItem
     */
    'companyRole': number | null;
    /**
     * threads
     * @type {number}
     * @memberof SearchChannelItem
     */
    'threads': number;
    /**
     * 
     * @type {SearchChannelItemStreamInfo}
     * @memberof SearchChannelItem
     */
    'streamInfo': SearchChannelItemStreamInfo;
    /**
     * rtmp
     * @type {SearchChannelRtmpDto}
     * @memberof SearchChannelItem
     */
    'rtmp': SearchChannelRtmpDto | null;
    /**
     * credentials
     * @type {Array<SearchChannelCredentialsDto>}
     * @memberof SearchChannelItem
     */
    'credentials': Array<SearchChannelCredentialsDto> | null;
    /**
     * Tokens
     * @type {SearchChannelCredentialDto}
     * @memberof SearchChannelItem
     */
    'tokens': SearchChannelCredentialDto;
    /**
     * live_users
     * @type {Array<SearchChannelLiveUserDto>}
     * @memberof SearchChannelItem
     */
    'live_users'?: Array<SearchChannelLiveUserDto>;
    /**
     * Platform
     * @type {SearchChannelPlatformDto}
     * @memberof SearchChannelItem
     */
    'platform': SearchChannelPlatformDto;
}

export const SearchChannelItemStatusEnum = {
    Init: 'init',
    Pending: 'pending',
    Error: 'error',
    Live: 'live',
    Offline: 'offline',
    Busy: 'busy'
} as const;

export type SearchChannelItemStatusEnum = typeof SearchChannelItemStatusEnum[keyof typeof SearchChannelItemStatusEnum];


