# SiteSetTranscoderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**projectId** | **number** | Project id | [default to undefined]
**channelId** | **number** | Channel id | [default to undefined]
**transcoderId** | **number** | Transcoder id | [optional] [default to undefined]

## Example

```typescript
import { SiteSetTranscoderRequest } from 'streamvi-api-client';

const instance: SiteSetTranscoderRequest = {
    v,
    language,
    projectId,
    channelId,
    transcoderId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
