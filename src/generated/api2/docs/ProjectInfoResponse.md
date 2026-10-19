# ProjectInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **string** | Current language | [default to LanguageEnum_En]
**data** | [**ProjectInfoDataResponse**](ProjectInfoDataResponse.md) | Project info | [default to undefined]
**restream** | [**ProjectInfoRestreamResponse**](ProjectInfoRestreamResponse.md) | Restream tariff | [optional] [default to undefined]
**transcoding** | [**ProjectInfoTranscodingResponse**](ProjectInfoTranscodingResponse.md) |  | [default to undefined]
**storage** | [**ProjectInfoStorageResponse**](ProjectInfoStorageResponse.md) |  | [default to undefined]
**webinar** | [**ProjectInfoWebinarResponse**](ProjectInfoWebinarResponse.md) |  | [default to undefined]
**access** | [**ProjectInfoAccessResponse**](ProjectInfoAccessResponse.md) | Project info access | [default to undefined]

## Example

```typescript
import { ProjectInfoResponse } from 'streamvi-api-client';

const instance: ProjectInfoResponse = {
    language,
    data,
    restream,
    transcoding,
    storage,
    webinar,
    access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
