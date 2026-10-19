# DedicatedServerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodDedicatedServerCreateV1**](#methoddedicatedservercreatev1) | **POST** /method/dedicated-server/create | Create dedicated server request|
|[**methodDedicatedServerCurrentV1**](#methoddedicatedservercurrentv1) | **GET** /method/dedicated-server/current | Get current dedicated server|
|[**methodDedicatedServerDeleteV1**](#methoddedicatedserverdeletev1) | **DELETE** /method/dedicated-server/delete | Delete dedicated server|

# **methodDedicatedServerCreateV1**
> DedicatedServerResponse methodDedicatedServerCreateV1(methodCreateDedicatedServerRequest)

Create a dedicated server request for project_id and the selected pool. Checks the plan, pool eligibility, and absence of an existing server or active stream. Returns server data with init stage and history; a successful request does not mean the server is running yet.

### Example

```typescript
import {
    DedicatedServerApi,
    Configuration,
    MethodCreateDedicatedServerRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new DedicatedServerApi(configuration);

let methodCreateDedicatedServerRequest: MethodCreateDedicatedServerRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodDedicatedServerCreateV1(
    methodCreateDedicatedServerRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodCreateDedicatedServerRequest** | **MethodCreateDedicatedServerRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**DedicatedServerResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodDedicatedServerCurrentV1**
> SiteCurrentDedicatedServerResponse methodDedicatedServerCurrentV1()

Read the current dedicated server of project_id and its state history. If absent, server=null; stream_key credentials are available when running according to the current use case. This field is sensitive and unsuitable for logs/examples. Reading does not create a request.

### Example

```typescript
import {
    DedicatedServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new DedicatedServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodDedicatedServerCurrentV1(
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

**SiteCurrentDedicatedServerResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodDedicatedServerDeleteV1**
> SuccessResponse methodDedicatedServerDeleteV1()

Disable/delete dedicated server request id in project_id after checking ownership and the absence of an active stream. Returns success; this changes the server without cancelling a plan or stopping a broadcast.

### Example

```typescript
import {
    DedicatedServerApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new DedicatedServerApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let id: number; //Dedicated server id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodDedicatedServerDeleteV1(
    language,
    projectId,
    id,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **id** | [**number**] | Dedicated server id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

