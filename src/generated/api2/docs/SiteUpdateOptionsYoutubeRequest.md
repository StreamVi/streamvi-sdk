# SiteUpdateOptionsYoutubeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **number** | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | [default to undefined]
**title** | **string** | Platform broadcast title; supplied explicitly, omission does not insert the example title. | [default to undefined]
**description** | **string** | Broadcast description on the platform; supplied explicitly. Do not confuse it with the channel configuration description or API documentation. | [default to undefined]
**category_id** | **string** | category id | [optional] [default to undefined]
**category_name** | **string** | category name | [optional] [default to undefined]
**playlist_id** | **string** | playlist id | [optional] [default to undefined]
**audience** | **string** | Age/children audience category from the platform enum; when omitted, the transformed parameter remains undefined. | [optional] [default to undefined]
**latency** | **string** | YouTube latency mode from enum; not an integer number of protection minutes. | [optional] [default to undefined]
**privacy_video** | **string** | Platform broadcast visibility from its enum; omission does not insert demonstration text. | [optional] [default to undefined]
**image** | **string** | HTTPS URL on preview.streamvi.net or data:image/png|jpeg|jpg|gif;base64. Omitting image when a preview exists initiates preview removal in the save workflow. | [optional] [default to undefined]
**lang** | **string** | Broadcast content language from the platform enum; differs from API localization language. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Nonempty tag array when supplied; total length including commas and quotes must not exceed 500 characters. An empty array is rejected by the validator. | [optional] [default to undefined]
**disable_auto_end** | **boolean** | Disable automatic termination of the platform broadcast when true is provided; false sets the opposite value. An omitted value is transformed to undefined. | [optional] [default to undefined]

## Example

```typescript
import { SiteUpdateOptionsYoutubeRequest } from 'streamvi-api-client';

const instance: SiteUpdateOptionsYoutubeRequest = {
    v,
    language,
    project_id,
    channel_id,
    title,
    description,
    category_id,
    category_name,
    playlist_id,
    audience,
    latency,
    privacy_video,
    image,
    lang,
    tags,
    disable_auto_end,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
