# SiteSetPlannedRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **number** | Channel id | [default to undefined]
**id** | **string** |  | [optional] [default to 'Planned id']

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
