# VkDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **string** | External VK channel/community identifier from the platform channel list for account_id. Pass the original string, preserving leading zeros. This add-channel method does not take an internal StreamVi channel_id/group_id. | [default to undefined]
**account_id** | **string** | VK account id | [default to undefined]

## Example

```typescript
import { VkDto } from 'streamvi-api-client';

const instance: VkDto = {
    v,
    language,
    project_id,
    channel_id,
    account_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
