# PaySettingResponseV3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **number** | Project id | [default to undefined]
**currency** | **string** | Currency | [default to undefined]
**countrieId** | **number** | Country | [default to undefined]
**organizationId** | **number** | Organiztion | [default to undefined]
**paySystemId** | **number** | Pay system id | [default to undefined]
**email** | **string** | E-mail | [default to undefined]
**street** | **string** | Street | [optional] [default to undefined]
**houseNumber** | **string** | House number | [optional] [default to undefined]
**zip** | **string** | Postal code | [optional] [default to undefined]
**city** | **string** | City | [optional] [default to undefined]
**state** | **string** | State ot region | [optional] [default to undefined]
**companyName** | **string** | Company name | [optional] [default to undefined]
**description** | **string** | Additional information about the payment | [optional] [default to undefined]

## Example

```typescript
import { PaySettingResponseV3 } from 'streamvi-api-client';

const instance: PaySettingResponseV3 = {
    projectId,
    currency,
    countrieId,
    organizationId,
    paySystemId,
    email,
    street,
    houseNumber,
    zip,
    city,
    state,
    companyName,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
