# ProjectChannelApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**siteProjectChannelControllerChangeAccess1**](#siteprojectchannelcontrollerchangeaccess1) | **POST** /method/channel/access/change | Change access for project in channel|
|[**siteProjectChannelControllerDel1**](#siteprojectchannelcontrollerdel1) | **POST** /method/channel/access/del | Remove access for project in channel|
|[**siteProjectChannelControllerList1**](#siteprojectchannelcontrollerlist1) | **GET** /method/channel/access/list | Project channel list|
|[**siteProjectChannelControllerTransferOwner1**](#siteprojectchannelcontrollertransferowner1) | **POST** /method/channel/access/transfer_owner | Transfer owner for project in channel|

# **siteProjectChannelControllerChangeAccess1**
> SuccessResponse siteProjectChannelControllerChangeAccess1()


### Example

```typescript
import {
    ProjectChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let toProjectId: number; //Target project id (default to undefined)
let accessType: 0 | 1 | 1 | 2; //Access type (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelControllerChangeAccess1(
    v,
    language,
    projectId,
    channelId,
    toProjectId,
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
| **toProjectId** | [**number**] | Target project id | defaults to undefined|
| **accessType** | [**0 | 1 | 1 | 2**]**Array<0 &#124; 1 &#124; 1 &#124; 2>** | Access type | defaults to undefined|


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

# **siteProjectChannelControllerDel1**
> SuccessResponse siteProjectChannelControllerDel1()


### Example

```typescript
import {
    ProjectChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let targetProjectId: number; //Target project id (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelControllerDel1(
    v,
    language,
    projectId,
    channelId,
    targetProjectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|
| **targetProjectId** | [**number**] | Target project id | defaults to undefined|


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

# **siteProjectChannelControllerList1**
> ListOfProjectChannelResponse siteProjectChannelControllerList1()


### Example

```typescript
import {
    ProjectChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelControllerList1(
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

**ListOfProjectChannelResponse**

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

# **siteProjectChannelControllerTransferOwner1**
> SuccessResponse siteProjectChannelControllerTransferOwner1()


### Example

```typescript
import {
    ProjectChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectChannelApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let toProjectId: number; //Target project id (default to undefined)

const { status, data } = await apiInstance.siteProjectChannelControllerTransferOwner1(
    v,
    language,
    projectId,
    channelId,
    toProjectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|
| **toProjectId** | [**number**] | Target project id | defaults to undefined|


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

