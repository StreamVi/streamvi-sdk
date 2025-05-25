# PlatformsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sitePlatformsControllerAddAccount1**](#siteplatformscontrolleraddaccount1) | **GET** /method/platforms/connect | Get url for start oauth|
|[**sitePlatformsControllerGetCategory1**](#siteplatformscontrollergetcategory1) | **GET** /method/platforms/category | Get category from the platform|
|[**sitePlatformsControllerLogoutAccount1**](#siteplatformscontrollerlogoutaccount1) | **POST** /method/platforms/logout | Get category from the platform|
|[**sitePlatformsControllerPlatformList1**](#siteplatformscontrollerplatformlist1) | **GET** /method/platforms/list | Supported platforms|

# **sitePlatformsControllerAddAccount1**
> sitePlatformsControllerAddAccount1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch'; //Provider oauth (default to undefined)

const { status, data } = await apiInstance.sitePlatformsControllerAddAccount1(
    v,
    language,
    projectId,
    platform
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **platform** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39;>** | Provider oauth | defaults to undefined|


### Return type

void (empty response body)

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

# **sitePlatformsControllerGetCategory1**
> ListOfCategoryItemResponse sitePlatformsControllerGetCategory1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let type: 'vk' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Category search bar (default to undefined)
let q: string; //Category search bar (optional) (default to undefined)

const { status, data } = await apiInstance.sitePlatformsControllerGetCategory1(
    v,
    language,
    type,
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **type** | [**&#39;vk&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Category search bar | defaults to undefined|
| **q** | [**string**] | Category search bar | (optional) defaults to undefined|


### Return type

**ListOfCategoryItemResponse**

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

# **sitePlatformsControllerLogoutAccount1**
> ListOfCategoryItemResponse sitePlatformsControllerLogoutAccount1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: string; //Category search bar (default to undefined)
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch'; //Provider oauth (default to undefined)

const { status, data } = await apiInstance.sitePlatformsControllerLogoutAccount1(
    v,
    language,
    id,
    platform
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **id** | [**string**] | Category search bar | defaults to undefined|
| **platform** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39;>** | Provider oauth | defaults to undefined|


### Return type

**ListOfCategoryItemResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sitePlatformsControllerPlatformList1**
> SitePlatformsSupportedResponse sitePlatformsControllerPlatformList1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.sitePlatformsControllerPlatformList1(
    v,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|


### Return type

**SitePlatformsSupportedResponse**

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

