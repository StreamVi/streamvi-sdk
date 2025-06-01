# UserProjectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Primary key | [default to undefined]
**userId** | **number** | User id | [default to undefined]
**projectId** | **number** | Project id | [default to undefined]
**accessType** | **number** | Access type | [default to undefined]
**project** | **UserProject2ProjectResponse**(UserProject2ProjectResponse.md) | Project data | [default to undefined]
**memberCount** | **number** | Members count | [default to undefined]

## Example

```typescript
import { UserProjectResponse } from 'streamvi-api-client';

const instance: UserProjectResponse = {
    id,
    userId,
    projectId,
    accessType,
    project,
    memberCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
