# ChannelApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**channelShortChannelListV1**(#channelshortchannellistv1) | **GET** /method/channel/short | Minimal channel list|
|**methodSearchV1**(#methodsearchv1) | **GET** /method/channel/search | Search channel list|
|**methodSetStatusV1**(#methodsetstatusv1) | **POST** /method/channel/set-status | Get live status|

# **channelShortChannelListV1**
> SiteGetShortChannelResponse channelShortChannelListV1()


### Example

```typescript
import {
    ChannelApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelShortChannelListV1(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteGetShortChannelResponse**

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

# **methodSearchV1**
> SiteSearchChannelResponse methodSearchV1()


### Example

```typescript
import {
    ChannelApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let type: 'all' | 'my' | 'available' | 'active'; // (optional) (default to undefined)
let platform: string; //platform type (optional) (default to undefined)
let name: string; //name (optional) (default to undefined)
let limit: number; //Number of results (optional) (default to 30)
let offset: number; //Page offset number (optional) (default to 0)

const { status, data } = await apiInstance.methodSearchV1(
    language,
    projectId,
    v,
    type,
    platform,
    name,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **type** | **'all' | 'my' | 'available' | 'active'** |  | (optional) defaults to undefined|
| **platform** | **string** | platform type | (optional) defaults to undefined|
| **name** | **string** | name | (optional) defaults to undefined|
| **limit** | **number** | Number of results | (optional) defaults to 30|
| **offset** | **number** | Page offset number | (optional) defaults to 0|


### Return type

**SiteSearchChannelResponse**

### Authorization

[X-API-KEY](../README.md#X-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodSetStatusV1**
> SuccessResponse methodSetStatusV1(methodSetStatusChannelRequest)


### Example

```typescript
import {
    ChannelApi,
    Configuration,
    MethodSetStatusChannelRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let methodSetStatusChannelRequest: MethodSetStatusChannelRequest; //

const { status, data } = await apiInstance.methodSetStatusV1(
    methodSetStatusChannelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodSetStatusChannelRequest** | **MethodSetStatusChannelRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

[X-API-KEY](../README.md#X-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

