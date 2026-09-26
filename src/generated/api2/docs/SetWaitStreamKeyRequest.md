# SetWaitStreamKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**wait_minutes** | **number** | Disconnect protection wait time in minutes | [default to undefined]

## Example

```typescript
import { SetWaitStreamKeyRequest } from 'streamvi-api-client';

const instance: SetWaitStreamKeyRequest = {
    v,
    language,
    project_id,
    wait_minutes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
