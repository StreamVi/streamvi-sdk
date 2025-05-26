# SiteSearchChannelItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | name | [default to undefined]
**id** | **string** | name | [default to undefined]
**group_id** | **number** | group_id | [default to undefined]
**type** | **string** | type | [default to undefined]
**photo_default** | **string** | photo_default | [default to undefined]
**sell** | **boolean** | sell | [default to undefined]
**price** | **number** | price | [default to undefined]
**live** | **boolean** | live | [default to undefined]
**status** | **string** | status | [default to undefined]
**user_id** | **number** | user_id | [default to undefined]
**active** | **boolean** | active | [default to undefined]
**guestsNum** | **number** | guestsNum | [default to undefined]
**guestRights** | **number** | guestRights | [default to undefined]
**usageType** | **number** | usageType | [default to undefined]
**companyRole** | **number** | companyRole | [default to undefined]
**threads** | **number** | threads | [default to undefined]
**streamInfo** | [**SiteSearchChannelItemStreamInfo**](SiteSearchChannelItemStreamInfo.md) |  | [default to undefined]
**rtmp** | [**SiteSearchChannelRtmpDto**](SiteSearchChannelRtmpDto.md) | rtmp | [default to undefined]
**credentials** | [**Array&lt;SiteSearchChannelCredentialsDto&gt;**](SiteSearchChannelCredentialsDto.md) | credentials | [default to undefined]
**tokens** | [**SiteSearchChannelCredentialDto**](SiteSearchChannelCredentialDto.md) | Tokens | [default to undefined]
**platform** | [**SiteSearchChannelPlatformDto**](SiteSearchChannelPlatformDto.md) | Platform | [default to undefined]
**transcoderId** | **number** | Transcoder id | [optional] [default to undefined]
**live_users** | [**Array&lt;SiteSearchChannelLiveUserDto&gt;**](SiteSearchChannelLiveUserDto.md) | live_users | [optional] [default to undefined]

## Example

```typescript
import { SiteSearchChannelItem } from './api';

const instance: SiteSearchChannelItem = {
    name,
    id,
    group_id,
    type,
    photo_default,
    sell,
    price,
    live,
    status,
    user_id,
    active,
    guestsNum,
    guestRights,
    usageType,
    companyRole,
    threads,
    streamInfo,
    rtmp,
    credentials,
    tokens,
    platform,
    transcoderId,
    live_users,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
