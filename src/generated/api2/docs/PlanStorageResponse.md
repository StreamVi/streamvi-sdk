# PlanStorageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planStorageId** | **number** | Unique ID | [default to undefined]
**title** | **string** | Title | [default to undefined]
**min** | **number** | Minimum storage size, gb | [default to undefined]
**max** | **number** | Maximum storage size, gb | [default to undefined]
**priceRub** | **number** | Price per gb (RUB) | [default to undefined]
**priceUsd** | **number** | Price per gb (USD) | [default to undefined]
**step** | **number** | Step increase in gb | [default to undefined]
**active** | **boolean** | Is active | [default to undefined]
**discount** | [**PlanStorageDiscountResponse**](PlanStorageDiscountResponse.md) | Discount | [default to undefined]

## Example

```typescript
import { PlanStorageResponse } from 'streamvi-api-client';

const instance: PlanStorageResponse = {
    planStorageId,
    title,
    min,
    max,
    priceRub,
    priceUsd,
    step,
    active,
    discount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
