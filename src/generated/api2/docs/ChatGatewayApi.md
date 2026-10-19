# ChatGatewayApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodChatGatewayDeleteV1**](#methodchatgatewaydeletev1) | **POST** /method/chat/messages/delete | Remove message|
|[**methodChatGatewayGetMessageV1**](#methodchatgatewaygetmessagev1) | **GET** /method/chat/messages/message | Get one message|
|[**methodChatGatewayHistoryV1**](#methodchatgatewayhistoryv1) | **GET** /method/chat/messages | List history message|
|[**methodChatGatewaySendV1**](#methodchatgatewaysendv1) | **POST** /method/chat/messages | Send message|

# **methodChatGatewayDeleteV1**
> SuccessResponse methodChatGatewayDeleteV1()

Send a request to delete message event_id for broadcast_id after checking access to the broadcast in the selected project. Input is supplied in query for this POST. Success confirms the chat gateway request completed; this neither deletes the broadcast nor the channel.

### Example

```typescript
import {
    ChatGatewayApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatGatewayApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let eventId: string; //Event id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let projectId: number; //Target project ID. Account tokens fall back to the personal project when omitted in every request source; pass the intended accessible project explicitly; project and chat keys determine the project automatically. (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodChatGatewayDeleteV1(
    language,
    key,
    broadcastId,
    eventId,
    v,
    projectId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **key** | [**string**] | Key | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **eventId** | [**string**] | Event id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **projectId** | [**number**] | Target project ID. Account tokens fall back to the personal project when omitted in every request source; pass the intended accessible project explicitly; project and chat keys determine the project automatically. | (optional) defaults to undefined|
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
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodChatGatewayGetMessageV1**
> MessageResponseDto methodChatGatewayGetMessageV1()

Read a single message by event_id and broadcast_id after checking broadcast ownership by the selected project. event_id is a message event ID from history, not a platform channel ID. The response is forwarded from the chat gateway.

### Example

```typescript
import {
    ChatGatewayApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatGatewayApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let eventId: string; //Event id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let projectId: number; //Target project ID. Account tokens fall back to the personal project when omitted in every request source; pass the intended accessible project explicitly; project and chat keys determine the project automatically. (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodChatGatewayGetMessageV1(
    language,
    key,
    broadcastId,
    eventId,
    v,
    projectId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **key** | [**string**] | Key | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **eventId** | [**string**] | Event id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **projectId** | [**number**] | Target project ID. Account tokens fall back to the personal project when omitted in every request source; pass the intended accessible project explicitly; project and chat keys determine the project automatically. | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MessageResponseDto**

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

# **methodChatGatewayHistoryV1**
> MethodChatHistoryResponse methodChatGatewayHistoryV1()

Read message history for broadcast_id in the project determined by the token/explicit project_id. Broadcast ownership is checked, then the response is forwarded from the chat gateway. This reads data without connecting to WebSocket or sending a message.

### Example

```typescript
import {
    ChatGatewayApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatGatewayApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let projectId: number; //Target project ID. Account tokens fall back to the personal project when omitted in every request source; pass the intended accessible project explicitly; project and chat keys determine the project automatically. (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodChatGatewayHistoryV1(
    language,
    key,
    broadcastId,
    v,
    projectId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **key** | [**string**] | Key | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **projectId** | [**number**] | Target project ID. Account tokens fall back to the personal project when omitted in every request source; pass the intended accessible project explicitly; project and chat keys determine the project automatically. | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodChatHistoryResponse**

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

# **methodChatGatewaySendV1**
> MessageResponseDto methodChatGatewaySendV1(methodChatSendMessageRequestDto)

Send a chat message for broadcast_id in the selected project. broadcast_id is supplied in query, the message payload in body; project_id comes from the request context. Broadcast ownership is checked; no restream destinations produces broadcast.no_restreams. Returns the chat gateway response without guaranteeing message delivery by every platform.

### Example

```typescript
import {
    ChatGatewayApi,
    Configuration,
    MethodChatSendMessageRequestDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatGatewayApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; //Internal project broadcast ID; not channel_id or a message event_id. (default to undefined)
let methodChatSendMessageRequestDto: MethodChatSendMessageRequestDto; //
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let projectId: number; //Target project ID. Account tokens fall back to the personal project when omitted in every request source; pass the intended accessible project explicitly; project and chat keys determine the project automatically. (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodChatGatewaySendV1(
    language,
    key,
    broadcastId,
    methodChatSendMessageRequestDto,
    v,
    projectId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodChatSendMessageRequestDto** | **MethodChatSendMessageRequestDto**|  | |
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **key** | [**string**] | Key | defaults to undefined|
| **broadcastId** | [**number**] | Internal project broadcast ID; not channel_id or a message event_id. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **projectId** | [**number**] | Target project ID. Account tokens fall back to the personal project when omitted in every request source; pass the intended accessible project explicitly; project and chat keys determine the project automatically. | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MessageResponseDto**

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

