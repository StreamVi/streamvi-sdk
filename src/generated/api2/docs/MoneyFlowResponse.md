# MoneyFlowResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**money_flow_id** | **number** | id | [default to undefined]
**amount** | **number** | Amount. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**currency** | **string** | Currency | [optional] [default to undefined]
**date** | **string** | Date | [default to undefined]
**type** | **string** | Type | [default to undefined]
**balance** | **number** | Current balance before transaction. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**details** | [**MoneyFlowDetails**](MoneyFlowDetails.md) |  | [optional] [default to undefined]
**payment_details** | [**MoneyFlowPaymentDetails**](MoneyFlowPaymentDetails.md) |  | [optional] [default to undefined]
**payout_details** | [**MoneyFlowPayoutDetails**](MoneyFlowPayoutDetails.md) |  | [optional] [default to undefined]
**refund_details** | [**MoneyFlowRefundDetails**](MoneyFlowRefundDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MoneyFlowResponse } from 'streamvi-api-client';

const instance: MoneyFlowResponse = {
    money_flow_id,
    amount,
    currency,
    date,
    type,
    balance,
    details,
    payment_details,
    payout_details,
    refund_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
