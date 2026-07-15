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


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let state: string; // (default to undefined)

const { status, data } = await apiInstance.authCallbackGoogleV1(
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | [**string**] |  | defaults to undefined|


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


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let state: string; // (default to undefined)

const { status, data } = await apiInstance.authCallbackVkIdV1(
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | [**string**] |  | defaults to undefined|


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


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authCallbackVkV1();
```

### Parameters
This endpoint does not have any parameters.


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


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //Create auth code for app (default to 'site')
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.authCodeV1(
    language,
    app,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **app** | [**&#39;site&#39; | &#39;admin&#39; | &#39;mobile&#39; | &#39;desktop&#39;**]**Array<&#39;site&#39; &#124; &#39;admin&#39; &#124; &#39;mobile&#39; &#124; &#39;desktop&#39;>** | Create auth code for app | defaults to 'site'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**CodeAppAuthResponse**

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

# **authConnectResultV1**
> authConnectResultV1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let message: string; //Result message for connect (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.authConnectResultV1(
    language,
    message,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **message** | [**string**] | Result message for connect | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.authConnectTelegramV1(
    language,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

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


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let provider: 'google' | 'vk' | 'vk-id' | 'telegram'; //Provider oauth (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //App oauth (optional) (default to 'site')
let redirect: string; //Redirect url (optional) (default to undefined)

const { status, data } = await apiInstance.authConnectV1(
    language,
    provider,
    v,
    app,
    redirect
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **provider** | [**&#39;google&#39; | &#39;vk&#39; | &#39;vk-id&#39; | &#39;telegram&#39;**]**Array<&#39;google&#39; &#124; &#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;telegram&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **app** | [**&#39;site&#39; | &#39;admin&#39; | &#39;mobile&#39; | &#39;desktop&#39;**]**Array<&#39;site&#39; &#124; &#39;admin&#39; &#124; &#39;mobile&#39; &#124; &#39;desktop&#39;>** | App oauth | (optional) defaults to 'site'|
| **redirect** | [**string**] | Redirect url | (optional) defaults to undefined|


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

# **authDisconnectV1**
> SuccessResponse authDisconnectV1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let socialId: number; //Social id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.authDisconnectV1(
    language,
    socialId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **socialId** | [**number**] | Social id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SuccessResponse**

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

# **authExchangeV1**
> RefreshAuthResponse authExchangeV1(siteAuthExchangeRequest)


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

const { status, data } = await apiInstance.authExchangeV1(
    siteAuthExchangeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteAuthExchangeRequest** | **SiteAuthExchangeRequest**|  | |


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


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let provider: 'google' | 'vk' | 'vk-id' | 'telegram'; //Provider oauth (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //App oauth (optional) (default to 'site')
let redirect: string; //Redirect url (optional) (default to undefined)
let refId: string; //Referal id (optional) (default to undefined)
let country: string; //Country code (optional) (default to 'ru')

const { status, data } = await apiInstance.authGetAuthUrlV1(
    language,
    provider,
    v,
    app,
    redirect,
    refId,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **provider** | [**&#39;google&#39; | &#39;vk&#39; | &#39;vk-id&#39; | &#39;telegram&#39;**]**Array<&#39;google&#39; &#124; &#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;telegram&#39;>** | Provider oauth | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **app** | [**&#39;site&#39; | &#39;admin&#39; | &#39;mobile&#39; | &#39;desktop&#39;**]**Array<&#39;site&#39; &#124; &#39;admin&#39; &#124; &#39;mobile&#39; &#124; &#39;desktop&#39;>** | App oauth | (optional) defaults to 'site'|
| **redirect** | [**string**] | Redirect url | (optional) defaults to undefined|
| **refId** | [**string**] | Referal id | (optional) defaults to undefined|
| **country** | [**string**] | Country code | (optional) defaults to 'ru'|


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


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authGetClientConfigurationV1();
```

### Parameters
This endpoint does not have any parameters.


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

