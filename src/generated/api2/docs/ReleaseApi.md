# ReleaseApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**releaseAppCabinetV1**](#releaseappcabinetv1) | **GET** /method/release-app | Get current version app|

# **releaseAppCabinetV1**
> GetVersionAppResponse releaseAppCabinetV1()


### Example

```typescript
import {
    ReleaseApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ReleaseApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let app: 'cabinet'; //Apps (default to 'cabinet')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.releaseAppCabinetV1(
    language,
    app,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **app** | [**&#39;cabinet&#39;**]**Array<&#39;cabinet&#39;>** | Apps | defaults to 'cabinet'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**GetVersionAppResponse**

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

