# ChannelApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodControllerSearch**](#methodcontrollersearch) | **GET** /method/channel/search | Search channel list|
|[**methodControllerSetStatus**](#methodcontrollersetstatus) | **POST** /method/channel/set-status | Get live status|
|[**siteChannelControllerShortChannelList1**](#sitechannelcontrollershortchannellist1) | **GET** /method/channel/short | Minimal channel list|

# **methodControllerSearch**
> SiteSearchChannelResponse methodControllerSearch()


### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let type: 'all' | 'my' | 'available' | 'active'; // (optional) (default to undefined)
let platform: string; //platform type (optional) (default to undefined)
let name: string; //name (optional) (default to undefined)
let limit: number; //Number of results (optional) (default to 30)
let offset: number; //Page offset number (optional) (default to 0)

const { status, data } = await apiInstance.methodControllerSearch(
    v,
    language,
    projectId,
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
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **type** | [**&#39;all&#39; | &#39;my&#39; | &#39;available&#39; | &#39;active&#39;**]**Array<&#39;all&#39; &#124; &#39;my&#39; &#124; &#39;available&#39; &#124; &#39;active&#39;>** |  | (optional) defaults to undefined|
| **platform** | [**string**] | platform type | (optional) defaults to undefined|
| **name** | [**string**] | name | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results | (optional) defaults to 30|
| **offset** | [**number**] | Page offset number | (optional) defaults to 0|


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

# **methodControllerSetStatus**
> SuccessResponse methodControllerSetStatus(methodSetStatusChannelRequest)


### Example

```typescript
import {
    ChannelApi,
    Configuration,
    MethodSetStatusChannelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let methodSetStatusChannelRequest: MethodSetStatusChannelRequest; //

const { status, data } = await apiInstance.methodControllerSetStatus(
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

# **siteChannelControllerShortChannelList1**
> SiteGetShortChannelResponse siteChannelControllerShortChannelList1()


### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.siteChannelControllerShortChannelList1(
    v,
    language,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|


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

