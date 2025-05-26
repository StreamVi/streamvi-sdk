# NotifyUserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**delMobileToken1**](#delmobiletoken1) | **POST** /method/notify_user/del_mobile_token | Delete mobile token from user|
|[**get1**](#get1) | **GET** /method/notify_user/setting | Get user notify settings|
|[**getScreen1**](#getscreen1) | **GET** /method/notify_user/screen | Get user screen notify|
|[**removeScreen1**](#removescreen1) | **POST** /method/notify_user/screen | Remove user screen notify|
|[**set1**](#set1) | **POST** /method/notify_user/setting | Set user notify settings|

# **delMobileToken1**
> SuccessResponse delMobileToken1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { NotifyUserApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new NotifyUserApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let token: string; //Token in mobile app (default to undefined)

const { status, data } = await apiInstance.delMobileToken1({
    language,
    token
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **get1**
> SiteNotifyUserResponse get1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { NotifyUserApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new NotifyUserApi(sdkConfig.configuration);

let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.get1({
    projectId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **getScreen1**
> SiteScreenNotifyUserResponse getScreen1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { NotifyUserApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new NotifyUserApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.getScreen1({
    language,
    projectId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **removeScreen1**
> SuccessResponse removeScreen1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { NotifyUserApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new NotifyUserApi(sdkConfig.configuration);

let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.removeScreen1({
    projectId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **set1**
> SuccessResponse set1(siteSetNotifyUserRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { NotifyUserApi
    SiteSetNotifyUserRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new NotifyUserApi(sdkConfig.configuration);

let siteSetNotifyUserRequest: SiteSetNotifyUserRequest; //Set user notify settings

const { status, data } = await apiInstance.set1({
    siteSetNotifyUserRequest
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetNotifyUserRequest** | **SiteSetNotifyUserRequest**| Set user notify settings | |


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

