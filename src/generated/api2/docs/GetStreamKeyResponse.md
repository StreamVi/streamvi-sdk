# GetStreamKeyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wait** | **number** | Disconnect protection wait time in minutes | [default to undefined]
**wait_max_minutes** | **number** | Maximum disconnect protection wait time for the active purchased tariff, in minutes | [default to undefined]
**record** | **boolean** | Is recordable stream | [default to undefined]
**key** | **string** | Key | [default to undefined]
**pause_media_service_file_id** | **number** | Pause video id | [default to undefined]
**lost_media_service_file_id** | **number** | Protected video id | [default to undefined]

## Example

```typescript
import { GetStreamKeyResponse } from 'streamvi-api-client';

const instance: GetStreamKeyResponse = {
    wait,
    wait_max_minutes,
    record,
    key,
    pause_media_service_file_id,
    lost_media_service_file_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
