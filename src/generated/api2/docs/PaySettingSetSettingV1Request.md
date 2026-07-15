# PaySettingSetSettingV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**countrie_id** | **number** | Countrie id | [default to undefined]
**organization_id** | **number** | Organization | [optional] [default to undefined]
**pay_system_id** | **number** | Pay system id | [default to undefined]
**email** | **string** | E-mail | [default to undefined]
**description** | **string** | Additional information about the payment | [optional] [default to undefined]
**street** | **string** | Street | [default to undefined]
**house_number** | **string** | House number | [default to undefined]
**zip** | **string** | Postal code | [default to undefined]
**city** | **string** | City | [default to undefined]
**state** | **string** | State ot region | [default to undefined]
**company_name** | **string** | Company name | [optional] [default to undefined]

## Example

```typescript
import { PaySettingSetSettingV1Request } from 'streamvi-api-client';

const instance: PaySettingSetSettingV1Request = {
    v,
    language,
    project_id,
    countrie_id,
    organization_id,
    pay_system_id,
    email,
    description,
    street,
    house_number,
    zip,
    city,
    state,
    company_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
