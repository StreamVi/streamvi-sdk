# MethodPluginReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Explicit selected project; the authenticated account must have the required project role | [default to undefined]
**integration_id** | **string** | Developer application Mongo ID; authorization uses its actual owner and administrators | [default to undefined]
**email** | **string** | Report contact email address | [default to undefined]
**theme** | **string** | Report subject | [default to undefined]
**description** | **string** | Report free-text details | [default to undefined]

## Example

```typescript
import { MethodPluginReportRequest } from 'streamvi-api-client';

const instance: MethodPluginReportRequest = {
    v,
    language,
    project_id,
    integration_id,
    email,
    theme,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
