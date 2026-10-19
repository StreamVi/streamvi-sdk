# BlogPageTagApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**blogPageTagListV1**](#blogpagetaglistv1) | **GET** /method/blog/tag/list | List blog tags|

# **blogPageTagListV1**
> PaginatedBlogPageTagResponse blogPageTagListV1()

Read the public blog tag list using request filters and pagination. Returns tags for filtering pages, not blog pages themselves.

### Example

```typescript
import {
    BlogPageTagApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BlogPageTagApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let limit: number; //Number of results (default to undefined)
let offset: number; //Page offset number (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let s: string; //String for search (optional) (default to '')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.blogPageTagListV1(
    language,
    limit,
    offset,
    v,
    s,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **limit** | [**number**] | Number of results | defaults to undefined|
| **offset** | [**number**] | Page offset number | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **s** | [**string**] | String for search | (optional) defaults to ''|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PaginatedBlogPageTagResponse**

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

