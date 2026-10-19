# GetStreamKeyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wait** | **number** | Saved disconnect protection duration in minutes. 0 disables protection; null means no saved setting. Update with PUT /method/stream-keys/wait. | [default to undefined]
**wait_max_minutes** | **number** | Maximum disconnect protection wait time for the active purchased tariff, in minutes | [default to undefined]
**record** | **boolean** | Saved recording preference. Recording is under development; true does not confirm recording or the existence of a recorded video. | [default to undefined]
**key** | **string** | Secret publishing key of the selected project. Do not save in logs/examples; rotate with POST /method/stream-keys/rotate. | [default to undefined]
**pause_media_service_file_id** | **number** | Pause media-service-file ID; the tariff determines whether a custom or base file is used. null means no file. | [default to undefined]
**lost_media_service_file_id** | **number** | Signal-loss media-service-file ID; the tariff determines whether a custom or base file is used. null means no file. | [default to undefined]

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
