# VkDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **string** | VK channel id | [default to undefined]
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
