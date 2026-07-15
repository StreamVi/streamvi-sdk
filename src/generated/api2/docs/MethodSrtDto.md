# MethodSrtDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**name** | **string** | Name | [default to undefined]
**ingress_url** | **string** | Ingress url | [default to undefined]

## Example

```typescript
import { MethodSrtDto } from 'streamvi-api-client';

const instance: MethodSrtDto = {
    v,
    language,
    project_id,
    name,
    ingress_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
