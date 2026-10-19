# SchedulerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**schedulerCreateV1**](#schedulercreatev1) | **POST** /method/scheduler | Create a project video schedule|
|[**schedulerDeleteV1**](#schedulerdeletev1) | **DELETE** /method/scheduler | Delete a non-expired project video schedule|
|[**schedulerGetV1**](#schedulergetv1) | **GET** /method/scheduler/get | Get a project video schedule by id|
|[**schedulerListV1**](#schedulerlistv1) | **GET** /method/scheduler | List non-expired project video schedules|
|[**schedulerStopV1**](#schedulerstopv1) | **POST** /method/scheduler/stop | Stop the active project video schedule|
|[**schedulerUpdateV1**](#schedulerupdatev1) | **PUT** /method/scheduler | Replace a future project video schedule|

# **schedulerCreateV1**
> CreateSchedulerResponse schedulerCreateV1(createSchedulerRequest)

Create a video schedule for project_id: channel_ids are internal channel group_id values from search in the same project; video.id is an accessible video. start_at/end_at are integer Unix seconds, with end_at>start_at. When start_now=false, the start must be in the future; when true, the end must be in the future. Checks channel editing permissions, plan limits, and absence of overlaps. Returns an internal id after creating the external task and saving the schedule; does not promise immediate broadcast start.

### Example

```typescript
import {
    SchedulerApi,
    Configuration,
    CreateSchedulerRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

let createSchedulerRequest: CreateSchedulerRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.schedulerCreateV1(
    createSchedulerRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSchedulerRequest** | **CreateSchedulerRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**CreateSchedulerResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedulerDeleteV1**
> SuccessResponse schedulerDeleteV1()

Delete unexpired schedule id in project_id and its associated external task. An expired schedule produces scheduler.expired. This deletes the schedule; stop the current active task separately with POST /method/scheduler/stop.

### Example

```typescript
import {
    SchedulerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let id: number; //Backend scheduler id (default to undefined)
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.schedulerDeleteV1(
    language,
    id,
    projectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **id** | [**number**] | Backend scheduler id | defaults to undefined|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedulerGetV1**
> SchedulerItemResponse schedulerGetV1()

Read a schedule by internal id in project_id. Returns Unix seconds intervals, the complete internal channel_ids list, and video metadata or null. Obtain the ID from GET /method/scheduler; reading does not start the task.

### Example

```typescript
import {
    SchedulerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let id: number; //Scheduler item id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.schedulerGetV1(
    language,
    projectId,
    id,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **id** | [**number**] | Scheduler item id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SchedulerItemResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedulerListV1**
> ListSchedulerResponse schedulerListV1()

Read unexpired video schedules for project_id with channel_id/date_from/date_to filters, order, and limit/offset. Times are Unix seconds; offset is the number of records to skip. Returns results/total and may contain video=null. The schedule ID differs from the external scheduler taskId.

### Example

```typescript
import {
    SchedulerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let channelId: number; //Filter by internal numeric StreamVi channel ID (group_id from channel search), not an external/platform ID. (optional) (default to undefined)
let dateFrom: number; //Filter interval start in Unix seconds (optional) (default to undefined)
let dateTo: number; //Filter interval end in Unix seconds (optional) (default to undefined)
let offset: number; //Result offset (optional) (default to 0)
let limit: number; //Page size (optional) (default to 20)
let order: 'asc' | 'desc'; //Start-time order (optional) (default to 'asc')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.schedulerListV1(
    language,
    projectId,
    v,
    channelId,
    dateFrom,
    dateTo,
    offset,
    limit,
    order,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **channelId** | [**number**] | Filter by internal numeric StreamVi channel ID (group_id from channel search), not an external/platform ID. | (optional) defaults to undefined|
| **dateFrom** | [**number**] | Filter interval start in Unix seconds | (optional) defaults to undefined|
| **dateTo** | [**number**] | Filter interval end in Unix seconds | (optional) defaults to undefined|
| **offset** | [**number**] | Result offset | (optional) defaults to 0|
| **limit** | [**number**] | Page size | (optional) defaults to 20|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Start-time order | (optional) defaults to 'asc'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**ListSchedulerResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedulerStopV1**
> SuccessResponse schedulerStopV1(stopSchedulerRequest)

Send a stop request for the active video task in project_id. Requires an active scheduler/live stream and a task_id/video_id mapping consistent with the saved schedule; absence or mismatch produces scheduler.active_task_not_found/active_task_mismatch. Success means the external scheduler responded successfully, not that the schedule was deleted.

### Example

```typescript
import {
    SchedulerApi,
    Configuration,
    StopSchedulerRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

let stopSchedulerRequest: StopSchedulerRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.schedulerStopV1(
    stopSchedulerRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stopSchedulerRequest** | **StopSchedulerRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedulerUpdateV1**
> SuccessResponse schedulerUpdateV1(updateSchedulerRequest)

Fully replace the video, time interval, and channel_ids list of future schedule id in project_id. All replacement fields are required; this is not a partial patch. A schedule that has already started produces scheduler.not_future; an overlap produces scheduler.time_overlap. Times are Unix seconds; end_at>start_at and start_at must be in the future. Success confirms the external task was updated if necessary and the schedule was saved.

### Example

```typescript
import {
    SchedulerApi,
    Configuration,
    UpdateSchedulerRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

let updateSchedulerRequest: UpdateSchedulerRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.schedulerUpdateV1(
    updateSchedulerRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSchedulerRequest** | **UpdateSchedulerRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

