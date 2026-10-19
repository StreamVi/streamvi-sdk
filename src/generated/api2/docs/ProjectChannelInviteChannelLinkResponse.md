# ProjectChannelInviteChannelLinkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **number** | Internal numeric StreamVi channel ID, also returned as group_id in channel search results. Do not use the external/platform id, even if it contains only digits. | [default to undefined]
**name** | **string** | First name | [default to undefined]
**photo_50** | **string** | Link to avatar 50*50px | [default to undefined]

## Example

```typescript
import { ProjectChannelInviteChannelLinkResponse } from 'streamvi-api-client';

const instance: ProjectChannelInviteChannelLinkResponse = {
    channel_id,
    name,
    photo_50,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
