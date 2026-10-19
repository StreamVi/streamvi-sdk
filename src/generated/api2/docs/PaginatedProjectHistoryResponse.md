# PaginatedProjectHistoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Total number of all items | [default to undefined]
**limit** | **number** | Requested page size | [default to undefined]
**offset** | **number** | Element to start the request from, inclusive | [default to undefined]
**results** | [**Array&lt;ProjectHistoryResponse&gt;**](ProjectHistoryResponse.md) |  | [default to undefined]

## Example

```typescript
import { PaginatedProjectHistoryResponse } from 'streamvi-api-client';

const instance: PaginatedProjectHistoryResponse = {
    total,
    limit,
    offset,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
