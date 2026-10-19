# TranscodersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**transcodersAddV1**](#transcodersaddv1) | **POST** /method/transcoder/add | Transcoder create|
|[**transcodersDeleteV1**](#transcodersdeletev1) | **POST** /method/transcoder/delete | Transcoder delete|
|[**transcodersListV1**](#transcoderslistv1) | **GET** /method/transcoder/list | List of transcoder|
|[**transcodersResetDelayV1**](#transcodersresetdelayv1) | **POST** /method/transcoder/reset-delay | Reset delay|
|[**transcodersStopV1**](#transcodersstopv1) | **POST** /method/transcoder/stop | Transcoder stop|
|[**transcodersUpdateV1**](#transcodersupdatev1) | **POST** /method/transcoder/update | Transcoder update|

# **transcodersAddV1**
> number transcodersAddV1(transcoderCreateDto)

Create a transcoder configuration for project_id from DTO parameters and return a numeric ID. Checks current plan and type restrictions. Creating settings does not confirm an external transcoding task has started; assign to a channel with POST /method/channel_settings/setTranscoder.

### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    TranscoderCreateDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let transcoderCreateDto: TranscoderCreateDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.transcodersAddV1(
    transcoderCreateDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transcoderCreateDto** | **TranscoderCreateDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**number**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transcodersDeleteV1**
> SuccessResponse transcodersDeleteV1(transcoderItemDto)

Delete transcoder_id configuration in project_id. If absent, returns Transcoder not found. This deletes settings; stop active external processing separately with POST /method/transcoder/stop.

### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    TranscoderItemDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let transcoderItemDto: TranscoderItemDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.transcodersDeleteV1(
    transcoderItemDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transcoderItemDto** | **TranscoderItemDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transcodersListV1**
> SiteTranscoderListResponse transcodersListV1()

Read transcoder settings for project_id, including ID, type, parameters, and actual state according to the response schema. This reads configurations without starting transcoding; use IDs in update/delete/stop/reset-delay and channel assignment.

### Example

```typescript
import {
    TranscodersApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.transcodersListV1(
    language,
    projectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteTranscoderListResponse**

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

# **transcodersResetDelayV1**
> SuccessResponse transcodersResetDelayV1(transcoderItemDto)

Send a delay reset command for transcoder_id in project_id. This controls an existing transcoder without changing protection duration or simulated /method/channel/set-delay. Success does not guarantee immediate completion of the external operation.

### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    TranscoderItemDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let transcoderItemDto: TranscoderItemDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.transcodersResetDelayV1(
    transcoderItemDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transcoderItemDto** | **TranscoderItemDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transcodersStopV1**
> SuccessResponse transcodersStopV1(transcoderItemDto)

Send a stop command for transcoder_id in project_id after checking access. Success confirms the management use case processed the command; check the actual state for completion of external processing. The configuration is not deleted.

### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    TranscoderItemDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let transcoderItemDto: TranscoderItemDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.transcodersStopV1(
    transcoderItemDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transcoderItemDto** | **TranscoderItemDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transcodersUpdateV1**
> SuccessResponse transcodersUpdateV1(transcoderUpdateDto)

Change the transcoder configuration for the selected project_id using its ID and DTO fields. Success confirms the configuration workflow was saved; it is not a resume-broadcast command. Parameter types and constraints are defined by the request schema.

### Example

```typescript
import {
    TranscodersApi,
    Configuration,
    TranscoderUpdateDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TranscodersApi(configuration);

let transcoderUpdateDto: TranscoderUpdateDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.transcodersUpdateV1(
    transcoderUpdateDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transcoderUpdateDto** | **TranscoderUpdateDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

