# InternalNotifyTypeAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Action name | [default to undefined]
**value** | **string** | Action value | [default to undefined]
**type** | **string** | Type | [default to undefined]
**text** | **Array&lt;InternalNotifyTypeActionText&gt;**(InternalNotifyTypeActionText.md) | text | [default to undefined]
**icon** | **string** | Icon (special symbol) | [default to '']
**group_id** | **string** | Action group id | [default to undefined]
**group_type** | **string** | Group actions | [default to undefined]

## Example

```typescript
import { InternalNotifyTypeAction } from 'streamvi-api-client';

const instance: InternalNotifyTypeAction = {
    name,
    value,
    type,
    text,
    icon,
    group_id,
    group_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
