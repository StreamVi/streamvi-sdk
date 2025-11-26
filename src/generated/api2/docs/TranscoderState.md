# TranscoderState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Status | [default to undefined]
**bitrate** | **number** | Bitrate current | [default to undefined]
**delay** | **number** | Delay current | [default to undefined]
**start_at** | **string** | Start at | [default to undefined]
**source_connected** | **boolean** | Source connected | [default to undefined]
**transcoder_running** | **boolean** | Transcoder running | [default to undefined]
**target_connected** | **boolean** | Target connected | [default to undefined]

## Example

```typescript
import { TranscoderState } from 'streamvi-api-client';

const instance: TranscoderState = {
    status,
    bitrate,
    delay,
    start_at,
    source_connected,
    transcoder_running,
    target_connected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
