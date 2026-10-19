# BalanceForPayResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **number** | Balance. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**currency** | **string** | Currency | [default to undefined]
**balances_allow** | **Array&lt;string&gt;** | Allowed balances | [default to undefined]
**balances_values** | [**MoneyFlowBalanceTypeValuesResponse**](MoneyFlowBalanceTypeValuesResponse.md) | Balances values | [default to undefined]

## Example

```typescript
import { BalanceForPayResponse } from 'streamvi-api-client';

const instance: BalanceForPayResponse = {
    balance,
    currency,
    balances_allow,
    balances_values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
