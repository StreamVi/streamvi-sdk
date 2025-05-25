# HelpPageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | [**BlogPageSiteResponseId**](BlogPageSiteResponseId.md) |  | [default to undefined]
**url** | **string** | url | [default to undefined]
**url_inherit** | **string** | Generated url from root path | [default to undefined]
**notion_parent_id** | **string** | Notion parent id | [default to undefined]
**status** | **string** | Page status | [default to StatusEnum_Backlog]
**date_update** | **string** | Date last update | [default to undefined]
**date_create** | **string** | Date create | [default to undefined]
**icon** | **object** | Page icon | [default to undefined]
**title** | **string** | Subject | [default to undefined]
**language** | **string** | Language for indexing | [default to LanguageEnum_Russian]
**language_iso** | **string** | Language ISO | [default to LanguageIsoEnum_Ru]
**text** | **string** | Text | [default to undefined]
**alt_languages** | **Array&lt;string&gt;** | Alternative language (Array of Language ISO) | [default to undefined]

## Example

```typescript
import { HelpPageResponse } from './api';

const instance: HelpPageResponse = {
    _id,
    url,
    url_inherit,
    notion_parent_id,
    status,
    date_update,
    date_create,
    icon,
    title,
    language,
    language_iso,
    text,
    alt_languages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
