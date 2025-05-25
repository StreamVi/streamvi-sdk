# CentrifugeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTokenBroadcast**](#gettokenbroadcast) | **GET** /method/centrifuge/token/broadcast | Auth token for broadcast|
|[**siteCentrifugeControllerAuthV21**](#sitecentrifugecontrollerauthv21) | **GET** /method/centrifuge | Auth centrifuge|
|[**siteCentrifugeControllerProject1**](#sitecentrifugecontrollerproject1) | **GET** /method/centrifuge/auth/project | Auth token for project|

# **getTokenBroadcast**
> SiteAuthCentrifugeResponse getTokenBroadcast()

       channel - \"$broadcast:{broadcast_id}\"       expiresIn - 30min     

### Example

```typescript
import {
    CentrifugeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CentrifugeApi(configuration);

let broadcastId: number; // (default to undefined)
let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.getTokenBroadcast(
    broadcastId,
    v,
    language,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **broadcastId** | [**number**] |  | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|


### Return type

**SiteAuthCentrifugeResponse**

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

# **siteCentrifugeControllerAuthV21**
> SiteAuthCentrifugeResponse siteCentrifugeControllerAuthV21()


### Example

```typescript
import {
    CentrifugeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CentrifugeApi(configuration);

let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.siteCentrifugeControllerAuthV21(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] | Project id | defaults to undefined|


### Return type

**SiteAuthCentrifugeResponse**

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

# **siteCentrifugeControllerProject1**
> SiteAuthCentrifugeResponse siteCentrifugeControllerProject1()

       channel - \"$project_channels:{project_id}\"       expiresIn - 30min       project access min - editor     

### Example

```typescript
import {
    CentrifugeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CentrifugeApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.siteCentrifugeControllerProject1(
    v,
    language,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|


### Return type

**SiteAuthCentrifugeResponse**

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

