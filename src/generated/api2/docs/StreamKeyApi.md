# StreamKeyApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**siteStreamKeysControllerKey1**](#sitestreamkeyscontrollerkey1) | **GET** /method/stream-keys | Get stream credentials|
|[**siteStreamKeysControllerUpdateRecord1**](#sitestreamkeyscontrollerupdaterecord1) | **POST** /method/stream-keys/record | Update record|

# **siteStreamKeysControllerKey1**
> GetStreamKeyResponse siteStreamKeysControllerKey1()


### Example

```typescript
import {
    StreamKeyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StreamKeyApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.siteStreamKeysControllerKey1(
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

**GetStreamKeyResponse**

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

# **siteStreamKeysControllerUpdateRecord1**
> SuccessResponse siteStreamKeysControllerUpdateRecord1(setRecordStreamRequest)


### Example

```typescript
import {
    StreamKeyApi,
    Configuration,
    SetRecordStreamRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StreamKeyApi(configuration);

let setRecordStreamRequest: SetRecordStreamRequest; //

const { status, data } = await apiInstance.siteStreamKeysControllerUpdateRecord1(
    setRecordStreamRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setRecordStreamRequest** | **SetRecordStreamRequest**|  | |


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

