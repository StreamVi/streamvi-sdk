# LiveApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**controllersRestreamsV1**](#controllersrestreamsv1) | **GET** /method/live/restreams | View live info|

# **controllersRestreamsV1**
> SiteLiveRestreamsInfoResponse controllersRestreamsV1()

Use /site/broadcast/restreams instead.

### Example

```typescript
import {
    LiveApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new LiveApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //Broadcast id (default to undefined)
let v: '2'; //Version (automatically defaults to 2 based on the API contract, can be overridden) (optional) (default to '2')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.controllersRestreamsV1(
    language,
    projectId,
    broadcastId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | Broadcast id | defaults to undefined|
| **v** | [**&#39;2&#39;**]**Array<&#39;2&#39;>** | Version (automatically defaults to 2 based on the API contract, can be overridden) | (optional) defaults to '2'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteLiveRestreamsInfoResponse**

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

