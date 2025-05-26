# ProjectInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_en]
**data** | [**ProjectInfoDataResponse**](ProjectInfoDataResponse.md) | Project info | [default to undefined]
**restream** | [**ProjectInfoRestreamResponse**](ProjectInfoRestreamResponse.md) | Restream tariff | [default to undefined]
**transcoding** | [**ProjectInfoTranscodingResponse**](ProjectInfoTranscodingResponse.md) | Transcoding tariff | [default to undefined]
**storage** | [**ProjectInfoStorageResponse**](ProjectInfoStorageResponse.md) | Storage tariff | [default to undefined]
**access** | [**ProjectInfoAccessResponse**](ProjectInfoAccessResponse.md) | Project info access | [default to undefined]

## Example

```typescript
import { ProjectInfoResponse } from './api';

const instance: ProjectInfoResponse = {
    v,
    language,
    data,
    restream,
    transcoding,
    storage,
    access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
