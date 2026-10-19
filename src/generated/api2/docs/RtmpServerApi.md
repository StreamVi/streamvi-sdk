# RtmpServerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodRtmpServerListLocationsUnauthorizedV1**](#methodrtmpserverlistlocationsunauthorizedv1) | **GET** /method/rtmp_server/list_locations_unauthorized | Rtmp locations server list example for unauthorized|
|[**rtmpServerGraphV1**](#rtmpservergraphv1) | **GET** /method/rtmp_server/graph | Graph of rtmp servers|
|[**rtmpServerListBaseV1**](#rtmpserverlistbasev1) | **GET** /method/rtmp_server/base-list | List rtmp servers (base info)|
|[**rtmpServerListV3**](#rtmpserverlistv3) | **GET** /method/rtmp_server/list | List rtmp servers v3|
|[**rtmpServerSrtLatencyV1**](#rtmpserversrtlatencyv1) | **GET** /method/rtmp_server/srt-latency | Get recommended SRT latency by source and destination ip|
|[**rtmpServerStateV1**](#rtmpserverstatev1) | **GET** /method/rtmp_server/state | State of rtmp servers|
|[**rtmpServerUpV1**](#rtmpserverupv1) | **GET** /method/rtmp_server/up | State of rtmp servers|

# **methodRtmpServerListLocationsUnauthorizedV1**
> RtmpServerLocationsResponse methodRtmpServerListLocationsUnauthorizedV1()

Read the public RTMP server location list to choose a connection in advance. The response contains no project credentials and neither creates a dedicated server nor starts a broadcast.

### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodRtmpServerListLocationsUnauthorizedV1(
    language,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**RtmpServerLocationsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rtmpServerGraphV1**
> RtmpServerGraphResponse rtmpServerGraphV1()

Read a public RTMP server state chart by interval/type/language. This reads statistics history without changing server parameters; the request type field selects the chart type.

### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let interval: 1 | 3 | 6 | 12 | 24; //Interval state in hours (default to 1)
let type: 'performance' | 'network' | 'cpu' | 'ram' | 'deliveredPackages'; //Type graph (default to 'network')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.rtmpServerGraphV1(
    language,
    interval,
    type,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **interval** | [**1 | 3 | 6 | 12 | 24**]**Array<1 &#124; 3 &#124; 6 &#124; 12 &#124; 24>** | Interval state in hours | defaults to 1|
| **type** | [**&#39;performance&#39; | &#39;network&#39; | &#39;cpu&#39; | &#39;ram&#39; | &#39;deliveredPackages&#39;**]**Array<&#39;performance&#39; &#124; &#39;network&#39; &#124; &#39;cpu&#39; &#124; &#39;ram&#39; &#124; &#39;deliveredPackages&#39;>** | Type graph | defaults to 'network'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**RtmpServerGraphResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rtmpServerListBaseV1**
> RtmpServerListResponseBase rtmpServerListBaseV1()

Read basic details of available RTMP servers for project_id. This lists source connection options without changing the current server or starting a broadcast. Detailed data is available through GET /method/rtmp_server/list.

### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.rtmpServerListBaseV1(
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

**RtmpServerListResponseBase**

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

# **rtmpServerListV3**
> RtmpServerListV3Response rtmpServerListV3()

Read the RTMP server catalog for project_id localized using language, version v=3. Returns ingress selection data; read source credentials separately with GET /method/broadcast/credentials. This method does not start a broadcast.

### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '3'; //Version (automatically defaults to 3 based on the API contract, can be overridden) (optional) (default to '3')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.rtmpServerListV3(
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
| **v** | [**&#39;3&#39;**]**Array<&#39;3&#39;>** | Version (automatically defaults to 3 based on the API contract, can be overridden) | (optional) defaults to '3'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**RtmpServerListV3Response**

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

# **rtmpServerSrtLatencyV1**
> RtmpServerSrtLatencyResponse rtmpServerSrtLatencyV1()

Get recommended SRT latency in milliseconds for the src_ip/dst_ip IPv4 pair and profile (balanced by default). found/stale/generated_at indicate availability and freshness. This method does not change the SRT URL or current connection latency.

### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let srcIp: string; //Source IPv4 address (default to undefined)
let dstIp: string; //Destination IPv4 address (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let profile: string; //Recommendation profile (optional) (default to 'balanced')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.rtmpServerSrtLatencyV1(
    language,
    srcIp,
    dstIp,
    v,
    profile,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **srcIp** | [**string**] | Source IPv4 address | defaults to undefined|
| **dstIp** | [**string**] | Destination IPv4 address | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **profile** | [**string**] | Recommendation profile | (optional) defaults to 'balanced'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**RtmpServerSrtLatencyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rtmpServerStateV1**
> RtmpServerStateResponse rtmpServerStateV1()

Read public RTMP server state by interval and language. This is a monitoring read; this endpoint does not enable servers.

### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let interval: 1 | 3 | 6 | 12 | 24; //Interval state in hours (default to 1)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.rtmpServerStateV1(
    language,
    interval,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **interval** | [**1 | 3 | 6 | 12 | 24**]**Array<1 &#124; 3 &#124; 6 &#124; 12 &#124; 24>** | Interval state in hours | defaults to 1|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**RtmpServerStateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rtmpServerUpV1**
> object rtmpServerUpV1()

Read public RTMP server availability data. Despite the name up, this method neither starts servers nor creates an environment; it returns the actual monitoring service response.

### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.rtmpServerUpV1(
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

