# StreamPullKeysApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**check1**](#check1) | **GET** /method/stream-pull-keys/check | Check key|
|[**create1**](#create1) | **POST** /method/stream-pull-keys | Create key|
|[**get1**](#get1) | **GET** /method/stream-pull-keys | List keys|
|[**remove1**](#remove1) | **DELETE** /method/stream-pull-keys | Delete key|
|[**update1**](#update1) | **PUT** /method/stream-pull-keys | Update key|

# **check1**
> CheckPullKeyResponse check1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { StreamPullKeysApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new StreamPullKeysApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let key: string; //Key (default to undefined)

const { status, data } = await apiInstance.check1({
    language,
    projectId,
    key
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **key** | [**string**] | Key | defaults to undefined|


### Return type

**CheckPullKeyResponse**

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

# **create1**
> CreatePullKeyResponse create1(createPullKeyRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { StreamPullKeysApi
    CreatePullKeyRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new StreamPullKeysApi(sdkConfig.configuration);

let createPullKeyRequest: CreatePullKeyRequest; //

const { status, data } = await apiInstance.create1({
    createPullKeyRequest
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPullKeyRequest** | **CreatePullKeyRequest**|  | |


### Return type

**CreatePullKeyResponse**

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

# **get1**
> PullKeyListResponse get1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { StreamPullKeysApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new StreamPullKeysApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.get1({
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

**PullKeyListResponse**

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

# **remove1**
> SuccessResponse remove1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { StreamPullKeysApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new StreamPullKeysApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let key: string; //Key (default to undefined)

const { status, data } = await apiInstance.remove1({
    language,
    projectId,
    key
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **key** | [**string**] | Key | defaults to undefined|


### Return type

**SuccessResponse**

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

# **update1**
> SuccessResponse update1(updatePullKeyRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { StreamPullKeysApi
    UpdatePullKeyRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new StreamPullKeysApi(sdkConfig.configuration);

let updatePullKeyRequest: UpdatePullKeyRequest; //

const { status, data } = await apiInstance.update1({
    updatePullKeyRequest
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePullKeyRequest** | **UpdatePullKeyRequest**|  | |


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
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

