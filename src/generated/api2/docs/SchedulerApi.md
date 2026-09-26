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

const { status, data } = await apiInstance.schedulerCreateV1(
    createSchedulerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSchedulerRequest** | **CreateSchedulerRequest**|  | |


### Return type

**CreateSchedulerResponse**

### Authorization

[oauth2](../README.md#oauth2)

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


### Example

```typescript
import {
    SchedulerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: number; //Backend scheduler id (default to undefined)
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.schedulerDeleteV1(
    language,
    id,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **id** | [**number**] | Backend scheduler id | defaults to undefined|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

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


### Example

```typescript
import {
    SchedulerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let id: number; //Scheduler item id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.schedulerGetV1(
    language,
    projectId,
    id,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **id** | [**number**] | Scheduler item id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**SchedulerItemResponse**

### Authorization

[oauth2](../README.md#oauth2)

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


### Example

```typescript
import {
    SchedulerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let channelId: number; //Filter by associated channel id (optional) (default to undefined)
let dateFrom: number; //Filter interval start in Unix seconds (optional) (default to undefined)
let dateTo: number; //Filter interval end in Unix seconds (optional) (default to undefined)
let offset: number; //Result offset (optional) (default to 0)
let limit: number; //Page size (optional) (default to 20)
let order: 'asc' | 'desc'; //Start-time order (optional) (default to 'asc')

const { status, data } = await apiInstance.schedulerListV1(
    language,
    projectId,
    v,
    channelId,
    dateFrom,
    dateTo,
    offset,
    limit,
    order
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **channelId** | [**number**] | Filter by associated channel id | (optional) defaults to undefined|
| **dateFrom** | [**number**] | Filter interval start in Unix seconds | (optional) defaults to undefined|
| **dateTo** | [**number**] | Filter interval end in Unix seconds | (optional) defaults to undefined|
| **offset** | [**number**] | Result offset | (optional) defaults to 0|
| **limit** | [**number**] | Page size | (optional) defaults to 20|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Start-time order | (optional) defaults to 'asc'|


### Return type

**ListSchedulerResponse**

### Authorization

[oauth2](../README.md#oauth2)

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

const { status, data } = await apiInstance.schedulerStopV1(
    stopSchedulerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stopSchedulerRequest** | **StopSchedulerRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

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

const { status, data } = await apiInstance.schedulerUpdateV1(
    updateSchedulerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSchedulerRequest** | **UpdateSchedulerRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

