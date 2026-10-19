# SiteUpdateOptionsTwitchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **number** | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | [default to undefined]
**title** | **string** | Platform broadcast title; supplied explicitly, omission does not insert the example title. | [default to undefined]
**category_id** | **string** | category id | [optional] [default to undefined]
**category_name** | **string** | category name | [optional] [default to undefined]
**lang** | **string** | Broadcast content language from the platform enum; differs from API localization language. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Nonempty array of up to 10 tags, each 1–25 characters long; an empty array is rejected. Sets tags for a Twitch broadcast. | [optional] [default to undefined]
**domain** | **string** | domain | [default to undefined]

## Example

```typescript
import { SiteUpdateOptionsTwitchRequest } from 'streamvi-api-client';

const instance: SiteUpdateOptionsTwitchRequest = {
    v,
    language,
    project_id,
    channel_id,
    title,
    category_id,
    category_name,
    lang,
    tags,
    domain,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
