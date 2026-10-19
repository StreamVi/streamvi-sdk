# SetWaitStreamKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**wait_minutes** | **number** | Integer disconnect protection duration in minutes. 0 disables protection; a positive value enables/changes the waiting time. The current plan determines the maximum: wait_max_minutes from GET /method/stream-keys. For example, 15 is valid only if the plan limit permits it. | [default to undefined]

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
