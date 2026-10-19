# PayoutSystemAccountListItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payout_system_account_id** | **number** | Payout system account id | [default to undefined]
**payout_system_id** | **number** | Payout system id | [default to undefined]
**description** | **string** | Description | [default to undefined]
**commission** | **number** | Commission: commission_type&#x3D;fix means minor units of currency (kopecks for rub, cents for usd); commission_type&#x3D;percent means a percentage (5 means 5%). Do not divide percentage values by 100 for display. | [default to undefined]
**commission_type** | **string** | Commission unit selector: fix means a monetary amount in minor units; percent means a percentage. | [default to undefined]
**title** | **string** | Title | [default to undefined]
**active** | **boolean** | Active | [default to undefined]
**currency** | **string** | Currency | [default to undefined]
**min_amount** | **number** | Minimum amount. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**max_amount** | **number** | Maximum amount. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]

## Example

```typescript
import { PayoutSystemAccountListItemResponse } from 'streamvi-api-client';

const instance: PayoutSystemAccountListItemResponse = {
    payout_system_account_id,
    payout_system_id,
    description,
    commission,
    commission_type,
    title,
    active,
    currency,
    min_amount,
    max_amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
