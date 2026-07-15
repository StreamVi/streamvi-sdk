# WalletConnectPaymentSubmitBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **number** | Payment id | [default to undefined]
**chain_id** | **number** | Chain id | [default to undefined]
**payment_ref** | **string** | Payment reference bytes32 | [default to undefined]
**tx_hash** | **string** | Transaction hash | [default to undefined]
**payer_address** | **string** | Connected wallet address / EVM payer | [default to undefined]

## Example

```typescript
import { WalletConnectPaymentSubmitBodyDto } from 'streamvi-api-client';

const instance: WalletConnectPaymentSubmitBodyDto = {
    payment_id,
    chain_id,
    payment_ref,
    tx_hash,
    payer_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
