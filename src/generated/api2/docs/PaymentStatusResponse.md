# PaymentStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **number** | Payment Id | [default to undefined]
**amount** | **number** | Amount. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**currency** | **string** | Currency | [default to undefined]
**plan_period** | **string** | Period | [default to undefined]
**status** | **string** | Status | [default to undefined]
**type** | **string** | Tariff type | [default to undefined]
**title** | **string** | Tariff title | [optional] [default to undefined]

## Example

```typescript
import { PaymentStatusResponse } from 'streamvi-api-client';

const instance: PaymentStatusResponse = {
    payment_id,
    amount,
    currency,
    plan_period,
    status,
    type,
    title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
