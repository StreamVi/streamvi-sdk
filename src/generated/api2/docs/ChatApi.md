# ChatApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatGatewayKeyV1**](#chatgatewaykeyv1) | **GET** /method/chat/key | Get chat key|
|[**chatGatewayRotateKeyV1**](#chatgatewayrotatekeyv1) | **PUT** /method/chat/key | Rotate chat key|

# **chatGatewayKeyV1**
> SiteChatKeyResponse chatGatewayKeyV1()

Get the secret chat key for project_id. This is a connection credential, not a video publishing key or a widget actions list. The key is not intended for logs/examples; rotate it with PUT /method/chat/key.

### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.chatGatewayKeyV1(
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

**SiteChatKeyResponse**

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

# **chatGatewayRotateKeyV1**
> SiteChatKeyResponse chatGatewayRotateKeyV1(siteChatKeyRequest)

Rotate the secret chat key of project_id and return a new credential. This changes chat access without changing the publishing stream key or sending messages. Consumers must use the new key after rotation.

### Example

```typescript
import {
    ChatApi,
    Configuration,
    SiteChatKeyRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let siteChatKeyRequest: SiteChatKeyRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.chatGatewayRotateKeyV1(
    siteChatKeyRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteChatKeyRequest** | **SiteChatKeyRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteChatKeyResponse**

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

