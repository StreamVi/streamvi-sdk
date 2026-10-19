# PaginatedTransactionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Total number of all items | [default to undefined]
**limit** | **number** | Requested page size | [default to undefined]
**offset** | **number** | Element to start the request from, inclusive | [default to undefined]
**results** | [**Array&lt;TransactionResponse&gt;**](TransactionResponse.md) |  | [default to undefined]

## Example

```typescript
import { PaginatedTransactionResponse } from 'streamvi-api-client';

const instance: PaginatedTransactionResponse = {
    total,
    limit,
    offset,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
