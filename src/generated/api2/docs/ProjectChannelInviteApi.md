# ProjectChannelInviteApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**projectChannelInviteAcceptForProjectV1**(#projectchannelinviteacceptforprojectv1) | **POST** /method/channel_invite/accept_for_project | Accept channel invitation for selected project|
|**projectChannelInviteAcceptForSecretV1**(#projectchannelinviteacceptforsecretv1) | **POST** /method/channel_invite/accept_for_secret | Accept channel invitation using a secret link|
|**projectChannelInviteAddByEmailV1**(#projectchannelinviteaddbyemailv1) | **POST** /method/channel_invite/add_by_email | Add channel invite item for another user by email|
|**projectChannelInviteAddByIdV1**(#projectchannelinviteaddbyidv1) | **POST** /method/channel_invite/add_by_id | Add channel invite item for another user by id|
|**projectChannelInviteDeclineForProjectV1**(#projectchannelinvitedeclineforprojectv1) | **POST** /method/channel_invite/decline_for_project | Decline channel invitation for selected project|
|**projectChannelInviteDeclineForSecretV1**(#projectchannelinvitedeclineforsecretv1) | **POST** /method/channel_invite/decline_for_secret | Decline channel invitation using a secret link|
|**projectChannelInviteDelV1**(#projectchannelinvitedelv1) | **POST** /method/channel_invite/del | Del channel invite item for my channel for another user|
|**projectChannelInviteGetForProjectV1**(#projectchannelinvitegetforprojectv1) | **GET** /method/channel_invite/get_for_project | Get invitation for channel|
|**projectChannelInviteGetForSecretV1**(#projectchannelinvitegetforsecretv1) | **GET** /method/channel_invite/get_for_secret | Get channel invitation using a secret link|
|**projectChannelInviteGetV1**(#projectchannelinvitegetv1) | **GET** /method/channel_invite/get | Get channel invite item for my channel for another user|
|**projectChannelInviteListV1**(#projectchannelinvitelistv1) | **GET** /method/channel_invite/list | List of invites for channel in project|

# **projectChannelInviteAcceptForProjectV1**
> SuccessResponse projectChannelInviteAcceptForProjectV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteAcceptForProjectV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | The project to which you want to add a channel | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **projectChannelInviteAcceptForSecretV1**
> SuccessResponse projectChannelInviteAcceptForSecretV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Channel id (default to undefined)
let secret: string; //Secret (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteAcceptForSecretV1(
    language,
    projectId,
    channelId,
    secret,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | The project to which you want to add a channel | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **secret** | **string** | Secret | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **projectChannelInviteAddByEmailV1**
> ProjectChannelInviteResponse projectChannelInviteAddByEmailV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let email: string; //Email (default to undefined)
let accessType: 0 | 1 | 1 | 2; //Access type (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteAddByEmailV1(
    language,
    projectId,
    channelId,
    email,
    accessType,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **email** | **string** | Email | defaults to undefined|
| **accessType** | **0 | 1 | 1 | 2** | Access type | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **projectChannelInviteAddByIdV1**
> ProjectChannelInviteResponse projectChannelInviteAddByIdV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let accessType: 0 | 1 | 1 | 2; //Access type (default to undefined)
let toProjectExternalId: string; //Project for get access by external id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteAddByIdV1(
    language,
    projectId,
    channelId,
    accessType,
    toProjectExternalId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **accessType** | **0 | 1 | 1 | 2** | Access type | defaults to undefined|
| **toProjectExternalId** | **string** | Project for get access by external id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **projectChannelInviteDeclineForProjectV1**
> SuccessResponse projectChannelInviteDeclineForProjectV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Channel id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteDeclineForProjectV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Channel id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **projectChannelInviteDeclineForSecretV1**
> SuccessResponse projectChannelInviteDeclineForSecretV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Channel id (default to undefined)
let secret: string; //Secret (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteDeclineForSecretV1(
    language,
    projectId,
    channelId,
    secret,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | The project to which you want to add a channel | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **secret** | **string** | Secret | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **projectChannelInviteDelV1**
> SuccessResponse projectChannelInviteDelV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: number; //Unique id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteDelV1(
    language,
    id,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **id** | **number** | Unique id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **projectChannelInviteGetForProjectV1**
> ProjectChannelInviteLinkResponse projectChannelInviteGetForProjectV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Current project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteGetForProjectV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Current project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **projectChannelInviteGetForSecretV1**
> ProjectChannelInviteLinkResponse projectChannelInviteGetForSecretV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let channelId: number; //Channel id (default to undefined)
let secret: string; //Secret (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteGetForSecretV1(
    language,
    channelId,
    secret,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **channelId** | **number** | Channel id | defaults to undefined|
| **secret** | **string** | Secret | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **projectChannelInviteGetV1**
> SuccessResponse projectChannelInviteGetV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: number; //Channel request id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteGetV1(
    language,
    id,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **id** | **number** | Channel request id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **projectChannelInviteListV1**
> ListOfProjectChannelInviteResponse projectChannelInviteListV1()


### Example

```typescript
import {
    ProjectChannelInviteApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectChannelInviteApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.projectChannelInviteListV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

