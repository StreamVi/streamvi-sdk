# TranscodersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**transcodersControllerAdd1**](#transcoderscontrolleradd1) | **POST** /method/transcoder/add | Transcoder create|
|[**transcodersControllerDelete1**](#transcoderscontrollerdelete1) | **POST** /method/transcoder/delete | Transcoder delete|
|[**transcodersControllerList1**](#transcoderscontrollerlist1) | **GET** /method/transcoder/list | List of transcoder|
|[**transcodersControllerStop1**](#transcoderscontrollerstop1) | **POST** /method/transcoder/stop | Transcoder stop|
|[**transcodersControllerUpdate1**](#transcoderscontrollerupdate1) | **POST** /method/transcoder/update | Transcoder update|

# **transcodersControllerAdd1**
> number transcodersControllerAdd1(siteTranscoderCreateDto)


### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    SiteTranscoderCreateDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let siteTranscoderCreateDto: SiteTranscoderCreateDto; //

const { status, data } = await apiInstance.transcodersControllerAdd1(
    siteTranscoderCreateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteTranscoderCreateDto** | **SiteTranscoderCreateDto**|  | |


### Return type

**number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transcodersControllerDelete1**
> SuccessResponse transcodersControllerDelete1(siteTranscoderItemDto)


### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    SiteTranscoderItemDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let siteTranscoderItemDto: SiteTranscoderItemDto; //

const { status, data } = await apiInstance.transcodersControllerDelete1(
    siteTranscoderItemDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteTranscoderItemDto** | **SiteTranscoderItemDto**|  | |


### Return type

**SuccessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transcodersControllerList1**
> SiteTranscoderListResponse transcodersControllerList1()


### Example

```typescript
import {
    TranscodersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.transcodersControllerList1(
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

**SiteTranscoderListResponse**

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

# **transcodersControllerStop1**
> SuccessResponse transcodersControllerStop1(siteTranscoderItemDto)


### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    SiteTranscoderItemDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let siteTranscoderItemDto: SiteTranscoderItemDto; //

const { status, data } = await apiInstance.transcodersControllerStop1(
    siteTranscoderItemDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteTranscoderItemDto** | **SiteTranscoderItemDto**|  | |


### Return type

**SuccessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transcodersControllerUpdate1**
> SuccessResponse transcodersControllerUpdate1(siteTranscoderUpdateDto)


### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    SiteTranscoderUpdateDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let siteTranscoderUpdateDto: SiteTranscoderUpdateDto; //

const { status, data } = await apiInstance.transcodersControllerUpdate1(
    siteTranscoderUpdateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteTranscoderUpdateDto** | **SiteTranscoderUpdateDto**|  | |


### Return type

**SuccessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

