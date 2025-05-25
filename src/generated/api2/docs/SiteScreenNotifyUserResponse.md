# SiteScreenNotifyUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Level of notify. Default is info | [default to TypeEnum_Info]
**title** | **string** | Title of notify | [optional] [default to undefined]
**text** | **string** | Text of notify | [default to undefined]
**actions** | [**Array&lt;InternalNotifyTypeAction&gt;**](InternalNotifyTypeAction.md) | Array of texts | [optional] [default to undefined]

## Example

```typescript
import { SiteScreenNotifyUserResponse } from './api';

const instance: SiteScreenNotifyUserResponse = {
    type,
    title,
    text,
    actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
