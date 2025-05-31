# TranscoderCreateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**projectId** | **number** | Project id | [default to undefined]
**width** | **number** | Width | [optional] [default to undefined]
**height** | **number** | Height | [optional] [default to undefined]
**fps** | **number** | Fps | [optional] [default to undefined]
**vBitrate** | **number** | Video bitrate, kbps | [optional] [default to undefined]
**aBitrate** | **number** | Audio bitrate, kbps | [optional] [default to undefined]
**name** | **string** | Name | [default to undefined]
**rotation** | **number** | Rotation | [optional] [default to undefined]
**bFrames** | **number** | Rotation | [optional] [default to undefined]
**channelIds** | **number** | ChannelIds | [optional] [default to undefined]
**videoCodecId** | **number** | Video codec id | [default to undefined]

## Example

```typescript
import { TranscoderCreateDto } from 'streamvi-api-client';

const instance: TranscoderCreateDto = {
    v,
    language,
    projectId,
    width,
    height,
    fps,
    vBitrate,
    aBitrate,
    name,
    rotation,
    bFrames,
    channelIds,
    videoCodecId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
