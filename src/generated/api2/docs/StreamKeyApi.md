# StreamKeyApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**streamKeysKeyV1**](#streamkeyskeyv1) | **GET** /method/stream-keys | Get stream credentials|
|[**streamKeysUpdateRecordV1**](#streamkeysupdaterecordv1) | **POST** /method/stream-keys/record | Update record|

# **streamKeysKeyV1**
> GetStreamKeyResponse streamKeysKeyV1()


### Example

```typescript
import {
    StreamKeyApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamKeyApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.streamKeysKeyV1(
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

# **streamKeysUpdateRecordV1**
> SuccessResponse streamKeysUpdateRecordV1(setRecordStreamRequest)


### Example

```typescript
import {
    StreamKeyApi,
    Configuration,
    SetRecordStreamRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamKeyApi(configuration);

let setRecordStreamRequest: SetRecordStreamRequest; //

const { status, data } = await apiInstance.streamKeysUpdateRecordV1(
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

