# PaySettingBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**countrie_id** | **number** | Countrie id | [default to undefined]
**organization_id** | **number** | Organization | [optional] [default to undefined]
**pay_system_id** | **number** | Pay system id | [default to undefined]
**email** | **string** | E-mail | [default to undefined]
**description** | **string** | Additional information about the payment | [optional] [default to undefined]

## Example

```typescript
import { PaySettingBodyDto } from 'streamvi-api-client';

const instance: PaySettingBodyDto = {
    v,
    language,
    project_id,
    countrie_id,
    organization_id,
    pay_system_id,
    email,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
