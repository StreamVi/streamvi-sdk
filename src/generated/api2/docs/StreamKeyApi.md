# StreamKeyApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**streamKeysKeyV1**](#streamkeyskeyv1) | **GET** /method/stream-keys | Get stream credentials|
|[**streamKeysRotateV1**](#streamkeysrotatev1) | **POST** /method/stream-keys/rotate | Rotate stream key|
|[**streamKeysSetWaitV1**](#streamkeyssetwaitv1) | **PUT** /method/stream-keys/wait | Update disconnect protection wait|
|[**streamKeysUpdateRecordV1**](#streamkeysupdaterecordv1) | **POST** /method/stream-keys/record | Update the stream recording preference (under development)|

# **streamKeysKeyV1**
> GetStreamKeyResponse streamKeysKeyV1()

Read disconnect protection settings and credentials for the selected project_id. wait is the saved waiting time in minutes; wait_max_minutes is the current plan maximum for PUT /method/stream-keys/wait. The response contains secret publishing key: do not include it in logs or examples. record is a saved preference, not confirmation that recording is available. Supply the account request target explicitly; the selected cabinet tab does not change project_id.

### Example

```typescript
import {
    StreamKeyApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamKeyApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.streamKeysKeyV1(
    language,
    projectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**GetStreamKeyResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streamKeysRotateV1**
> RotateStreamKeyResponse streamKeysRotateV1(rotateStreamKeyRequest)

Rotate the secret publishing key of the selected project_id. Returns a new key and sends disconnect commands to active publishers using the old key. Success confirms the key was saved; individual server disconnect errors are logged without rolling back. Update the key in the streaming source. This does not change protection duration; use PUT /method/stream-keys/wait for that.

### Example

```typescript
import {
    StreamKeyApi,
    Configuration,
    RotateStreamKeyRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamKeyApi(configuration);

let rotateStreamKeyRequest: RotateStreamKeyRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.streamKeysRotateV1(
    rotateStreamKeyRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rotateStreamKeyRequest** | **RotateStreamKeyRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**RotateStreamKeyResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streamKeysSetWaitV1**
> SuccessResponse streamKeysSetWaitV1(setWaitStreamKeyRequest)

Enable broadcast disconnect protection, change the wait time, or disable protection for the selected project_id. For example, \'enable protection for 15 minutes\' means wait_minutes=15; \'disable protection\' means wait_minutes=0. Accepts an integer number of minutes >= 0. Positive values are limited by the current tariff: first read wait_max_minutes via GET /method/stream-keys. Exceeding the limit returns error.name=stream_key.wait_exceeds_tariff_limit and error.data.max_minutes. Success confirms saving the setting and attempting to update active streams; completion of all external actions is not guaranteed. Pass an explicit project_id: the account fallback is the personal project, not the open tab. X-Client-Request-Id coordinates realtime refresh and is not an idempotency key.

### Example

```typescript
import {
    StreamKeyApi,
    Configuration,
    SetWaitStreamKeyRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamKeyApi(configuration);

let setWaitStreamKeyRequest: SetWaitStreamKeyRequest; //
let xClientRequestId: string; //Optional UUID v4 for realtime refresh coordination. Invalid values are ignored; not an idempotency key. (optional) (default to undefined)

const { status, data } = await apiInstance.streamKeysSetWaitV1(
    setWaitStreamKeyRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setWaitStreamKeyRequest** | **SetWaitStreamKeyRequest**|  | |
| **xClientRequestId** | [**string**] | Optional UUID v4 for realtime refresh coordination. Invalid values are ignored; not an idempotency key. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Validation or plan limit error. If wait_max_minutes is exceeded: error.name&#x3D;stream_key.wait_exceeds_tariff_limit and error.data.max_minutes. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streamKeysUpdateRecordV1**
> SuccessResponse streamKeysUpdateRecordV1(setRecordStreamRequest)

Recording is under development and is not implemented as an available recording feature. This endpoint only saves the requested project recording flag: true to enable, false to disable. The current implementation requires a tariff with recording enabled. A successful response confirms that the preference was saved; it does not mean recording has started or a video was created.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.streamKeysUpdateRecordV1(
    setRecordStreamRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setRecordStreamRequest** | **SetRecordStreamRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

