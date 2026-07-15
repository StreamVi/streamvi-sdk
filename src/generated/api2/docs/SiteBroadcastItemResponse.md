# SiteBroadcastItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Broadcast Id | [default to undefined]
**created_at** | **string** | Create time | [default to undefined]
**finish_at** | **string** | Finish time | [default to undefined]
**reconnects** | **number** | Count reconnects | [default to undefined]
**restreams** | [**Array&lt;SiteRestreamItemResponse&gt;**](SiteRestreamItemResponse.md) | Restream channels | [default to undefined]

## Example

```typescript
import { SiteBroadcastItemResponse } from 'streamvi-api-client';

const instance: SiteBroadcastItemResponse = {
    id,
    created_at,
    finish_at,
    reconnects,
    restreams,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
