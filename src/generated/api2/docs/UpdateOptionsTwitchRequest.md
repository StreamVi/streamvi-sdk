# UpdateOptionsTwitchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**projectId** | **number** | Project id | [default to undefined]
**channelId** | **number** | Channel id | [default to undefined]
**title** | **string** |  | [default to 'title']
**categoryId** | **string** | category id | [default to '498482']
**categoryName** | **string** | category name | [default to 'name']
**lang** | **string** |  | [default to 'Lang']
**tags** | **Set&lt;string&gt;** |  | [default to undefined]
**domain** | **string** | domain | [default to 'live.twitch.tv']

## Example

```typescript
import { UpdateOptionsTwitchRequest } from 'streamvi-api-client';

const instance: UpdateOptionsTwitchRequest = {
    v,
    language,
    projectId,
    channelId,
    title,
    categoryId,
    categoryName,
    lang,
    tags,
    domain,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
