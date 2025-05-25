# MethodProjectLiveStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live_groups_count** | **number** | Live group count | [default to undefined]
**stream_id** | **number** | Stream id | [optional] [default to undefined]
**url** | **string** | Url live stream | [optional] [default to undefined]
**app** | **string** | App name | [optional] [default to undefined]
**date** | **string** | Date | [optional] [default to undefined]
**status** | **string** | Stream status | [optional] [default to undefined]
**resolution** | **string** | Stream resolution | [optional] [default to undefined]
**broadcast_id** | **number** | Broadcast id | [optional] [default to undefined]
**action** | **string** | Action | [optional] [default to undefined]
**info** | [**MethodProjectLiveStatusInfo**](MethodProjectLiveStatusInfo.md) | Stream info | [optional] [default to undefined]
**video** | [**MethodProjectLiveStatusVideo**](MethodProjectLiveStatusVideo.md) | Video info | [optional] [default to undefined]

## Example

```typescript
import { MethodProjectLiveStatusResponse } from './api';

const instance: MethodProjectLiveStatusResponse = {
    live_groups_count,
    stream_id,
    url,
    app,
    date,
    status,
    resolution,
    broadcast_id,
    action,
    info,
    video,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
