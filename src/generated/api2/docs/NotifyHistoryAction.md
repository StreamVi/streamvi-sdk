# NotifyHistoryAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Action name | [default to undefined]
**text** | [**Array&lt;InternalNotifyTypeActionText&gt;**](InternalNotifyTypeActionText.md) | Array of text actions | [optional] [default to undefined]
**value** | **string** | Value for button | [optional] [default to undefined]
**icon** | **string** | Icon (special symbol) | [optional] [default to undefined]
**done** | **boolean** | If action run then true | [default to false]
**type** | **string** | Type | [optional] [default to undefined]
**group_id** | **string** | Action group id | [default to undefined]
**group_type** | **string** | Group actions | [default to undefined]

## Example

```typescript
import { NotifyHistoryAction } from 'streamvi-api-client';

const instance: NotifyHistoryAction = {
    name,
    text,
    value,
    icon,
    done,
    type,
    group_id,
    group_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
