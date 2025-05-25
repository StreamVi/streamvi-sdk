# TelegramSettingsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_mode** | **number** | Filter | [default to undefined]
**chat** | [**SiteTelegramChatInfoResponseDto**](SiteTelegramChatInfoResponseDto.md) | Chat info | [default to undefined]
**post** | [**SiteTelegramChatPostsItem**](SiteTelegramChatPostsItem.md) | Post | [optional] [default to undefined]

## Example

```typescript
import { TelegramSettingsDto } from './api';

const instance: TelegramSettingsDto = {
    filter_mode,
    chat,
    post,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
