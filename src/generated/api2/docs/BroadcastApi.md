# BroadcastApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodBroadcastRestreamsV1**](#methodbroadcastrestreamsv1) | **GET** /method/broadcast/restreams | Get restreams|
|[**methodBroadcastTokenChannelV1**](#methodbroadcasttokenchannelv1) | **GET** /method/broadcast/longpoll | Connect channel, long polling|

# **methodBroadcastRestreamsV1**
> MethodBroadcastRestreamsResponse methodBroadcastRestreamsV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let broadcastId: number; //broadcast id (default to undefined)
let key: string; //Chat token (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.methodBroadcastRestreamsV1(
    language,
    broadcastId,
    key,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **key** | [**string**] | Chat token | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **methodBroadcastTokenChannelV1**
> MethodCurrentBroadcastResponse methodBroadcastTokenChannelV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; // (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.methodBroadcastTokenChannelV1(
    language,
    key,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **key** | [**string**] |  | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

