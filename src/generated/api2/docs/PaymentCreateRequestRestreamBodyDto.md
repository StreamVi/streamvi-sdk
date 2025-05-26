# PaymentCreateRequestRestreamBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_en]
**project_id** | **number** | Project id | [default to undefined]
**type** | **string** | Code | [default to undefined]
**amount** | **number** | Amount | [default to undefined]
**plan_period** | **string** | Period | [default to undefined]
**plan_restream_id** | **number** | Restream plan id | [default to undefined]
**plan_restream_count_channel** | **number** | Channels count | [default to undefined]
**plan_restream_bitrate** | **number** | Bitrate | [default to undefined]

## Example

```typescript
import { PaymentCreateRequestRestreamBodyDto } from './api';

const instance: PaymentCreateRequestRestreamBodyDto = {
    v,
    language,
    project_id,
    type,
    amount,
    plan_period,
    plan_restream_id,
    plan_restream_count_channel,
    plan_restream_bitrate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
