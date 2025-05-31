# PaySystemListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paySystemId** | **number** | Id | [default to undefined]
**name** | **string** | Name | [default to undefined]
**minAmount** | **number** | Min amount | [default to undefined]
**maxAmount** | **number** | Max amount | [default to undefined]
**currency** | **string** | Currency | [default to undefined]
**annual** | **number** | The possibility of annual replenishment | [default to undefined]
**topup** | **number** | The ability to replenish the balance | [default to undefined]
**recurrent** | **number** | The possibility of recurrent payment | [default to undefined]
**description** | **string** | Description | [default to undefined]

## Example

```typescript
import { PaySystemListResponse } from 'streamvi-api-client';

const instance: PaySystemListResponse = {
    paySystemId,
    name,
    minAmount,
    maxAmount,
    currency,
    annual,
    topup,
    recurrent,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
