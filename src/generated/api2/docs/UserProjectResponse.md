# UserProjectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Primary key | [default to undefined]
**user_id** | **number** | User id | [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**access_type** | **number** | Access type | [default to undefined]
**project** | [**UserProject2ProjectResponse**](UserProject2ProjectResponse.md) | Project data | [default to undefined]
**member_count** | **number** | Members count | [default to undefined]

## Example

```typescript
import { UserProjectResponse } from './api';

const instance: UserProjectResponse = {
    id,
    user_id,
    project_id,
    access_type,
    project,
    member_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
