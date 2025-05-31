# PaymentCreateRequestRestreamBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**projectId** | **number** | Project id | [default to undefined]
**type** | **string** | Code | [default to undefined]
**amount** | **number** | Amount | [default to undefined]
**planPeriod** | **string** | Period | [default to undefined]
**planRestreamId** | **number** | Restream plan id | [default to undefined]
**planRestreamCountChannel** | **number** | Channels count | [default to undefined]
**planRestreamBitrate** | **number** | Bitrate | [default to undefined]

## Example

```typescript
import { PaymentCreateRequestRestreamBodyDto } from 'streamvi-api-client';

const instance: PaymentCreateRequestRestreamBodyDto = {
    v,
    language,
    projectId,
    type,
    amount,
    planPeriod,
    planRestreamId,
    planRestreamCountChannel,
    planRestreamBitrate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
