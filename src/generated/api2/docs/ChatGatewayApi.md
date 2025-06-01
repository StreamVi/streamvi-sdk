# ChatGatewayApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**methodChatGatewayDeleteV1**(#methodchatgatewaydeletev1) | **POST** /method/chat/messages/delete | Remove message|
|**methodChatGatewayGetMessageV1**(#methodchatgatewaygetmessagev1) | **GET** /method/chat/messages/message | Get one message|
|**methodChatGatewayHistoryV1**(#methodchatgatewayhistoryv1) | **GET** /method/chat/messages | List history message|
|**methodChatGatewaySendV1**(#methodchatgatewaysendv1) | **POST** /method/chat/messages | Send message|

# **methodChatGatewayDeleteV1**
> SuccessResponse methodChatGatewayDeleteV1()


### Example

```typescript
import {
    ChatGatewayApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatGatewayApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let eventId: string; //Event id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.methodChatGatewayDeleteV1(
    language,
    key,
    broadcastId,
    eventId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **key** | **string** | Key | defaults to undefined|
| **broadcastId** | **number** | broadcast id | defaults to undefined|
| **eventId** | **string** | Event id | defaults to undefined|
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
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodChatGatewayGetMessageV1**
> MessageResponseDto methodChatGatewayGetMessageV1()


### Example

```typescript
import {
    ChatGatewayApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatGatewayApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let eventId: string; //Event id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.methodChatGatewayGetMessageV1(
    language,
    key,
    broadcastId,
    eventId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **key** | **string** | Key | defaults to undefined|
| **broadcastId** | **number** | broadcast id | defaults to undefined|
| **eventId** | **string** | Event id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **methodChatGatewayHistoryV1**
> MethodChatHistoryResponse methodChatGatewayHistoryV1()


### Example

```typescript
import {
    ChatGatewayApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatGatewayApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.methodChatGatewayHistoryV1(
    language,
    key,
    broadcastId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **key** | **string** | Key | defaults to undefined|
| **broadcastId** | **number** | broadcast id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **methodChatGatewaySendV1**
> MessageResponseDto methodChatGatewaySendV1(methodChatSendMessageRequestDto)


### Example

```typescript
import {
    ChatGatewayApi,
    Configuration,
    MethodChatSendMessageRequestDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatGatewayApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; //Key (default to undefined)
let broadcastId: number; // (default to undefined)
let methodChatSendMessageRequestDto: MethodChatSendMessageRequestDto; //
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.methodChatGatewaySendV1(
    language,
    key,
    broadcastId,
    methodChatSendMessageRequestDto,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodChatSendMessageRequestDto** | **MethodChatSendMessageRequestDto**|  | |
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **key** | **string** | Key | defaults to undefined|
| **broadcastId** | **number** |  | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

