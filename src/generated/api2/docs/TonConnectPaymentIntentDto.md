# TonConnectPaymentIntentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **number** | Payment id | [default to undefined]
**provider** | **string** | Crypto provider | [default to undefined]
**chain_family** | **string** | Crypto chain family | [default to undefined]
**network_key** | **string** | Crypto network key | [default to undefined]
**chain_name** | **string** | Chain name | [default to undefined]
**is_testnet** | **boolean** | Whether the chain is a testnet | [default to undefined]
**token_symbol** | **string** | Native asset symbol | [default to undefined]
**asset_type** | **string** | Asset type | [default to undefined]
**token_decimals** | **number** | Token decimals | [default to undefined]
**contract_address** | **string** | TON vault contract address | [default to undefined]
**payer_address** | **string** | TON payer address | [default to undefined]
**payment_ref** | **string** | Payment reference bytes32 hex | [default to undefined]
**amount_units** | **string** | Amount in nanotons | [default to undefined]
**amount_nano** | **string** | Amount in nanotons | [default to undefined]
**fiat_amount** | **number** | Fiat payment amount in cents | [default to undefined]
**fiat_currency** | **string** | Fiat payment currency | [default to undefined]
**exchange_rate** | **string** | Exchange rate used for this intent | [default to undefined]
**rate_base** | **string** | Exchange rate base asset | [default to undefined]
**rate_quote** | **string** | Exchange rate quote currency | [default to undefined]
**rate_expires_at** | **string** | Exchange rate expiration date | [default to undefined]
**rate_expires_at_unix** | **number** | Exchange rate expiration Unix timestamp | [default to undefined]
**payload_boc** | **string** | TonConnect payload BOC base64 | [default to undefined]
**payload** | **string** | TonConnect payload BOC base64 | [default to undefined]
**expires_at** | **string** | Payment expiration date | [default to undefined]
**expires_at_unix** | **number** | Payment expiration Unix timestamp | [default to undefined]
**valid_until** | **number** | TonConnect validUntil Unix timestamp | [default to undefined]
**status** | **string** | Payment status | [default to undefined]

## Example

```typescript
import { TonConnectPaymentIntentDto } from 'streamvi-api-client';

const instance: TonConnectPaymentIntentDto = {
    payment_id,
    provider,
    chain_family,
    network_key,
    chain_name,
    is_testnet,
    token_symbol,
    asset_type,
    token_decimals,
    contract_address,
    payer_address,
    payment_ref,
    amount_units,
    amount_nano,
    fiat_amount,
    fiat_currency,
    exchange_rate,
    rate_base,
    rate_quote,
    rate_expires_at,
    rate_expires_at_unix,
    payload_boc,
    payload,
    expires_at,
    expires_at_unix,
    valid_until,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
