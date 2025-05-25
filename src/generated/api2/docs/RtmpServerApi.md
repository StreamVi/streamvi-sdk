# RtmpServerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodRtmpServerControllerListLocationsUnauthorized**](#methodrtmpservercontrollerlistlocationsunauthorized) | **GET** /method/rtmp_server/list_locations_unauthorized | Rtmp locations server list example for unauthorized|
|[**siteRtmpServerControllerGraph1**](#sitertmpservercontrollergraph1) | **GET** /method/rtmp_server/graph | Graph of rtmp servers|
|[**siteRtmpServerControllerList1**](#sitertmpservercontrollerlist1) | **GET** /method/rtmp_server/list | List rtmp servers|
|[**siteRtmpServerControllerState1**](#sitertmpservercontrollerstate1) | **GET** /method/rtmp_server/state | State of rtmp servers|
|[**siteRtmpServerControllerUp1**](#sitertmpservercontrollerup1) | **GET** /method/rtmp_server/up | State of rtmp servers|

# **methodRtmpServerControllerListLocationsUnauthorized**
> ListOfRtmpServerLocationResponse methodRtmpServerControllerListLocationsUnauthorized()


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.methodRtmpServerControllerListLocationsUnauthorized(
    v,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|


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

# **siteRtmpServerControllerGraph1**
> RtmpServerGraphResponse siteRtmpServerControllerGraph1()


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let interval: 1 | 3 | 6 | 12 | 24; //Interval state in hours (default to 1)
let type: 'performance' | 'network' | 'cpu' | 'ram' | 'deliveredPackages'; //Type graph (default to 'network')

const { status, data } = await apiInstance.siteRtmpServerControllerGraph1(
    v,
    language,
    interval,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **interval** | [**1 | 3 | 6 | 12 | 24**]**Array<1 &#124; 3 &#124; 6 &#124; 12 &#124; 24>** | Interval state in hours | defaults to 1|
| **type** | [**&#39;performance&#39; | &#39;network&#39; | &#39;cpu&#39; | &#39;ram&#39; | &#39;deliveredPackages&#39;**]**Array<&#39;performance&#39; &#124; &#39;network&#39; &#124; &#39;cpu&#39; &#124; &#39;ram&#39; &#124; &#39;deliveredPackages&#39;>** | Type graph | defaults to 'network'|


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

# **siteRtmpServerControllerList1**
> RtmpServerListResponse siteRtmpServerControllerList1()


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let interval: 1 | 3 | 6 | 12 | 24; //Interval state in hours (default to 1)

const { status, data } = await apiInstance.siteRtmpServerControllerList1(
    v,
    language,
    projectId,
    interval
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **interval** | [**1 | 3 | 6 | 12 | 24**]**Array<1 &#124; 3 &#124; 6 &#124; 12 &#124; 24>** | Interval state in hours | defaults to 1|


### Return type

**RtmpServerListResponse**

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

# **siteRtmpServerControllerState1**
> RtmpServerStateResponse siteRtmpServerControllerState1()


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let interval: 1 | 3 | 6 | 12 | 24; //Interval state in hours (default to 1)

const { status, data } = await apiInstance.siteRtmpServerControllerState1(
    v,
    language,
    interval
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **interval** | [**1 | 3 | 6 | 12 | 24**]**Array<1 &#124; 3 &#124; 6 &#124; 12 &#124; 24>** | Interval state in hours | defaults to 1|


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

# **siteRtmpServerControllerUp1**
> object siteRtmpServerControllerUp1()


### Example

```typescript
import {
    RtmpServerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RtmpServerApi(configuration);

const { status, data } = await apiInstance.siteRtmpServerControllerUp1();
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

