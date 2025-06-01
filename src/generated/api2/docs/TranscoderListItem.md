# TranscoderListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Id | [default to undefined]
**name** | **string** | Name | [default to undefined]
**createdAt** | **string** | createdAt | [default to undefined]
**fps** | **number** | fps | [optional] [default to undefined]
**vBitrate** | **number** | video bitrate | [optional] [default to undefined]
**aBitrate** | **number** | audio bitrate | [optional] [default to undefined]
**width** | **number** | width | [optional] [default to undefined]
**height** | **number** | height | [optional] [default to undefined]
**rotation** | **number** | rotation | [optional] [default to undefined]
**bFrames** | **number** | B-Frames | [optional] [default to undefined]
**status** | **string** | Status | [default to undefined]
**videoCodec** | **string** | Video codec | [default to undefined]
**channels** | **Array&lt;TranscoderChannelItem&gt;**(TranscoderChannelItem.md) | B-Frames | [default to undefined]

## Example

```typescript
import { TranscoderListItem } from 'streamvi-api-client';

const instance: TranscoderListItem = {
    id,
    name,
    createdAt,
    fps,
    vBitrate,
    aBitrate,
    width,
    height,
    rotation,
    bFrames,
    status,
    videoCodec,
    channels,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
