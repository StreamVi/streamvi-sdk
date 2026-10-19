# ProjectHistoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**projectHistoryListV1**](#projecthistorylistv1) | **GET** /method/project_history/list | Get project history of actions|

# **projectHistoryListV1**
> PaginatedProjectHistoryResponse projectHistoryListV1()

Read legacy action history of project_id by action/group_id and date_from/date_to range with limit/offset. offset is the number of records to skip; ordering and results follow the current history service. This reads saved actions without executing them and differs from the new /method/project_activity/list feed.

### Example

```typescript
import {
    ProjectHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectHistoryApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let limit: number; //Number of results (default to undefined)
let offset: number; //Page offset number (default to undefined)
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let dateFrom: string; //Date from (optional) (default to undefined)
let dateTo: string; //Date to (optional) (default to undefined)
let action: 'project_channel_invite_add' | 'project_channel_invite_del' | 'project_channel_invite_accept' | 'project_channel_invite_decline' | 'user_project_invite_add' | 'user_project_invite_del' | 'user_project_invite_accept' | 'user_project_invite_decline' | 'user_project_add' | 'user_project_del' | 'user_project_change' | 'project_channel_add' | 'project_channel_del' | 'project_channel_change'; //Action (optional) (default to undefined)
let groupId: number; //Group id (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.projectHistoryListV1(
    language,
    limit,
    offset,
    projectId,
    v,
    dateFrom,
    dateTo,
    action,
    groupId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **limit** | [**number**] | Number of results | defaults to undefined|
| **offset** | [**number**] | Page offset number | defaults to undefined|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **dateFrom** | [**string**] | Date from | (optional) defaults to undefined|
| **dateTo** | [**string**] | Date to | (optional) defaults to undefined|
| **action** | [**&#39;project_channel_invite_add&#39; | &#39;project_channel_invite_del&#39; | &#39;project_channel_invite_accept&#39; | &#39;project_channel_invite_decline&#39; | &#39;user_project_invite_add&#39; | &#39;user_project_invite_del&#39; | &#39;user_project_invite_accept&#39; | &#39;user_project_invite_decline&#39; | &#39;user_project_add&#39; | &#39;user_project_del&#39; | &#39;user_project_change&#39; | &#39;project_channel_add&#39; | &#39;project_channel_del&#39; | &#39;project_channel_change&#39;**]**Array<&#39;project_channel_invite_add&#39; &#124; &#39;project_channel_invite_del&#39; &#124; &#39;project_channel_invite_accept&#39; &#124; &#39;project_channel_invite_decline&#39; &#124; &#39;user_project_invite_add&#39; &#124; &#39;user_project_invite_del&#39; &#124; &#39;user_project_invite_accept&#39; &#124; &#39;user_project_invite_decline&#39; &#124; &#39;user_project_add&#39; &#124; &#39;user_project_del&#39; &#124; &#39;user_project_change&#39; &#124; &#39;project_channel_add&#39; &#124; &#39;project_channel_del&#39; &#124; &#39;project_channel_change&#39;>** | Action | (optional) defaults to undefined|
| **groupId** | [**number**] | Group id | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PaginatedProjectHistoryResponse**

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

