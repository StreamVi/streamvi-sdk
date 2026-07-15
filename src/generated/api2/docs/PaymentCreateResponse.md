# PaymentCreateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **number** | Payment Id | [default to undefined]
**pay_name** | **string** | Pay system name | [default to undefined]
**pay_id** | **string** | Pay system id | [optional] [default to undefined]
**pay_key** | **string** | Pay system key | [optional] [default to undefined]
**crypto_provider** | **string** | Crypto payment provider | [optional] [default to undefined]
**crypto_chain_family** | **string** | Crypto chain family | [optional] [default to undefined]
**crypto_asset_type** | **string** | Crypto asset type | [optional] [default to undefined]
**crypto_token_symbol** | **string** | Crypto token symbol | [optional] [default to undefined]

## Example

```typescript
import { PaymentCreateResponse } from 'streamvi-api-client';

const instance: PaymentCreateResponse = {
    payment_id,
    pay_name,
    pay_id,
    pay_key,
    crypto_provider,
    crypto_chain_family,
    crypto_asset_type,
    crypto_token_symbol,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
