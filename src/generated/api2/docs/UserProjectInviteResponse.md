# UserProjectInviteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_project_invite_id** | **number** | Unique id | [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**to_user_id** | **number** | User id (in invite for user id) | [optional] [default to undefined]
**access_type** | **number** | Access type | [default to undefined]
**date** | **string** | Date create | [default to undefined]
**secret** | **string** | Secret key for link | [default to undefined]
**email** | **string** | Email | [optional] [default to undefined]
**reject** | **boolean** | If rejected then true | [optional] [default to undefined]
**from_user_id** | **number** | The user who granted access | [optional] [default to undefined]
**to_user_** | [**UserProjectInviteUserResponse**](UserProjectInviteUserResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserProjectInviteResponse } from 'streamvi-api-client';

const instance: UserProjectInviteResponse = {
    user_project_invite_id,
    project_id,
    to_user_id,
    access_type,
    date,
    secret,
    email,
    reject,
    from_user_id,
    to_user_,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
