# AccountApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountGetProfileV1**](#accountgetprofilev1) | **GET** /method/account/profile | Get account profile|
|[**accountUpdateProfileV1**](#accountupdateprofilev1) | **POST** /method/account/profile | Update account profile|

# **accountGetProfileV1**
> UserProfileResponse accountGetProfileV1()


### Example

```typescript
import {
    AccountApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.accountGetProfileV1(
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

**UserProfileResponse**

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

# **accountUpdateProfileV1**
> SuccessResponse accountUpdateProfileV1()


### Example

```typescript
import {
    AccountApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let language: string; //Current language (default to 'en')
let firstName: string; //First name (default to undefined)
let lastName: string; //Last name (default to undefined)
let v: string; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let avatar: File; //File for avatar upload max size 2MB, format: jpeg, jpg, png (optional) (default to undefined)

const { status, data } = await apiInstance.accountUpdateProfileV1(
    language,
    firstName,
    lastName,
    v,
    avatar
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**string**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **firstName** | [**string**] | First name | defaults to undefined|
| **lastName** | [**string**] | Last name | defaults to undefined|
| **v** | [**string**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **avatar** | [**File**] | File for avatar upload max size 2MB, format: jpeg, jpg, png | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

