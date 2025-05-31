# PaymentCreateRequestStorageBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**projectId** | **number** | Project id | [default to undefined]
**type** | **string** | Code | [default to undefined]
**amount** | **number** | Amount | [default to undefined]
**planPeriod** | **string** | Period | [default to undefined]
**planStorageId** | **number** | Storage plan id | [default to undefined]
**planStorageValue** | **number** | Space GB | [default to undefined]

## Example

```typescript
import { PaymentCreateRequestStorageBodyDto } from 'streamvi-api-client';

const instance: PaymentCreateRequestStorageBodyDto = {
    v,
    language,
    projectId,
    type,
    amount,
    planPeriod,
    planStorageId,
    planStorageValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
