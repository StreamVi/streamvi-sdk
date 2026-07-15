# SiteUpdateOptionsTwitchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **number** | Channel id | [default to undefined]
**title** | **string** |  | [default to 'title']
**category_id** | **string** | category id | [optional] [default to '498482']
**category_name** | **string** | category name | [optional] [default to 'name']
**lang** | **string** |  | [optional] [default to 'Lang']
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**domain** | **string** | domain | [default to 'live.twitch.tv']

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
