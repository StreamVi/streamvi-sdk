# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authCallbackGoogleV1**](#authcallbackgooglev1) | **GET** /method/auth/callback/google | Internal request of auth google|
|[**authCallbackVkIdV1**](#authcallbackvkidv1) | **GET** /method/auth/callback/vk-id | Internal request of auth new vk|
|[**authCallbackVkV1**](#authcallbackvkv1) | **GET** /method/auth/callback/vk | Internal request of auth old vk|
|[**authCodeV1**](#authcodev1) | **GET** /method/auth/app/code | Get code for auth|
|[**authConnectResultV1**](#authconnectresultv1) | **GET** /method/auth/connect/callback | CallBack for connect social|
|[**authConnectTelegramV1**](#authconnecttelegramv1) | **POST** /method/auth/connect-telegram | Connect telegram in account|
|[**authConnectV1**](#authconnectv1) | **GET** /method/auth/connect | Connected social account|
|[**authDisconnectV1**](#authdisconnectv1) | **GET** /method/auth/disconnect | Disconnected social account|
|[**authExchangeV1**](#authexchangev1) | **POST** /method/auth/app/exchange | Code exchange|
|[**authGetAuthUrlV1**](#authgetauthurlv1) | **GET** /method/auth/redirect-url | Get url for start oauth|
|[**authGetClientConfigurationV1**](#authgetclientconfigurationv1) | **POST** /method/auth/GetClientConfiguration | Get client configuration|

# **authCallbackGoogleV1**
> authCallbackGoogleV1()

Internal Google OAuth callback that completes login and returns an HTTP 301 redirect. The provider creates authorization data; callback transport excludes this endpoint from integration profiles.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let state: string; //Opaque provider OAuth state; callback-only input. (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authCallbackGoogleV1(
    state,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | [**string**] | Opaque provider OAuth state; callback-only input. | defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


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
|**301** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authCallbackVkIdV1**
> authCallbackVkIdV1()

Internal VK ID callback to complete OAuth login and issue an HTTP 301 redirect. The OAuth guard supplies req.user, not an integration request; callback transport excludes this endpoint.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let state: string; //Opaque provider OAuth state; callback-only input. (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authCallbackVkIdV1(
    state,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | [**string**] | Opaque provider OAuth state; callback-only input. | defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


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
|**301** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authCallbackVkV1**
> authCallbackVkV1()

Internal legacy VK OAuth callback that redirects the browser with HTTP 301. The provider creates input data; callback transport excludes this endpoint from integration profiles.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authCallbackVkV1(
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


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
|**301** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authCodeV1**
> CodeAppAuthResponse authCodeV1()

Get a one-time authorization code for app in the current cabinet session. Session transport is excluded from integration profiles. The code is sensitive and is used by /method/auth/app/exchange; it is not intended for logs or the corpus.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //Create auth code for app (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authCodeV1(
    language,
    app,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **app** | [**&#39;site&#39; | &#39;admin&#39; | &#39;mobile&#39; | &#39;desktop&#39;**]**Array<&#39;site&#39; &#124; &#39;admin&#39; &#124; &#39;mobile&#39; &#124; &#39;desktop&#39;>** | Create auth code for app | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**CodeAppAuthResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authConnectResultV1**
> authConnectResultV1()

Internal social connection completion callback. Returns text/html with a script that sends message to the parent window and closes the window. Callback transport excludes it from integration profiles; this is neither JSON nor a server tool catalog.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let message: string; //Result message for connect (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authConnectResultV1(
    language,
    message,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **message** | [**string**] | Result message for connect | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


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

# **authConnectTelegramV1**
> SuccessResponse authConnectTelegramV1()

Connect Telegram to the current user\'s account using signed Telegram data in body.data. The server verifies the signature. Available only to a project subject; does not extend account-token access. Success confirms the connection was processed.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authConnectTelegramV1(
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

**SuccessResponse**

### Authorization

[oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authConnectV1**
> authConnectV1()

Start connecting a social provider to the current user account and redirect the browser to OAuth. GET starts the flow; completion depends on authorization and a callback. Available only to the project subject; list connections with GET /method/socials/list.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let provider: 'google' | 'vk' | 'vk-id' | 'telegram'; //Provider oauth (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //App oauth (optional) (default to 'site')
let redirect: string; //Redirect url (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authConnectV1(
    language,
    provider,
    v,
    app,
    redirect,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **provider** | [**&#39;google&#39; | &#39;vk&#39; | &#39;vk-id&#39; | &#39;telegram&#39;**]**Array<&#39;google&#39; &#124; &#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;telegram&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **app** | [**&#39;site&#39; | &#39;admin&#39; | &#39;mobile&#39; | &#39;desktop&#39;**]**Array<&#39;site&#39; &#124; &#39;admin&#39; &#124; &#39;mobile&#39; &#124; &#39;desktop&#39;>** | App oauth | (optional) defaults to 'site'|
| **redirect** | [**string**] | Redirect url | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authDisconnectV1**
> SuccessResponse authDisconnectV1()

Disconnect social connection social_id of the current user. Despite using GET, this changes the connection rather than reading a list. Available only to a project subject; use GET /method/socials/list to list connections.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let socialId: number; //Social id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authDisconnectV1(
    language,
    socialId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **socialId** | [**number**] | Social id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authExchangeV1**
> RefreshAuthResponse authExchangeV1(siteAuthExchangeRequest)

Exchange a previously issued app authorization code for session data with userAgent/fingerprint. Callback transport is excluded from integration profiles. Returned credentials are sensitive; this endpoint is not for refreshing an external application\'s OAuth grant.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    SiteAuthExchangeRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let siteAuthExchangeRequest: SiteAuthExchangeRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authExchangeV1(
    siteAuthExchangeRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteAuthExchangeRequest** | **SiteAuthExchangeRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**RefreshAuthResponse**

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

# **authGetAuthUrlV1**
> authGetAuthUrlV1()

Start login through OAuth for the selected provider and redirect the browser to authorization. This callback transport is outside integration account/project profiles; the response is a redirect, not ready access-token JSON.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let provider: 'google' | 'vk' | 'vk-id' | 'telegram'; //Provider oauth (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //App oauth (optional) (default to 'site')
let redirect: string; //Redirect url (optional) (default to undefined)
let refId: string; //Referal id (optional) (default to undefined)
let country: string; //Country code (optional) (default to 'ru')
let visitorId: string; //Anonymous landing visitor UUID v4 (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authGetAuthUrlV1(
    language,
    provider,
    v,
    app,
    redirect,
    refId,
    country,
    visitorId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **provider** | [**&#39;google&#39; | &#39;vk&#39; | &#39;vk-id&#39; | &#39;telegram&#39;**]**Array<&#39;google&#39; &#124; &#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;telegram&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **app** | [**&#39;site&#39; | &#39;admin&#39; | &#39;mobile&#39; | &#39;desktop&#39;**]**Array<&#39;site&#39; &#124; &#39;admin&#39; &#124; &#39;mobile&#39; &#124; &#39;desktop&#39;>** | App oauth | (optional) defaults to 'site'|
| **redirect** | [**string**] | Redirect url | (optional) defaults to undefined|
| **refId** | [**string**] | Referal id | (optional) defaults to undefined|
| **country** | [**string**] | Country code | (optional) defaults to 'ru'|
| **visitorId** | [**string**] | Anonymous landing visitor UUID v4 | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


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

# **authGetClientConfigurationV1**
> authGetClientConfigurationV1()

Internal callback/debug endpoint for client configuration: the current implementation always throws test and does not return a working configuration. Callback transport excludes it from account/project profiles.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.authGetClientConfigurationV1(
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


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
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

