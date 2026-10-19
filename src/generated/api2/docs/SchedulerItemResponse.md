# SchedulerItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Backend scheduler id | [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**group_id** | **number** | Legacy primary channel: internal numeric StreamVi channel ID, not an external/platform ID. See channel_ids for the complete associated channel list. | [default to undefined]
**taskId** | **number** | External video-scheduler task id | [default to undefined]
**start_at** | **number** | Start time in Unix seconds | [default to undefined]
**end_at** | **number** | End time in Unix seconds | [default to undefined]
**active** | **boolean** | Whether the persisted schedule is active | [default to undefined]
**channel_ids** | **Array&lt;number&gt;** | Complete list of associated internal numeric StreamVi channel IDs, equivalent to group_id values in channel search results. | [default to undefined]
**mode** | **string** | Scheduler execution mode | [default to undefined]
**type** | **string** | Legacy scheduler item type | [default to undefined]
**video** | [**SchedulerVideoResponse**](SchedulerVideoResponse.md) |  | [default to undefined]

## Example

```typescript
import { SchedulerItemResponse } from 'streamvi-api-client';

const instance: SchedulerItemResponse = {
    id,
    project_id,
    group_id,
    taskId,
    start_at,
    end_at,
    active,
    channel_ids,
    mode,
    type,
    video,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
