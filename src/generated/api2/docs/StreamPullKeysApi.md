# StreamPullKeysApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**streamPullKeysSiteCheckV1**](#streampullkeyssitecheckv1) | **GET** /method/stream-pull-keys/check | Check key|
|[**streamPullKeysSiteCreateV1**](#streampullkeyssitecreatev1) | **POST** /method/stream-pull-keys | Create key|
|[**streamPullKeysSiteGetV1**](#streampullkeyssitegetv1) | **GET** /method/stream-pull-keys | List keys|
|[**streamPullKeysSiteRemoveV1**](#streampullkeyssiteremovev1) | **DELETE** /method/stream-pull-keys | Delete key|
|[**streamPullKeysSiteUpdateV1**](#streampullkeyssiteupdatev1) | **PUT** /method/stream-pull-keys | Update key|

# **streamPullKeysSiteCheckV1**
> CheckPullKeyResponse streamPullKeysSiteCheckV1()

Check an existing secret pull key and get transport/status. Missing keys produce stream_pull_keys.not_found; status shows the registered key state. This method does not create a pull link; key is sensitive and must not be logged.

### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let key: string; //Key (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.streamPullKeysSiteCheckV1(
    language,
    projectId,
    key,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **key** | [**string**] | Key | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**CheckPullKeyResponse**

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

# **streamPullKeysSiteCreateV1**
> CreatePullKeyResponse streamPullKeysSiteCreateV1(createPullKeyRequest)

Create a pull link for project_id and transport with name (Link by default). Checks the plan\'s pull_link_limit and pull server availability. Returns the new record\'s internal id, not a ready video stream; read uuid/shareUrl credentials from GET /method/stream-pull-keys.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.streamPullKeysSiteCreateV1(
    createPullKeyRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPullKeyRequest** | **CreatePullKeyRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**CreatePullKeyResponse**

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

# **streamPullKeysSiteGetV1**
> PullKeyListResponse streamPullKeysSiteGetV1()

Read pull links for project_id: internal id, secret uuid, transport/status/name, and shareUrl. Use uuid as key in update/delete/check; the record id does not replace key. Do not include live links or keys in the corpus or logs.

### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.streamPullKeysSiteGetV1(
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

**PullKeyListResponse**

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

# **streamPullKeysSiteRemoveV1**
> SuccessResponse streamPullKeysSiteRemoveV1()

Delete a pull key of the selected project_id. key is the secret uuid from the list. This revokes a pull link without deleting an RTMP channel or stopping the entire broadcast; returns success.

### Example

```typescript
import {
    StreamPullKeysApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new StreamPullKeysApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let key: string; //Key (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.streamPullKeysSiteRemoveV1(
    language,
    projectId,
    key,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **key** | [**string**] | Key | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

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

# **streamPullKeysSiteUpdateV1**
> SuccessResponse streamPullKeysSiteUpdateV1(updatePullKeyRequest)

Change region for an existing pull key in project_id. key is the secret uuid from the list, not the internal record id. Success confirms the configuration workflow; does not create a new link or change the source stream key.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.streamPullKeysSiteUpdateV1(
    updatePullKeyRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePullKeyRequest** | **UpdatePullKeyRequest**|  | |
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
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

