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
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let app: 'cabinet'; //Apps (optional) (default to 'cabinet')

const { status, data } = await apiInstance.releaseAppCabinetV1(
    language,
    v,
    app
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **app** | [**&#39;cabinet&#39;**]**Array<&#39;cabinet&#39;>** | Apps | (optional) defaults to 'cabinet'|


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

