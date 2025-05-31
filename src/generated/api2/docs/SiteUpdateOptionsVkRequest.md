# SiteUpdateOptionsVkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**projectId** | **number** | Project id | [default to undefined]
**channelId** | **number** | Channel id | [default to undefined]
**title** | **string** |  | [default to 'title']
**description** | **string** |  | [default to 'description']
**categoryId** | **string** | category id | [default to '42']
**categoryName** | **string** | category name | [default to 'name']
**categorySecondaryId** | **string** | category id | [default to '42']
**categorySecondaryName** | **string** | category name | [default to 'name']
**playlistId** | **string** | playlist id | [default to undefined]
**privacyComments** | **string** |  | [default to 'privacy comments']
**privacyVideo** | **string** |  | [default to 'privacy video']
**wall** | **boolean** | Is publish stream on wall | [default to undefined]

## Example

```typescript
import { SiteUpdateOptionsVkRequest } from 'streamvi-api-client';

const instance: SiteUpdateOptionsVkRequest = {
    v,
    language,
    projectId,
    channelId,
    title,
    description,
    categoryId,
    categoryName,
    categorySecondaryId,
    categorySecondaryName,
    playlistId,
    privacyComments,
    privacyVideo,
    wall,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
