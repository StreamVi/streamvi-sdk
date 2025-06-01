# ChannelYoutubeInfoDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Title of the channel | [default to undefined]
**description** | **string** |  | [default to undefined]
**lang** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**category** | **ChannelCategoryInfoDto**(ChannelCategoryInfoDto.md) |  | [optional] [default to undefined]
**playlist** | **ChannelPlayListInfoDto**(ChannelPlayListInfoDto.md) |  | [optional] [default to undefined]
**privacyVideo** | **string** |  | [optional] [default to undefined]
**latency** | **string** |  | [optional] [default to undefined]
**audience** | **string** |  | [optional] [default to undefined]
**image** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ChannelYoutubeInfoDto } from 'streamvi-api-client';

const instance: ChannelYoutubeInfoDto = {
    title,
    description,
    lang,
    tags,
    category,
    playlist,
    privacyVideo,
    latency,
    audience,
    image,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
