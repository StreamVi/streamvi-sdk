# PayoutCreateRequestBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_en]
**payout_system_account_id** | **number** | Payout system account | [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**amount** | **number** | Amount | [default to undefined]
**wallet_value** | **string** | Wallet value | [default to undefined]

## Example

```typescript
import { PayoutCreateRequestBodyDto } from './api';

const instance: PayoutCreateRequestBodyDto = {
    v,
    language,
    payout_system_account_id,
    project_id,
    amount,
    wallet_value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
