# ReleaseApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**siteReleaseAppControllerCabinet1**](#sitereleaseappcontrollercabinet1) | **GET** /method/release-app | Get current version app|

# **siteReleaseAppControllerCabinet1**
> GetVersionAppResponse siteReleaseAppControllerCabinet1()


### Example

```typescript
import {
    ReleaseApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReleaseApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let app: 'cabinet'; //Apps (optional) (default to 'cabinet')

const { status, data } = await apiInstance.siteReleaseAppControllerCabinet1(
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

