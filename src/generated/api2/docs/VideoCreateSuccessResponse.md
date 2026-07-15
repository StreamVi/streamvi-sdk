# VideoCreateSuccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Response status for API discriminator | [default to undefined]
**url** | **string** | URL for upload video to storage | [default to undefined]
**token** | **string** | Token for connect to centrifuge | [default to undefined]
**channel** | **string** | Channel for connect to centrifuge | [default to undefined]
**space** | **number** | Upload space in bytes | [default to undefined]
**success** | **boolean** | Upload session success | [default to undefined]

## Example

```typescript
import { VideoCreateSuccessResponse } from 'streamvi-api-client';

const instance: VideoCreateSuccessResponse = {
    status,
    url,
    token,
    channel,
    space,
    success,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
