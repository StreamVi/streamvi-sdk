# PaymentCreateRequestStorageBodyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_en]
**project_id** | **number** | Project id | [default to undefined]
**type** | **string** | Code | [default to undefined]
**amount** | **number** | Amount | [default to undefined]
**plan_period** | **string** | Period | [default to undefined]
**plan_storage_id** | **number** | Storage plan id | [default to undefined]
**plan_storage_value** | **number** | Space GB | [default to undefined]

## Example

```typescript
import { PaymentCreateRequestStorageBodyDto } from './api';

const instance: PaymentCreateRequestStorageBodyDto = {
    v,
    language,
    project_id,
    type,
    amount,
    plan_period,
    plan_storage_id,
    plan_storage_value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
