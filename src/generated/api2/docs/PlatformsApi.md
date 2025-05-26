# PlatformsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addAccount1**](#addaccount1) | **GET** /method/platforms/connect | Get url for start oauth|
|[**getCategory1**](#getcategory1) | **GET** /method/platforms/category | Get category from the platform|
|[**logoutAccount1**](#logoutaccount1) | **POST** /method/platforms/logout | Get category from the platform|
|[**platformList1**](#platformlist1) | **GET** /method/platforms/list | Supported platforms|

# **addAccount1**
> addAccount1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PlatformsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PlatformsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch'; //Provider oauth (default to undefined)

const { status, data } = await apiInstance.addAccount1({
    language,
    projectId,
    platform
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **getCategory1**
> ListOfCategoryItemResponse getCategory1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PlatformsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PlatformsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let type: 'vk' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Category search bar (default to undefined)
let q: string; //Category search bar (optional) (default to undefined)

const { status, data } = await apiInstance.getCategory1({
    language,
    type,
    q
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **logoutAccount1**
> ListOfCategoryItemResponse logoutAccount1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PlatformsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PlatformsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: string; //Category search bar (default to undefined)
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch'; //Provider oauth (default to undefined)

const { status, data } = await apiInstance.logoutAccount1({
    language,
    id,
    platform
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **platformList1**
> SitePlatformsSupportedResponse platformList1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PlatformsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PlatformsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.platformList1({
    language
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

