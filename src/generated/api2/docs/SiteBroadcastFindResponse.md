# SiteBroadcastFindResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Broadcast Id | [default to undefined]
**bitrate** | **number** | Bitrate Id | [default to undefined]
**fps** | **number** | Fps | [default to undefined]
**width** | **number** | width | [default to undefined]
**height** | **number** | height | [default to undefined]
**location** | **string** | Location | [default to undefined]
**encoder** | **string** | Encoder | [default to undefined]
**ip** | **string** | IP address | [default to undefined]
**created_at** | **string** | Create time | [default to undefined]
**finish_at** | **string** | Finish time | [default to undefined]
**viewers** | **number** | Count viewers | [default to undefined]
**reconnects** | **number** | Count reconnects | [default to undefined]
**message** | **number** | Message count | [default to undefined]
**restreams** | [**Array&lt;SiteRestreamResponse&gt;**](SiteRestreamResponse.md) | Restream channels | [default to undefined]

## Example

```typescript
import { SiteBroadcastFindResponse } from 'streamvi-api-client';

const instance: SiteBroadcastFindResponse = {
    id,
    bitrate,
    fps,
    width,
    height,
    location,
    encoder,
    ip,
    created_at,
    finish_at,
    viewers,
    reconnects,
    message,
    restreams,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
