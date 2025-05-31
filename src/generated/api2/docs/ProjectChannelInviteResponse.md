# ProjectChannelInviteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectChannelInviteId** | **number** | Unique id | [default to undefined]
**channelId** | **number** | Channel id | [default to undefined]
**toProjectId** | **number** | Project id (user) | [default to undefined]
**accessType** | **number** | Access type | [default to undefined]
**date** | **string** | Date create | [default to undefined]
**secret** | **string** | Secret key for link | [default to undefined]
**email** | **string** | Email | [default to undefined]
**reject** | **boolean** | If rejected request then true | [default to undefined]
**fromUserId** | **number** | The user who granted access | [default to undefined]
**fromProjectId** | **number** | from_project_id | [default to undefined]
**toProject** | [**ProjectChannelInviteProjectResponse**](ProjectChannelInviteProjectResponse.md) | User info | [optional] [default to undefined]

## Example

```typescript
import { ProjectChannelInviteResponse } from 'streamvi-api-client';

const instance: ProjectChannelInviteResponse = {
    projectChannelInviteId,
    channelId,
    toProjectId,
    accessType,
    date,
    secret,
    email,
    reject,
    fromUserId,
    fromProjectId,
    toProject,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
