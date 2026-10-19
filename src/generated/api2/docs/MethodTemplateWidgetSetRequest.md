# MethodTemplateWidgetSetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Selected authorized project ID | [default to undefined]
**template_id** | **string** | Template Mongo ID for widget payload access; must belong to the selected project installation | [default to undefined]
**payload** | **{ [key: string]: any; }** | JSON object; maximum serialized UTF-8 size 100000 bytes | [default to undefined]

## Example

```typescript
import { MethodTemplateWidgetSetRequest } from 'streamvi-api-client';

const instance: MethodTemplateWidgetSetRequest = {
    v,
    language,
    project_id,
    template_id,
    payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
