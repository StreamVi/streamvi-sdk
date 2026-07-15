# TonConnectPaymentStatusDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **number** | Payment id | [default to undefined]
**status** | **string** | Payment status | [default to undefined]
**confirmations** | **number** | Current confirmations | [optional] [default to undefined]
**required_confirmations** | **number** | Required confirmations | [optional] [default to undefined]
**tx_lt** | **string** | TON transaction logical time | [optional] [default to undefined]

## Example

```typescript
import { TonConnectPaymentStatusDto } from 'streamvi-api-client';

const instance: TonConnectPaymentStatusDto = {
    payment_id,
    status,
    confirmations,
    required_confirmations,
    tx_lt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
