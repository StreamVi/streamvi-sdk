# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authControllerAuthTelegram1**](#authcontrollerauthtelegram1) | **GET** /method/auth/auth-telegram | Auth telegram|
|[**authControllerCallbackGoogle1**](#authcontrollercallbackgoogle1) | **GET** /method/auth/callback/google | Internal request of auth google|
|[**authControllerCallbackVk1**](#authcontrollercallbackvk1) | **GET** /method/auth/callback/vk | Internal request of auth old vk|
|[**authControllerCallbackVkId1**](#authcontrollercallbackvkid1) | **GET** /method/auth/callback/vk-id | Internal request of auth new vk|
|[**authControllerCode1**](#authcontrollercode1) | **GET** /method/auth/app/code | Get code for auth|
|[**authControllerConnect1**](#authcontrollerconnect1) | **GET** /method/auth/connect | Connected social account|
|[**authControllerConnectResult1**](#authcontrollerconnectresult1) | **GET** /method/auth/connect/callback | CallBack for connect social|
|[**authControllerConnectTelegram1**](#authcontrollerconnecttelegram1) | **POST** /method/auth/connect-telegram | Connect telegram in account|
|[**authControllerDisconnect1**](#authcontrollerdisconnect1) | **GET** /method/auth/disconnect | Disconnected social account|
|[**authControllerExchange1**](#authcontrollerexchange1) | **POST** /method/auth/app/exchange | Code exchange|
|[**authControllerGetAuthUrl1**](#authcontrollergetauthurl1) | **GET** /method/auth/redirect-url | Get url for start oauth|
|[**authControllerGetProfile1**](#authcontrollergetprofile1) | **GET** /method/auth/me | Get basic data for auth user|
|[**authControllerGuest1**](#authcontrollerguest1) | **GET** /method/auth/guest | Guest request of auth|
|[**authControllerLogout1**](#authcontrollerlogout1) | **POST** /method/auth/logout | Logout|
|[**authControllerRefreshAccess1**](#authcontrollerrefreshaccess1) | **POST** /method/auth/refresh-access | Update access token|

# **authControllerAuthTelegram1**
> authControllerAuthTelegram1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let authDate: number; //Time auth (default to undefined)
let id: number; //Telegram userId (default to undefined)
let firstName: string; //First name (default to undefined)
let hash: string; //Hash (default to undefined)
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //App oauth (default to 'site')
let lastName: string; //Last name (optional) (default to undefined)
let username: string; //Nickname (optional) (default to undefined)
let photoUrl: string; //Photo (optional) (default to undefined)
let languageCode: string; //IETF language tag of the user\'s language (optional) (default to undefined)
let isPremium: boolean; //True, if this user is a Telegram Premium user (optional) (default to undefined)
let addedToAttachmentMenu: boolean; //True, if this user added the bot to the attachment menu (optional) (default to undefined)
let refId: string; //Referal id (optional) (default to undefined)
let redirect: string; //Redirect url (optional) (default to undefined)
let country: string; //Country code (optional) (default to 'ru')

const { status, data } = await apiInstance.authControllerAuthTelegram1(
    v,
    language,
    authDate,
    id,
    firstName,
    hash,
    app,
    lastName,
    username,
    photoUrl,
    languageCode,
    isPremium,
    addedToAttachmentMenu,
    refId,
    redirect,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **authDate** | [**number**] | Time auth | defaults to undefined|
| **id** | [**number**] | Telegram userId | defaults to undefined|
| **firstName** | [**string**] | First name | defaults to undefined|
| **hash** | [**string**] | Hash | defaults to undefined|
| **app** | [**&#39;site&#39; | &#39;admin&#39; | &#39;mobile&#39; | &#39;desktop&#39;**]**Array<&#39;site&#39; &#124; &#39;admin&#39; &#124; &#39;mobile&#39; &#124; &#39;desktop&#39;>** | App oauth | defaults to 'site'|
| **lastName** | [**string**] | Last name | (optional) defaults to undefined|
| **username** | [**string**] | Nickname | (optional) defaults to undefined|
| **photoUrl** | [**string**] | Photo | (optional) defaults to undefined|
| **languageCode** | [**string**] | IETF language tag of the user\&#39;s language | (optional) defaults to undefined|
| **isPremium** | [**boolean**] | True, if this user is a Telegram Premium user | (optional) defaults to undefined|
| **addedToAttachmentMenu** | [**boolean**] | True, if this user added the bot to the attachment menu | (optional) defaults to undefined|
| **refId** | [**string**] | Referal id | (optional) defaults to undefined|
| **redirect** | [**string**] | Redirect url | (optional) defaults to undefined|
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
|**301** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerCallbackGoogle1**
> authControllerCallbackGoogle1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let state: string; // (default to undefined)

const { status, data } = await apiInstance.authControllerCallbackGoogle1(
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

# **authControllerCallbackVk1**
> authControllerCallbackVk1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authControllerCallbackVk1();
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

# **authControllerCallbackVkId1**
> authControllerCallbackVkId1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let state: string; // (default to undefined)

const { status, data } = await apiInstance.authControllerCallbackVkId1(
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

# **authControllerCode1**
> CodeAppAuthResponse authControllerCode1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //Create auth code for app (default to 'site')

const { status, data } = await apiInstance.authControllerCode1(
    v,
    language,
    app
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **app** | [**&#39;site&#39; | &#39;admin&#39; | &#39;mobile&#39; | &#39;desktop&#39;**]**Array<&#39;site&#39; &#124; &#39;admin&#39; &#124; &#39;mobile&#39; &#124; &#39;desktop&#39;>** | Create auth code for app | defaults to 'site'|


### Return type

**CodeAppAuthResponse**

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

# **authControllerConnect1**
> authControllerConnect1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let provider: 'google' | 'vk' | 'vk-id' | 'telegram'; //Provider oauth (default to undefined)
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //App oauth (optional) (default to 'site')
let redirect: string; //Redirect url (optional) (default to undefined)

const { status, data } = await apiInstance.authControllerConnect1(
    v,
    language,
    provider,
    app,
    redirect
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **provider** | [**&#39;google&#39; | &#39;vk&#39; | &#39;vk-id&#39; | &#39;telegram&#39;**]**Array<&#39;google&#39; &#124; &#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;telegram&#39;>** | Provider oauth | defaults to undefined|
| **app** | [**&#39;site&#39; | &#39;admin&#39; | &#39;mobile&#39; | &#39;desktop&#39;**]**Array<&#39;site&#39; &#124; &#39;admin&#39; &#124; &#39;mobile&#39; &#124; &#39;desktop&#39;>** | App oauth | (optional) defaults to 'site'|
| **redirect** | [**string**] | Redirect url | (optional) defaults to undefined|


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

# **authControllerConnectResult1**
> authControllerConnectResult1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let message: string; //Result message for connect (default to undefined)

const { status, data } = await apiInstance.authControllerConnectResult1(
    v,
    language,
    message
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **message** | [**string**] | Result message for connect | defaults to undefined|


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

# **authControllerConnectTelegram1**
> SuccessResponse authControllerConnectTelegram1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.authControllerConnectTelegram1(
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

**SuccessResponse**

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

# **authControllerDisconnect1**
> SuccessResponse authControllerDisconnect1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let socialId: number; //Social id (default to undefined)

const { status, data } = await apiInstance.authControllerDisconnect1(
    v,
    language,
    socialId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **socialId** | [**number**] | Social id | defaults to undefined|


### Return type

**SuccessResponse**

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

# **authControllerExchange1**
> RefreshAuthResponse authControllerExchange1(siteAuthExchangeRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    SiteAuthExchangeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let siteAuthExchangeRequest: SiteAuthExchangeRequest; //

const { status, data } = await apiInstance.authControllerExchange1(
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

# **authControllerGetAuthUrl1**
> authControllerGetAuthUrl1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let provider: 'google' | 'vk' | 'vk-id' | 'telegram'; //Provider oauth (default to undefined)
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //App oauth (optional) (default to 'site')
let redirect: string; //Redirect url (optional) (default to undefined)
let refId: string; //Referal id (optional) (default to undefined)
let country: string; //Country code (optional) (default to 'ru')

const { status, data } = await apiInstance.authControllerGetAuthUrl1(
    v,
    language,
    provider,
    app,
    redirect,
    refId,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **provider** | [**&#39;google&#39; | &#39;vk&#39; | &#39;vk-id&#39; | &#39;telegram&#39;**]**Array<&#39;google&#39; &#124; &#39;vk&#39; &#124; &#39;vk-id&#39; &#124; &#39;telegram&#39;>** | Provider oauth | defaults to undefined|
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

# **authControllerGetProfile1**
> authControllerGetProfile1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.authControllerGetProfile1(
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

# **authControllerGuest1**
> authControllerGuest1()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let refId: string; // (default to undefined)

const { status, data } = await apiInstance.authControllerGuest1(
    refId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refId** | [**string**] |  | defaults to undefined|


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

# **authControllerLogout1**
> SuccessResponse authControllerLogout1(siteLogoutAuthRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    SiteLogoutAuthRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let siteLogoutAuthRequest: SiteLogoutAuthRequest; //

const { status, data } = await apiInstance.authControllerLogout1(
    siteLogoutAuthRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteLogoutAuthRequest** | **SiteLogoutAuthRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerRefreshAccess1**
> RefreshAuthResponse authControllerRefreshAccess1(siteRefreshAuthBodyRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    SiteRefreshAuthBodyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let userAgent: string; // (default to undefined)
let siteRefreshAuthBodyRequest: SiteRefreshAuthBodyRequest; //

const { status, data } = await apiInstance.authControllerRefreshAccess1(
    userAgent,
    siteRefreshAuthBodyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteRefreshAuthBodyRequest** | **SiteRefreshAuthBodyRequest**|  | |
| **userAgent** | [**string**] |  | defaults to undefined|


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
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

