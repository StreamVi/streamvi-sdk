# ProjectChannelInviteApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptForProject1**](#acceptforproject1) | **POST** /method/channel_invite/accept_for_project | Accept channel invitation for selected project|
|[**acceptForSecret1**](#acceptforsecret1) | **POST** /method/channel_invite/accept_for_secret | Accept channel invitation using a secret link|
|[**addByEmail1**](#addbyemail1) | **POST** /method/channel_invite/add_by_email | Add channel invite item for another user by email|
|[**addById1**](#addbyid1) | **POST** /method/channel_invite/add_by_id | Add channel invite item for another user by id|
|[**declineForProject1**](#declineforproject1) | **POST** /method/channel_invite/decline_for_project | Decline channel invitation for selected project|
|[**declineForSecret1**](#declineforsecret1) | **POST** /method/channel_invite/decline_for_secret | Decline channel invitation using a secret link|
|[**del1**](#del1) | **POST** /method/channel_invite/del | Del channel invite item for my channel for another user|
|[**get1**](#get1) | **GET** /method/channel_invite/get | Get channel invite item for my channel for another user|
|[**getForProject1**](#getforproject1) | **GET** /method/channel_invite/get_for_project | Get invitation for channel|
|[**getForSecret1**](#getforsecret1) | **GET** /method/channel_invite/get_for_secret | Get channel invitation using a secret link|
|[**list1**](#list1) | **GET** /method/channel_invite/list | List of invites for channel in project|

# **acceptForProject1**
> SuccessResponse acceptForProject1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.acceptForProject1({
    language,
    projectId,
    channelId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **acceptForSecret1**
> SuccessResponse acceptForSecret1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Channel id (default to undefined)
let secret: string; //Secret (default to undefined)

const { status, data } = await apiInstance.acceptForSecret1({
    language,
    projectId,
    channelId,
    secret
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **addByEmail1**
> ProjectChannelInviteResponse addByEmail1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let email: string; //Email (default to undefined)
let accessType: 0 | 1 | 1 | 2; //Access type (default to undefined)

const { status, data } = await apiInstance.addByEmail1({
    language,
    projectId,
    channelId,
    email,
    accessType
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **addById1**
> ProjectChannelInviteResponse addById1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let accessType: 0 | 1 | 1 | 2; //Access type (default to undefined)
let toProjectExternalId: string; //Project for get access by external id (default to undefined)

const { status, data } = await apiInstance.addById1({
    language,
    projectId,
    channelId,
    accessType,
    toProjectExternalId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **declineForProject1**
> SuccessResponse declineForProject1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Channel id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.declineForProject1({
    language,
    projectId,
    channelId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **declineForSecret1**
> SuccessResponse declineForSecret1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //The project to which you want to add a channel (default to undefined)
let channelId: number; //Channel id (default to undefined)
let secret: string; //Secret (default to undefined)

const { status, data } = await apiInstance.declineForSecret1({
    language,
    projectId,
    channelId,
    secret
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **del1**
> SuccessResponse del1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: number; //Unique id (default to undefined)

const { status, data } = await apiInstance.del1({
    language,
    id
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **get1**
> SuccessResponse get1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: number; //Channel request id (default to undefined)

const { status, data } = await apiInstance.get1({
    language,
    id
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **getForProject1**
> ProjectChannelInviteLinkResponse getForProject1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Current project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.getForProject1({
    language,
    projectId,
    channelId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **getForSecret1**
> ProjectChannelInviteLinkResponse getForSecret1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let channelId: number; //Channel id (default to undefined)
let secret: string; //Secret (default to undefined)

const { status, data } = await apiInstance.getForSecret1({
    language,
    channelId,
    secret
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **list1**
> ListOfProjectChannelInviteResponse list1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectChannelInviteApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectChannelInviteApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.list1({
    language,
    projectId,
    channelId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

