# MethodIntegrationAddRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**title** | **string** | Developer application display title | [default to undefined]
**type** | **string** | Supported application integration type | [default to undefined]
**tags** | **Array&lt;string&gt;** | Application category codes from the supported category enum | [default to undefined]
**scopes** | **Array&lt;string&gt;** | Application scope allowlist; account grants require separate consent | [optional] [default to undefined]
**scope_mode** | **string** | Application scope selection mode: selected allowlist or all supported scopes; grants require consent | [optional] [default to ScopeModeEnum_Selected]

## Example

```typescript
import { MethodIntegrationAddRequest } from 'streamvi-api-client';

const instance: MethodIntegrationAddRequest = {
    v,
    language,
    title,
    type,
    tags,
    scopes,
    scope_mode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
