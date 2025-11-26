# PaginatedHelpPageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Общее количество элементов вообще | [default to undefined]
**limit** | **number** | Размер запрашиваемой страницы | [default to undefined]
**offset** | **number** | С какого элемента включительно делать запрос | [default to undefined]
**results** | **Array&lt;HelpPageResponse&gt;**(HelpPageResponse.md) | Результаты поиска с пагинацией | [default to undefined]

## Example

```typescript
import { PaginatedHelpPageResponse } from 'streamvi-api-client';

const instance: PaginatedHelpPageResponse = {
    total,
    limit,
    offset,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
