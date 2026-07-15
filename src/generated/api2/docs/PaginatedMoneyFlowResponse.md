# PaginatedMoneyFlowResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Общее количество элементов вообще | [default to undefined]
**limit** | **number** | Размер запрашиваемой страницы | [default to undefined]
**offset** | **number** | С какого элемента включительно делать запрос | [default to undefined]
**results** | [**Array&lt;MoneyFlowResponse&gt;**](MoneyFlowResponse.md) | Получение списка движения денег с пагинацией | [default to undefined]

## Example

```typescript
import { PaginatedMoneyFlowResponse } from 'streamvi-api-client';

const instance: PaginatedMoneyFlowResponse = {
    total,
    limit,
    offset,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
