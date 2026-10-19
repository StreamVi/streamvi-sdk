# UserProjectInviteLinkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_project_invite_id** | **number** | Unique id | [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**to_user_id** | **number** | User id (in invite for user id) | [default to undefined]
**access_type** | **number** | Access type | [default to undefined]
**date** | **string** | Date create | [default to undefined]
**secret** | **string** | Secret key for link | [default to undefined]
**email** | **string** | Email | [default to undefined]
**reject** | **boolean** | If rejected then true | [default to undefined]
**from_user_id** | **number** | The user who granted access | [default to undefined]
**project_** | [**UserProjectInviteUserLinkResponse**](UserProjectInviteUserLinkResponse.md) | Project info | [optional] [default to undefined]

## Example

```typescript
import { UserProjectInviteLinkResponse } from 'streamvi-api-client';

const instance: UserProjectInviteLinkResponse = {
    user_project_invite_id,
    project_id,
    to_user_id,
    access_type,
    date,
    secret,
    email,
    reject,
    from_user_id,
    project_,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
