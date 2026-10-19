# ProjectChannelInviteLinkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_channel_invite_id** | **number** | Unique id | [default to undefined]
**channel_id** | **number** | Internal numeric StreamVi channel ID, also returned as group_id in channel search results. Do not use the external/platform id, even if it contains only digits. | [default to undefined]
**to_project_id** | **number** | Project id (in invite for project id) | [default to undefined]
**access_type** | **number** | Access type | [default to undefined]
**date** | **string** | Date create | [default to undefined]
**secret** | **string** | Secret key for link | [default to undefined]
**email** | **string** | Email | [default to undefined]
**reject** | **boolean** | If rejected then true | [default to undefined]
**from_user_id** | **number** | The user who granted access | [default to undefined]
**channel_** | [**ProjectChannelInviteChannelLinkResponse**](ProjectChannelInviteChannelLinkResponse.md) | Project info | [optional] [default to undefined]

## Example

```typescript
import { ProjectChannelInviteLinkResponse } from 'streamvi-api-client';

const instance: ProjectChannelInviteLinkResponse = {
    project_channel_invite_id,
    channel_id,
    to_project_id,
    access_type,
    date,
    secret,
    email,
    reject,
    from_user_id,
    channel_,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
