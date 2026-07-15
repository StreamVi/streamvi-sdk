# SiteUpdateOptionsYoutubeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **number** | Channel id | [default to undefined]
**title** | **string** |  | [default to 'title']
**description** | **string** |  | [default to 'description']
**category_id** | **string** | category id | [optional] [default to '498482']
**category_name** | **string** | category name | [optional] [default to 'name']
**playlist_id** | **string** | playlist id | [optional] [default to undefined]
**audience** | **string** |  | [optional] [default to 'Audience']
**latency** | **string** |  | [optional] [default to 'Latency']
**privacy_video** | **string** |  | [optional] [default to 'privacy video']
**image** | **string** |  | [optional] [default to 'image url link or base64']
**lang** | **string** |  | [optional] [default to 'Lang']
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**disable_auto_end** | **boolean** |  | [optional] [default to false]

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
