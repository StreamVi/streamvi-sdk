# SiteUpdateChatTelegramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **number** | Channel id | [default to undefined]
**link** | **string** | link | [optional] [default to undefined]
**select** | **number** | select | [optional] [default to undefined]
**messageId** | **number** | messageId | [optional] [default to undefined]

## Example

```typescript
import { SiteUpdateChatTelegramRequest } from 'streamvi-api-client';

const instance: SiteUpdateChatTelegramRequest = {
    v,
    language,
    project_id,
    channel_id,
    link,
    select,
    messageId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
