# PlanTranscodingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planTranscodingId** | **number** | Unique id | [default to undefined]
**title** | **string** | Title | [default to undefined]
**type** | **string** | Type | [default to undefined]
**priceRub** | **number** | Price (RUB) | [default to undefined]
**priceUsd** | **number** | Price (USD) | [default to undefined]
**resolution** | **string** | Maximum resolution | [default to undefined]
**fps** | **string** | Maximum fps | [default to undefined]
**weight** | **number** | Server load weight | [default to undefined]
**active** | **boolean** | Active | [default to undefined]
**index** | **number** | Field for sort | [default to undefined]
**space** | **number** | Free spaces slot | [default to undefined]
**discount** | **PlanTranscodingDiscountResponse**(PlanTranscodingDiscountResponse.md) | Discount | [default to undefined]

## Example

```typescript
import { PlanTranscodingResponse } from 'streamvi-api-client';

const instance: PlanTranscodingResponse = {
    planTranscodingId,
    title,
    type,
    priceRub,
    priceUsd,
    resolution,
    fps,
    weight,
    active,
    index,
    space,
    discount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
