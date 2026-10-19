# MethodCreateDedicatedServerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**pool_id** | **number** | Ingest server pool id | [default to undefined]

## Example

```typescript
import { MethodCreateDedicatedServerRequest } from 'streamvi-api-client';

const instance: MethodCreateDedicatedServerRequest = {
    v,
    language,
    project_id,
    pool_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
