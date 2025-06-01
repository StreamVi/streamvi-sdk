# StreamPullKeysApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**streamPullKeysSiteCheckV1**(#streampullkeyssitecheckv1) | **GET** /method/stream-pull-keys/check | Check key|
|**streamPullKeysSiteCreateV1**(#streampullkeyssitecreatev1) | **POST** /method/stream-pull-keys | Create key|
|**streamPullKeysSiteGetV1**(#streampullkeyssitegetv1) | **GET** /method/stream-pull-keys | List keys|
|**streamPullKeysSiteRemoveV1**(#streampullkeyssiteremovev1) | **DELETE** /method/stream-pull-keys | Delete key|
|**streamPullKeysSiteUpdateV1**(#streampullkeyssiteupdatev1) | **PUT** /method/stream-pull-keys | Update key|

# **streamPullKeysSiteCheckV1**
> CheckPullKeyResponse streamPullKeysSiteCheckV1()


### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let key: string; //Key (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.streamPullKeysSiteCheckV1(
    language,
    projectId,
    key,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **key** | **string** | Key | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **streamPullKeysSiteCreateV1**
> CreatePullKeyResponse streamPullKeysSiteCreateV1(createPullKeyRequest)


### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration,
    CreatePullKeyRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let createPullKeyRequest: CreatePullKeyRequest; //

const { status, data } = await apiInstance.streamPullKeysSiteCreateV1(
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

# **streamPullKeysSiteGetV1**
> PullKeyListResponse streamPullKeysSiteGetV1()


### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.streamPullKeysSiteGetV1(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **streamPullKeysSiteRemoveV1**
> SuccessResponse streamPullKeysSiteRemoveV1()


### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let key: string; //Key (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.streamPullKeysSiteRemoveV1(
    language,
    projectId,
    key,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **key** | **string** | Key | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **streamPullKeysSiteUpdateV1**
> SuccessResponse streamPullKeysSiteUpdateV1(updatePullKeyRequest)


### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration,
    UpdatePullKeyRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let updatePullKeyRequest: UpdatePullKeyRequest; //

const { status, data } = await apiInstance.streamPullKeysSiteUpdateV1(
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

