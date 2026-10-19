# ProjectChannelInviteApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodChannelInviteDetailsDetailsV1**](#methodchannelinvitedetailsdetailsv1) | **GET** /method/channel_invite/details | Get outgoing channel invitation details|
|[**projectChannelInviteAcceptForProjectV1**](#projectchannelinviteacceptforprojectv1) | **POST** /method/channel_invite/accept_for_project | Accept channel invitation for selected project|
|[**projectChannelInviteAcceptForSecretV1**](#projectchannelinviteacceptforsecretv1) | **POST** /method/channel_invite/accept_for_secret | Accept channel invitation using a secret link|
|[**projectChannelInviteAddByEmailV1**](#projectchannelinviteaddbyemailv1) | **POST** /method/channel_invite/add_by_email | Add channel invite item for another user by email|
|[**projectChannelInviteAddByIdV1**](#projectchannelinviteaddbyidv1) | **POST** /method/channel_invite/add_by_id | Add channel invite item for another user by id|
|[**projectChannelInviteDeclineForProjectV1**](#projectchannelinvitedeclineforprojectv1) | **POST** /method/channel_invite/decline_for_project | Decline channel invitation for selected project|
|[**projectChannelInviteDeclineForSecretV1**](#projectchannelinvitedeclineforsecretv1) | **POST** /method/channel_invite/decline_for_secret | Decline channel invitation using a secret link|
|[**projectChannelInviteDelV1**](#projectchannelinvitedelv1) | **POST** /method/channel_invite/del | Del channel invite item for my channel for another user|
|[**projectChannelInviteGetForProjectV1**](#projectchannelinvitegetforprojectv1) | **GET** /method/channel_invite/get_for_project | Get invitation for channel|
|[**projectChannelInviteGetForSecretV1**](#projectchannelinvitegetforsecretv1) | **GET** /method/channel_invite/get_for_secret | Get channel invitation using a secret link|
|[**projectChannelInviteGetV1**](#projectchannelinvitegetv1) | **GET** /method/channel_invite/get | Get channel invite item for my channel for another user|
|[**projectChannelInviteListV1**](#projectchannelinvitelistv1) | **GET** /method/channel_invite/list | List of invites for channel in project|

# **methodChannelInviteDetailsDetailsV1**
> ProjectChannelInviteResponse methodChannelInviteDetailsDetailsV1()

Resolves the source project from the invitation. Requires actual source project and channel administrator access by the authenticated account.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let id: number; //Outgoing channel invitation ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodChannelInviteDetailsDetailsV1(
    language,
    id,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **id** | [**number**] | Outgoing channel invitation ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**ProjectChannelInviteResponse**

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

# **projectChannelInviteAcceptForProjectV1**
> SuccessResponse projectChannelInviteAcceptForProjectV1()

Accept an invitation to internal channel_id on behalf of recipient project_id. Requires an effective editor role in the recipient project; grants access according to the invitation. Returns success without transferring channel ownership.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteAcceptForProjectV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | The project to which you want to add a channel | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

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

# **projectChannelInviteAcceptForSecretV1**
> SuccessResponse projectChannelInviteAcceptForSecretV1()

Accept an invitation using secret/channel_id for recipient project_id. Requires an effective editor role in the selected project; secret does not replace the access check. Returns success after granting access; the channel ID differs from the invitation ID.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. (default to undefined)
let secret: string; //Secret (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteAcceptForSecretV1(
    language,
    projectId,
    channelId,
    secret,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | The project to which you want to add a channel | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. | defaults to undefined|
| **secret** | [**string**] | Secret | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

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

# **projectChannelInviteAddByEmailV1**
> ProjectChannelInviteResponse projectChannelInviteAddByEmailV1()

Create an access invitation to internal channel_id from project_id using the recipient\'s email and access_type. Requires project and channel administrator permissions; returns the invitation record. Email identifies the recipient, not the resource project_id.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. (default to undefined)
let email: string; //Email (default to undefined)
let accessType: 1 | 2; //Access type (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteAddByEmailV1(
    language,
    projectId,
    channelId,
    email,
    accessType,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. | defaults to undefined|
| **email** | [**string**] | Email | defaults to undefined|
| **accessType** | [**1 | 2**]**Array<1 &#124; 2>** | Access type | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**ProjectChannelInviteResponse**

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

# **projectChannelInviteAddByIdV1**
> ProjectChannelInviteResponse projectChannelInviteAddByIdV1()

Invite project to_project_external_id to internal channel_id from project_id with access_type. Requires project/channel administrator permissions. An eligible existing project relationship may grant access immediately: returns null instead of an invitation record. Otherwise returns the created invitation. This invites a project, not a user.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. (default to undefined)
let accessType: 1 | 2; //Access type (default to undefined)
let toProjectExternalId: string; //Project for get access by external id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteAddByIdV1(
    language,
    projectId,
    channelId,
    accessType,
    toProjectExternalId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. | defaults to undefined|
| **accessType** | [**1 | 2**]**Array<1 &#124; 2>** | Access type | defaults to undefined|
| **toProjectExternalId** | [**string**] | Project for get access by external id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**ProjectChannelInviteResponse**

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

# **projectChannelInviteDeclineForProjectV1**
> SuccessResponse projectChannelInviteDeclineForProjectV1()

Decline an access invitation for the internal channel_id on behalf of the recipient project_id. Requires an effective editor role. This changes the invitation without revoking existing channel access.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Channel id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteDeclineForProjectV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Channel id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

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

# **projectChannelInviteDeclineForSecretV1**
> SuccessResponse projectChannelInviteDeclineForSecretV1()

Decline an invitation using secret/channel_id for the recipient project_id after checking editor access. secret is sensitive; this method neither deletes the channel nor revokes existing access.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. (default to undefined)
let secret: string; //Secret (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteDeclineForSecretV1(
    language,
    projectId,
    channelId,
    secret,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | The project to which you want to add a channel | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. | defaults to undefined|
| **secret** | [**string**] | Secret | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

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

# **projectChannelInviteDelV1**
> SuccessResponse projectChannelInviteDelV1()

Cancel outgoing invitation id after identifying its source project and checking channel administrator permissions. This is an account-context operation; project_id does not override invitation ownership. Returns success; existing channel access is not revoked.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let id: number; //Unique id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteDelV1(
    language,
    id,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **id** | [**number**] | Unique id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

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

# **projectChannelInviteGetForProjectV1**
> ProjectChannelInviteLinkResponse projectChannelInviteGetForProjectV1()

Read an invitation to internal channel_id addressed to project_id. Requires the user\'s observer access to the recipient project. channel_id identifies the invited channel, not the invitation record.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Current project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteGetForProjectV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Current project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**ProjectChannelInviteLinkResponse**

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

# **projectChannelInviteGetForSecretV1**
> ProjectChannelInviteLinkResponse projectChannelInviteGetForSecretV1()

Read an invitation to channel_id using secret from a secret link. This is an account-context lookup without selecting project_id; the channel/secret match is checked. secret is sensitive and must not appear in logs or the corpus.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let channelId: number; //Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. (default to undefined)
let secret: string; //Secret (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteGetForSecretV1(
    language,
    channelId,
    secret,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. | defaults to undefined|
| **secret** | [**string**] | Secret | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**ProjectChannelInviteLinkResponse**

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

# **projectChannelInviteGetV1**
> SuccessResponse projectChannelInviteGetV1()

Check access to an outgoing invitation by record id. This legacy endpoint is available only to a project subject and actually returns success, not invitation details. For account API use GET /method/channel_invite/details.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let id: number; //Channel request id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteGetV1(
    language,
    id,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **id** | [**number**] | Channel request id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectChannelInviteListV1**
> ProjectChannelInviteListResponse projectChannelInviteListV1()

Read outgoing access invitations for internal channel_id from project_id after checking channel read access. Returns invitations, not existing access relationships; read current relationships with GET /method/channel/access/list.

### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectChannelInviteListV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID: use channel_id from the invitation or group_id from channel search. Do not use the external/platform id or the invitation record ID. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**ProjectChannelInviteListResponse**

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

