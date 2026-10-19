# PlanTranscodingCheckResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Not calculated: tariff price calculation is not implemented. Always 0 (placeholder), not a free tariff or amount due. Do not use this field to create payments. | [default to 0]
**balance** | [**BalanceForPayResponse**](BalanceForPayResponse.md) | Balance for pay object | [default to undefined]
**refund** | [**PlanRefund**](PlanRefund.md) | Refund for rate | [default to undefined]

## Example

```typescript
import { PlanTranscodingCheckResponse } from 'streamvi-api-client';

const instance: PlanTranscodingCheckResponse = {
    amount,
    balance,
    refund,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
