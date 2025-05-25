# BlogPageSiteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | [**BlogPageSiteResponseId**](BlogPageSiteResponseId.md) |  | [default to undefined]
**url** | **string** | Url of page | [default to undefined]
**status** | **string** | Page status | [default to StatusEnum_Backlog]
**date_update** | **string** | Date of last update | [default to undefined]
**date_publish** | **string** | Date of publish for sort | [default to undefined]
**tags** | **Array&lt;object&gt;** | Tags | [default to undefined]
**language** | **string** | Language for indexing | [default to LanguageEnum_Russian]
**language_iso** | **string** | Language ISO | [default to 'russian']
**title** | **string** | Subject | [default to undefined]
**image** | **string** | Url of main image | [default to undefined]
**short_text** | **string** | Short text | [default to undefined]
**text** | **string** | Text | [default to undefined]
**alt_languages** | **Array&lt;string&gt;** | Alternative language (Array of Language ISO) | [default to undefined]

## Example

```typescript
import { BlogPageSiteResponse } from './api';

const instance: BlogPageSiteResponse = {
    _id,
    url,
    status,
    date_update,
    date_publish,
    tags,
    language,
    language_iso,
    title,
    image,
    short_text,
    text,
    alt_languages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
