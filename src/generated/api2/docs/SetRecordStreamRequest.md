# SetRecordStreamRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**record** | **boolean** | Requested recording preference: true to enable, false to disable. Recording is under development; this flag is saved but does not indicate that recording is running or that a recorded video is available. | [default to undefined]

## Example

```typescript
import { SetRecordStreamRequest } from 'streamvi-api-client';

const instance: SetRecordStreamRequest = {
    v,
    language,
    project_id,
    record,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
