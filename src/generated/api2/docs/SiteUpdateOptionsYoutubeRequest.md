# SiteUpdateOptionsYoutubeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_en]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **number** | Channel id | [default to undefined]
**title** | **string** |  | [default to 'title']
**description** | **string** |  | [default to 'description']
**category_id** | **string** | category id | [default to '498482']
**category_name** | **string** | category name | [default to 'name']
**playlist_id** | **string** | playlist id | [default to undefined]
**audience** | **string** |  | [default to 'Audience']
**latency** | **string** |  | [default to 'Latency']
**privacy_video** | **string** |  | [default to 'privacy video']
**image** | **string** |  | [default to 'image url link or base64']
**lang** | **string** |  | [default to 'Lang']
**tags** | **Set&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { SiteUpdateOptionsYoutubeRequest } from './api';

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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
