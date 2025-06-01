# MethodProjectLiveStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**liveGroupsCount** | **number** | Live group count | [default to undefined]
**streamId** | **number** | Stream id | [optional] [default to undefined]
**url** | **string** | Url live stream | [optional] [default to undefined]
**app** | **string** | App name | [optional] [default to undefined]
**date** | **string** | Date | [optional] [default to undefined]
**status** | **string** | Stream status | [optional] [default to undefined]
**resolution** | **string** | Stream resolution | [optional] [default to undefined]
**broadcastId** | **number** | Broadcast id | [optional] [default to undefined]
**action** | **string** | Action | [optional] [default to undefined]
**info** | **MethodProjectLiveStatusInfo**(MethodProjectLiveStatusInfo.md) | Stream info | [optional] [default to undefined]
**video** | **MethodProjectLiveStatusVideo**(MethodProjectLiveStatusVideo.md) | Video info | [optional] [default to undefined]

## Example

```typescript
import { MethodProjectLiveStatusResponse } from 'streamvi-api-client';

const instance: MethodProjectLiveStatusResponse = {
    liveGroupsCount,
    streamId,
    url,
    app,
    date,
    status,
    resolution,
    broadcastId,
    action,
    info,
    video,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
