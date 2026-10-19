# MethodPluginInstallationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Explicit selected project; the authenticated account must have the required project role | [default to undefined]
**integration_project_id** | **string** | Project installation Mongo ID; must belong to the selected authorized project | [default to undefined]

## Example

```typescript
import { MethodPluginInstallationRequest } from 'streamvi-api-client';

const instance: MethodPluginInstallationRequest = {
    v,
    language,
    project_id,
    integration_project_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
