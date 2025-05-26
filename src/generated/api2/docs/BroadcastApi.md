# BroadcastApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodBroadcastControllerRestreams**](#methodbroadcastcontrollerrestreams) | **GET** /method/broadcast/restreams | Get restreams|
|[**methodBroadcastControllerTokenChannel**](#methodbroadcastcontrollertokenchannel) | **GET** /method/broadcast/longpoll | Connect channel, long polling|

# **methodBroadcastControllerRestreams**
> MethodBroadcastRestreamsResponse methodBroadcastControllerRestreams()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { BroadcastApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new BroadcastApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let broadcastId: number; //broadcast id (default to undefined)
let key: string; //Chat token (default to undefined)

const { status, data } = await apiInstance.methodBroadcastControllerRestreams({
    language,
    broadcastId,
    key
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **key** | [**string**] | Chat token | defaults to undefined|


### Return type

**MethodBroadcastRestreamsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodBroadcastControllerTokenChannel**
> MethodCurrentBroadcastResponse methodBroadcastControllerTokenChannel()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { BroadcastApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new BroadcastApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; // (default to undefined)

const { status, data } = await apiInstance.methodBroadcastControllerTokenChannel({
    language,
    key
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**MethodCurrentBroadcastResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Channel token |  -  |
|**204** | No content |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

