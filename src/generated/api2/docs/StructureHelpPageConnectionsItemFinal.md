# StructureHelpPageConnectionsItemFinal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **BlogPageSiteResponseId**(BlogPageSiteResponseId.md) |  | [default to undefined]
**notionId** | **string** | Notion id | [default to undefined]
**notionParentId** | **string** | Notion parent id | [default to undefined]
**url** | **string** | url | [default to undefined]
**urlInherit** | **string** | Generated url from root path | [default to undefined]
**status** | **string** | Page status | [default to StatusEnum_Backlog]
**title** | **Array&lt;StructureHelpPageConnectionsItemLang&gt;**(StructureHelpPageConnectionsItemLang.md) | Subject | [default to undefined]
**icon** | **object** | Page icon | [default to undefined]
**priority** | **number** | Priority for sorting | [default to undefined]

## Example

```typescript
import { StructureHelpPageConnectionsItemFinal } from 'streamvi-api-client';

const instance: StructureHelpPageConnectionsItemFinal = {
    id,
    notionId,
    notionParentId,
    url,
    urlInherit,
    status,
    title,
    icon,
    priority,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
