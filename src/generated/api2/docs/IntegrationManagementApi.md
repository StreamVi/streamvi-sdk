# IntegrationManagementApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodIntegrationAncillaryAcceptInvitationV1**](#methodintegrationancillaryacceptinvitationv1) | **POST** /method/integration/invite/accept | Accept a pending application invitation addressed to the authenticated account|
|[**methodIntegrationAncillaryAddAccessV1**](#methodintegrationancillaryaddaccessv1) | **POST** /method/integration/access/add | Grant a project test access to the application|
|[**methodIntegrationAncillaryAddAdministratorV1**](#methodintegrationancillaryaddadministratorv1) | **POST** /method/integration/administrator/add | Grant application administrator access by external recipient identity|
|[**methodIntegrationAncillaryAddInvitationV1**](#methodintegrationancillaryaddinvitationv1) | **POST** /method/integration/invite/add | Create an application invitation for an external recipient identity and send its notification|
|[**methodIntegrationAncillaryAddWebhookV1**](#methodintegrationancillaryaddwebhookv1) | **POST** /method/integration/webhook/add | Create an application webhook and return its ID|
|[**methodIntegrationAncillaryDeclineInvitationV1**](#methodintegrationancillarydeclineinvitationv1) | **POST** /method/integration/invite/decline | Decline a pending application invitation addressed to the authenticated account|
|[**methodIntegrationAncillaryDeleteAccessV1**](#methodintegrationancillarydeleteaccessv1) | **DELETE** /method/integration/access/delete | Remove application test access for a project|
|[**methodIntegrationAncillaryDeleteAdministratorV1**](#methodintegrationancillarydeleteadministratorv1) | **DELETE** /method/integration/administrator/delete | Remove an application administrator by user ID|
|[**methodIntegrationAncillaryDeleteInvitationV1**](#methodintegrationancillarydeleteinvitationv1) | **POST** /method/integration/invite/del | Delete an outgoing invitation belonging to the owned application|
|[**methodIntegrationAncillaryDeleteModerationV1**](#methodintegrationancillarydeletemoderationv1) | **DELETE** /method/integration/access/delete_moderate | Withdraw the owned application moderation request|
|[**methodIntegrationAncillaryDeleteWebhookV1**](#methodintegrationancillarydeletewebhookv1) | **DELETE** /method/integration/webhook/delete | Delete a webhook belonging to an accessible application|
|[**methodIntegrationAncillaryGetInvitationV1**](#methodintegrationancillarygetinvitationv1) | **GET** /method/integration/invite/get | Read a pending invitation addressed to the authenticated account by its link secret|
|[**methodIntegrationAncillaryGetWebhookV1**](#methodintegrationancillarygetwebhookv1) | **GET** /method/integration/webhook/get | Read an application webhook|
|[**methodIntegrationAncillaryListAccessV1**](#methodintegrationancillarylistaccessv1) | **GET** /method/integration/access/list | List application test-access projects|
|[**methodIntegrationAncillaryListAdministratorsV1**](#methodintegrationancillarylistadministratorsv1) | **GET** /method/integration/administrator/list | List application administrators and their owner/developer levels|
|[**methodIntegrationAncillaryListInvitationsV1**](#methodintegrationancillarylistinvitationsv1) | **GET** /method/integration/invite/list | List pending outgoing application invitations|
|[**methodIntegrationAncillaryListWebhooksV1**](#methodintegrationancillarylistwebhooksv1) | **GET** /method/integration/webhook/list | List application webhooks with limit/offset pagination|
|[**methodIntegrationAncillarySubmitModerationV1**](#methodintegrationancillarysubmitmoderationv1) | **POST** /method/integration/access/submit_moderate | Submit the owned application for platform moderation|
|[**methodIntegrationAncillaryTransferV1**](#methodintegrationancillarytransferv1) | **POST** /method/integration/administrator/transfer | Transfer application ownership to an existing user|
|[**methodIntegrationAncillaryUpdateWebhookV1**](#methodintegrationancillaryupdatewebhookv1) | **PUT** /method/integration/webhook/update | Update an accessible application webhook|

# **methodIntegrationAncillaryAcceptInvitationV1**
> SuccessResponse methodIntegrationAncillaryAcceptInvitationV1(methodIntegrationGetRequest)

Accept a pending application invitation addressed to the authenticated account. Checks recipient, role, expiration and unused state; does not require the invited role before acceptance.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration,
    MethodIntegrationGetRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let methodIntegrationGetRequest: MethodIntegrationGetRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryAcceptInvitationV1(
    methodIntegrationGetRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationGetRequest** | **MethodIntegrationGetRequest**|  | |
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

# **methodIntegrationAncillaryAddAccessV1**
> SuccessResponse methodIntegrationAncillaryAddAccessV1(methodIntegrationAccessAddRequest)

Grant a project test access to the application. Requires application ownership and an existing target project.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration,
    MethodIntegrationAccessAddRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let methodIntegrationAccessAddRequest: MethodIntegrationAccessAddRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryAddAccessV1(
    methodIntegrationAccessAddRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationAccessAddRequest** | **MethodIntegrationAccessAddRequest**|  | |
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

# **methodIntegrationAncillaryAddAdministratorV1**
> SuccessResponse methodIntegrationAncillaryAddAdministratorV1(methodIntegrationAdministratorAddRequest)

Grant application administrator access by external recipient identity. Only the actual application owner can grant the specified level.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration,
    MethodIntegrationAdministratorAddRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let methodIntegrationAdministratorAddRequest: MethodIntegrationAdministratorAddRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryAddAdministratorV1(
    methodIntegrationAdministratorAddRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationAdministratorAddRequest** | **MethodIntegrationAdministratorAddRequest**|  | |
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

# **methodIntegrationAncillaryAddInvitationV1**
> MethodIntegrationInviteResponse methodIntegrationAncillaryAddInvitationV1(methodIntegrationInviteAddRequest)

Create an application invitation for an external recipient identity and send its notification. Application owner only. Invitation expires after seven days.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration,
    MethodIntegrationInviteAddRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let methodIntegrationInviteAddRequest: MethodIntegrationInviteAddRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryAddInvitationV1(
    methodIntegrationInviteAddRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationInviteAddRequest** | **MethodIntegrationInviteAddRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodIntegrationInviteResponse**

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

# **methodIntegrationAncillaryAddWebhookV1**
> MethodIntegrationWebhookCreateResponse methodIntegrationAncillaryAddWebhookV1(methodIntegrationWebhookAddRequest)

Create an application webhook and return its ID. Requires owner/administrator access. Defines outbound HTTP URL, method, supported events and active state.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration,
    MethodIntegrationWebhookAddRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let methodIntegrationWebhookAddRequest: MethodIntegrationWebhookAddRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryAddWebhookV1(
    methodIntegrationWebhookAddRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationWebhookAddRequest** | **MethodIntegrationWebhookAddRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodIntegrationWebhookCreateResponse**

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

# **methodIntegrationAncillaryDeclineInvitationV1**
> SuccessResponse methodIntegrationAncillaryDeclineInvitationV1(methodIntegrationGetRequest)

Decline a pending application invitation addressed to the authenticated account. Expired, consumed and foreign invitations are denied.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration,
    MethodIntegrationGetRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let methodIntegrationGetRequest: MethodIntegrationGetRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryDeclineInvitationV1(
    methodIntegrationGetRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationGetRequest** | **MethodIntegrationGetRequest**|  | |
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

# **methodIntegrationAncillaryDeleteAccessV1**
> SuccessResponse methodIntegrationAncillaryDeleteAccessV1()

Remove application test access for a project. Requires application ownership.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationId: string; //Developer application Mongo ID; authorization uses its actual owner and administrators (default to undefined)
let userId: number; //Internal numeric project ID with private application test access; legacy field name (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryDeleteAccessV1(
    language,
    integrationId,
    userId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **integrationId** | [**string**] | Developer application Mongo ID; authorization uses its actual owner and administrators | defaults to undefined|
| **userId** | [**number**] | Internal numeric project ID with private application test access; legacy field name | defaults to undefined|
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

# **methodIntegrationAncillaryDeleteAdministratorV1**
> SuccessResponse methodIntegrationAncillaryDeleteAdministratorV1()

Remove an application administrator by user ID. Only the actual application owner can remove access.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationId: string; //Developer application Mongo ID; authorization uses its actual owner and administrators (default to undefined)
let userId: number; //Internal numeric user ID; never the caller identity supplied by the credential (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryDeleteAdministratorV1(
    language,
    integrationId,
    userId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **integrationId** | [**string**] | Developer application Mongo ID; authorization uses its actual owner and administrators | defaults to undefined|
| **userId** | [**number**] | Internal numeric user ID; never the caller identity supplied by the credential | defaults to undefined|
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

# **methodIntegrationAncillaryDeleteInvitationV1**
> SuccessResponse methodIntegrationAncillaryDeleteInvitationV1(methodIntegrationInviteDeleteRequest)

Delete an outgoing invitation belonging to the owned application. A foreign invitation/application pairing is denied.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration,
    MethodIntegrationInviteDeleteRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let methodIntegrationInviteDeleteRequest: MethodIntegrationInviteDeleteRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryDeleteInvitationV1(
    methodIntegrationInviteDeleteRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationInviteDeleteRequest** | **MethodIntegrationInviteDeleteRequest**|  | |
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

# **methodIntegrationAncillaryDeleteModerationV1**
> SuccessResponse methodIntegrationAncillaryDeleteModerationV1()

Withdraw the owned application moderation request. Does not provide moderator privileges.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationId: string; //Developer application Mongo ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryDeleteModerationV1(
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

# **methodIntegrationAncillaryDeleteWebhookV1**
> SuccessResponse methodIntegrationAncillaryDeleteWebhookV1()

Delete a webhook belonging to an accessible application. A conflicting integration_id or foreign webhook is denied before deletion.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let webhookId: string; //Webhook Mongo ID; its application is resolved before access or modification (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let integrationId: string; //Actual application owning the webhook; when optional, supplied ID must match the resolved application (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryDeleteWebhookV1(
    language,
    webhookId,
    v,
    integrationId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **webhookId** | [**string**] | Webhook Mongo ID; its application is resolved before access or modification | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **integrationId** | [**string**] | Actual application owning the webhook; when optional, supplied ID must match the resolved application | (optional) defaults to undefined|
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

# **methodIntegrationAncillaryGetInvitationV1**
> MethodIntegrationInviteResponse methodIntegrationAncillaryGetInvitationV1()

Read a pending invitation addressed to the authenticated account by its link secret. No existing application role is required. Expired and consumed invitations are denied.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let inviteCode: string; //Invitation UUID from the addressed invitation link (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryGetInvitationV1(
    language,
    inviteCode,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **inviteCode** | [**string**] | Invitation UUID from the addressed invitation link | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodIntegrationInviteResponse**

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

# **methodIntegrationAncillaryGetWebhookV1**
> MethodIntegrationWebhookResponse methodIntegrationAncillaryGetWebhookV1()

Read an application webhook. Requires owner/administrator access to the actual webhook application; an optional integration_id must match. Returns no storage diagnostics.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let webhookId: string; //Webhook Mongo ID; its application is resolved before access or modification (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let integrationId: string; //Actual application owning the webhook; when optional, supplied ID must match the resolved application (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryGetWebhookV1(
    language,
    webhookId,
    v,
    integrationId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **webhookId** | [**string**] | Webhook Mongo ID; its application is resolved before access or modification | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **integrationId** | [**string**] | Actual application owning the webhook; when optional, supplied ID must match the resolved application | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodIntegrationWebhookResponse**

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

# **methodIntegrationAncillaryListAccessV1**
> MethodIntegrationAccessListResponse methodIntegrationAncillaryListAccessV1()

List application test-access projects. Requires owner/administrator access.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationId: string; //Developer application Mongo ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryListAccessV1(
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

**MethodIntegrationAccessListResponse**

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

# **methodIntegrationAncillaryListAdministratorsV1**
> MethodIntegrationAdministratorsResponse methodIntegrationAncillaryListAdministratorsV1()

List application administrators and their owner/developer levels. Requires owner/administrator access.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationId: string; //Developer application Mongo ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryListAdministratorsV1(
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

**MethodIntegrationAdministratorsResponse**

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

# **methodIntegrationAncillaryListInvitationsV1**
> MethodIntegrationInvitesResponse methodIntegrationAncillaryListInvitationsV1()

List pending outgoing application invitations. Requires owner/administrator access to the application; expired or consumed invitations are not active.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationId: string; //Developer application Mongo ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryListInvitationsV1(
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

**MethodIntegrationInvitesResponse**

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

# **methodIntegrationAncillaryListWebhooksV1**
> MethodIntegrationWebhookListResponse methodIntegrationAncillaryListWebhooksV1()

List application webhooks with limit/offset pagination. Requires owner/administrator access. Offset is the requested offset, not the next item index.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationId: string; //Actual application owning the webhook; when optional, supplied ID must match the resolved application (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let limit: number; //Maximum number of records in this page (optional) (default to 20)
let offset: number; //Number of matching records to skip before this page (optional) (default to 0)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryListWebhooksV1(
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
| **integrationId** | [**string**] | Actual application owning the webhook; when optional, supplied ID must match the resolved application | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **limit** | [**number**] | Maximum number of records in this page | (optional) defaults to 20|
| **offset** | [**number**] | Number of matching records to skip before this page | (optional) defaults to 0|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**MethodIntegrationWebhookListResponse**

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

# **methodIntegrationAncillarySubmitModerationV1**
> SuccessResponse methodIntegrationAncillarySubmitModerationV1(methodIntegrationGetRequest)

Submit the owned application for platform moderation. Only changes the application request to waiting; does not approve publication.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration,
    MethodIntegrationGetRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let methodIntegrationGetRequest: MethodIntegrationGetRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillarySubmitModerationV1(
    methodIntegrationGetRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationGetRequest** | **MethodIntegrationGetRequest**|  | |
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

# **methodIntegrationAncillaryTransferV1**
> SuccessResponse methodIntegrationAncillaryTransferV1(methodIntegrationAdministratorTransferRequest)

Transfer application ownership to an existing user. The authenticated owner becomes a developer. Owner identity comes from the credential, not project_id.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration,
    MethodIntegrationAdministratorTransferRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let methodIntegrationAdministratorTransferRequest: MethodIntegrationAdministratorTransferRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryTransferV1(
    methodIntegrationAdministratorTransferRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationAdministratorTransferRequest** | **MethodIntegrationAdministratorTransferRequest**|  | |
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

# **methodIntegrationAncillaryUpdateWebhookV1**
> SuccessResponse methodIntegrationAncillaryUpdateWebhookV1(methodIntegrationWebhookUpdateRequest)

Update an accessible application webhook. The webhook application cannot be reassigned; conflicting integration_id is denied before update.

### Example

```typescript
import {
    IntegrationManagementApi,
    Configuration,
    MethodIntegrationWebhookUpdateRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationManagementApi(configuration);

let methodIntegrationWebhookUpdateRequest: MethodIntegrationWebhookUpdateRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAncillaryUpdateWebhookV1(
    methodIntegrationWebhookUpdateRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodIntegrationWebhookUpdateRequest** | **MethodIntegrationWebhookUpdateRequest**|  | |
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

