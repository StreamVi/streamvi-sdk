# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authTelegram1**](#authtelegram1) | **GET** /method/auth/auth-telegram | Auth telegram|
|[**callbackGoogle1**](#callbackgoogle1) | **GET** /method/auth/callback/google | Internal request of auth google|
|[**callbackVk1**](#callbackvk1) | **GET** /method/auth/callback/vk | Internal request of auth old vk|
|[**callbackVkId1**](#callbackvkid1) | **GET** /method/auth/callback/vk-id | Internal request of auth new vk|
|[**code1**](#code1) | **GET** /method/auth/app/code | Get code for auth|
|[**connect1**](#connect1) | **GET** /method/auth/connect | Connected social account|
|[**connectResult1**](#connectresult1) | **GET** /method/auth/connect/callback | CallBack for connect social|
|[**connectTelegram1**](#connecttelegram1) | **POST** /method/auth/connect-telegram | Connect telegram in account|
|[**disconnect1**](#disconnect1) | **GET** /method/auth/disconnect | Disconnected social account|
|[**exchange1**](#exchange1) | **POST** /method/auth/app/exchange | Code exchange|
|[**getAuthUrl1**](#getauthurl1) | **GET** /method/auth/redirect-url | Get url for start oauth|
|[**getProfile1**](#getprofile1) | **GET** /method/auth/me | Get basic data for auth user|
|[**guest1**](#guest1) | **GET** /method/auth/guest | Guest request of auth|
|[**logout1**](#logout1) | **POST** /method/auth/logout | Logout|
|[**refreshAccess1**](#refreshaccess1) | **POST** /method/auth/refresh-access | Update access token|

# **authTelegram1**
> authTelegram1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

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

const { status, data } = await apiInstance.authTelegram1({
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
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **callbackGoogle1**
> callbackGoogle1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let state: string; // (default to undefined)

const { status, data } = await apiInstance.callbackGoogle1({
    state
  });
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

# **callbackVk1**
> callbackVk1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

const { status, data } = await apiInstance.callbackVk1({});
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

# **callbackVkId1**
> callbackVkId1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let state: string; // (default to undefined)

const { status, data } = await apiInstance.callbackVkId1({
    state
  });
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

# **code1**
> CodeAppAuthResponse code1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //Create auth code for app (default to 'site')

const { status, data } = await apiInstance.code1({
    language,
    app
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **connect1**
> connect1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let provider: 'google' | 'vk' | 'vk-id' | 'telegram'; //Provider oauth (default to undefined)
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //App oauth (optional) (default to 'site')
let redirect: string; //Redirect url (optional) (default to undefined)

const { status, data } = await apiInstance.connect1({
    language,
    provider,
    app,
    redirect
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **connectResult1**
> connectResult1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let message: string; //Result message for connect (default to undefined)

const { status, data } = await apiInstance.connectResult1({
    language,
    message
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **connectTelegram1**
> SuccessResponse connectTelegram1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.connectTelegram1({
    language
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **disconnect1**
> SuccessResponse disconnect1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let socialId: number; //Social id (default to undefined)

const { status, data } = await apiInstance.disconnect1({
    language,
    socialId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **exchange1**
> RefreshAuthResponse exchange1(siteAuthExchangeRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi
    SiteAuthExchangeRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let siteAuthExchangeRequest: SiteAuthExchangeRequest; //

const { status, data } = await apiInstance.exchange1({
    siteAuthExchangeRequest
  });
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

# **getAuthUrl1**
> getAuthUrl1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let provider: 'google' | 'vk' | 'vk-id' | 'telegram'; //Provider oauth (default to undefined)
let app: 'site' | 'admin' | 'mobile' | 'desktop'; //App oauth (optional) (default to 'site')
let redirect: string; //Redirect url (optional) (default to undefined)
let refId: string; //Referal id (optional) (default to undefined)
let country: string; //Country code (optional) (default to 'ru')

const { status, data } = await apiInstance.getAuthUrl1({
    language,
    provider,
    app,
    redirect,
    refId,
    country
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **getProfile1**
> getProfile1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.getProfile1({
    language
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **guest1**
> guest1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let refId: string; // (default to undefined)

const { status, data } = await apiInstance.guest1({
    refId
  });
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

# **logout1**
> SuccessResponse logout1(siteLogoutAuthRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi
    SiteLogoutAuthRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let siteLogoutAuthRequest: SiteLogoutAuthRequest; //

const { status, data } = await apiInstance.logout1({
    siteLogoutAuthRequest
  });
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

# **refreshAccess1**
> RefreshAuthResponse refreshAccess1(siteRefreshAuthBodyRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { AuthApi
    SiteRefreshAuthBodyRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new AuthApi(sdkConfig.configuration);

let userAgent: string; // (default to undefined)
let siteRefreshAuthBodyRequest: SiteRefreshAuthBodyRequest; //

const { status, data } = await apiInstance.refreshAccess1({
    userAgent,
    siteRefreshAuthBodyRequest
  });
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

