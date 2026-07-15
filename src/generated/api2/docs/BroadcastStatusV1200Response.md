# BroadcastStatusV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Stream status | [default to undefined]
**broadcast_id** | **number** | Broadcast id | [default to undefined]
**stream_id** | **number** | Stream id | [default to undefined]
**reconnects** | **number** | Count reconnects encoder | [default to undefined]
**date_start** | **string** | Date start stream | [default to undefined]
**resolution** | **string** | Stream resolution | [default to undefined]
**fps** | **number** | FPS | [default to undefined]
**bitrate** | **number** | Bitrate | [default to undefined]
**key_frame** | **number** | Key frame | [optional] [default to undefined]
**url** | **string** | Broadcast url | [default to undefined]
**video_codec_name** | **string** | Video codec | [default to undefined]
**restreams** | [**Array&lt;BroadcastLiveStatusRestream&gt;**](BroadcastLiveStatusRestream.md) | Restreams | [default to undefined]
**app** | **string** | App name (scheduler) | [default to undefined]
**schedulerId** | **number** | Scheduler id | [default to undefined]
**video_id** | **number** | Video id | [default to undefined]
**name** | **string** | Video name | [default to undefined]
**duration** | **number** | Video duration | [default to undefined]

## Example

```typescript
import { BroadcastStatusV1200Response } from 'streamvi-api-client';

const instance: BroadcastStatusV1200Response = {
    status,
    broadcast_id,
    stream_id,
    reconnects,
    date_start,
    resolution,
    fps,
    bitrate,
    key_frame,
    url,
    video_codec_name,
    restreams,
    app,
    schedulerId,
    video_id,
    name,
    duration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
