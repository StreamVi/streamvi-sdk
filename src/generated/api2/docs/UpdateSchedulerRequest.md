# UpdateSchedulerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**id** | **number** | Backend scheduler id | [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**channel_ids** | **Array&lt;number&gt;** | Complete replacement list of target channel ids | [default to undefined]
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
