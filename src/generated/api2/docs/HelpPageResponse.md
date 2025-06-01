# HelpPageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **BlogPageSiteResponseId**(BlogPageSiteResponseId.md) |  | [default to undefined]
**url** | **string** | url | [default to undefined]
**urlInherit** | **string** | Generated url from root path | [default to undefined]
**notionParentId** | **string** | Notion parent id | [default to undefined]
**status** | **string** | Page status | [default to StatusEnum_Backlog]
**dateUpdate** | **string** | Date last update | [default to undefined]
**dateCreate** | **string** | Date create | [default to undefined]
**icon** | **object** | Page icon | [default to undefined]
**title** | **string** | Subject | [default to undefined]
**language** | **string** | Language for indexing | [default to LanguageEnum_Russian]
**languageIso** | **string** | Language ISO | [default to LanguageIsoEnum_Ru]
**text** | **string** | Text | [default to undefined]
**altLanguages** | **Array&lt;string&gt;** | Alternative language (Array of Language ISO) | [default to undefined]

## Example

```typescript
import { HelpPageResponse } from 'streamvi-api-client';

const instance: HelpPageResponse = {
    id,
    url,
    urlInherit,
    notionParentId,
    status,
    dateUpdate,
    dateCreate,
    icon,
    title,
    language,
    languageIso,
    text,
    altLanguages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
