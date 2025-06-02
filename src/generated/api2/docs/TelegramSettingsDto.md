# TelegramSettingsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_mode** | **number** | Filter | [default to undefined]
**chat** | **TelegramChatInfoResponseDto**(TelegramChatInfoResponseDto.md) | Chat info | [default to undefined]
**post** | **TelegramChatPostsItem**(TelegramChatPostsItem.md) | Post | [optional] [default to undefined]

## Example

```typescript
import { TelegramSettingsDto } from 'streamvi-api-client';

const instance: TelegramSettingsDto = {
    filter_mode,
    chat,
    post,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
