# TranscoderCreateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**mode** | **string** | Mode | [optional] [default to undefined]
**width** | **number** | Width | [optional] [default to undefined]
**height** | **number** | Height | [optional] [default to undefined]
**fps** | **number** | Fps | [optional] [default to undefined]
**vBitrate** | **number** | Video bitrate, kbps | [optional] [default to undefined]
**aBitrate** | **number** | Audio bitrate, kbps | [optional] [default to undefined]
**name** | **string** | Name | [default to undefined]
**rotation** | **number** | Rotation | [optional] [default to undefined]
**bFrames** | **number** | Rotation | [optional] [default to undefined]
**channelIds** | **Array&lt;number&gt;** | ChannelIds | [optional] [default to undefined]
**videoCodec** | **string** | Video codec | [default to undefined]
**preset** | **string** | Preset | [optional] [default to undefined]
**delay** | **number** | Delay | [optional] [default to undefined]

## Example

```typescript
import { TranscoderCreateDto } from 'streamvi-api-client';

const instance: TranscoderCreateDto = {
    v,
    language,
    project_id,
    mode,
    width,
    height,
    fps,
    vBitrate,
    aBitrate,
    name,
    rotation,
    bFrames,
    channelIds,
    videoCodec,
    preset,
    delay,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
