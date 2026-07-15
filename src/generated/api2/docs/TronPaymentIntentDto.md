# TronPaymentIntentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **number** | Payment id | [default to undefined]
**provider** | **string** | Crypto provider | [default to undefined]
**chain_family** | **string** | Crypto chain family | [default to undefined]
**network_key** | **string** | Crypto network key | [default to undefined]
**chain_name** | **string** | Chain name | [default to undefined]
**is_testnet** | **boolean** | Whether the chain is a testnet | [default to undefined]
**asset_type** | **string** | Asset type | [default to undefined]
**token_symbol** | **string** | Token symbol | [default to undefined]
**token_address** | **string** | Token contract address | [default to undefined]
**token_decimals** | **number** | Token decimals | [default to undefined]
**deposit_address** | **string** | Project deposit address | [default to undefined]
**deposit_address_hex** | **string** | Project deposit address in TRON hex format | [default to undefined]
**payment_ref** | **string** | Payment reference bytes32 | [default to undefined]
**amount_units** | **string** | Amount in token base units | [default to undefined]
**amount_decimal** | **string** | Amount in token decimal units | [default to undefined]
**fiat_amount** | **number** | Fiat payment amount in cents | [default to undefined]
**fiat_currency** | **string** | Fiat payment currency | [default to undefined]
**exchange_rate** | **string** | Exchange rate used for this intent | [default to undefined]
**rate_base** | **string** | Exchange rate base asset | [default to undefined]
**rate_quote** | **string** | Exchange rate quote currency | [default to undefined]
**rate_expires_at** | **string** | Exchange rate expiration date | [default to undefined]
**rate_expires_at_unix** | **number** | Exchange rate expiration Unix timestamp | [default to undefined]
**expires_at** | **string** | Payment expiration date | [default to undefined]
**expires_at_unix** | **number** | Payment expiration Unix timestamp | [default to undefined]
**status** | **string** | Payment status | [default to undefined]

## Example

```typescript
import { TronPaymentIntentDto } from 'streamvi-api-client';

const instance: TronPaymentIntentDto = {
    payment_id,
    provider,
    chain_family,
    network_key,
    chain_name,
    is_testnet,
    asset_type,
    token_symbol,
    token_address,
    token_decimals,
    deposit_address,
    deposit_address_hex,
    payment_ref,
    amount_units,
    amount_decimal,
    fiat_amount,
    fiat_currency,
    exchange_rate,
    rate_base,
    rate_quote,
    rate_expires_at,
    rate_expires_at_unix,
    expires_at,
    expires_at_unix,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
