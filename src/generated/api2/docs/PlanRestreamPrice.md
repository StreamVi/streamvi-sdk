# PlanRestreamPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**month** | **number** | Price for one month with monthly payment, in the requested project currency (obtain it from project info). Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**year** | **number** | Monthly equivalent of the full annual price (annual price / 12), in the requested project currency. May contain fractional minor units; this is not the full annual charge. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]

## Example

```typescript
import { PlanRestreamPrice } from 'streamvi-api-client';

const instance: PlanRestreamPrice = {
    month,
    year,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
