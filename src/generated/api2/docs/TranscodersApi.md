# TranscodersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**add1**](#add1) | **POST** /method/transcoder/add | Transcoder create|
|[**delete1**](#delete1) | **POST** /method/transcoder/delete | Transcoder delete|
|[**list1**](#list1) | **GET** /method/transcoder/list | List of transcoder|
|[**stop1**](#stop1) | **POST** /method/transcoder/stop | Transcoder stop|
|[**update1**](#update1) | **POST** /method/transcoder/update | Transcoder update|

# **add1**
> number add1(siteTranscoderCreateDto)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { TranscodersApi
    SiteTranscoderCreateDto } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new TranscodersApi(sdkConfig.configuration);

let siteTranscoderCreateDto: SiteTranscoderCreateDto; //

const { status, data } = await apiInstance.add1({
    siteTranscoderCreateDto
  });
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

# **delete1**
> SuccessResponse delete1(siteTranscoderItemDto)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { TranscodersApi
    SiteTranscoderItemDto } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new TranscodersApi(sdkConfig.configuration);

let siteTranscoderItemDto: SiteTranscoderItemDto; //

const { status, data } = await apiInstance.delete1({
    siteTranscoderItemDto
  });
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

# **list1**
> SiteTranscoderListResponse list1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { TranscodersApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new TranscodersApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.list1({
    language,
    projectId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **stop1**
> SuccessResponse stop1(siteTranscoderItemDto)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { TranscodersApi
    SiteTranscoderItemDto } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new TranscodersApi(sdkConfig.configuration);

let siteTranscoderItemDto: SiteTranscoderItemDto; //

const { status, data } = await apiInstance.stop1({
    siteTranscoderItemDto
  });
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

# **update1**
> SuccessResponse update1(siteTranscoderUpdateDto)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { TranscodersApi
    SiteTranscoderUpdateDto } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new TranscodersApi(sdkConfig.configuration);

let siteTranscoderUpdateDto: SiteTranscoderUpdateDto; //

const { status, data } = await apiInstance.update1({
    siteTranscoderUpdateDto
  });
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

