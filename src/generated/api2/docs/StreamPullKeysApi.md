# StreamPullKeysApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**streamPullKeysSiteControllerCheck1**](#streampullkeyssitecontrollercheck1) | **GET** /method/stream-pull-keys/check | Check key|
|[**streamPullKeysSiteControllerCreate1**](#streampullkeyssitecontrollercreate1) | **POST** /method/stream-pull-keys | Create key|
|[**streamPullKeysSiteControllerGet1**](#streampullkeyssitecontrollerget1) | **GET** /method/stream-pull-keys | List keys|
|[**streamPullKeysSiteControllerRemove1**](#streampullkeyssitecontrollerremove1) | **DELETE** /method/stream-pull-keys | Delete key|
|[**streamPullKeysSiteControllerUpdate1**](#streampullkeyssitecontrollerupdate1) | **PUT** /method/stream-pull-keys | Update key|

# **streamPullKeysSiteControllerCheck1**
> CheckPullKeyResponse streamPullKeysSiteControllerCheck1()


### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let key: string; //Key (default to undefined)

const { status, data } = await apiInstance.streamPullKeysSiteControllerCheck1(
    v,
    language,
    projectId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
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

# **streamPullKeysSiteControllerCreate1**
> CreatePullKeyResponse streamPullKeysSiteControllerCreate1(createPullKeyRequest)


### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration,
    CreatePullKeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let createPullKeyRequest: CreatePullKeyRequest; //

const { status, data } = await apiInstance.streamPullKeysSiteControllerCreate1(
    createPullKeyRequest
);
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

# **streamPullKeysSiteControllerGet1**
> PullKeyListResponse streamPullKeysSiteControllerGet1()


### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.streamPullKeysSiteControllerGet1(
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

# **streamPullKeysSiteControllerRemove1**
> SuccessResponse streamPullKeysSiteControllerRemove1()


### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let key: string; //Key (default to undefined)

const { status, data } = await apiInstance.streamPullKeysSiteControllerRemove1(
    v,
    language,
    projectId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
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

# **streamPullKeysSiteControllerUpdate1**
> SuccessResponse streamPullKeysSiteControllerUpdate1(updatePullKeyRequest)


### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration,
    UpdatePullKeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let updatePullKeyRequest: UpdatePullKeyRequest; //

const { status, data } = await apiInstance.streamPullKeysSiteControllerUpdate1(
    updatePullKeyRequest
);
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

