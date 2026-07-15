# WalletConnectPaymentIntentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **number** | Payment id | [default to undefined]
**chain_id** | **number** | Chain id | [default to undefined]
**provider** | **string** | Crypto provider | [default to undefined]
**chain_family** | **string** | Crypto chain family | [default to undefined]
**network_key** | **string** | Crypto network key | [default to undefined]
**chain_name** | **string** | Chain name | [default to undefined]
**is_testnet** | **boolean** | Whether the chain is a testnet | [default to undefined]
**token_symbol** | **string** | Token symbol | [default to undefined]
**asset_type** | **string** | Asset type: erc20 or native | [default to undefined]
**token_contract** | **string** | Token contract address, or zero address for native coin | [default to undefined]
**contract_address** | **string** | Payment vault contract address | [default to undefined]
**payer_address** | **string** | EVM payer address | [default to undefined]
**payment_ref** | **string** | Payment reference bytes32 | [default to undefined]
**token_decimals** | **number** | Token decimals | [default to undefined]
**amount_units** | **string** | Amount in asset base units | [default to undefined]
**fiat_amount** | **number** | Fiat payment amount in cents | [default to undefined]
**fiat_currency** | **string** | Fiat payment currency | [default to undefined]
**exchange_rate** | **string** | Exchange rate used for this intent | [default to undefined]
**rate_base** | **string** | Exchange rate base asset | [default to undefined]
**rate_quote** | **string** | Exchange rate quote currency | [default to undefined]
**rate_expires_at** | **string** | Exchange rate expiration date | [default to undefined]
**rate_expires_at_unix** | **number** | Exchange rate expiration Unix timestamp | [default to undefined]
**receiver_address** | **string** | Treasury receiver address | [default to undefined]
**expires_at** | **string** | Payment expiration date | [default to undefined]
**expires_at_unix** | **number** | Payment expiration Unix timestamp | [default to undefined]
**signature** | **string** | Backend EIP-712 intent signature | [default to undefined]
**status** | **string** | Payment status | [default to undefined]

## Example

```typescript
import { WalletConnectPaymentIntentDto } from 'streamvi-api-client';

const instance: WalletConnectPaymentIntentDto = {
    payment_id,
    chain_id,
    provider,
    chain_family,
    network_key,
    chain_name,
    is_testnet,
    token_symbol,
    asset_type,
    token_contract,
    contract_address,
    payer_address,
    payment_ref,
    token_decimals,
    amount_units,
    fiat_amount,
    fiat_currency,
    exchange_rate,
    rate_base,
    rate_quote,
    rate_expires_at,
    rate_expires_at_unix,
    receiver_address,
    expires_at,
    expires_at_unix,
    signature,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
