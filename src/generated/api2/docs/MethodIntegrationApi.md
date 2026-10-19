# MethodIntegrationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodIntegrationTemplateGetTemplateWidgetDataV1**](#methodintegrationtemplategettemplatewidgetdatav1) | **GET** /method/integration-template/widget/get | Get template widget data|

# **methodIntegrationTemplateGetTemplateWidgetDataV1**
> IntegrationTemplateWidgetGetResponse methodIntegrationTemplateGetTemplateWidgetDataV1()

Read a template\'s JSON widget payload in the selected project_id after checking template/project installation ownership. This is widget data, not the full server tool catalog or a widget custom actions list. Write using POST /method/integration_project_template/widget/set. Rate limit: 10 requests per 1 second.

### Example

```typescript
import {
    MethodIntegrationApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MethodIntegrationApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let templateId: string; //Integration project template ID (default to undefined)
let projectId: number; //Project ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationTemplateGetTemplateWidgetDataV1(
    language,
    templateId,
    projectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **templateId** | [**string**] | Integration project template ID | defaults to undefined|
| **projectId** | [**number**] | Project ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**IntegrationTemplateWidgetGetResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

