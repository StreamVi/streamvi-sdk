# PlanStorageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_storage_id** | **number** | Unique ID | [default to undefined]
**title** | **string** | Title | [default to undefined]
**min** | **number** | Minimum storage size, gb | [default to undefined]
**max** | **number** | Maximum storage size, gb | [default to undefined]
**price_rub** | **number** | Price per gb (RUB) | [default to undefined]
**price_usd** | **number** | Price per gb (USD) | [default to undefined]
**step** | **number** | Step increase in gb | [default to undefined]
**active** | **boolean** | Is active | [default to undefined]
**discount** | [**PlanStorageDiscountResponse**](PlanStorageDiscountResponse.md) | Discount | [default to undefined]

## Example

```typescript
import { PlanStorageResponse } from './api';

const instance: PlanStorageResponse = {
    plan_storage_id,
    title,
    min,
    max,
    price_rub,
    price_usd,
    step,
    active,
    discount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
