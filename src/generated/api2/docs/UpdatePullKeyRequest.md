# UpdatePullKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**key** | **string** | Key | [default to undefined]
**region** | **string** | Region for link | [default to undefined]

## Example

```typescript
import { UpdatePullKeyRequest } from 'streamvi-api-client';

const instance: UpdatePullKeyRequest = {
    v,
    language,
    project_id,
    key,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
