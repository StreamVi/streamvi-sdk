# PlatformsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**platformsAddAccountV1**](#platformsaddaccountv1) | **GET** /method/platforms/connect | Get url for start oauth|
|[**platformsGetCategoryV1**](#platformsgetcategoryv1) | **GET** /method/platforms/category | Get category from the platform|
|[**platformsLogoutAccountV1**](#platformslogoutaccountv1) | **POST** /method/platforms/logout | Get category from the platform|
|[**platformsPlatformListV1**](#platformsplatformlistv1) | **GET** /method/platforms/list | Supported platforms|

# **platformsAddAccountV1**
> platformsAddAccountV1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch'; //Provider oauth (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.platformsAddAccountV1(
    language,
    projectId,
    platform,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **platform** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **platformsGetCategoryV1**
> ListOfCategoryItemResponse platformsGetCategoryV1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let type: 'vk' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Category search bar (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let q: string; //Category search bar (optional) (default to undefined)

const { status, data } = await apiInstance.platformsGetCategoryV1(
    language,
    type,
    v,
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **type** | [**&#39;vk&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Category search bar | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
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

# **platformsLogoutAccountV1**
> ListOfCategoryItemResponse platformsLogoutAccountV1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: string; //Category search bar (default to undefined)
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch'; //Provider oauth (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.platformsLogoutAccountV1(
    language,
    id,
    platform,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **id** | [**string**] | Category search bar | defaults to undefined|
| **platform** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **platformsPlatformListV1**
> SitePlatformsSupportedResponse platformsPlatformListV1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.platformsPlatformListV1(
    language,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

