# SearchChannelItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | name | [default to undefined]
**id** | **string** | External/platform channel identifier or generated custom-channel code. Treat as an opaque string even when it contains only digits. For management use group_id as channel_id. | [default to undefined]
**transcoderId** | **number** | Transcoder id | [default to undefined]
**group_id** | **number** | Internal numeric StreamVi channel ID. Pass this value as channel_id to channel status, settings and access methods, with the same project_id used for search. | [default to undefined]
**type** | **string** | type | [default to undefined]
**photo_default** | **string** | photo_default | [default to undefined]
**sell** | **boolean** | sell | [default to undefined]
**price** | **number** | price | [default to undefined]
**live** | **boolean** | live | [default to undefined]
**status** | **string** | status | [default to undefined]
**user_id** | **number** | user_id | [default to undefined]
**active** | **boolean** | Whether this channel is enabled in the project; distinct from broadcasting live. To disable, send active&#x3D;false with channel_id&#x3D;group_id and the same project_id. | [default to undefined]
**guestsNum** | **number** | guestsNum | [default to undefined]
**guestRights** | **number** | guestRights | [default to undefined]
**usageType** | **number** | usageType | [default to undefined]
**companyRole** | **number** | companyRole | [default to undefined]
**threads** | **number** | threads | [default to undefined]
**streamInfo** | [**SearchChannelItemStreamInfo**](SearchChannelItemStreamInfo.md) |  | [default to undefined]
**rtmp** | [**SearchChannelRtmpDto**](SearchChannelRtmpDto.md) |  | [default to undefined]
**ingress_url** | **string** | RTMP endpoint without stream key or complete ingress URI for protocols without a separate key | [optional] [default to undefined]
**ingress_protocol** | **string** | ingress_protocol | [optional] [default to undefined]
**stream_key** | **string** | RTMP stream key | [optional] [default to undefined]
**credentials** | [**Array&lt;SearchChannelCredentialsDto&gt;**](SearchChannelCredentialsDto.md) | credentials | [default to undefined]
**connections** | [**Array&lt;ChannelProviderConnectionDto&gt;**](ChannelProviderConnectionDto.md) |  | [optional] [default to undefined]
**tokens** | [**SearchChannelCredentialDto**](SearchChannelCredentialDto.md) | Tokens | [default to undefined]
**live_users** | [**Array&lt;SearchChannelLiveUserDto&gt;**](SearchChannelLiveUserDto.md) | live_users | [optional] [default to undefined]
**platform** | [**SearchChannelPlatformDto**](SearchChannelPlatformDto.md) | Platform | [default to undefined]
**timer** | **number** | Timer | [optional] [default to undefined]
**delay** | **number** | Delay | [optional] [default to undefined]

## Example

```typescript
import { SearchChannelItem } from 'streamvi-api-client';

const instance: SearchChannelItem = {
    name,
    id,
    transcoderId,
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
    ingress_url,
    ingress_protocol,
    stream_key,
    credentials,
    connections,
    tokens,
    live_users,
    platform,
    timer,
    delay,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
