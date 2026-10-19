# BroadcastMessageListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Total number of all items | [default to undefined]
**limit** | **number** | Requested page size | [default to undefined]
**offset** | **number** | Element to start the request from, inclusive | [default to undefined]
**results** | [**Array&lt;BroadcastMessageItemResponse&gt;**](BroadcastMessageItemResponse.md) | Array of items | [default to undefined]

## Example

```typescript
import { BroadcastMessageListResponse } from 'streamvi-api-client';

const instance: BroadcastMessageListResponse = {
    total,
    limit,
    offset,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
