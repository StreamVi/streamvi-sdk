# ProjectActivityActorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**label** | **string** |  | [optional] [default to undefined]
**installation_id** | **string** |  | [optional] [default to undefined]
**authorized_user_id** | **string** |  | [optional] [default to undefined]
**display** | [**ProjectActivityUserDisplayResponse**](ProjectActivityUserDisplayResponse.md) |  | [optional] [default to undefined]
**authorized_user** | [**ProjectActivityAuthorizedUserDisplayResponse**](ProjectActivityAuthorizedUserDisplayResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProjectActivityActorResponse } from 'streamvi-api-client';

const instance: ProjectActivityActorResponse = {
    type,
    id,
    label,
    installation_id,
    authorized_user_id,
    display,
    authorized_user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
