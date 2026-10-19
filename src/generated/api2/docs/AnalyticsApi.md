# AnalyticsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**analyticsTsBroadcastMessagesV1**](#analyticstsbroadcastmessagesv1) | **GET** /method/analytics/broadcast/messages | Messages for broadcast|
|[**analyticsTsStreamBitrateV1**](#analyticstsstreambitratev1) | **GET** /method/analytics/stream/graph/bitrate | Bitrate for stream|
|[**analyticsTsStreamEventsV1**](#analyticstsstreameventsv1) | **GET** /method/analytics/stream/events | Events for stream|
|[**analyticsTsStreamViewersV1**](#analyticstsstreamviewersv1) | **GET** /method/analytics/stream/graph/viewers | Viewers for stream|

# **analyticsTsBroadcastMessagesV1**
> BroadcastMessageListResponse analyticsTsBroadcastMessagesV1()

Read message history for broadcast_id in project_id using date/date_start/date_end time filters, platform/restream_id/text, sort_by_date, and limit/offset. offset is the number of records to skip. Returns results and total; reading history neither sends nor deletes messages.

### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //Broadcast id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let offset: number; //Number of messages to skip. When omitted, the backend forwards the parameter\'s absence to the metrics service. (optional) (default to undefined)
let limit: number; //Message result size. When omitted, the backend does not supply a fixed limit. (optional) (default to undefined)
let date: string; //Exact date filter (optional) (default to undefined)
let dateStart: string; //Date range start (optional) (default to undefined)
let dateEnd: string; //Date range end (optional) (default to undefined)
let sortByDate: 'asc' | 'desc'; //Sort by date (optional) (default to undefined)
let platform: string; //Platform (optional) (default to undefined)
let restreamId: number; //Restream id (optional) (default to undefined)
let text: string; //Text search (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.analyticsTsBroadcastMessagesV1(
    language,
    projectId,
    broadcastId,
    v,
    offset,
    limit,
    date,
    dateStart,
    dateEnd,
    sortByDate,
    platform,
    restreamId,
    text,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | Broadcast id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **offset** | [**number**] | Number of messages to skip. When omitted, the backend forwards the parameter\&#39;s absence to the metrics service. | (optional) defaults to undefined|
| **limit** | [**number**] | Message result size. When omitted, the backend does not supply a fixed limit. | (optional) defaults to undefined|
| **date** | [**string**] | Exact date filter | (optional) defaults to undefined|
| **dateStart** | [**string**] | Date range start | (optional) defaults to undefined|
| **dateEnd** | [**string**] | Date range end | (optional) defaults to undefined|
| **sortByDate** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort by date | (optional) defaults to undefined|
| **platform** | [**string**] | Platform | (optional) defaults to undefined|
| **restreamId** | [**number**] | Restream id | (optional) defaults to undefined|
| **text** | [**string**] | Text search | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**BroadcastMessageListResponse**

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

# **analyticsTsStreamBitrateV1**
> any analyticsTsStreamBitrateV1()

Read the bitrate chart for stream_id after checking it belongs to project_id; another project\'s stream produces broadcast.no_found. The response is proxied from the metrics service; the local contract does not specify an unverified point structure. This method does not change bitrate settings.

### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let streamId: number; //stream id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.analyticsTsStreamBitrateV1(
    language,
    projectId,
    streamId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **streamId** | [**number**] | stream id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The metrics service JSON is returned without local normalization; the backend does not define the response field structure. |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsTsStreamEventsV1**
> any analyticsTsStreamEventsV1()

Read stream_id events in project_id after checking stream ownership. The response is forwarded from the metrics service; the external response structure is not extended with an invented DTO. This method does not send stream commands.

### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let streamId: number; //stream id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.analyticsTsStreamEventsV1(
    language,
    projectId,
    streamId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **streamId** | [**number**] | stream id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The metrics service JSON is returned without local normalization; the backend does not define the response field structure. |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsTsStreamViewersV1**
> any analyticsTsStreamViewersV1()

Read viewer statistics for the broadcast linked to stream_id in project_id. Stream ownership is checked; the response is proxied from the metrics service. stream_id identifies a stream, not an internal channel_id; reading does not control the broadcast.

### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let streamId: number; //stream id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.analyticsTsStreamViewersV1(
    language,
    projectId,
    streamId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **streamId** | [**number**] | stream id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The metrics service JSON is returned without local normalization; the backend does not define the response field structure. |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

