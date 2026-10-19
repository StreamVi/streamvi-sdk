# MethodPluginItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Integration id | [default to undefined]
**title** | **string** | Title | [default to undefined]
**installations** | **number** | Installations count | [default to undefined]
**count_administrators** | **number** | Administrators count | [default to undefined]
**icon_app** | **string** | Application icon URL | [default to undefined]
**icon_catalog** | **string** | Catalog icon URL | [default to undefined]
**type** | **Array&lt;string&gt;** | Integration types | [default to undefined]
**author_name** | **string** | Author name | [default to undefined]
**integration_project_id** | **string** | Integration Project | [optional] [default to undefined]

## Example

```typescript
import { MethodPluginItemResponse } from 'streamvi-api-client';

const instance: MethodPluginItemResponse = {
    _id,
    title,
    installations,
    count_administrators,
    icon_app,
    icon_catalog,
    type,
    author_name,
    integration_project_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
