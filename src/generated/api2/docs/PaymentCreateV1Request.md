# PaymentCreateV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**type** | **string** | Code | [default to undefined]
**amount** | **number** | Amount | [default to undefined]
**plan_period** | **string** | Period | [default to undefined]
**plan_restream_id** | **number** | Restream plan id | [default to undefined]
**plan_restream_count_channel** | **number** | Channels count | [default to undefined]
**plan_restream_bitrate** | **number** | Bitrate | [default to undefined]
**plan_storage_id** | **number** | Storage plan id | [default to undefined]
**plan_storage_value** | **number** | Space GB | [default to undefined]
**plan_transcoding_id** | **number** | Transcoding plan id | [default to undefined]
**plan_transcoding_count_flow** | **number** | Count flow | [default to undefined]

## Example

```typescript
import { PaymentCreateV1Request } from 'streamvi-api-client';

const instance: PaymentCreateV1Request = {
    v,
    language,
    project_id,
    type,
    amount,
    plan_period,
    plan_restream_id,
    plan_restream_count_channel,
    plan_restream_bitrate,
    plan_storage_id,
    plan_storage_value,
    plan_transcoding_id,
    plan_transcoding_count_flow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
