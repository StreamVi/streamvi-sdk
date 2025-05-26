# ChatGatewayApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodChatGatewayControllerDelete**](#methodchatgatewaycontrollerdelete) | **POST** /method/chat/messages/delete | Remove message|
|[**methodChatGatewayControllerGetMessage**](#methodchatgatewaycontrollergetmessage) | **GET** /method/chat/messages/message | Get one message|
|[**methodChatGatewayControllerHistory**](#methodchatgatewaycontrollerhistory) | **GET** /method/chat/messages | List history message|
|[**methodChatGatewayControllerSend**](#methodchatgatewaycontrollersend) | **POST** /method/chat/messages | Send message|

# **methodChatGatewayControllerDelete**
> SuccessResponse methodChatGatewayControllerDelete()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChatGatewayApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChatGatewayApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let eventId: string; //Event id (default to undefined)

const { status, data } = await apiInstance.methodChatGatewayControllerDelete({
    language,
    key,
    broadcastId,
    eventId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **key** | [**string**] | Key | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **eventId** | [**string**] | Event id | defaults to undefined|


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
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodChatGatewayControllerGetMessage**
> MessageResponseDto methodChatGatewayControllerGetMessage()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChatGatewayApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChatGatewayApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let eventId: string; //Event id (default to undefined)

const { status, data } = await apiInstance.methodChatGatewayControllerGetMessage({
    language,
    key,
    broadcastId,
    eventId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **key** | [**string**] | Key | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **eventId** | [**string**] | Event id | defaults to undefined|


### Return type

**MessageResponseDto**

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

# **methodChatGatewayControllerHistory**
> MethodChatHistoryResponse methodChatGatewayControllerHistory()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChatGatewayApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChatGatewayApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)

const { status, data } = await apiInstance.methodChatGatewayControllerHistory({
    language,
    key,
    broadcastId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **key** | [**string**] | Key | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|


### Return type

**MethodChatHistoryResponse**

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

# **methodChatGatewayControllerSend**
> MessageResponseDto methodChatGatewayControllerSend(methodChatSendMessageRequestDto)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChatGatewayApi
    MethodChatSendMessageRequestDto } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChatGatewayApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; // (default to undefined)
let methodChatSendMessageRequestDto: MethodChatSendMessageRequestDto; //

const { status, data } = await apiInstance.methodChatGatewayControllerSend({
    language,
    key,
    broadcastId,
    methodChatSendMessageRequestDto
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodChatSendMessageRequestDto** | **MethodChatSendMessageRequestDto**|  | |
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **key** | [**string**] | Key | defaults to undefined|
| **broadcastId** | [**number**] |  | defaults to undefined|


### Return type

**MessageResponseDto**

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

