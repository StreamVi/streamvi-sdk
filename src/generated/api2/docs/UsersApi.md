# UsersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**userGetProfileV1**](#usergetprofilev1) | **GET** /method/users/profile | Get user profile|
|[**userUpdateProfileV1**](#userupdateprofilev1) | **POST** /method/users/profile | Update profile|

# **userGetProfileV1**
> UserProfileResponse userGetProfileV1()

Use /method/account/profile instead.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.userGetProfileV1();
```

### Parameters
This endpoint does not have any parameters.


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

# **userUpdateProfileV1**
> SuccessResponse userUpdateProfileV1()

Use /method/account/profile instead.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let language: string; //Current language (default to 'en')
let firstName: string; //First name (default to undefined)
let lastName: string; //Last name (default to undefined)
let v: string; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let avatar: File; //File for avatar upload max size 2MB, format: jpeg, jpg, png (optional) (default to undefined)

const { status, data } = await apiInstance.userUpdateProfileV1(
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

