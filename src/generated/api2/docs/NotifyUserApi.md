# NotifyUserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**siteNotifyUserControllerDelMobileToken1**](#sitenotifyusercontrollerdelmobiletoken1) | **POST** /method/notify_user/del_mobile_token | Delete mobile token from user|
|[**siteNotifyUserControllerGet1**](#sitenotifyusercontrollerget1) | **GET** /method/notify_user/setting | Get user notify settings|
|[**siteNotifyUserControllerGetScreen1**](#sitenotifyusercontrollergetscreen1) | **GET** /method/notify_user/screen | Get user screen notify|
|[**siteNotifyUserControllerRemoveScreen1**](#sitenotifyusercontrollerremovescreen1) | **POST** /method/notify_user/screen | Remove user screen notify|
|[**siteNotifyUserControllerSet1**](#sitenotifyusercontrollerset1) | **POST** /method/notify_user/setting | Set user notify settings|

# **siteNotifyUserControllerDelMobileToken1**
> SuccessResponse siteNotifyUserControllerDelMobileToken1()


### Example

```typescript
import {
    NotifyUserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyUserApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let token: string; //Token in mobile app (default to undefined)

const { status, data } = await apiInstance.siteNotifyUserControllerDelMobileToken1(
    v,
    language,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **token** | [**string**] | Token in mobile app | defaults to undefined|


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

# **siteNotifyUserControllerGet1**
> SiteNotifyUserResponse siteNotifyUserControllerGet1()


### Example

```typescript
import {
    NotifyUserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyUserApi(configuration);

let v: '1'; //Version (default to undefined)
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.siteNotifyUserControllerGet1(
    v,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version | defaults to undefined|
| **projectId** | [**number**] | Project id | defaults to undefined|


### Return type

**SiteNotifyUserResponse**

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

# **siteNotifyUserControllerGetScreen1**
> SiteScreenNotifyUserResponse siteNotifyUserControllerGetScreen1()


### Example

```typescript
import {
    NotifyUserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyUserApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.siteNotifyUserControllerGetScreen1(
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

**SiteScreenNotifyUserResponse**

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

# **siteNotifyUserControllerRemoveScreen1**
> SuccessResponse siteNotifyUserControllerRemoveScreen1()


### Example

```typescript
import {
    NotifyUserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyUserApi(configuration);

let v: '1'; //Version (default to undefined)
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.siteNotifyUserControllerRemoveScreen1(
    v,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version | defaults to undefined|
| **projectId** | [**number**] | Project id | defaults to undefined|


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

# **siteNotifyUserControllerSet1**
> SuccessResponse siteNotifyUserControllerSet1(siteSetNotifyUserRequest)


### Example

```typescript
import {
    NotifyUserApi,
    Configuration,
    SiteSetNotifyUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyUserApi(configuration);

let v: '1'; //Version (default to undefined)
let siteSetNotifyUserRequest: SiteSetNotifyUserRequest; //Set user notify settings

const { status, data } = await apiInstance.siteNotifyUserControllerSet1(
    v,
    siteSetNotifyUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetNotifyUserRequest** | **SiteSetNotifyUserRequest**| Set user notify settings | |
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version | defaults to undefined|


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

