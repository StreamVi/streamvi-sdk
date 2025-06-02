# NotifyHistorySiteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Id of page in mongodb | [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**date_create** | **string** | Date create | [default to undefined]
**actions** | **object** | Actions | [default to undefined]
**channel** | **string** | Channel | [default to undefined]
**text** | **Array&lt;InternalNotifyTypeText&gt;**(InternalNotifyTypeText.md) | Array of texts | [default to undefined]
**status_read** | **boolean** | Status read | [default to undefined]
**category** | **string** | Category of user notify | [default to undefined]

## Example

```typescript
import { NotifyHistorySiteResponse } from 'streamvi-api-client';

const instance: NotifyHistorySiteResponse = {
    id,
    project_id,
    date_create,
    actions,
    channel,
    text,
    status_read,
    category,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
