# IntegrationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodIntegrationAddV1**](#methodintegrationaddv1) | **POST** /method/integration/add | Create a developer application owned by the authenticated account|
|[**methodIntegrationDeleteV1**](#methodintegrationdeletev1) | **DELETE** /method/integration/delete | Delete another developer application owned by the authenticated account|
|[**methodIntegrationGetV1**](#methodintegrationgetv1) | **GET** /method/integration/get | Get a developer application accessible to the authenticated account|
|[**methodIntegrationListV1**](#methodintegrationlistv1) | **GET** /method/integration/list | List developer applications owned or administered by the authenticated account|
|[**methodIntegrationScopesV1**](#methodintegrationscopesv1) | **GET** /method/integration/scopes | Get the public OAuth scope catalog with localized descriptions|
|[**methodIntegrationUpdateDesignV1**](#methodintegrationupdatedesignv1) | **PUT** /method/integration/update_design | Update developer application images|
|[**methodIntegrationUpdateInfoV1**](#methodintegrationupdateinfov1) | **POST** /method/integration/update_info | Update developer application title, categories and help links|
|[**methodIntegrationUpdateSettingsV1**](#methodintegrationupdatesettingsv1) | **PUT** /method/integration/update_settings | Update another developer application OAuth and launch settings|

# **methodIntegrationAddV1**
> MethodIntegrationCreateResponse methodIntegrationAddV1(methodIntegrationAddRequest)

Creates a private application and returns its ID. Does not grant it account access; OAuth consent is separate.

### Example

```typescript
import {
    IntegrationApi,
    Configuration,
    MethodIntegrationAddRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

let methodIntegrationAddRequest: MethodIntegrationAddRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAddV1(
    methodIntegrationAddRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationAddRequest** | **MethodIntegrationAddRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodIntegrationCreateResponse**

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

# **methodIntegrationDeleteV1**
> SuccessResponse methodIntegrationDeleteV1()

Owner only. Removes application, installations, templates and OAuth credentials. Deleting the authorizing application fails with auth.self_disconnect_forbidden before effects.

### Example

```typescript
import {
    IntegrationApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationId: string; //Developer application Mongo ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationDeleteV1(
    language,
    integrationId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **integrationId** | [**string**] | Developer application Mongo ID | defaults to undefined|
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

# **methodIntegrationGetV1**
> MethodIntegrationResponse methodIntegrationGetV1()

Requires application ownership or administrator access. Returns explicitly described settings without client secret, tokens or reports. No project_id is accepted.

### Example

```typescript
import {
    IntegrationApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationId: string; //Developer application Mongo ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationGetV1(
    language,
    integrationId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **integrationId** | [**string**] | Developer application Mongo ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodIntegrationResponse**

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

# **methodIntegrationListV1**
> MethodIntegrationListResponse methodIntegrationListV1()

Uses actor identity from the account credential; filters and limit/offset do not select another user or project. This lists applications, not OAuth grants.

### Example

```typescript
import {
    IntegrationApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let limit: number; //Maximum number of records in this page (optional) (default to 10)
let offset: number; //Number of matching records to skip before this page (optional) (default to 0)
let filter: 'all' | 'created' | 'invites'; //Own and administered applications, created applications, or administered applications (optional) (default to 'all')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationListV1(
    language,
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
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **limit** | [**number**] | Maximum number of records in this page | (optional) defaults to 10|
| **offset** | [**number**] | Number of matching records to skip before this page | (optional) defaults to 0|
| **filter** | [**&#39;all&#39; | &#39;created&#39; | &#39;invites&#39;**]**Array<&#39;all&#39; &#124; &#39;created&#39; &#124; &#39;invites&#39;>** | Own and administered applications, created applications, or administered applications | (optional) defaults to 'all'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodIntegrationListResponse**

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

# **methodIntegrationScopesV1**
> IntegrationScopeSiteResponse methodIntegrationScopesV1()

Lists all supported scope definitions. Application allowlists are returned by the authorized application get operation.

### Example

```typescript
import {
    IntegrationApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationScopesV1(
    language,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**IntegrationScopeSiteResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Validation, account credential, scope, resource access or domain operation error; inspect error.name. No operation is reported as successful when its domain action fails. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodIntegrationUpdateDesignV1**
> SuccessResponse methodIntegrationUpdateDesignV1(methodIntegrationUpdateDesignRequest)

Requires application owner or administrator access. Image data is uploaded using the existing integration image flow. Existing CDN URLs remain unchanged.

### Example

```typescript
import {
    IntegrationApi,
    Configuration,
    MethodIntegrationUpdateDesignRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

let methodIntegrationUpdateDesignRequest: MethodIntegrationUpdateDesignRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationUpdateDesignV1(
    methodIntegrationUpdateDesignRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationUpdateDesignRequest** | **MethodIntegrationUpdateDesignRequest**|  | |
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
|**200** |  |  -  |
|**400** | Validation, account credential, scope, resource access or domain operation error; inspect error.name. No operation is reported as successful when its domain action fails. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodIntegrationUpdateInfoV1**
> SuccessResponse methodIntegrationUpdateInfoV1(methodIntegrationUpdateInfoRequest)

Requires application owner or administrator access. Updating metadata of the authorizing application is allowed.

### Example

```typescript
import {
    IntegrationApi,
    Configuration,
    MethodIntegrationUpdateInfoRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

let methodIntegrationUpdateInfoRequest: MethodIntegrationUpdateInfoRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationUpdateInfoV1(
    methodIntegrationUpdateInfoRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationUpdateInfoRequest** | **MethodIntegrationUpdateInfoRequest**|  | |
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

# **methodIntegrationUpdateSettingsV1**
> SuccessResponse methodIntegrationUpdateSettingsV1(methodIntegrationUpdateSettingsRequest)

Requires application owner or administrator access. Optional allowlist fields preserve the current value when omitted. Changing the authorizing application fails with auth.self_disconnect_forbidden before effects.

### Example

```typescript
import {
    IntegrationApi,
    Configuration,
    MethodIntegrationUpdateSettingsRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

let methodIntegrationUpdateSettingsRequest: MethodIntegrationUpdateSettingsRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationUpdateSettingsV1(
    methodIntegrationUpdateSettingsRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationUpdateSettingsRequest** | **MethodIntegrationUpdateSettingsRequest**|  | |
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
|**200** |  |  -  |
|**400** | Validation, account credential, scope, resource access or domain operation error; inspect error.name. No operation is reported as successful when its domain action fails. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

