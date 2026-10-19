# UpdateSchedulerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**id** | **number** | Backend scheduler id | [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**channel_ids** | **Array&lt;number&gt;** | Complete target list of internal numeric StreamVi channel IDs (group_id from channel search in the same project_id). Replaces the channel list; do not pass external/platform IDs. | [default to undefined]
**start_at** | **number** | Replacement start time in Unix seconds | [default to undefined]
**end_at** | **number** | Replacement end time in Unix seconds | [default to undefined]
**mode** | **string** | Scheduler execution mode | [default to undefined]
**video** | [**SchedulerVideoRequest**](SchedulerVideoRequest.md) | Video-mode configuration | [default to undefined]

## Example

```typescript
import { UpdateSchedulerRequest } from 'streamvi-api-client';

const instance: UpdateSchedulerRequest = {
    v,
    language,
    id,
    project_id,
    channel_ids,
    start_at,
    end_at,
    mode,
    video,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
