# WebinarStreamStartDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Required selected project for account integration credentials; room prefix must match its external ID | [optional] [default to undefined]
**room_id** | **string** | Room id | [default to undefined]
**client_id** | **string** | Client ID | [default to undefined]

## Example

```typescript
import { WebinarStreamStartDto } from 'streamvi-api-client';

const instance: WebinarStreamStartDto = {
    v,
    language,
    project_id,
    room_id,
    client_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
