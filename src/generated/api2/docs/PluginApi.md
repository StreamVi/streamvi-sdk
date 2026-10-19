# PluginApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodPluginCatalogV1**](#methodplugincatalogv1) | **GET** /method/plugin/list_catalog | List public or installed plugins for the selected project|
|[**methodPluginDeleteV1**](#methodplugindeletev1) | **DELETE** /method/plugin/delete | Uninstall a plugin belonging to the selected authorized project|
|[**methodPluginInstallV1**](#methodplugininstallv1) | **POST** /method/plugin/install | Install a visible plugin into the selected authorized project|
|[**methodPluginPrivateCatalogV1**](#methodpluginprivatecatalogv1) | **GET** /method/plugin/list_catalog_private | List private applications owned or administered by the authenticated account|
|[**methodPluginPrivateCountV1**](#methodpluginprivatecountv1) | **GET** /method/plugin/list_catalog_private_count | Count private applications accessible to the authenticated account|
|[**methodPluginRegenerateV1**](#methodpluginregeneratev1) | **POST** /method/plugin/regenerate_token | Rotate a selected project plugin installation credential|
|[**methodPluginReportV1**](#methodpluginreportv1) | **POST** /method/plugin/send_report | Send an application report from the selected authorized project|
|[**methodPluginReportsV1**](#methodpluginreportsv1) | **GET** /method/plugin/send_report_list | Read application reports as its owner or administrator|
|[**methodPluginViewV1**](#methodpluginviewv1) | **GET** /method/plugin/view | View a public or authorized private plugin for the selected project|

# **methodPluginCatalogV1**
> MethodPluginCatalogResponse methodPluginCatalogV1()

Explicit catalog/installed filter and limit/offset pagination; requires project access. Does not change the selected project in a session.

### Example

```typescript
import {
    PluginApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PluginApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Explicit selected project; the authenticated account must have the required project role (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let limit: number; //Maximum number of records in this page (optional) (default to 10)
let offset: number; //Number of matching records to skip before this page (optional) (default to 0)
let filter: 'catalog' | 'installed'; //catalog lists published applications; installed lists installations in the selected project (optional) (default to 'catalog')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodPluginCatalogV1(
    language,
    projectId,
    v,
    limit,
    offset,
    filter,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Explicit selected project; the authenticated account must have the required project role | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **limit** | [**number**] | Maximum number of records in this page | (optional) defaults to 10|
| **offset** | [**number**] | Number of matching records to skip before this page | (optional) defaults to 0|
| **filter** | [**&#39;catalog&#39; | &#39;installed&#39;**]**Array<&#39;catalog&#39; &#124; &#39;installed&#39;>** | catalog lists published applications; installed lists installations in the selected project | (optional) defaults to 'catalog'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodPluginCatalogResponse**

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

# **methodPluginDeleteV1**
> PluginDeleteResponse methodPluginDeleteV1()

Invalidates its project credentials and removes its templates. A foreign installation is denied before effects. Uninstalling a project plugin does not revoke an account grant.

### Example

```typescript
import {
    PluginApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PluginApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Explicit selected project; the authenticated account must have the required project role (default to undefined)
let integrationProjectId: string; //Project installation Mongo ID; must belong to the selected authorized project (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodPluginDeleteV1(
    language,
    projectId,
    integrationProjectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Explicit selected project; the authenticated account must have the required project role | defaults to undefined|
| **integrationProjectId** | [**string**] | Project installation Mongo ID; must belong to the selected authorized project | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PluginDeleteResponse**

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

# **methodPluginInstallV1**
> MethodPluginInstallResponse methodPluginInstallV1(methodPluginViewRequest)

Creates a project installation using the existing consent/scope rules. OAuth applications must use OAuth installation. May return a sensitive project installation credential; this is not an account grant. Never log credentials.

### Example

```typescript
import {
    PluginApi,
    Configuration,
    MethodPluginViewRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PluginApi(configuration);

let methodPluginViewRequest: MethodPluginViewRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodPluginInstallV1(
    methodPluginViewRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodPluginViewRequest** | **MethodPluginViewRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodPluginInstallResponse**

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

# **methodPluginPrivateCatalogV1**
> MethodPluginCatalogResponse methodPluginPrivateCatalogV1()

The selected project is used only to show its installation IDs. Private application ownership uses the account actor, not the project ID.

### Example

```typescript
import {
    PluginApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PluginApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Explicit selected project; the authenticated account must have the required project role (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let limit: number; //Maximum number of records in this page (optional) (default to 10)
let offset: number; //Number of matching records to skip before this page (optional) (default to 0)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodPluginPrivateCatalogV1(
    language,
    projectId,
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
| **projectId** | [**number**] | Explicit selected project; the authenticated account must have the required project role | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **limit** | [**number**] | Maximum number of records in this page | (optional) defaults to 10|
| **offset** | [**number**] | Number of matching records to skip before this page | (optional) defaults to 0|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodPluginCatalogResponse**

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

# **methodPluginPrivateCountV1**
> number methodPluginPrivateCountV1()

Requires access to the selected project; application ownership and administrator membership use the authenticated account actor.

### Example

```typescript
import {
    PluginApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PluginApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Explicit selected project; the authenticated account must have the required project role (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodPluginPrivateCountV1(
    language,
    projectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Explicit selected project; the authenticated account must have the required project role | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**number**

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

# **methodPluginRegenerateV1**
> MethodPluginRegenerateTokenResponse methodPluginRegenerateV1(methodPluginInstallationRequest)

Requires project access and installation ownership. Invalidates the previous installation token and returns a sensitive new token. Preserves existing scope rotation and project activity. Never log credentials.

### Example

```typescript
import {
    PluginApi,
    Configuration,
    MethodPluginInstallationRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PluginApi(configuration);

let methodPluginInstallationRequest: MethodPluginInstallationRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodPluginRegenerateV1(
    methodPluginInstallationRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodPluginInstallationRequest** | **MethodPluginInstallationRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodPluginRegenerateTokenResponse**

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

# **methodPluginReportV1**
> SuccessResponse methodPluginReportV1(methodPluginReportRequest)

Appends an email, subject and description report for a visible application. This sends a report; it does not install an application.

### Example

```typescript
import {
    PluginApi,
    Configuration,
    MethodPluginReportRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PluginApi(configuration);

let methodPluginReportRequest: MethodPluginReportRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodPluginReportV1(
    methodPluginReportRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodPluginReportRequest** | **MethodPluginReportRequest**|  | |
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

# **methodPluginReportsV1**
> MethodPluginReportsResponse methodPluginReportsV1()

Account actor ownership is checked independently of any project. Returns explicit report fields with limit/offset pagination.

### Example

```typescript
import {
    PluginApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PluginApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationId: string; //Developer application Mongo ID; authorization uses its actual owner and administrators (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let limit: number; //Maximum number of records in this page (optional) (default to 10)
let offset: number; //Number of matching records to skip before this page (optional) (default to 0)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodPluginReportsV1(
    language,
    integrationId,
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
| **integrationId** | [**string**] | Developer application Mongo ID; authorization uses its actual owner and administrators | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **limit** | [**number**] | Maximum number of records in this page | (optional) defaults to 10|
| **offset** | [**number**] | Number of matching records to skip before this page | (optional) defaults to 0|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodPluginReportsResponse**

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

# **methodPluginViewV1**
> MethodPluginViewResponse methodPluginViewV1()

Requires project access and application visibility. Returns explicit application details and the selected project installation ID, without credentials.

### Example

```typescript
import {
    PluginApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PluginApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Explicit selected project; the authenticated account must have the required project role (default to undefined)
let integrationId: string; //Developer application Mongo ID; authorization uses its actual owner and administrators (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodPluginViewV1(
    language,
    projectId,
    integrationId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Explicit selected project; the authenticated account must have the required project role | defaults to undefined|
| **integrationId** | [**string**] | Developer application Mongo ID; authorization uses its actual owner and administrators | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodPluginViewResponse**

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

