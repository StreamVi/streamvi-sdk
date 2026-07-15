# SiteWebinarRoomItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**room_id** | **string** | Room id | [default to undefined]
**name_room** | **string** | Room display name | [default to undefined]
**invite_link** | **string** | Invite url | [default to undefined]
**members** | **number** | Members of room | [default to undefined]
**max_members** | **number** | Max members of room | [default to undefined]
**status** | **string** | Status of room | [default to undefined]
**stream_status** | **string** | Stream status | [default to StreamStatusEnum_Offline]

## Example

```typescript
import { SiteWebinarRoomItemResponse } from 'streamvi-api-client';

const instance: SiteWebinarRoomItemResponse = {
    room_id,
    name_room,
    invite_link,
    members,
    max_members,
    status,
    stream_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
