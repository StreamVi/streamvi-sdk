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
> ListOfRtmpServerLocationResponse methodRtmpServerListLocationsUnauthorizedV1()


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.methodRtmpServerListLocationsUnauthorizedV1(
    language,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**ListOfRtmpServerLocationResponse**

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


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let interval: 1 | 3 | 6 | 12 | 24; //Interval state in hours (default to 1)
let type: 'performance' | 'network' | 'cpu' | 'ram' | 'deliveredPackages'; //Type graph (default to 'network')
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.rtmpServerGraphV1(
    language,
    interval,
    type,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **interval** | [**1 | 3 | 6 | 12 | 24**]**Array<1 &#124; 3 &#124; 6 &#124; 12 &#124; 24>** | Interval state in hours | defaults to 1|
| **type** | [**&#39;performance&#39; | &#39;network&#39; | &#39;cpu&#39; | &#39;ram&#39; | &#39;deliveredPackages&#39;**]**Array<&#39;performance&#39; &#124; &#39;network&#39; &#124; &#39;cpu&#39; &#124; &#39;ram&#39; &#124; &#39;deliveredPackages&#39;>** | Type graph | defaults to 'network'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.rtmpServerListBaseV1(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**RtmpServerListResponseBase**

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

# **rtmpServerListV3**
> RtmpServerListV3Response rtmpServerListV3()


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '3'; //Version (automatically defaults to 3 based on method version, can be overridden) (optional) (default to '3')

const { status, data } = await apiInstance.rtmpServerListV3(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;3&#39;**]**Array<&#39;3&#39;>** | Version (automatically defaults to 3 based on method version, can be overridden) | (optional) defaults to '3'|


### Return type

**RtmpServerListV3Response**

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

# **rtmpServerSrtLatencyV1**
> RtmpServerSrtLatencyResponse rtmpServerSrtLatencyV1()


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let srcIp: string; //Source IPv4 address (default to undefined)
let dstIp: string; //Destination IPv4 address (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let profile: string; //Recommendation profile (optional) (default to 'balanced')

const { status, data } = await apiInstance.rtmpServerSrtLatencyV1(
    language,
    srcIp,
    dstIp,
    v,
    profile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **srcIp** | [**string**] | Source IPv4 address | defaults to undefined|
| **dstIp** | [**string**] | Destination IPv4 address | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **profile** | [**string**] | Recommendation profile | (optional) defaults to 'balanced'|


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


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let interval: 1 | 3 | 6 | 12 | 24; //Interval state in hours (default to 1)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.rtmpServerStateV1(
    language,
    interval,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **interval** | [**1 | 3 | 6 | 12 | 24**]**Array<1 &#124; 3 &#124; 6 &#124; 12 &#124; 24>** | Interval state in hours | defaults to 1|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

const { status, data } = await apiInstance.rtmpServerUpV1();
```

### Parameters
This endpoint does not have any parameters.


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

