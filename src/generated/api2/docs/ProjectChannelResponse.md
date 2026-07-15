# ProjectChannelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **number** | Access type | [default to undefined]
**active** | **number** |  | [default to undefined]
**channel_id** | **number** | Channel id | [default to undefined]
**id** | **number** | Primary key | [default to undefined]
**owner_id** | **number** | Owner id | [default to undefined]
**preview** | **string** | Preview | [optional] [default to undefined]
**title** | **string** | Title | [optional] [default to undefined]
**transcoder_id** | **number** | Transcoder ID | [optional] [default to undefined]
**unlim** | **string** | Unlim | [default to undefined]
**usageType** | **number** | usageType | [default to undefined]
**project_id** | **number** | User id | [default to undefined]
**project_** | [**ProjectChannelMemberInfoResponse**](ProjectChannelMemberInfoResponse.md) | User info | [optional] [default to undefined]
**streamInfo** | [**ProjectChannelMemberStreamInfoResponse**](ProjectChannelMemberStreamInfoResponse.md) | Stream info | [default to undefined]

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
