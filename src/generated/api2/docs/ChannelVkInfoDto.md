# ChannelVkInfoDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Title of the channel | [default to undefined]
**description** | **string** |  | [default to undefined]
**wall** | **boolean** |  | [optional] [default to undefined]
**privacyVideo** | **string** |  | [optional] [default to undefined]
**privacyComments** | **string** |  | [optional] [default to undefined]
**playlist** | **ChannelPlayListInfoDto**(ChannelPlayListInfoDto.md) |  | [optional] [default to undefined]
**category** | **ChannelVkCategoryInfoDto**(ChannelVkCategoryInfoDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChannelVkInfoDto } from 'streamvi-api-client';

const instance: ChannelVkInfoDto = {
    title,
    description,
    wall,
    privacyVideo,
    privacyComments,
    playlist,
    category,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
