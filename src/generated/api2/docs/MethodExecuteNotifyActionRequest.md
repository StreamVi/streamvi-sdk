# MethodExecuteNotifyActionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**notify_history_id** | **string** | Notification ID owned by the authenticated account | [default to undefined]
**action_name** | **string** | Invitation accept/decline, or an existing renewal accept/accept_1/accept_2/accept_3 action; links and test actions are excluded | [default to undefined]
**group_id** | **string** | Existing action group ID from the notification | [default to undefined]

## Example

```typescript
import { MethodExecuteNotifyActionRequest } from 'streamvi-api-client';

const instance: MethodExecuteNotifyActionRequest = {
    v,
    language,
    notify_history_id,
    action_name,
    group_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
