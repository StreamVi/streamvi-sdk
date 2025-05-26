# SiteTranscoderCreateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_en]
**project_id** | **number** | Project id | [default to undefined]
**name** | **string** | Name | [default to undefined]
**videoCodecId** | **number** | Video codec id | [default to undefined]
**width** | **number** | Width | [optional] [default to undefined]
**height** | **number** | Height | [optional] [default to undefined]
**fps** | **number** | Fps | [optional] [default to undefined]
**vBitrate** | **number** | Video bitrate, kbps | [optional] [default to undefined]
**aBitrate** | **number** | Audio bitrate, kbps | [optional] [default to undefined]
**rotation** | **number** | Rotation | [optional] [default to undefined]
**bFrames** | **number** | Rotation | [optional] [default to undefined]
**channelIds** | **number** | ChannelIds | [optional] [default to undefined]

## Example

```typescript
import { SiteTranscoderCreateDto } from './api';

const instance: SiteTranscoderCreateDto = {
    v,
    language,
    project_id,
    name,
    videoCodecId,
    width,
    height,
    fps,
    vBitrate,
    aBitrate,
    rotation,
    bFrames,
    channelIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
