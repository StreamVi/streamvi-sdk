# UserProject2ProjectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **number** | User id | [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**name** | **string** | First name | [default to undefined]
**fename** | **string** | Last name | [default to undefined]
**photo_50** | **string** | Avatar | [default to undefined]
**type** | **number** | Type 0: personal project; 1: team project | [default to undefined]
**external_id** | **string** | Text project ID / short code shown in the cabinet (ref_id). Match user-supplied codes to this field; pass the numeric project_id to other API methods. | [default to undefined]
**access_type** | **number** | Access type | [default to undefined]

## Example

```typescript
import { UserProject2ProjectResponse } from 'streamvi-api-client';

const instance: UserProject2ProjectResponse = {
    user_id,
    project_id,
    name,
    fename,
    photo_50,
    type,
    external_id,
    access_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
