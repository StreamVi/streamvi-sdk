# ProjectActivityContextResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transport** | **string** |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**channel_platform** | **string** |  | [optional] [default to undefined]
**invitation** | [**ProjectActivityEntityRefResponse**](ProjectActivityEntityRefResponse.md) |  | [optional] [default to undefined]
**affected_project** | [**ProjectActivityEntityRefResponse**](ProjectActivityEntityRefResponse.md) |  | [optional] [default to undefined]
**installation** | [**ProjectActivityEntityRefResponse**](ProjectActivityEntityRefResponse.md) |  | [optional] [default to undefined]
**pool** | [**ProjectActivityEntityRefResponse**](ProjectActivityEntityRefResponse.md) |  | [optional] [default to undefined]
**removal_reason** | **string** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**primary_change** | **string** |  | [optional] [default to undefined]
**derived_changes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ProjectActivityContextResponse } from 'streamvi-api-client';

const instance: ProjectActivityContextResponse = {
    transport,
    region,
    channel_platform,
    invitation,
    affected_project,
    installation,
    pool,
    removal_reason,
    provider,
    primary_change,
    derived_changes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
