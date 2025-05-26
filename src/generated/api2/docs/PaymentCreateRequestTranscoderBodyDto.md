# PaymentCreateRequestTranscoderBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_en]
**project_id** | **number** | Project id | [default to undefined]
**type** | **string** | Code | [default to undefined]
**amount** | **number** | Amount | [default to undefined]
**plan_period** | **string** | Period | [default to undefined]
**plan_transcoding_id** | **number** | Transcoding plan id | [default to undefined]
**plan_transcoding_count_flow** | **number** | Count flow | [default to undefined]

## Example

```typescript
import { PaymentCreateRequestTranscoderBodyDto } from './api';

const instance: PaymentCreateRequestTranscoderBodyDto = {
    v,
    language,
    project_id,
    type,
    amount,
    plan_period,
    plan_transcoding_id,
    plan_transcoding_count_flow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
