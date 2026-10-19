# MethodIntegrationAdministratorAddRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**integration_id** | **string** | Developer application Mongo ID; authorization uses its actual owner and administrators | [default to undefined]
**recipient_id** | **string** | External StreamVi identity code | [default to undefined]
**level** | **string** | Owner or developer access level; assigning owner access remains restricted to the existing owner | [default to undefined]

## Example

```typescript
import { MethodIntegrationAdministratorAddRequest } from 'streamvi-api-client';

const instance: MethodIntegrationAdministratorAddRequest = {
    v,
    language,
    integration_id,
    recipient_id,
    level,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
