# PolicyPageApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sitePolicyPageControllerGetItem1**](#sitepolicypagecontrollergetitem1) | **GET** /method/policy/get | Get policy page|
|[**sitePolicyPageControllerGetStructure1**](#sitepolicypagecontrollergetstructure1) | **GET** /method/policy/structure | Get policy structure|

# **sitePolicyPageControllerGetItem1**
> sitePolicyPageControllerGetItem1()


### Example

```typescript
import {
    PolicyPageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PolicyPageApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let fileName: 'refund-policy' | 'terms-of-use' | 'using-cookie' | 'acceptable-use' | 'privacy-notice'; //Policy file name (default to undefined)

const { status, data } = await apiInstance.sitePolicyPageControllerGetItem1(
    v,
    language,
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **fileName** | [**&#39;refund-policy&#39; | &#39;terms-of-use&#39; | &#39;using-cookie&#39; | &#39;acceptable-use&#39; | &#39;privacy-notice&#39;**]**Array<&#39;refund-policy&#39; &#124; &#39;terms-of-use&#39; &#124; &#39;using-cookie&#39; &#124; &#39;acceptable-use&#39; &#124; &#39;privacy-notice&#39;>** | Policy file name | defaults to undefined|


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

# **sitePolicyPageControllerGetStructure1**
> SiteGetPolicyStructureDto sitePolicyPageControllerGetStructure1()


### Example

```typescript
import {
    PolicyPageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PolicyPageApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.sitePolicyPageControllerGetStructure1(
    v,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|


### Return type

**SiteGetPolicyStructureDto**

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

