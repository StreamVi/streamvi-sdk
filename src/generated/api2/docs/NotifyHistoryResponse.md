# NotifyHistoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Id of page in mongodb | [default to undefined]
**projectId** | **number** | Project id | [default to undefined]
**dateCreate** | **string** | Date create | [default to undefined]
**actions** | **object** | Actions | [default to undefined]
**channel** | **string** | Channel | [default to undefined]
**text** | **Array&lt;InternalNotifyTypeText&gt;**(InternalNotifyTypeText.md) | Array of texts | [default to undefined]
**statusRead** | **boolean** | Status read | [default to undefined]
**category** | **string** | Category of user notify | [default to undefined]

## Example

```typescript
import { NotifyHistoryResponse } from 'streamvi-api-client';

const instance: NotifyHistoryResponse = {
    id,
    projectId,
    dateCreate,
    actions,
    channel,
    text,
    statusRead,
    category,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
