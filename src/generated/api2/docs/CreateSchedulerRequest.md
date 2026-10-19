# CreateSchedulerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_ids** | **Array&lt;number&gt;** | Complete target list of internal numeric StreamVi channel IDs (group_id from channel search in the same project_id). Do not pass external/platform IDs. | [default to undefined]
**start_at** | **number** | Requested start time in Unix seconds | [default to undefined]
**end_at** | **number** | Requested end time in Unix seconds | [default to undefined]
**start_now** | **boolean** | Start the external scheduler task immediately | [default to undefined]
**mode** | **string** | Scheduler execution mode | [default to undefined]
**video** | [**SchedulerVideoRequest**](SchedulerVideoRequest.md) | Video-mode configuration | [default to undefined]

## Example

```typescript
import { CreateSchedulerRequest } from 'streamvi-api-client';

const instance: CreateSchedulerRequest = {
    v,
    language,
    project_id,
    channel_ids,
    start_at,
    end_at,
    start_now,
    mode,
    video,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
