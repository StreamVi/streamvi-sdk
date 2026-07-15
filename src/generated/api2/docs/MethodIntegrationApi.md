# MethodIntegrationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodIntegrationTemplateGetTemplateWidgetDataV1**](#methodintegrationtemplategettemplatewidgetdatav1) | **GET** /method/integration-template/widget/get | Get template widget data|

# **methodIntegrationTemplateGetTemplateWidgetDataV1**
> IntegrationTemplateWidgetGetResponse methodIntegrationTemplateGetTemplateWidgetDataV1()

Rate limit: 10 requests per 1 second

### Example

```typescript
import {
    MethodIntegrationApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MethodIntegrationApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let templateId: string; //Integration project template ID (default to undefined)
let projectId: number; //Project ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.methodIntegrationTemplateGetTemplateWidgetDataV1(
    language,
    templateId,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **templateId** | [**string**] | Integration project template ID | defaults to undefined|
| **projectId** | [**number**] | Project ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**IntegrationTemplateWidgetGetResponse**

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

