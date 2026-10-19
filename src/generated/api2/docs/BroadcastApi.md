# BroadcastApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**broadcastCredentialsV1**](#broadcastcredentialsv1) | **GET** /method/broadcast/credentials | Get credentials|
|[**broadcastEventItemV1**](#broadcasteventitemv1) | **GET** /method/broadcast/events/item | Broadcast event item|
|[**broadcastEventsV4**](#broadcasteventsv4) | **GET** /method/broadcast/events | Events from broadcast v4|
|[**broadcastFindV1**](#broadcastfindv1) | **GET** /method/broadcast | Get one broadcast|
|[**broadcastGetTemplateV1**](#broadcastgettemplatev1) | **GET** /method/broadcast/template | Get broadcast title and description template|
|[**broadcastGraphBitrateV1**](#broadcastgraphbitratev1) | **GET** /method/broadcast/graph/bitrate | Bitrate from broadcast|
|[**broadcastGraphViewersV1**](#broadcastgraphviewersv1) | **GET** /method/broadcast/graph/viewers | Viewers from broadcast|
|[**broadcastListV1**](#broadcastlistv1) | **GET** /method/broadcast/list | List broadcast|
|[**broadcastPauseV1**](#broadcastpausev1) | **POST** /method/broadcast/pause | Pause an active live broadcast|
|[**broadcastPlayV1**](#broadcastplayv1) | **POST** /method/broadcast/play | Resume an active live broadcast|
|[**broadcastRestreamChatV1**](#broadcastrestreamchatv1) | **GET** /method/broadcast/restreams-chat | Get restreams for chat|
|[**broadcastRestreamsV1**](#broadcastrestreamsv1) | **GET** /method/broadcast/restreams | View live info|
|[**broadcastStatusV1**](#broadcaststatusv1) | **GET** /method/broadcast/status | Live status info by project id|
|[**broadcastStopV1**](#broadcaststopv1) | **POST** /method/broadcast/stop | Request stopping an active live broadcast|
|[**broadcastTokenChannelV1**](#broadcasttokenchannelv1) | **GET** /method/broadcast/longpoll | Connect channel, long polling|

# **broadcastCredentialsV1**
> SiteBroadcastCredentialsResponse broadcastCredentialsV1()

Get ingress addresses and the secret publishing key for project_id. Missing credentials produces credentials.no_found. This reads source connection details without creating a broadcast. Do not save key in examples, logs, or the corpus.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastCredentialsV1(
    language,
    projectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteBroadcastCredentialsResponse**

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

# **broadcastEventItemV1**
> SiteRestreamEventResponse broadcastEventItemV1()

Read restream event details using id (event UUID) and date (event date). Obtain the event ID from broadcast events; the response is localized using language. Reading an event does not change stream state.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let id: string; //Event id (default to undefined)
let date: string; //Event date (default to undefined)
let projectId: number; //Target project ID. Required for site requests; account tokens fall back to their personal project when omitted in every request source; project tokens determine the project automatically. (optional) (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastEventItemV1(
    language,
    id,
    date,
    projectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **id** | [**string**] | Event id | defaults to undefined|
| **date** | [**string**] | Event date | defaults to undefined|
| **projectId** | [**number**] | Target project ID. Required for site requests; account tokens fall back to their personal project when omitted in every request source; project tokens determine the project automatically. | (optional) defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteRestreamEventResponse**

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

# **broadcastEventsV4**
> SiteBroadcastEventsV4Response broadcastEventsV4()

Get broadcast_id events in project_id with filters and v=4 pagination; the response contains total, limit, offset, sort_by_date; supply cursor_id and cursor_datetime together. This reads event history without starting or stopping a broadcast. For one event use GET /method/broadcast/events/item.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let channels: Array<number>; //Channels id (optional) (default to undefined)
let level: 'info' | 'warning' | 'error' | 'debug'; //Level log (optional) (default to undefined)
let platform: string; //Platform (optional) (default to undefined)
let app: string; //App stream (optional) (default to undefined)
let server: string; //Server IP (optional) (default to undefined)
let dateFrom: string; //Date only after create date (optional) (default to undefined)
let dateTo: string; //Date only after create date (optional) (default to undefined)
let offset: number; //Page offset number (optional) (default to 0)
let limit: number; //Number of results (optional) (default to 50)
let sortByDate: 'asc' | 'desc'; //Sort order by created_at (optional) (default to 'desc')
let cursorId: string; //Cursor event id (optional) (default to undefined)
let cursorDatetime: string; //Cursor event datetime (optional) (default to undefined)
let v: '4'; //Version (automatically defaults to 4 based on the API contract, can be overridden) (optional) (default to '4')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastEventsV4(
    language,
    projectId,
    broadcastId,
    channels,
    level,
    platform,
    app,
    server,
    dateFrom,
    dateTo,
    offset,
    limit,
    sortByDate,
    cursorId,
    cursorDatetime,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **channels** | **Array&lt;number&gt;** | Channels id | (optional) defaults to undefined|
| **level** | [**&#39;info&#39; | &#39;warning&#39; | &#39;error&#39; | &#39;debug&#39;**]**Array<&#39;info&#39; &#124; &#39;warning&#39; &#124; &#39;error&#39; &#124; &#39;debug&#39;>** | Level log | (optional) defaults to undefined|
| **platform** | [**string**] | Platform | (optional) defaults to undefined|
| **app** | [**string**] | App stream | (optional) defaults to undefined|
| **server** | [**string**] | Server IP | (optional) defaults to undefined|
| **dateFrom** | [**string**] | Date only after create date | (optional) defaults to undefined|
| **dateTo** | [**string**] | Date only after create date | (optional) defaults to undefined|
| **offset** | [**number**] | Page offset number | (optional) defaults to 0|
| **limit** | [**number**] | Number of results | (optional) defaults to 50|
| **sortByDate** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order by created_at | (optional) defaults to 'desc'|
| **cursorId** | [**string**] | Cursor event id | (optional) defaults to undefined|
| **cursorDatetime** | [**string**] | Cursor event datetime | (optional) defaults to undefined|
| **v** | [**&#39;4&#39;**]**Array<&#39;4&#39;>** | Version (automatically defaults to 4 based on the API contract, can be overridden) | (optional) defaults to '4'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteBroadcastEventsV4Response**

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

# **broadcastFindV1**
> SiteBroadcastFindResponse broadcastFindV1()

Read a single broadcast by broadcast_id in project_id, including its saved parameters and statistics. broadcast_id comes from GET /method/broadcast/list or project state; it identifies a broadcast, not a channel. Use GET /method/broadcast/status for current state.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let v: '3'; //Version (automatically defaults to 3 based on the API contract, can be overridden) (optional) (default to '3')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastFindV1(
    language,
    projectId,
    broadcastId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **v** | [**&#39;3&#39;**]**Array<&#39;3&#39;>** | Version (automatically defaults to 3 based on the API contract, can be overridden) | (optional) defaults to '3'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteBroadcastFindResponse**

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

# **broadcastGetTemplateV1**
> SiteBroadcastTemplateResponse broadcastGetTemplateV1()

Read the saved default broadcast title and description for project_id. POST /method/channel_settings/bulkUpdate updates the template and supported channels; this method neither publishes anything nor starts a stream.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastGetTemplateV1(
    language,
    projectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteBroadcastTemplateResponse**

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

# **broadcastGraphBitrateV1**
> SiteBroadcastGraphResponse broadcastGraphBitrateV1()

Get the input bitrate chart for broadcast_id in project_id. Statistics points use the response schema; this method does not change bitrate or source settings.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let v: '3'; //Version (automatically defaults to 3 based on the API contract, can be overridden) (optional) (default to '3')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastGraphBitrateV1(
    language,
    projectId,
    broadcastId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **v** | [**&#39;3&#39;**]**Array<&#39;3&#39;>** | Version (automatically defaults to 3 based on the API contract, can be overridden) | (optional) defaults to '3'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteBroadcastGraphResponse**

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

# **broadcastGraphViewersV1**
> SiteBroadcastGraphResponse broadcastGraphViewersV1()

Get the viewer chart for broadcast_id in project_id. This is saved broadcast statistics; the method neither controls channels nor starts a stream.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let v: '3'; //Version (automatically defaults to 3 based on the API contract, can be overridden) (optional) (default to '3')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastGraphViewersV1(
    language,
    projectId,
    broadcastId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **v** | [**&#39;3&#39;**]**Array<&#39;3&#39;>** | Version (automatically defaults to 3 based on the API contract, can be overridden) | (optional) defaults to '3'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteBroadcastGraphResponse**

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

# **broadcastListV1**
> SiteBroadcastListResponse broadcastListV1()

Get broadcast history for project_id with limit/offset and order. offset is the number of records to skip, not a page number. Returns results and pagination data; use broadcast_id from the list to read a specific broadcast, its events, and charts.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let limit: number; //Number of results (optional) (default to 10)
let offset: number; //Number of records to skip; not a page number. (optional) (default to 0)
let order: 'asc' | 'desc'; //order (optional) (default to 'asc')
let v: '3'; //Version (automatically defaults to 3 based on the API contract, can be overridden) (optional) (default to '3')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastListV1(
    language,
    projectId,
    limit,
    offset,
    order,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **limit** | [**number**] | Number of results | (optional) defaults to 10|
| **offset** | [**number**] | Number of records to skip; not a page number. | (optional) defaults to 0|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | order | (optional) defaults to 'asc'|
| **v** | [**&#39;3&#39;**]**Array<&#39;3&#39;>** | Version (automatically defaults to 3 based on the API contract, can be overridden) | (optional) defaults to '3'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteBroadcastListResponse**

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

# **broadcastPauseV1**
> SuccessResponse broadcastPauseV1(siteBroadcastPauseRequest)

Requests a user pause for the active broadcast identified by broadcast_id in project_id. Only unfinished broadcasts with app=live are supported; scheduler and transcoder broadcasts are rejected. The broadcast must belong to the specified project. This does not create or finish a broadcast.

### Example

```typescript
import {
    BroadcastApi,
    Configuration,
    SiteBroadcastPauseRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let siteBroadcastPauseRequest: SiteBroadcastPauseRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastPauseV1(
    siteBroadcastPauseRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteBroadcastPauseRequest** | **SiteBroadcastPauseRequest**|  | |
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
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **broadcastPlayV1**
> SuccessResponse broadcastPlayV1(siteBroadcastPlayRequest)

Requests playback after a user pause for the active broadcast identified by broadcast_id in project_id. Only unfinished broadcasts with app=live are supported; scheduler and transcoder broadcasts are rejected. The broadcast must belong to the specified project. This does not start a new broadcast or restart a finished one.

### Example

```typescript
import {
    BroadcastApi,
    Configuration,
    SiteBroadcastPlayRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let siteBroadcastPlayRequest: SiteBroadcastPlayRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastPlayV1(
    siteBroadcastPlayRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteBroadcastPlayRequest** | **SiteBroadcastPlayRequest**|  | |
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
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **broadcastRestreamChatV1**
> MethodBroadcastRestreamsResponse broadcastRestreamChatV1()

Get restream_id, internal channel_id, platform, and viewer count for destinations of broadcast_id after checking project ownership. The response is intended for selecting chat destinations, not sending messages; unavailable viewers statistics may be null.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let broadcastId: number; //broadcast id (default to undefined)
let key: string; //Chat token (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let projectId: number; //Required selected project for account integration credentials (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastRestreamChatV1(
    language,
    broadcastId,
    key,
    v,
    projectId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **key** | [**string**] | Chat token | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **projectId** | [**number**] | Required selected project for account integration credentials | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodBroadcastRestreamsResponse**

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

# **broadcastRestreamsV1**
> SiteBroadcastRestreamsInfoResponse broadcastRestreamsV1()

Read restream destinations for broadcast_id in project_id and obtain Centrifugo subscription tokens for URL and statistics updates, version v=1. This reads destination state without starting a stream. Subscription tokens are credentials and must not be logged.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //Broadcast id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastRestreamsV1(
    language,
    projectId,
    broadcastId,
    v,
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
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteBroadcastRestreamsInfoResponse**

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

# **broadcastStatusV1**
> BroadcastStatusV1200Response broadcastStatusV1()

Read the current broadcast state of project_id: kind determines inactive, live, transcoding, or scheduler. Use this response to verify state after pause/play/stop commands; reading does not start a broadcast. Supply the target project explicitly in account API.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastStatusV1(
    language,
    projectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**BroadcastStatusV1200Response**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Broadcast live status |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **broadcastStopV1**
> SuccessResponse broadcastStopV1(siteBroadcastStopRequest)

Requests stopping the active broadcast identified by broadcast_id in project_id. Only unfinished broadcasts with app=live are supported; scheduler and transcoder broadcasts are rejected. The broadcast must belong to the specified project. Clears its disconnect-protection wait and marks it as stopped. Check broadcast status to confirm completion; a successful response does not guarantee all shutdown work has finished.

### Example

```typescript
import {
    BroadcastApi,
    Configuration,
    SiteBroadcastStopRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let siteBroadcastStopRequest: SiteBroadcastStopRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastStopV1(
    siteBroadcastStopRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteBroadcastStopRequest** | **SiteBroadcastStopRequest**|  | |
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

# **broadcastTokenChannelV1**
> MethodCurrentBroadcastResponse broadcastTokenChannelV1()

Wait for active broadcast information via HTTP long polling using a project token. Waits for an event for at most 30 seconds: returns active broadcast JSON or HTTP 204 on timeout. This is neither a WebSocket nor a start-broadcast command; the account profile excludes this method.

### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let key: string; //Project/chat connection key credential for legacy long polling. Sensitive value; do not include in logs or examples. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.broadcastTokenChannelV1(
    language,
    key,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **key** | [**string**] | Project/chat connection key credential for legacy long polling. Sensitive value; do not include in logs or examples. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodCurrentBroadcastResponse**

### Authorization

[oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Channel token |  -  |
|**204** | No content |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

