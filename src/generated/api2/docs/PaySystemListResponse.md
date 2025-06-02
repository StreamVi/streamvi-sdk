# PaySystemListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pay_system_id** | **number** | Id | [default to undefined]
**name** | **string** | Name | [default to undefined]
**min_amount** | **number** | Min amount | [default to undefined]
**max_amount** | **number** | Max amount | [default to undefined]
**currency** | **string** | Currency | [default to undefined]
**annual** | **number** | The possibility of annual replenishment | [default to undefined]
**topup** | **number** | The ability to replenish the balance | [default to undefined]
**recurrent** | **number** | The possibility of recurrent payment | [default to undefined]
**description** | **string** | Description | [default to undefined]

## Example

```typescript
import { PaySystemListResponse } from 'streamvi-api-client';

const instance: PaySystemListResponse = {
    pay_system_id,
    name,
    min_amount,
    max_amount,
    currency,
    annual,
    topup,
    recurrent,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
