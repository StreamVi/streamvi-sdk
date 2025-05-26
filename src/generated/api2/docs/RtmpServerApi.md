# RtmpServerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodRtmpServerControllerListLocationsUnauthorized**](#methodrtmpservercontrollerlistlocationsunauthorized) | **GET** /method/rtmp_server/list_locations_unauthorized | Rtmp locations server list example for unauthorized|
|[**graph1**](#graph1) | **GET** /method/rtmp_server/graph | Graph of rtmp servers|
|[**list1**](#list1) | **GET** /method/rtmp_server/list | List rtmp servers|
|[**state1**](#state1) | **GET** /method/rtmp_server/state | State of rtmp servers|
|[**up1**](#up1) | **GET** /method/rtmp_server/up | State of rtmp servers|

# **methodRtmpServerControllerListLocationsUnauthorized**
> ListOfRtmpServerLocationResponse methodRtmpServerControllerListLocationsUnauthorized()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { RtmpServerApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new RtmpServerApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.methodRtmpServerControllerListLocationsUnauthorized({
    language
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **graph1**
> RtmpServerGraphResponse graph1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { RtmpServerApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new RtmpServerApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let interval: 1 | 3 | 6 | 12 | 24; //Interval state in hours (default to 1)
let type: 'performance' | 'network' | 'cpu' | 'ram' | 'deliveredPackages'; //Type graph (default to 'network')

const { status, data } = await apiInstance.graph1({
    language,
    interval,
    type
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **list1**
> RtmpServerListResponse list1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { RtmpServerApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new RtmpServerApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let interval: 1 | 3 | 6 | 12 | 24; //Interval state in hours (default to 1)

const { status, data } = await apiInstance.list1({
    language,
    projectId,
    interval
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **state1**
> RtmpServerStateResponse state1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { RtmpServerApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new RtmpServerApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let interval: 1 | 3 | 6 | 12 | 24; //Interval state in hours (default to 1)

const { status, data } = await apiInstance.state1({
    language,
    interval
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **up1**
> object up1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { RtmpServerApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new RtmpServerApi(sdkConfig.configuration);

const { status, data } = await apiInstance.up1({});
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

