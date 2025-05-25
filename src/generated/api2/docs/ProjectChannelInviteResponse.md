# ProjectChannelInviteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_channel_invite_id** | **number** | Unique id | [default to undefined]
**channel_id** | **number** | Channel id | [default to undefined]
**to_project_id** | **number** | Project id (user) | [default to undefined]
**access_type** | **number** | Access type | [default to undefined]
**date** | **string** | Date create | [default to undefined]
**secret** | **string** | Secret key for link | [default to undefined]
**email** | **string** | Email | [default to undefined]
**reject** | **boolean** | If rejected request then true | [default to undefined]
**from_user_id** | **number** | The user who granted access | [default to undefined]
**from_project_id** | **number** | from_project_id | [default to undefined]
**to_project_** | [**ProjectChannelInviteProjectResponse**](ProjectChannelInviteProjectResponse.md) | User info | [optional] [default to undefined]

## Example

```typescript
import { ProjectChannelInviteResponse } from './api';

const instance: ProjectChannelInviteResponse = {
    project_channel_invite_id,
    channel_id,
    to_project_id,
    access_type,
    date,
    secret,
    email,
    reject,
    from_user_id,
    from_project_id,
    to_project_,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
