# MethodResolveUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**internal_id** | **number** | Internal recipient user ID | [default to undefined]
**external_id** | **string** | External StreamVi identity code; distinct from the internal numeric ID | [default to undefined]
**name** | **string** | Display name | [default to undefined]
**fename** | **string** | Existing additional display name field | [default to undefined]
**photo_50** | **string** | Resolved avatar URL | [default to undefined]
**type** | **number** | Personal account type; project/team accounts are excluded from recipient lookup | [default to undefined]

## Example

```typescript
import { MethodResolveUserResponse } from 'streamvi-api-client';

const instance: MethodResolveUserResponse = {
    internal_id,
    external_id,
    name,
    fename,
    photo_50,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
