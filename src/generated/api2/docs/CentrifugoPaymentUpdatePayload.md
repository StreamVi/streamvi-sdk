# CentrifugoPaymentUpdatePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **number** | Payment id | [default to undefined]
**provider** | **string** | Crypto provider | [default to undefined]
**status** | **string** | Payment status | [default to undefined]
**tx_hash** | **string** | TRON transaction hash | [optional] [default to undefined]
**confirmations** | **number** | Current confirmations | [optional] [default to undefined]
**required_confirmations** | **number** | Required confirmations | [optional] [default to undefined]
**amount_units** | **string** | Received amount in token base units | [optional] [default to undefined]
**amount_decimal** | **string** | Received amount in token decimal units | [optional] [default to undefined]

## Example

```typescript
import { CentrifugoPaymentUpdatePayload } from 'streamvi-api-client';

const instance: CentrifugoPaymentUpdatePayload = {
    payment_id,
    provider,
    status,
    tx_hash,
    confirmations,
    required_confirmations,
    amount_units,
    amount_decimal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
