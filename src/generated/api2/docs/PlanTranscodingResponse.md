# PlanTranscodingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_transcoding_id** | **number** | Unique id | [default to undefined]
**title** | **string** | Title | [default to undefined]
**type** | **string** | Type | [default to undefined]
**price_rub** | **number** | Price (RUB). Amount in kopecks (RUB): 12345 &#x3D; 123.45 RUB. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**price_usd** | **number** | Price (USD). Amount in cents (USD): 12345 &#x3D; 123.45 USD. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**resolution** | **string** | Maximum resolution | [default to undefined]
**fps** | **string** | Maximum fps | [default to undefined]
**weight** | **number** | Server load weight | [default to undefined]
**active** | **boolean** | Active | [default to undefined]
**index** | **number** | Field for sort | [default to undefined]
**space** | **number** | Free spaces slot | [default to undefined]
**discount** | [**PlanTranscodingDiscountResponse**](PlanTranscodingDiscountResponse.md) | Discount | [default to undefined]

## Example

```typescript
import { PlanTranscodingResponse } from 'streamvi-api-client';

const instance: PlanTranscodingResponse = {
    plan_transcoding_id,
    title,
    type,
    price_rub,
    price_usd,
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
