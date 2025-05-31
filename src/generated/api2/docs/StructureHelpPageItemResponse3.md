# StructureHelpPageItemResponse3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**BlogPageSiteResponseId**](BlogPageSiteResponseId.md) |  | [default to undefined]
**notionId** | **string** | Notion id | [default to undefined]
**notionParentId** | **string** | Notion parent id | [default to undefined]
**url** | **string** | url | [default to undefined]
**urlInherit** | **string** | Generated url from root path | [default to undefined]
**status** | **string** | Page status | [default to StatusEnum_Backlog]
**title** | [**Array&lt;StructureHelpPageConnectionsItemLang&gt;**](StructureHelpPageConnectionsItemLang.md) | Subject | [default to undefined]
**icon** | **object** | Page icon | [default to undefined]
**priority** | **number** | Priority for sorting | [default to undefined]
**connections** | [**Array&lt;StructureHelpPageConnectionsItemFinal&gt;**](StructureHelpPageConnectionsItemFinal.md) | Structure of child pages same as this array of class StructureHelpPageItemResponse, maximum 4 | [default to undefined]

## Example

```typescript
import { StructureHelpPageItemResponse3 } from 'streamvi-api-client';

const instance: StructureHelpPageItemResponse3 = {
    id,
    notionId,
    notionParentId,
    url,
    urlInherit,
    status,
    title,
    icon,
    priority,
    connections,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
