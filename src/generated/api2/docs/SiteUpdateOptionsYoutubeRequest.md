# SiteUpdateOptionsYoutubeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**projectId** | **number** | Project id | [default to undefined]
**channelId** | **number** | Channel id | [default to undefined]
**title** | **string** |  | [default to 'title']
**description** | **string** |  | [default to 'description']
**categoryId** | **string** | category id | [default to '498482']
**categoryName** | **string** | category name | [default to 'name']
**playlistId** | **string** | playlist id | [default to undefined]
**audience** | **string** |  | [default to 'Audience']
**latency** | **string** |  | [default to 'Latency']
**privacyVideo** | **string** |  | [default to 'privacy video']
**image** | **string** |  | [default to 'image url link or base64']
**lang** | **string** |  | [default to 'Lang']
**tags** | **Set&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { SiteUpdateOptionsYoutubeRequest } from 'streamvi-api-client';

const instance: SiteUpdateOptionsYoutubeRequest = {
    v,
    language,
    projectId,
    channelId,
    title,
    description,
    categoryId,
    categoryName,
    playlistId,
    audience,
    latency,
    privacyVideo,
    image,
    lang,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
