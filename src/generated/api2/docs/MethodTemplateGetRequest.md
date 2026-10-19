# MethodTemplateGetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Selected authorized project ID | [default to undefined]
**integration_project_template_id** | **string** | Template Mongo ID; must belong to an installation in the selected project | [default to undefined]

## Example

```typescript
import { MethodTemplateGetRequest } from 'streamvi-api-client';

const instance: MethodTemplateGetRequest = {
    v,
    language,
    project_id,
    integration_project_template_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
