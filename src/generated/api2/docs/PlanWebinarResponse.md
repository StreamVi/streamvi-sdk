# PlanWebinarResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_webinar_id** | **number** | Unique id | [default to undefined]
**participants** | **number** | Maximum participants | [default to undefined]
**title** | **string** | Title | [default to undefined]
**type** | **string** | Type | [default to undefined]
**price_rub** | **number** | Price (RUB) | [default to undefined]
**price_usd** | **number** | Price (USD) | [default to undefined]
**resolution** | **string** | Maximum resolution | [default to undefined]
**index** | **number** | Field for sort | [default to undefined]
**discount** | [**PlanWebinarDiscountResponse**](PlanWebinarDiscountResponse.md) | Discount | [default to undefined]

## Example

```typescript
import { PlanWebinarResponse } from 'streamvi-api-client';

const instance: PlanWebinarResponse = {
    plan_webinar_id,
    participants,
    title,
    type,
    price_rub,
    price_usd,
    resolution,
    index,
    discount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
