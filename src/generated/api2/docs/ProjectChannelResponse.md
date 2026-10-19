# ProjectChannelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **number** | Access type | [default to undefined]
**active** | **boolean** |  | [default to undefined]
**channel_id** | **number** | Internal numeric StreamVi channel ID, also returned as group_id in channel search results. Do not use the external/platform id, even if it contains only digits. | [default to undefined]
**id** | **number** | Internal ID of the project-channel access record. This is not the channel_id or project_id. | [default to undefined]
**owner_id** | **number** | Owner id | [default to undefined]
**preview** | **string** | Preview | [optional] [default to undefined]
**title** | **string** | Title | [optional] [default to undefined]
**transcoder_id** | **number** | Transcoder ID | [optional] [default to undefined]
**unlim** | **string** | Unlim | [default to undefined]
**usageType** | **number** | usageType | [default to undefined]
**project_id** | **number** | User id | [default to undefined]
**project_** | [**ProjectChannelMemberInfoResponse**](ProjectChannelMemberInfoResponse.md) | User info | [optional] [default to undefined]
**streamInfo** | [**ProjectChannelResponseStreamInfo**](ProjectChannelResponseStreamInfo.md) |  | [default to undefined]

## Example

```typescript
import { ProjectChannelResponse } from 'streamvi-api-client';

const instance: ProjectChannelResponse = {
    access_type,
    active,
    channel_id,
    id,
    owner_id,
    preview,
    title,
    transcoder_id,
    unlim,
    usageType,
    project_id,
    project_,
    streamInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
