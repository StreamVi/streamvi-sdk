# UserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**userGetProfileV1**(#usergetprofilev1) | **GET** /method/users/profile | Get user profile|
|**userUpdateProfileV1**(#userupdateprofilev1) | **POST** /method/users/profile | Update profile|

# **userGetProfileV1**
> UserProfileResponse userGetProfileV1()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let projectId: number; //Project id (optional) (default to undefined)

const { status, data } = await apiInstance.userGetProfileV1(
    language,
    v,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **projectId** | **number** | Project id | (optional) defaults to undefined|


### Return type

**UserProfileResponse**

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

# **userUpdateProfileV1**
> SuccessResponse userUpdateProfileV1()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let v: string; //Version (default to undefined)
let language: string; //Current language (default to 'en')
let firstName: string; //First name (default to undefined)
let lastName: string; //Last name (default to undefined)
let avatar: File; //File for avatar upload max size 2MB, format: jpeg, jpg, png (optional) (default to undefined)

const { status, data } = await apiInstance.userUpdateProfileV1(
    v,
    language,
    firstName,
    lastName,
    avatar
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | **string** | Version | defaults to undefined|
| **language** | **string** | Current language | defaults to 'en'|
| **firstName** | **string** | First name | defaults to undefined|
| **lastName** | **string** | Last name | defaults to undefined|
| **avatar** | **File** | File for avatar upload max size 2MB, format: jpeg, jpg, png | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

