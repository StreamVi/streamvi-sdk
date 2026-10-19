# PaymentCreateV1RequestOneOf4


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**type** | **string** |  | [default to undefined]
**amount** | **number** | Payment amount in the currency of the payment system selected in the project billing settings. For example, send 10000 for 100 RUB or 100 USD; do not send 100. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**plan_period** | **string** | Period | [default to undefined]
**plan_webinar_id** | **number** | Webinar plan id | [default to undefined]

## Example

```typescript
import { PaymentCreateV1RequestOneOf4 } from 'streamvi-api-client';

const instance: PaymentCreateV1RequestOneOf4 = {
    v,
    language,
    project_id,
    type,
    amount,
    plan_period,
    plan_webinar_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
