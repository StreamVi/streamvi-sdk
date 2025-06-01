# ProjectHistoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**projectHistoryListV1**(#projecthistorylistv1) | **GET** /method/project_history/list | Get project history of actions|

# **projectHistoryListV1**
> PaginatedResponseOfProjectHistoryResponse projectHistoryListV1()


### Example

```typescript
import {
    ProjectHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectHistoryApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let limit: number; //Number of results (optional) (default to 20)
let offset: number; //Page offset number (optional) (default to 0)
let dateFrom: string; //Date from (optional) (default to undefined)
let dateTo: string; //Date to (optional) (default to undefined)
let action: 'project_channel_invite_add' | 'project_channel_invite_del' | 'project_channel_invite_accept' | 'project_channel_invite_decline' | 'user_project_invite_add' | 'user_project_invite_del' | 'user_project_invite_accept' | 'user_project_invite_decline' | 'user_project_add' | 'user_project_del' | 'user_project_change' | 'project_channel_add' | 'project_channel_del' | 'project_channel_change'; //Action (optional) (default to undefined)
let groupId: number; //Group id (optional) (default to undefined)

const { status, data } = await apiInstance.projectHistoryListV1(
    language,
    projectId,
    v,
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
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **limit** | **number** | Number of results | (optional) defaults to 20|
| **offset** | **number** | Page offset number | (optional) defaults to 0|
| **dateFrom** | **string** | Date from | (optional) defaults to undefined|
| **dateTo** | **string** | Date to | (optional) defaults to undefined|
| **action** | **'project_channel_invite_add' | 'project_channel_invite_del' | 'project_channel_invite_accept' | 'project_channel_invite_decline' | 'user_project_invite_add' | 'user_project_invite_del' | 'user_project_invite_accept' | 'user_project_invite_decline' | 'user_project_add' | 'user_project_del' | 'user_project_change' | 'project_channel_add' | 'project_channel_del' | 'project_channel_change'** | Action | (optional) defaults to undefined|
| **groupId** | **number** | Group id | (optional) defaults to undefined|


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

