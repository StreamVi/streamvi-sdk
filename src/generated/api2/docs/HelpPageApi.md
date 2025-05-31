# HelpPageApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**helpPageGetV1**](#helppagegetv1) | **GET** /method/help/page/get | Get help page|
|[**helpPageListV1**](#helppagelistv1) | **GET** /method/help/page/search | Get list of help pages|
|[**helpPageStructureV1**](#helppagestructurev1) | **GET** /method/help/page/structure | Get structure of help pages|

# **helpPageGetV1**
> GetHelpPageResponse helpPageGetV1()


### Example

```typescript
import {
    HelpPageApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new HelpPageApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let url: string; //Url of page (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.helpPageGetV1(
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

**GetHelpPageResponse**

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

# **helpPageListV1**
> PaginatedResponseOfHelpPageResponse helpPageListV1()


### Example

```typescript
import {
    HelpPageApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new HelpPageApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let s: string; //String for search (optional) (default to '')
let limit: number; //Number of results (optional) (default to 20)
let offset: number; //Page offset number (optional) (default to 0)

const { status, data } = await apiInstance.helpPageListV1(
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

**PaginatedResponseOfHelpPageResponse**

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

# **helpPageStructureV1**
> StructureHelpPageResponse helpPageStructureV1()


### Example

```typescript
import {
    HelpPageApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new HelpPageApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.helpPageStructureV1(
    language,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**StructureHelpPageResponse**

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

