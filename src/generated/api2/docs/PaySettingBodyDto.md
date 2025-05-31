# PaySettingBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**projectId** | **number** | Project id | [default to undefined]
**countrieId** | **number** | Countrie id | [default to undefined]
**organizationId** | **number** | Organization | [optional] [default to undefined]
**paySystemId** | **number** | Pay system id | [default to undefined]
**email** | **string** | E-mail | [default to undefined]
**description** | **string** | Additional information about the payment | [optional] [default to undefined]

## Example

```typescript
import { PaySettingBodyDto } from 'streamvi-api-client';

const instance: PaySettingBodyDto = {
    v,
    language,
    projectId,
    countrieId,
    organizationId,
    paySystemId,
    email,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
