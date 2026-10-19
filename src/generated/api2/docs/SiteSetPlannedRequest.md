# SiteSetPlannedRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **number** | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | [default to undefined]
**id** | **string** | External string ID of a scheduled platform broadcast from getPlanned; auto selects the automatic option, null/omission clears selection. Not a StreamVi schedule ID. | [optional] [default to undefined]

## Example

```typescript
import { SiteSetPlannedRequest } from 'streamvi-api-client';

const instance: SiteSetPlannedRequest = {
    v,
    language,
    project_id,
    channel_id,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
