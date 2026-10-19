# IntegrationTemplateApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodTemplateAddV1**](#methodtemplateaddv1) | **POST** /method/integration_project_template/add | Create a template in an installation belonging to the selected authorized project|
|[**methodTemplateCopyV1**](#methodtemplatecopyv1) | **POST** /method/integration_project_template/copy | Copy an authorized template within its project installation|
|[**methodTemplateDeleteV1**](#methodtemplatedeletev1) | **DELETE** /method/integration_project_template/delete | Delete a template belonging to the selected authorized project|
|[**methodTemplateGetV1**](#methodtemplategetv1) | **GET** /method/integration_project_template/get | Get a template belonging to an installation in the selected authorized project|
|[**methodTemplateListV1**](#methodtemplatelistv1) | **GET** /method/integration_project_template/list | List templates of an installation in the selected authorized project|
|[**methodTemplateSetWidgetV1**](#methodtemplatesetwidgetv1) | **POST** /method/integration_project_template/widget/set | Set an authorized template widget JSON payload|

# **methodTemplateAddV1**
> MethodTemplateCreateResponse methodTemplateAddV1(methodTemplateAddRequest)

Returns the created template ID for subsequent get and widget operations.

### Example

```typescript
import {
    IntegrationTemplateApi,
    Configuration,
    MethodTemplateAddRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTemplateApi(configuration);

let methodTemplateAddRequest: MethodTemplateAddRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodTemplateAddV1(
    methodTemplateAddRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodTemplateAddRequest** | **MethodTemplateAddRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodTemplateCreateResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** | Validation, account credential, scope, resource access or domain operation error; inspect error.name. No operation is reported as successful when its domain action fails. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodTemplateCopyV1**
> MethodTemplateCreateResponse methodTemplateCopyV1(methodTemplateGetRequest)

Checks source template → installation → selected project before copying. Returns the newly created template ID.

### Example

```typescript
import {
    IntegrationTemplateApi,
    Configuration,
    MethodTemplateGetRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTemplateApi(configuration);

let methodTemplateGetRequest: MethodTemplateGetRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodTemplateCopyV1(
    methodTemplateGetRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodTemplateGetRequest** | **MethodTemplateGetRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodTemplateCreateResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** | Validation, account credential, scope, resource access or domain operation error; inspect error.name. No operation is reported as successful when its domain action fails. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodTemplateDeleteV1**
> SuccessResponse methodTemplateDeleteV1()

Foreign template IDs are denied before deletion even if the selected project is accessible.

### Example

```typescript
import {
    IntegrationTemplateApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTemplateApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Selected authorized project ID (default to undefined)
let integrationProjectTemplateId: string; //Template Mongo ID; must belong to an installation in the selected project (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodTemplateDeleteV1(
    language,
    projectId,
    integrationProjectTemplateId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Selected authorized project ID | defaults to undefined|
| **integrationProjectTemplateId** | [**string**] | Template Mongo ID; must belong to an installation in the selected project | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Validation, account credential, scope, resource access or domain operation error; inspect error.name. No operation is reported as successful when its domain action fails. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodTemplateGetV1**
> MethodTemplateResponse methodTemplateGetV1()

Checks template → installation → selected project. Returns explicit template fields without raw storage properties.

### Example

```typescript
import {
    IntegrationTemplateApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTemplateApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Selected authorized project ID (default to undefined)
let integrationProjectTemplateId: string; //Template Mongo ID; must belong to an installation in the selected project (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodTemplateGetV1(
    language,
    projectId,
    integrationProjectTemplateId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Selected authorized project ID | defaults to undefined|
| **integrationProjectTemplateId** | [**string**] | Template Mongo ID; must belong to an installation in the selected project | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodTemplateResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Validation, account credential, scope, resource access or domain operation error; inspect error.name. No operation is reported as successful when its domain action fails. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodTemplateListV1**
> MethodTemplateListResponse methodTemplateListV1()

Requires installation ownership and project role. Returns limit/offset pagination without changing the selected project.

### Example

```typescript
import {
    IntegrationTemplateApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTemplateApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Selected authorized project ID (default to undefined)
let integrationProjectId: string; //Project installation Mongo ID; must belong to the selected authorized project (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let limit: number; //Maximum number of records in this page (optional) (default to 10)
let offset: number; //Number of matching records to skip before this page (optional) (default to 0)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodTemplateListV1(
    language,
    projectId,
    integrationProjectId,
    v,
    limit,
    offset,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Selected authorized project ID | defaults to undefined|
| **integrationProjectId** | [**string**] | Project installation Mongo ID; must belong to the selected authorized project | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **limit** | [**number**] | Maximum number of records in this page | (optional) defaults to 10|
| **offset** | [**number**] | Number of matching records to skip before this page | (optional) defaults to 0|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodTemplateListResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Validation, account credential, scope, resource access or domain operation error; inspect error.name. No operation is reported as successful when its domain action fails. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodTemplateSetWidgetV1**
> SuccessResponse methodTemplateSetWidgetV1(methodTemplateWidgetSetRequest)

Checks template → installation → selected project before writing and sending the widget event. Payload is a JSON object of at most 100000 UTF-8 bytes. Existing widget getter remains /method/integration-template/widget/get; rate limit is 10 requests per second.

### Example

```typescript
import {
    IntegrationTemplateApi,
    Configuration,
    MethodTemplateWidgetSetRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTemplateApi(configuration);

let methodTemplateWidgetSetRequest: MethodTemplateWidgetSetRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodTemplateSetWidgetV1(
    methodTemplateWidgetSetRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodTemplateWidgetSetRequest** | **MethodTemplateWidgetSetRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** | Validation, account credential, scope, resource access or domain operation error; inspect error.name. No operation is reported as successful when its domain action fails. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

