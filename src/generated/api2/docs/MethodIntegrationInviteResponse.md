# MethodIntegrationInviteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invite_id** | **number** | Internal numeric invitation ID | [default to undefined]
**integration_id** | **string** | Developer application Mongo ID; authorization uses its actual owner and administrators | [default to undefined]
**role** | **string** | Owner or developer access level assigned by the invitation | [default to undefined]
**status** | **string** | Stored invitation status; only an unconsumed pending invitation can be accepted | [default to undefined]
**created_at** | **string** | Invitation creation timestamp | [default to undefined]
**expires_at** | **string** | Pending invitations expire seven days after creation | [default to undefined]
**secret** | **string** | Invitation link secret; do not log or expose to an unauthorized recipient | [default to undefined]
**from_user** | [**MethodIntegrationInviteUserResponse**](MethodIntegrationInviteUserResponse.md) | Invitation sender display identity | [default to undefined]
**target_user** | [**MethodIntegrationInviteUserResponse**](MethodIntegrationInviteUserResponse.md) | Invitation recipient display identity | [default to undefined]

## Example

```typescript
import { MethodIntegrationInviteResponse } from 'streamvi-api-client';

const instance: MethodIntegrationInviteResponse = {
    invite_id,
    integration_id,
    role,
    status,
    created_at,
    expires_at,
    secret,
    from_user,
    target_user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
