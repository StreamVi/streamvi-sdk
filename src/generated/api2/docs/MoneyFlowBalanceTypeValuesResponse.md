# MoneyFlowBalanceTypeValuesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bonus** | **number** | Bonus balance. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [optional] [default to undefined]
**payment** | **number** | Payment balance. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [optional] [default to undefined]
**profit** | **number** | Profit balance. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [optional] [default to undefined]

## Example

```typescript
import { MoneyFlowBalanceTypeValuesResponse } from 'streamvi-api-client';

const instance: MoneyFlowBalanceTypeValuesResponse = {
    bonus,
    payment,
    profit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
