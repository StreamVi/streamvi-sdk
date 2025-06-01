# BlogPageSiteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **BlogPageSiteResponseId**(BlogPageSiteResponseId.md) |  | [default to undefined]
**url** | **string** | Url of page | [default to undefined]
**status** | **string** | Page status | [default to StatusEnum_Backlog]
**dateUpdate** | **string** | Date of last update | [default to undefined]
**datePublish** | **string** | Date of publish for sort | [default to undefined]
**tags** | **Array&lt;object&gt;** | Tags | [default to undefined]
**language** | **string** | Language for indexing | [default to LanguageEnum_Russian]
**languageIso** | **string** | Language ISO | [default to 'russian']
**title** | **string** | Subject | [default to undefined]
**image** | **string** | Url of main image | [default to undefined]
**shortText** | **string** | Short text | [default to undefined]
**text** | **string** | Text | [default to undefined]
**altLanguages** | **Array&lt;string&gt;** | Alternative language (Array of Language ISO) | [default to undefined]

## Example

```typescript
import { BlogPageSiteResponse } from 'streamvi-api-client';

const instance: BlogPageSiteResponse = {
    id,
    url,
    status,
    dateUpdate,
    datePublish,
    tags,
    language,
    languageIso,
    title,
    image,
    shortText,
    text,
    altLanguages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
