# DedicatedServerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**pool_id** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**date_create** | **string** |  | [default to undefined]
**status_history** | [**Array&lt;DedicatedServerStatusHistoryItemResponse&gt;**](DedicatedServerStatusHistoryItemResponse.md) |  | [default to undefined]
**urls** | [**DedicatedServerUrlsResponse**](DedicatedServerUrlsResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DedicatedServerResponse } from 'streamvi-api-client';

const instance: DedicatedServerResponse = {
    id,
    pool_id,
    status,
    date_create,
    status_history,
    urls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
