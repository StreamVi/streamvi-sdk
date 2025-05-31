# TranscodersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**transcodersAddV1**](#transcodersaddv1) | **POST** /method/transcoder/add | Transcoder create|
|[**transcodersDeleteV1**](#transcodersdeletev1) | **POST** /method/transcoder/delete | Transcoder delete|
|[**transcodersListV1**](#transcoderslistv1) | **GET** /method/transcoder/list | List of transcoder|
|[**transcodersStopV1**](#transcodersstopv1) | **POST** /method/transcoder/stop | Transcoder stop|
|[**transcodersUpdateV1**](#transcodersupdatev1) | **POST** /method/transcoder/update | Transcoder update|

# **transcodersAddV1**
> number transcodersAddV1(transcoderCreateDto)


### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    TranscoderCreateDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let transcoderCreateDto: TranscoderCreateDto; //

const { status, data } = await apiInstance.transcodersAddV1(
    transcoderCreateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transcoderCreateDto** | **TranscoderCreateDto**|  | |


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

# **transcodersDeleteV1**
> SuccessResponse transcodersDeleteV1(transcoderItemDto)


### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    TranscoderItemDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let transcoderItemDto: TranscoderItemDto; //

const { status, data } = await apiInstance.transcodersDeleteV1(
    transcoderItemDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transcoderItemDto** | **TranscoderItemDto**|  | |


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

# **transcodersListV1**
> SiteTranscoderListResponse transcodersListV1()


### Example

```typescript
import {
    TranscodersApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.transcodersListV1(
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
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **transcodersStopV1**
> SuccessResponse transcodersStopV1(transcoderItemDto)


### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    TranscoderItemDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let transcoderItemDto: TranscoderItemDto; //

const { status, data } = await apiInstance.transcodersStopV1(
    transcoderItemDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transcoderItemDto** | **TranscoderItemDto**|  | |


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

# **transcodersUpdateV1**
> SuccessResponse transcodersUpdateV1(transcoderUpdateDto)


### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    TranscoderUpdateDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let transcoderUpdateDto: TranscoderUpdateDto; //

const { status, data } = await apiInstance.transcodersUpdateV1(
    transcoderUpdateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transcoderUpdateDto** | **TranscoderUpdateDto**|  | |


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

