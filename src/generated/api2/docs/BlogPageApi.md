# BlogPageApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**blogPageGetV1**](#blogpagegetv1) | **GET** /method/blog/page/get | Get blog page|
|[**blogPageListV1**](#blogpagelistv1) | **GET** /method/blog/page/list | Get list of blog pages|

# **blogPageGetV1**
> PaginatedResponseOfBlogPageSiteResponse blogPageGetV1()


### Example

```typescript
import {
    BlogPageApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BlogPageApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let url: string; //Url of page (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.blogPageGetV1(
    language,
    url,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **url** | [**string**] | Url of page | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**PaginatedResponseOfBlogPageSiteResponse**

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

# **blogPageListV1**
> PaginatedResponseOfBlogPageSiteResponse blogPageListV1()


### Example

```typescript
import {
    BlogPageApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BlogPageApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let s: string; //String for search (optional) (default to '')
let limit: number; //Number of results (optional) (default to 20)
let offset: number; //Page offset number (optional) (default to 0)

const { status, data } = await apiInstance.blogPageListV1(
    language,
    v,
    s,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **s** | [**string**] | String for search | (optional) defaults to ''|
| **limit** | [**number**] | Number of results | (optional) defaults to 20|
| **offset** | [**number**] | Page offset number | (optional) defaults to 0|


### Return type

**PaginatedResponseOfBlogPageSiteResponse**

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

