# ProjectInviteApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodUserProjectInviteAcceptForProjectV1**](#methoduserprojectinviteacceptforprojectv1) | **POST** /method/project_invite/accept_for_project | Accept project invitation|
|[**methodUserProjectInviteAcceptForSecretV1**](#methoduserprojectinviteacceptforsecretv1) | **POST** /method/project_invite/accept_for_secret | Accept project invitation using a secret link|
|[**methodUserProjectInviteAddByEmailV1**](#methoduserprojectinviteaddbyemailv1) | **POST** /method/project_invite/add_by_email | Add project invite item for another user by email|
|[**methodUserProjectInviteAddByIdV1**](#methoduserprojectinviteaddbyidv1) | **POST** /method/project_invite/add_by_id | Add project invite item for another user by id|
|[**methodUserProjectInviteDeclineForProjectV1**](#methoduserprojectinvitedeclineforprojectv1) | **POST** /method/project_invite/decline_for_project | Decline project invitation|
|[**methodUserProjectInviteDeclineForSecretV1**](#methoduserprojectinvitedeclineforsecretv1) | **POST** /method/project_invite/decline_for_secret | Decline project invitation using a secret link|
|[**methodUserProjectInviteDelV1**](#methoduserprojectinvitedelv1) | **POST** /method/project_invite/del | Cancel a project invitation|
|[**methodUserProjectInviteGetForProjectV1**](#methoduserprojectinvitegetforprojectv1) | **GET** /method/project_invite/get_for_project | Get invitation for project|
|[**methodUserProjectInviteGetForSecretV1**](#methoduserprojectinvitegetforsecretv1) | **GET** /method/project_invite/get_for_secret | Get project invitation using a secret link|
|[**methodUserProjectInviteGetV1**](#methoduserprojectinvitegetv1) | **GET** /method/project_invite/get | Get project invite item for another user|
|[**methodUserProjectInviteListV1**](#methoduserprojectinvitelistv1) | **GET** /method/project_invite/list | List of invites for project|

# **methodUserProjectInviteAcceptForProjectV1**
> SuccessResponse methodUserProjectInviteAcceptForProjectV1(methodUserProjectInviteForUserAcceptRequest)

Accept the current account user\'s invitation to invited_project_id and grant the invited role. Returns success without changing the selected cabinet tab. This grants user membership in a project, not project access to a channel.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration,
    MethodUserProjectInviteForUserAcceptRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let methodUserProjectInviteForUserAcceptRequest: MethodUserProjectInviteForUserAcceptRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteAcceptForProjectV1(
    methodUserProjectInviteForUserAcceptRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodUserProjectInviteForUserAcceptRequest** | **MethodUserProjectInviteForUserAcceptRequest**|  | |
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
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodUserProjectInviteAcceptForSecretV1**
> SuccessResponse methodUserProjectInviteAcceptForSecretV1(methodUserProjectInviteSecretAcceptRequest)

Accept an invitation using secret and invited_project_id for the current account user. Validates the invitation match and grants its access_type. secret is not an OAuth token; do not save it in the corpus.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration,
    MethodUserProjectInviteSecretAcceptRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let methodUserProjectInviteSecretAcceptRequest: MethodUserProjectInviteSecretAcceptRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteAcceptForSecretV1(
    methodUserProjectInviteSecretAcceptRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodUserProjectInviteSecretAcceptRequest** | **MethodUserProjectInviteSecretAcceptRequest**|  | |
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
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodUserProjectInviteAddByEmailV1**
> UserProjectInviteResponse methodUserProjectInviteAddByEmailV1(methodUserProjectInviteAddByEmailRequest)

Create a member invitation by email to project_id with access_type after checking the administrator role. Email identifies the recipient; project_id identifies the invited project. Returns the invitation record and initiates a notification. This does not directly change an existing member\'s role.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration,
    MethodUserProjectInviteAddByEmailRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let methodUserProjectInviteAddByEmailRequest: MethodUserProjectInviteAddByEmailRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteAddByEmailV1(
    methodUserProjectInviteAddByEmailRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodUserProjectInviteAddByEmailRequest** | **MethodUserProjectInviteAddByEmailRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**UserProjectInviteResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodUserProjectInviteAddByIdV1**
> UserProjectInviteResponse methodUserProjectInviteAddByIdV1(methodUserProjectInviteAddByIdRequest)

Create a member invitation for to_user_external_id to project_id with access_type after checking the administrator role. The recipient is a personal user account, not a project; inviting to a personal project, duplicate invitations, and existing membership are disallowed. Returns the created invitation record.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration,
    MethodUserProjectInviteAddByIdRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let methodUserProjectInviteAddByIdRequest: MethodUserProjectInviteAddByIdRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteAddByIdV1(
    methodUserProjectInviteAddByIdRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodUserProjectInviteAddByIdRequest** | **MethodUserProjectInviteAddByIdRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**UserProjectInviteResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodUserProjectInviteDeclineForProjectV1**
> SuccessResponse methodUserProjectInviteDeclineForProjectV1(methodUserProjectInviteForUserDeclineRequest)

Decline the current account user\'s invitation to invited_project_id. The recipient is checked; existing membership is not removed (user_project.you_already_in_project). Returns success.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration,
    MethodUserProjectInviteForUserDeclineRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let methodUserProjectInviteForUserDeclineRequest: MethodUserProjectInviteForUserDeclineRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteDeclineForProjectV1(
    methodUserProjectInviteForUserDeclineRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodUserProjectInviteForUserDeclineRequest** | **MethodUserProjectInviteForUserDeclineRequest**|  | |
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
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodUserProjectInviteDeclineForSecretV1**
> SuccessResponse methodUserProjectInviteDeclineForSecretV1(methodUserProjectInviteSecretDeclineRequest)

Decline an invitation using secret and invited_project_id for the current account user. Returns success after processing; declining an invitation does not remove an existing member.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration,
    MethodUserProjectInviteSecretDeclineRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let methodUserProjectInviteSecretDeclineRequest: MethodUserProjectInviteSecretDeclineRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteDeclineForSecretV1(
    methodUserProjectInviteSecretDeclineRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodUserProjectInviteSecretDeclineRequest** | **MethodUserProjectInviteSecretDeclineRequest**|  | |
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
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodUserProjectInviteDelV1**
> SuccessResponse methodUserProjectInviteDelV1(methodUserProjectInviteDelRequest)

Deletes the invitation identified by id from the specified project. Requires project administrator access. This cancels an invitation; it does not remove an existing project member.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration,
    MethodUserProjectInviteDelRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let methodUserProjectInviteDelRequest: MethodUserProjectInviteDelRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteDelV1(
    methodUserProjectInviteDelRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodUserProjectInviteDelRequest** | **MethodUserProjectInviteDelRequest**|  | |
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
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodUserProjectInviteGetForProjectV1**
> UserProjectInviteLinkResponse methodUserProjectInviteGetForProjectV1()

Read the current account user\'s invitation to invited_project_id. This is the invitation destination project, not the request\'s active target project_id. The token identifies the recipient user.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let invitedProjectId: number; //Invited project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteGetForProjectV1(
    language,
    invitedProjectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **invitedProjectId** | [**number**] | Invited project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**UserProjectInviteLinkResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodUserProjectInviteGetForSecretV1**
> UserProjectInviteLinkResponse methodUserProjectInviteGetForSecretV1()

Read the current account user\'s invitation using secret and invited_project_id. Validates that the secret link matches the target project. secret is sensitive and must not appear in examples/logs.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let secret: string; //Secret key (default to undefined)
let invitedProjectId: number; //Invited project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteGetForSecretV1(
    language,
    secret,
    invitedProjectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **secret** | [**string**] | Secret key | defaults to undefined|
| **invitedProjectId** | [**number**] | Invited project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**UserProjectInviteLinkResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodUserProjectInviteGetV1**
> UserProjectInviteResponse methodUserProjectInviteGetV1()

Read outgoing invitation id in project_id after checking the record belongs to the project and the current user has observer access. id identifies the invitation, not the recipient or project.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Context project id for access check (default to undefined)
let id: number; //User project invite id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteGetV1(
    language,
    projectId,
    id,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Context project id for access check | defaults to undefined|
| **id** | [**number**] | User project invite id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**UserProjectInviteResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodUserProjectInviteListV1**
> UserProjectInviteUserListResponse methodUserProjectInviteListV1()

Read member invitations for project_id with request pagination after checking observer access. Returns invitation records; read existing members using GET /method/project/user/list.

### Example

```typescript
import {
    ProjectInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodUserProjectInviteListV1(
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
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**UserProjectInviteUserListResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

