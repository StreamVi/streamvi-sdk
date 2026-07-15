# PlatformsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**platformsAddAccountV1**](#platformsaddaccountv1) | **GET** /method/platforms/connect | Get url for start oauth|
|[**platformsAddAccountVkCommunityV1**](#platformsaddaccountvkcommunityv1) | **GET** /method/platforms/connect/vk-community | Get url for start oauth|
|[**platformsCallbackCommunityV1**](#platformscallbackcommunityv1) | **GET** /method/platforms/vk/callback-community | Internal request of auth|
|[**platformsCallbackV1**](#platformscallbackv1) | **GET** /method/platforms/{provider}/callback | Internal request of auth|
|[**platformsCallbackVkIdV1**](#platformscallbackvkidv1) | **GET** /method/platforms/vk-id/callback | Internal request of auth vk-id|
|[**platformsGetAccountsV1**](#platformsgetaccountsv1) | **GET** /method/platforms/accounts | Get accounts|
|[**platformsGetCategoryV1**](#platformsgetcategoryv1) | **GET** /method/platforms/category | Get category from the platform|
|[**platformsGetChannelsV1**](#platformsgetchannelsv1) | **GET** /method/platforms/account/channels | Get channels with accounts|
|[**platformsLogoutAccountV1**](#platformslogoutaccountv1) | **POST** /method/platforms/logout | Get category from the platform|
|[**platformsPlatformListV1**](#platformsplatformlistv1) | **GET** /method/platforms/list | Supported platforms|
|[**platformsRemoveAccountV1**](#platformsremoveaccountv1) | **POST** /method/platforms/account/remove | Remove account|

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
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Provider oauth (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let subId: string; //Sub id (optional) (default to undefined)

const { status, data } = await apiInstance.platformsAddAccountV1(
    language,
    projectId,
    platform,
    v,
    subId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **platform** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **subId** | [**string**] | Sub id | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformsAddAccountVkCommunityV1**
> platformsAddAccountVkCommunityV1()


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
let channelId: number; //Channel external id (default to undefined)
let accountId: string; //Id account on platform (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let subId: string; //Sub id (optional) (default to undefined)

const { status, data } = await apiInstance.platformsAddAccountVkCommunityV1(
    language,
    projectId,
    channelId,
    accountId,
    v,
    subId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel external id | defaults to undefined|
| **accountId** | [**string**] | Id account on platform | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **subId** | [**string**] | Sub id | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformsCallbackCommunityV1**
> string platformsCallbackCommunityV1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let state: string; //State (default to undefined)

const { status, data } = await apiInstance.platformsCallbackCommunityV1(
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | [**string**] | State | defaults to undefined|


### Return type

**string**

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

# **platformsCallbackV1**
> string platformsCallbackV1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let provider: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Provider oauth (default to undefined)
let state: string; //State (default to undefined)

const { status, data } = await apiInstance.platformsCallbackV1(
    provider,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Provider oauth | defaults to undefined|
| **state** | [**string**] | State | defaults to undefined|


### Return type

**string**

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

# **platformsCallbackVkIdV1**
> string platformsCallbackVkIdV1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let state: string; //State (default to undefined)

const { status, data } = await apiInstance.platformsCallbackVkIdV1(
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | [**string**] | State | defaults to undefined|


### Return type

**string**

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

# **platformsGetAccountsV1**
> GetAccountsResponse platformsGetAccountsV1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Provider oauth (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.platformsGetAccountsV1(
    language,
    platform,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **platform** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**GetAccountsResponse**

### Authorization

[oauth2](../README.md#oauth2)

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
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
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
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **q** | [**string**] | Category search bar | (optional) defaults to undefined|


### Return type

**ListOfCategoryItemResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformsGetChannelsV1**
> GetAccountChannelsResponse platformsGetChannelsV1()


### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let platform: 'vk' | 'ok'; //Platform (vk, ok) (default to undefined)
let ids: Array<number>; //Id accounts (default to undefined)
let projectId: number; //Project id (default to undefined)
let requestId: string; //Request id (for cache) (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let q: string; //Search (optional) (default to '')
let sort: 'asc' | 'desc'; //Sort by asc or desc (default asc) (optional) (default to 'asc')
let limit: number; //Limit (optional) (default to 10)
let page: number; //Page (optional) (default to 1)

const { status, data } = await apiInstance.platformsGetChannelsV1(
    language,
    platform,
    ids,
    projectId,
    requestId,
    v,
    q,
    sort,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **platform** | [**&#39;vk&#39; | &#39;ok&#39;**]**Array<&#39;vk&#39; &#124; &#39;ok&#39;>** | Platform (vk, ok) | defaults to undefined|
| **ids** | **Array&lt;number&gt;** | Id accounts | defaults to undefined|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **requestId** | [**string**] | Request id (for cache) | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **q** | [**string**] | Search | (optional) defaults to ''|
| **sort** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort by asc or desc (default asc) | (optional) defaults to 'asc'|
| **limit** | [**number**] | Limit | (optional) defaults to 10|
| **page** | [**number**] | Page | (optional) defaults to 1|


### Return type

**GetAccountChannelsResponse**

### Authorization

[oauth2](../README.md#oauth2)

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
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Provider oauth (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

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
| **platform** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**ListOfCategoryItemResponse**

### Authorization

[oauth2](../README.md#oauth2)

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
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.platformsPlatformListV1(
    language,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


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

# **platformsRemoveAccountV1**
> SuccessResponse platformsRemoveAccountV1(removeAccountQuery)


### Example

```typescript
import {
    PlatformsApi,
    Configuration,
    RemoveAccountQuery
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let removeAccountQuery: RemoveAccountQuery; //

const { status, data } = await apiInstance.platformsRemoveAccountV1(
    removeAccountQuery
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeAccountQuery** | **RemoveAccountQuery**|  | |


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

