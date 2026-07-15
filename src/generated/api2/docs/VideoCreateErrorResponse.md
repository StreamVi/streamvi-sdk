# VideoCreateErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Response status for API discriminator | [default to undefined]
**error** | **string** | Error message | [default to undefined]
**space** | **number** | Upload space in bytes | [default to undefined]
**success** | **boolean** | Upload session success | [default to undefined]

## Example

```typescript
import { VideoCreateErrorResponse } from 'streamvi-api-client';

const instance: VideoCreateErrorResponse = {
    status,
    error,
    space,
    success,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
