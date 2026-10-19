# MethodPluginViewResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_id** | **string** | Integration id | [default to undefined]
**title** | **string** | Title | [default to undefined]
**tags** | **Array&lt;string&gt;** | Application category codes from the supported category enum | [default to undefined]
**icon_catalog** | **string** | Catalog icon URL | [default to undefined]
**author_name** | **string** | Author name | [optional] [default to undefined]
**description** | **string** | Application description | [default to undefined]
**link_doc** | **string** | Application documentation URL | [default to undefined]
**link_help** | **string** | Application help URL | [default to undefined]
**integration_project_id** | **string** | Is install, install id | [optional] [default to undefined]
**type** | **Array&lt;string&gt;** | Supported application integration type | [default to undefined]
**url** | **string** | Url | [default to undefined]
**url_dev** | **string** | Url dev | [default to undefined]
**is_dev** | **boolean** | Is Dev mode | [default to undefined]
**scopes** | **Array&lt;string&gt;** | Current concrete application OAuth allowlist for explicit consent | [optional] [default to undefined]
**scope_mode** | **string** | Application scope selection mode: selected allowlist or all supported scopes; grants require consent | [default to undefined]

## Example

```typescript
import { MethodPluginViewResponse } from 'streamvi-api-client';

const instance: MethodPluginViewResponse = {
    integration_id,
    title,
    tags,
    icon_catalog,
    author_name,
    description,
    link_doc,
    link_help,
    integration_project_id,
    type,
    url,
    url_dev,
    is_dev,
    scopes,
    scope_mode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
