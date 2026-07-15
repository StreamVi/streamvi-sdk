# SiteWebinarRoomSyncResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**room_id** | **string** | Room name | [default to undefined]
**client_id** | **string** | Client ID | [default to undefined]
**focus_track** | [**SiteWebinarRoomSyncFocusTrackResponse**](SiteWebinarRoomSyncFocusTrackResponse.md) | Focus track | [optional] [default to undefined]
**tracks** | [**Array&lt;SiteWebinarRoomSyncTrackResponse&gt;**](SiteWebinarRoomSyncTrackResponse.md) | Tracks | [default to undefined]

## Example

```typescript
import { SiteWebinarRoomSyncResponse } from 'streamvi-api-client';

const instance: SiteWebinarRoomSyncResponse = {
    room_id,
    client_id,
    focus_track,
    tracks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
