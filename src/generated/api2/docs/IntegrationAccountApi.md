# IntegrationAccountApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodIntegrationAccountGetV1**](#methodintegrationaccountgetv1) | **GET** /method/integration/account/get | Get an integration grant owned by the authenticated account|
|[**methodIntegrationAccountListV1**](#methodintegrationaccountlistv1) | **GET** /method/integration/account/list | List integration grants owned by the authenticated account|
|[**methodIntegrationAccountRevokeV1**](#methodintegrationaccountrevokev1) | **DELETE** /method/integration/account/revoke | Revoke another integration grant owned by the authenticated account|

# **methodIntegrationAccountGetV1**
> IntegrationAccountResponse methodIntegrationAccountGetV1()

Returns the grant state and approved scopes without credentials. Foreign grants are denied.

### Example

```typescript
import {
    IntegrationAccountApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationAccountApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationAccountId: string; //MongoDB ID of a personal OAuth grant from GET /method/integration/account/list; not an application integration_id or a project installation ID. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAccountGetV1(
    language,
    integrationAccountId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **integrationAccountId** | [**string**] | MongoDB ID of a personal OAuth grant from GET /method/integration/account/list; not an application integration_id or a project installation ID. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**IntegrationAccountResponse**

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

# **methodIntegrationAccountListV1**
> IntegrationAccountListResponse methodIntegrationAccountListV1()

Lists account grants, including revoked grants, with limit/offset pagination. Returns no credentials. No project_id is accepted.

### Example

```typescript
import {
    IntegrationAccountApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationAccountApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let limit: number; //Number of grant records per result, 1–100; default 20. (optional) (default to 20)
let offset: number; //Number of grant records to skip; not a page number, default 0. (optional) (default to 0)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAccountListV1(
    language,
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
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **limit** | [**number**] | Number of grant records per result, 1–100; default 20. | (optional) defaults to 20|
| **offset** | [**number**] | Number of grant records to skip; not a page number, default 0. | (optional) defaults to 0|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**IntegrationAccountListResponse**

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

# **methodIntegrationAccountRevokeV1**
> SuccessResponse methodIntegrationAccountRevokeV1()

Revokes access and schedules assistant binding cleanup. Repeated revocation is idempotent. Revoking the grant authorizing this request fails with auth.self_disconnect_forbidden before any effect. Foreign grants are denied.

### Example

```typescript
import {
    IntegrationAccountApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationAccountApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let integrationAccountId: string; //MongoDB ID of a personal OAuth grant to revoke. The grant authorizing the current request cannot be revoked; this does not uninstall a project plugin. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodIntegrationAccountRevokeV1(
    language,
    integrationAccountId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **integrationAccountId** | [**string**] | MongoDB ID of a personal OAuth grant to revoke. The grant authorizing the current request cannot be revoked; this does not uninstall a project plugin. | defaults to undefined|
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

