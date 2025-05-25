# ProjectChannelInviteApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**siteProjectChannelInviteControllerAcceptForProject1**](#siteprojectchannelinvitecontrolleracceptforproject1) | **POST** /method/channel_invite/accept_for_project | Accept channel invitation for selected project|
|[**siteProjectChannelInviteControllerAcceptForSecret1**](#siteprojectchannelinvitecontrolleracceptforsecret1) | **POST** /method/channel_invite/accept_for_secret | Accept channel invitation using a secret link|
|[**siteProjectChannelInviteControllerAddByEmail1**](#siteprojectchannelinvitecontrolleraddbyemail1) | **POST** /method/channel_invite/add_by_email | Add channel invite item for another user by email|
|[**siteProjectChannelInviteControllerAddById1**](#siteprojectchannelinvitecontrolleraddbyid1) | **POST** /method/channel_invite/add_by_id | Add channel invite item for another user by id|
|[**siteProjectChannelInviteControllerDeclineForProject1**](#siteprojectchannelinvitecontrollerdeclineforproject1) | **POST** /method/channel_invite/decline_for_project | Decline channel invitation for selected project|
|[**siteProjectChannelInviteControllerDeclineForSecret1**](#siteprojectchannelinvitecontrollerdeclineforsecret1) | **POST** /method/channel_invite/decline_for_secret | Decline channel invitation using a secret link|
|[**siteProjectChannelInviteControllerDel1**](#siteprojectchannelinvitecontrollerdel1) | **POST** /method/channel_invite/del | Del channel invite item for my channel for another user|
|[**siteProjectChannelInviteControllerGet1**](#siteprojectchannelinvitecontrollerget1) | **GET** /method/channel_invite/get | Get channel invite item for my channel for another user|
|[**siteProjectChannelInviteControllerGetForProject1**](#siteprojectchannelinvitecontrollergetforproject1) | **GET** /method/channel_invite/get_for_project | Get invitation for channel|
|[**siteProjectChannelInviteControllerGetForSecret1**](#siteprojectchannelinvitecontrollergetforsecret1) | **GET** /method/channel_invite/get_for_secret | Get channel invitation using a secret link|
|[**siteProjectChannelInviteControllerList1**](#siteprojectchannelinvitecontrollerlist1) | **GET** /method/channel_invite/list | List of invites for channel in project|

# **siteProjectChannelInviteControllerAcceptForProject1**
> SuccessResponse siteProjectChannelInviteControllerAcceptForProject1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerAcceptForProject1(
    v,
    language,
    projectId,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | The project to which you want to add a channel | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


### Return type

**SuccessResponse**

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

# **siteProjectChannelInviteControllerAcceptForSecret1**
> SuccessResponse siteProjectChannelInviteControllerAcceptForSecret1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Channel id (default to undefined)
let secret: string; //Secret (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerAcceptForSecret1(
    v,
    language,
    projectId,
    channelId,
    secret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | The project to which you want to add a channel | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|
| **secret** | [**string**] | Secret | defaults to undefined|


### Return type

**SuccessResponse**

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

# **siteProjectChannelInviteControllerAddByEmail1**
> ProjectChannelInviteResponse siteProjectChannelInviteControllerAddByEmail1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let email: string; //Email (default to undefined)
let accessType: 0 | 1 | 1 | 2; //Access type (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerAddByEmail1(
    v,
    language,
    projectId,
    channelId,
    email,
    accessType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|
| **email** | [**string**] | Email | defaults to undefined|
| **accessType** | [**0 | 1 | 1 | 2**]**Array<0 &#124; 1 &#124; 1 &#124; 2>** | Access type | defaults to undefined|


### Return type

**ProjectChannelInviteResponse**

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

# **siteProjectChannelInviteControllerAddById1**
> ProjectChannelInviteResponse siteProjectChannelInviteControllerAddById1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let accessType: 0 | 1 | 1 | 2; //Access type (default to undefined)
let toProjectExternalId: string; //Project for get access by external id (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerAddById1(
    v,
    language,
    projectId,
    channelId,
    accessType,
    toProjectExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|
| **accessType** | [**0 | 1 | 1 | 2**]**Array<0 &#124; 1 &#124; 1 &#124; 2>** | Access type | defaults to undefined|
| **toProjectExternalId** | [**string**] | Project for get access by external id | defaults to undefined|


### Return type

**ProjectChannelInviteResponse**

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

# **siteProjectChannelInviteControllerDeclineForProject1**
> SuccessResponse siteProjectChannelInviteControllerDeclineForProject1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Channel id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerDeclineForProject1(
    v,
    language,
    projectId,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Channel id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


### Return type

**SuccessResponse**

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

# **siteProjectChannelInviteControllerDeclineForSecret1**
> SuccessResponse siteProjectChannelInviteControllerDeclineForSecret1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Channel id (default to undefined)
let secret: string; //Secret (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerDeclineForSecret1(
    v,
    language,
    projectId,
    channelId,
    secret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | The project to which you want to add a channel | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|
| **secret** | [**string**] | Secret | defaults to undefined|


### Return type

**SuccessResponse**

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

# **siteProjectChannelInviteControllerDel1**
> SuccessResponse siteProjectChannelInviteControllerDel1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: number; //Unique id (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerDel1(
    v,
    language,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **id** | [**number**] | Unique id | defaults to undefined|


### Return type

**SuccessResponse**

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

# **siteProjectChannelInviteControllerGet1**
> SuccessResponse siteProjectChannelInviteControllerGet1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: number; //Channel request id (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerGet1(
    v,
    language,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **id** | [**number**] | Channel request id | defaults to undefined|


### Return type

**SuccessResponse**

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

# **siteProjectChannelInviteControllerGetForProject1**
> ProjectChannelInviteLinkResponse siteProjectChannelInviteControllerGetForProject1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Current project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerGetForProject1(
    v,
    language,
    projectId,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Current project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


### Return type

**ProjectChannelInviteLinkResponse**

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

# **siteProjectChannelInviteControllerGetForSecret1**
> ProjectChannelInviteLinkResponse siteProjectChannelInviteControllerGetForSecret1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let channelId: number; //Channel id (default to undefined)
let secret: string; //Secret (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerGetForSecret1(
    v,
    language,
    channelId,
    secret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **channelId** | [**number**] | Channel id | defaults to undefined|
| **secret** | [**string**] | Secret | defaults to undefined|


### Return type

**ProjectChannelInviteLinkResponse**

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

# **siteProjectChannelInviteControllerList1**
> ListOfProjectChannelInviteResponse siteProjectChannelInviteControllerList1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelInviteControllerList1(
    v,
    language,
    projectId,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


### Return type

**ListOfProjectChannelInviteResponse**

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

