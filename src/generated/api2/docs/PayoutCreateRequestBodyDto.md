# PayoutCreateRequestBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**payout_system_account_id** | **number** | Payout system account | [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**amount** | **number** | Payout amount in the project currency, which must match the selected payout system account currency. For example, send 10000 for 100 RUB or 100 USD; do not send 100. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**wallet_value** | **string** | Wallet value | [default to undefined]

## Example

```typescript
import { PayoutCreateRequestBodyDto } from 'streamvi-api-client';

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
