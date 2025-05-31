# ProjectChannelInviteLinkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectChannelInviteId** | **number** | Unique id | [default to undefined]
**channelId** | **number** | Channel id | [default to undefined]
**toProjectId** | **number** | Project id (in invite for project id) | [default to undefined]
**accessType** | **number** | Access type | [default to undefined]
**date** | **string** | Date create | [default to undefined]
**secret** | **string** | Secret key for link | [default to undefined]
**email** | **string** | Email | [default to undefined]
**reject** | **boolean** | If rejected then true | [default to undefined]
**fromUserId** | **number** | The user who granted access | [default to undefined]
**channel** | [**ProjectChannelInviteChannelLinkResponse**](ProjectChannelInviteChannelLinkResponse.md) | Project info | [optional] [default to undefined]

## Example

```typescript
import { ProjectChannelInviteLinkResponse } from 'streamvi-api-client';

const instance: ProjectChannelInviteLinkResponse = {
    projectChannelInviteId,
    channelId,
    toProjectId,
    accessType,
    date,
    secret,
    email,
    reject,
    fromUserId,
    channel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
