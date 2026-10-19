# MethodIntegrationInviteDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**integration_id** | **string** | Developer application Mongo ID; authorization uses its actual owner and administrators | [default to undefined]
**integration_invite_id** | **number** | Internal numeric outgoing invitation ID; must belong to the specified application | [default to undefined]

## Example

```typescript
import { MethodIntegrationInviteDeleteRequest } from 'streamvi-api-client';

const instance: MethodIntegrationInviteDeleteRequest = {
    v,
    language,
    integration_id,
    integration_invite_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
