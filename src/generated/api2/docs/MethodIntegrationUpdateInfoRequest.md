# MethodIntegrationUpdateInfoRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**integration_id** | **string** | Developer application Mongo ID; authorization uses its actual owner and administrators | [default to undefined]
**title** | **string** | Developer application display title | [default to undefined]
**tags** | **Array&lt;string&gt;** | Application category codes from the supported category enum | [default to undefined]
**link_doc** | **string** | Documentation URL, or empty string to clear it | [default to undefined]
**link_help** | **string** | Help URL, or empty string to clear it | [default to undefined]

## Example

```typescript
import { MethodIntegrationUpdateInfoRequest } from 'streamvi-api-client';

const instance: MethodIntegrationUpdateInfoRequest = {
    v,
    language,
    integration_id,
    title,
    tags,
    link_doc,
    link_help,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
