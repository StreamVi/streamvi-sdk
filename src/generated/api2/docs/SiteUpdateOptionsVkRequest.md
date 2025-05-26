# SiteUpdateOptionsVkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_en]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **number** | Channel id | [default to undefined]
**title** | **string** |  | [default to 'title']
**description** | **string** |  | [default to 'description']
**category_id** | **string** | category id | [default to '42']
**category_name** | **string** | category name | [default to 'name']
**category_secondary_id** | **string** | category id | [default to '42']
**category_secondary_name** | **string** | category name | [default to 'name']
**playlist_id** | **string** | playlist id | [default to undefined]
**privacy_comments** | **string** |  | [default to 'privacy comments']
**privacy_video** | **string** |  | [default to 'privacy video']
**wall** | **boolean** | Is publish stream on wall | [default to undefined]

## Example

```typescript
import { SiteUpdateOptionsVkRequest } from './api';

const instance: SiteUpdateOptionsVkRequest = {
    v,
    language,
    project_id,
    channel_id,
    title,
    description,
    category_id,
    category_name,
    category_secondary_id,
    category_secondary_name,
    playlist_id,
    privacy_comments,
    privacy_video,
    wall,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
