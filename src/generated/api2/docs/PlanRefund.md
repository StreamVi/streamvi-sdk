# PlanRefund


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **number** | Refund for the current rate. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to 0]
**after** | **number** | Refund for the next rate. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to 0]

## Example

```typescript
import { PlanRefund } from 'streamvi-api-client';

const instance: PlanRefund = {
    current,
    after,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
