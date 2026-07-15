# SiteBroadcastStatusLiveResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broadcast_id** | **number** | Broadcast id | [default to undefined]
**stream_id** | **number** | Stream id | [default to undefined]
**reconnects** | **number** | Count reconnects encoder | [default to undefined]
**date_start** | **string** | Date start stream | [default to undefined]
**resolution** | **string** | Stream resolution | [default to undefined]
**fps** | **number** | FPS | [default to undefined]
**bitrate** | **number** | Bitrate | [default to undefined]
**key_frame** | **number** | Key frame | [optional] [default to undefined]
**status** | **string** | Stream status | [default to undefined]
**url** | **string** | Broadcast url | [default to undefined]
**video_codec_name** | **string** | Video codec | [default to undefined]
**restreams** | [**Array&lt;BroadcastLiveStatusRestream&gt;**](BroadcastLiveStatusRestream.md) | Restreams | [default to undefined]
**app** | **string** | App name (live) | [default to undefined]

## Example

```typescript
import { SiteBroadcastStatusLiveResponse } from 'streamvi-api-client';

const instance: SiteBroadcastStatusLiveResponse = {
    broadcast_id,
    stream_id,
    reconnects,
    date_start,
    resolution,
    fps,
    bitrate,
    key_frame,
    status,
    url,
    video_codec_name,
    restreams,
    app,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
