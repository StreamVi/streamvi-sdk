# TranscoderItemDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**transcoder_id** | **number** | Transcoder id | [default to undefined]

## Example

```typescript
import { TranscoderItemDto } from 'streamvi-api-client';

const instance: TranscoderItemDto = {
    v,
    language,
    project_id,
    transcoder_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
