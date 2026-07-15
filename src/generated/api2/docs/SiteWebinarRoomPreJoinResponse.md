# SiteWebinarRoomPreJoinResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**room_id** | **string** | Room id | [default to undefined]
**room_display_name** | **string** | Room display name | [default to undefined]
**client_id** | **string** | Client ID | [default to undefined]
**participants_count** | **number** | Participants count | [default to undefined]
**owner_id** | **number** | Owner project id | [default to undefined]
**participants** | [**Array&lt;SiteWebinarRoomPreJoinParticipantResponse&gt;**](SiteWebinarRoomPreJoinParticipantResponse.md) | Participants | [default to undefined]

## Example

```typescript
import { SiteWebinarRoomPreJoinResponse } from 'streamvi-api-client';

const instance: SiteWebinarRoomPreJoinResponse = {
    room_id,
    room_display_name,
    client_id,
    participants_count,
    owner_id,
    participants,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
