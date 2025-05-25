# StructureHelpPageConnectionsItemFinal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | [**BlogPageSiteResponseId**](BlogPageSiteResponseId.md) |  | [default to undefined]
**notion_id** | **string** | Notion id | [default to undefined]
**notion_parent_id** | **string** | Notion parent id | [default to undefined]
**url** | **string** | url | [default to undefined]
**url_inherit** | **string** | Generated url from root path | [default to undefined]
**status** | **string** | Page status | [default to StatusEnum_Backlog]
**title** | [**Array&lt;StructureHelpPageConnectionsItemLang&gt;**](StructureHelpPageConnectionsItemLang.md) | Subject | [default to undefined]
**icon** | **object** | Page icon | [default to undefined]
**priority** | **number** | Priority for sorting | [default to undefined]

## Example

```typescript
import { StructureHelpPageConnectionsItemFinal } from './api';

const instance: StructureHelpPageConnectionsItemFinal = {
    _id,
    notion_id,
    notion_parent_id,
    url,
    url_inherit,
    status,
    title,
    icon,
    priority,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
