# PayCheckCountryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirm** | **boolean** | Is show modal confirmation | [default to undefined]
**exchange** | **number** | Exchange rate | [default to undefined]
**currency** | **string** | Currency | [default to undefined]
**country** | **object** | Country | [default to undefined]
**balance** | **object** | Balances after conversion to the target currency: balance_bonus, balance_payment and balance_profit are amounts in minor units (kopecks for rub, cents for usd). Use the currency field of this response. Divide each amount by 100 for display; 12345 means 123.45 major units. | [default to undefined]

## Example

```typescript
import { PayCheckCountryResponse } from 'streamvi-api-client';

const instance: PayCheckCountryResponse = {
    confirm,
    exchange,
    currency,
    country,
    balance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
