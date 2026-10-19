# SiteUpdateOptionsVkVideoLiveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **number** | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | [default to undefined]
**title** | **string** | Platform broadcast title; supplied explicitly, omission does not insert the example title. | [default to undefined]
**category_id** | **string** | category id | [optional] [default to undefined]
**category_name** | **string** | category name | [optional] [default to undefined]
**category_type** | **string** | category type | [optional] [default to undefined]

## Example

```typescript
import { SiteUpdateOptionsVkVideoLiveRequest } from 'streamvi-api-client';

const instance: SiteUpdateOptionsVkVideoLiveRequest = {
    v,
    language,
    project_id,
    channel_id,
    title,
    category_id,
    category_name,
    category_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
