# TonConnectPaymentSubmitBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **number** | Payment id | [default to undefined]
**payment_ref** | **string** | Payment reference bytes32 hex | [default to undefined]
**payer_address** | **string** | Connected TON wallet address / payer | [default to undefined]
**tx_boc** | **string** | Signed external message BOC returned by TonConnect | [optional] [default to undefined]
**message_hash** | **string** | TON message hash | [optional] [default to undefined]

## Example

```typescript
import { TonConnectPaymentSubmitBodyDto } from 'streamvi-api-client';

const instance: TonConnectPaymentSubmitBodyDto = {
    payment_id,
    payment_ref,
    payer_address,
    tx_boc,
    message_hash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
