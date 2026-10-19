# UpdateVideoRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**id** | **number** | Video id | [default to undefined]
**name** | **string** | Video name | [default to undefined]

## Example

```typescript
import { UpdateVideoRequest } from 'streamvi-api-client';

const instance: UpdateVideoRequest = {
    v,
    language,
    project_id,
    id,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
