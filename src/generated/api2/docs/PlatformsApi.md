# PlatformsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**platformCategoryDetailsGetCategoryDetailsV1**](#platformcategorydetailsgetcategorydetailsv1) | **GET** /method/platforms/category/details | Get a saved platform category by its external identifier|
|[**platformsAddAccountV1**](#platformsaddaccountv1) | **GET** /method/platforms/connect | Get url for start oauth|
|[**platformsAddAccountVkCommunityV1**](#platformsaddaccountvkcommunityv1) | **GET** /method/platforms/connect/vk-community | Get url for start oauth|
|[**platformsCallbackCommunityV1**](#platformscallbackcommunityv1) | **GET** /method/platforms/vk/callback-community | Internal request of auth|
|[**platformsCallbackV1**](#platformscallbackv1) | **GET** /method/platforms/{provider}/callback | Internal request of auth|
|[**platformsCallbackVkIdV1**](#platformscallbackvkidv1) | **GET** /method/platforms/vk-id/callback | Internal request of auth vk-id|
|[**platformsGetAccountsV1**](#platformsgetaccountsv1) | **GET** /method/platforms/accounts | Get accounts|
|[**platformsGetCategoryV1**](#platformsgetcategoryv1) | **GET** /method/platforms/category | Get category from the platform|
|[**platformsGetChannelsV1**](#platformsgetchannelsv1) | **GET** /method/platforms/account/channels | Get channels with accounts|
|[**platformsLogoutAccountV1**](#platformslogoutaccountv1) | **POST** /method/platforms/logout | Unavailable platform logout (not implemented)|
|[**platformsPlatformListV1**](#platformsplatformlistv1) | **GET** /method/platforms/list | Supported platforms|
|[**platformsRemoveAccountV1**](#platformsremoveaccountv1) | **POST** /method/platforms/account/remove | Remove account|
|[**platformsVkVideoLiveCategoryV1**](#platformsvkvideolivecategoryv1) | **GET** /method/platforms/category/vkvideolive | Search VK Video Live categories in the saved catalog|

# **platformCategoryDetailsGetCategoryDetailsV1**
> PlatformCategoryDetailsResponse platformCategoryDetailsGetCategoryDetailsV1()

Read a saved platform category by its external id, platform, and catalog scope. Returns category metadata; missing categories produce the documented 404. This is a platform catalog ID for broadcast settings, not an internal StreamVi channel_id.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let platform: 'vkvideolive'; //Platform of the saved category catalog; allowed values are defined by enum. (default to undefined)
let scope: 'game' | 'irl' | 'sport'; //Platform category catalog section; allowed values are defined by enum, not the token\'s OAuth scope. (default to undefined)
let id: string; //Opaque external category identifier; passed through unchanged (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformCategoryDetailsGetCategoryDetailsV1(
    language,
    platform,
    scope,
    id,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **platform** | [**&#39;vkvideolive&#39;**]**Array<&#39;vkvideolive&#39;>** | Platform of the saved category catalog; allowed values are defined by enum. | defaults to undefined|
| **scope** | [**&#39;game&#39; | &#39;irl&#39; | &#39;sport&#39;**]**Array<&#39;game&#39; &#124; &#39;irl&#39; &#124; &#39;sport&#39;>** | Platform category catalog section; allowed values are defined by enum, not the token\&#39;s OAuth scope. | defaults to undefined|
| **id** | [**string**] | Opaque external category identifier; passed through unchanged | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PlatformCategoryDetailsResponse**

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
|**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformsAddAccountV1**
> platformsAddAccountV1()

Start connecting a platform account for project_id with connection_mode and sub_id from the request. Redirects to the platform page; user authorization and a callback must finish. GET starts a connection flow, not a ready account list or new token.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Provider oauth (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let subId: string; //Sub id (optional) (default to undefined)
let connectionMode: 'select_channels'; //Channel selection after OAuth (VK Video Live only) (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsAddAccountV1(
    language,
    projectId,
    platform,
    v,
    subId,
    connectionMode,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **platform** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **subId** | [**string**] | Sub id | (optional) defaults to undefined|
| **connectionMode** | [**&#39;select_channels&#39;**]**Array<&#39;select_channels&#39;>** | Channel selection after OAuth (VK Video Live only) | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**302** | Redirect to platform OAuth authorization; connection is not yet complete. |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformsAddAccountVkCommunityV1**
> platformsAddAccountVkCommunityV1()

Start VK community OAuth connection for project_id, account_id and external channel_id. Returns an authorization redirect; user completion and a callback are required. These input platform identifiers differ from the internal group_id of an already added channel.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //External numeric VK community ID from the platform channel list. This connect method does not take the internal StreamVi channel_id/group_id. (default to undefined)
let accountId: string; //Id account on platform (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let subId: string; //Sub id (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsAddAccountVkCommunityV1(
    language,
    projectId,
    channelId,
    accountId,
    v,
    subId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | External numeric VK community ID from the platform channel list. This connect method does not take the internal StreamVi channel_id/group_id. | defaults to undefined|
| **accountId** | [**string**] | Id account on platform | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **subId** | [**string**] | Sub id | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**302** | Redirect to VK community OAuth authorization; connection is not yet complete. |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformsCallbackCommunityV1**
> string platformsCallbackCommunityV1()

Internal VK-community OAuth callback. Processes the platform authorization result and builds the UI callback response. Callback transport excludes it from account/project integration profiles; do not call it manually as an add-channel tool.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let state: string; //State (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsCallbackCommunityV1(
    state,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | [**string**] | State | defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


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

Internal OAuth callback for the selected provider to finish connecting a platform. Returns a UI result; callback transport excludes it from integration profiles. The platform creates authorization data, not the assistant.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsCallbackV1(
    provider,
    state,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Provider oauth | defaults to undefined|
| **state** | [**string**] | State | defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


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

Internal VK ID OAuth callback to finish connecting an account. Returns a UI callback response; callback transport excludes it from integration profiles. This is not an ordinary data read.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let state: string; //State (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsCallbackVkIdV1(
    state,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | [**string**] | State | defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


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

Read the current user\'s connected accounts for platform. These are personal platform accounts, not StreamVi projects. Use result IDs for /method/platforms/account/channels and the corresponding add-channel operation.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Provider oauth (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsGetAccountsV1(
    language,
    platform,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **platform** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**GetAccountsResponse**

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

# **platformsGetCategoryV1**
> CategoryListResponse platformsGetCategoryV1()

Find broadcast categories for platform type using q and language. Returns category results for channel settings; their external IDs are not StreamVi channel_id. Reads the account-context catalog without changing the project.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let type: 'vk' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Category search bar (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let q: string; //Category search bar (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsGetCategoryV1(
    language,
    type,
    v,
    q,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **type** | [**&#39;vk&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Category search bar | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **q** | [**string**] | Category search bar | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**CategoryListResponse**

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

# **platformsGetChannelsV1**
> GetAccountChannelsResponse platformsGetChannelsV1()

Read external channels of the selected platform account ids in project_id. request_id is a UUID for caching this result; page is a page number, and q/sort/limit configure search. Returns results and page metadata; external string IDs are used when adding a channel and do not replace results[].group_id from StreamVi search.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let platform: 'vk' | 'ok' | 'vkvideolive'; //Platform (vk, ok, vkvideolive) (default to undefined)
let ids: Array<number>; //Id accounts (default to undefined)
let projectId: number; //Project id (default to undefined)
let requestId: string; //Request id (for cache) (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let q: string; //Search (optional) (default to '')
let sort: 'asc' | 'desc'; //Sort by asc or desc (default asc) (optional) (default to 'asc')
let limit: number; //Limit (optional) (default to 10)
let page: number; //Page (optional) (default to 1)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

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
    page,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **platform** | [**&#39;vk&#39; | &#39;ok&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;ok&#39; &#124; &#39;vkvideolive&#39;>** | Platform (vk, ok, vkvideolive) | defaults to undefined|
| **ids** | **Array&lt;number&gt;** | Id accounts | defaults to undefined|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **requestId** | [**string**] | Request id (for cache) | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **q** | [**string**] | Search | (optional) defaults to ''|
| **sort** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort by asc or desc (default asc) | (optional) defaults to 'asc'|
| **limit** | [**number**] | Limit | (optional) defaults to 10|
| **page** | [**number**] | Page | (optional) defaults to 1|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**GetAccountChannelsResponse**

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

# **platformsLogoutAccountV1**
> ListOfCategoryItemResponse platformsLogoutAccountV1()

Incomplete internal platform logout method: the current implementation always throws Not implemented. Do not use for category search or as an available account disconnection; use POST /method/platforms/account/remove to remove a connection.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let id: string; //Category search bar (default to undefined)
let platform: 'vk' | 'vk-id' | 'ok' | 'youtube' | 'trovo' | 'twitch' | 'vkvideolive'; //Provider oauth (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsLogoutAccountV1(
    language,
    id,
    platform,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **id** | [**string**] | Category search bar | defaults to undefined|
| **platform** | [**&#39;vk&#39; | &#39;vk-id&#39; | &#39;ok&#39; | &#39;youtube&#39; | &#39;trovo&#39; | &#39;twitch&#39; | &#39;vkvideolive&#39;**]**Array<&#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;ok&#39; &#124; &#39;youtube&#39; &#124; &#39;trovo&#39; &#124; &#39;twitch&#39; &#124; &#39;vkvideolive&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**ListOfCategoryItemResponse**

### Authorization

[oauth2Project](../README.md#oauth2Project)

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

Read the public catalog of supported platforms and their capabilities. Describes available connection methods without confirming that a specific account or project channel is connected.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsPlatformListV1(
    language,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


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

Delete the current user\'s platform account connection id/platform. Returns success after the deletion use case. This disconnects a platform account rather than disabling one project destination using active=false.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsRemoveAccountV1(
    removeAccountQuery,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeAccountQuery** | **RemoveAccountQuery**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

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

# **platformsVkVideoLiveCategoryV1**
> CategoryListResponse platformsVkVideoLiveCategoryV1()

Search the saved VK Video Live category catalog using the search parameters. Returns category results whose identifiers are used in platform settings, not StreamVi channel management. No live OAuth connection is required for searching.

### Example

```typescript
import {
    PlatformsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlatformsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let type: 'irl' | 'game' | 'sport'; //Category type (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let offset: number; //Category offset (for pagination) (optional) (default to undefined)
let q: string; //Category name prefix (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.platformsVkVideoLiveCategoryV1(
    language,
    type,
    v,
    offset,
    q,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **type** | [**&#39;irl&#39; | &#39;game&#39; | &#39;sport&#39;**]**Array<&#39;irl&#39; &#124; &#39;game&#39; &#124; &#39;sport&#39;>** | Category type | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **offset** | [**number**] | Category offset (for pagination) | (optional) defaults to undefined|
| **q** | [**string**] | Category name prefix | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**CategoryListResponse**

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

