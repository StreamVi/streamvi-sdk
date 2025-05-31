# NotifyUserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**notifyUserDelMobileTokenV1**](#notifyuserdelmobiletokenv1) | **POST** /method/notify_user/del_mobile_token | Delete mobile token from user|
|[**notifyUserGetScreenV1**](#notifyusergetscreenv1) | **GET** /method/notify_user/screen | Get user screen notify|
|[**notifyUserGetV1**](#notifyusergetv1) | **GET** /method/notify_user/setting | Get user notify settings|
|[**notifyUserRemoveScreenV1**](#notifyuserremovescreenv1) | **POST** /method/notify_user/screen | Remove user screen notify|
|[**notifyUserSetV1**](#notifyusersetv1) | **POST** /method/notify_user/setting | Set user notify settings|

# **notifyUserDelMobileTokenV1**
> SuccessResponse notifyUserDelMobileTokenV1()


### Example

```typescript
import {
    NotifyUserApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyUserApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let token: string; //Token in mobile app (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.notifyUserDelMobileTokenV1(
    language,
    token,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **token** | [**string**] | Token in mobile app | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **notifyUserGetScreenV1**
> SiteScreenNotifyUserResponse notifyUserGetScreenV1()


### Example

```typescript
import {
    NotifyUserApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyUserApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.notifyUserGetScreenV1(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **notifyUserGetV1**
> SiteNotifyUserResponse notifyUserGetV1()


### Example

```typescript
import {
    NotifyUserApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyUserApi(configuration);

let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.notifyUserGetV1(
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **notifyUserRemoveScreenV1**
> SuccessResponse notifyUserRemoveScreenV1()


### Example

```typescript
import {
    NotifyUserApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyUserApi(configuration);

let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.notifyUserRemoveScreenV1(
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **notifyUserSetV1**
> SuccessResponse notifyUserSetV1(siteSetNotifyUserRequest)


### Example

```typescript
import {
    NotifyUserApi,
    Configuration,
    SiteSetNotifyUserRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyUserApi(configuration);

let siteSetNotifyUserRequest: SiteSetNotifyUserRequest; //Set user notify settings
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.notifyUserSetV1(
    siteSetNotifyUserRequest,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetNotifyUserRequest** | **SiteSetNotifyUserRequest**| Set user notify settings | |
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

