# ProjectHistoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**siteProjectHistoryControllerList1**](#siteprojecthistorycontrollerlist1) | **GET** /method/project_history/list | Get project history of actions|

# **siteProjectHistoryControllerList1**
> PaginatedResponseOfProjectHistoryResponse siteProjectHistoryControllerList1()


### Example

```typescript
import {
    ProjectHistoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectHistoryApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let limit: number; //Number of results (optional) (default to 20)
let offset: number; //Page offset number (optional) (default to 0)
let dateFrom: string; //Date from (optional) (default to undefined)
let dateTo: string; //Date to (optional) (default to undefined)
let action: 'project_channel_invite_add' | 'project_channel_invite_del' | 'project_channel_invite_accept' | 'project_channel_invite_decline' | 'user_project_invite_add' | 'user_project_invite_del' | 'user_project_invite_accept' | 'user_project_invite_decline' | 'user_project_add' | 'user_project_del' | 'user_project_change' | 'project_channel_add' | 'project_channel_del' | 'project_channel_change'; //Action (optional) (default to undefined)
let groupId: number; //Group id (optional) (default to undefined)

const { status, data } = await apiInstance.siteProjectHistoryControllerList1(
    v,
    language,
    projectId,
    limit,
    offset,
    dateFrom,
    dateTo,
    action,
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **limit** | [**number**] | Number of results | (optional) defaults to 20|
| **offset** | [**number**] | Page offset number | (optional) defaults to 0|
| **dateFrom** | [**string**] | Date from | (optional) defaults to undefined|
| **dateTo** | [**string**] | Date to | (optional) defaults to undefined|
| **action** | [**&#39;project_channel_invite_add&#39; | &#39;project_channel_invite_del&#39; | &#39;project_channel_invite_accept&#39; | &#39;project_channel_invite_decline&#39; | &#39;user_project_invite_add&#39; | &#39;user_project_invite_del&#39; | &#39;user_project_invite_accept&#39; | &#39;user_project_invite_decline&#39; | &#39;user_project_add&#39; | &#39;user_project_del&#39; | &#39;user_project_change&#39; | &#39;project_channel_add&#39; | &#39;project_channel_del&#39; | &#39;project_channel_change&#39;**]**Array<&#39;project_channel_invite_add&#39; &#124; &#39;project_channel_invite_del&#39; &#124; &#39;project_channel_invite_accept&#39; &#124; &#39;project_channel_invite_decline&#39; &#124; &#39;user_project_invite_add&#39; &#124; &#39;user_project_invite_del&#39; &#124; &#39;user_project_invite_accept&#39; &#124; &#39;user_project_invite_decline&#39; &#124; &#39;user_project_add&#39; &#124; &#39;user_project_del&#39; &#124; &#39;user_project_change&#39; &#124; &#39;project_channel_add&#39; &#124; &#39;project_channel_del&#39; &#124; &#39;project_channel_change&#39;>** | Action | (optional) defaults to undefined|
| **groupId** | [**number**] | Group id | (optional) defaults to undefined|


### Return type

**PaginatedResponseOfProjectHistoryResponse**

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

