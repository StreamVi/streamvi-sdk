# MoneyFlowResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**money_flow_id** | **number** | id | [default to undefined]
**amount** | **number** | Amount | [default to undefined]
**currency** | **string** | Currency | [default to undefined]
**date** | **string** | Date | [default to undefined]
**type** | **string** | Type | [default to undefined]
**balance** | **number** | Current balance before transaction | [default to undefined]
**details** | **MoneyFlowDetails**(MoneyFlowDetails.md) | Details | [default to undefined]

## Example

```typescript
import { MoneyFlowResponse } from 'streamvi-api-client';

const instance: MoneyFlowResponse = {
    money_flow_id,
    amount,
    currency,
    date,
    type,
    balance,
    details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
