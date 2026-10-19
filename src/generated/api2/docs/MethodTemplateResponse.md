# MethodTemplateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Template Mongo ID usable with subsequent get or widget calls | [default to undefined]
**integration_project_id** | **string** | Project installation Mongo ID; must belong to the selected authorized project | [default to undefined]
**name** | **string** | Template display name | [default to undefined]
**widget_data** | **string** | Existing serialized widget configuration, or null when absent | [default to undefined]
**payload** | **{ [key: string]: any; }** | Widget JSON payload, or null when absent | [default to undefined]

## Example

```typescript
import { MethodTemplateResponse } from 'streamvi-api-client';

const instance: MethodTemplateResponse = {
    _id,
    integration_project_id,
    name,
    widget_data,
    payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
