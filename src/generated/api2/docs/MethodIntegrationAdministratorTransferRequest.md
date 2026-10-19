# MethodIntegrationAdministratorTransferRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**integration_id** | **string** | Developer application Mongo ID; authorization uses its actual owner and administrators | [default to undefined]
**user_id** | **number** | Internal numeric user ID of the new application owner | [default to undefined]

## Example

```typescript
import { MethodIntegrationAdministratorTransferRequest } from 'streamvi-api-client';

const instance: MethodIntegrationAdministratorTransferRequest = {
    v,
    language,
    integration_id,
    user_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
