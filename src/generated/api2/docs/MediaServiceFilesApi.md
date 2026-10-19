# MediaServiceFilesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mediaServiceFilesSiteCancelV1**](#mediaservicefilessitecancelv1) | **POST** /method/media-service-files/cancel | Cancel service video|
|[**mediaServiceFilesSiteCreateV1**](#mediaservicefilessitecreatev1) | **POST** /method/media-service-files/add | Create service video|
|[**mediaServiceFilesSiteDeleteV1**](#mediaservicefilessitedeletev1) | **POST** /method/media-service-files/delete | Delete service video|
|[**mediaServiceFilesSiteGetV1**](#mediaservicefilessitegetv1) | **GET** /method/media-service-files/get | Get service video|
|[**mediaServiceFilesSiteListV1**](#mediaservicefilessitelistv1) | **GET** /method/media-service-files/list | Get service video list|
|[**mediaServiceFilesSiteSessionV1**](#mediaservicefilessitesessionv1) | **GET** /method/media-service-files/session | Get session by media id|
|[**mediaServiceFilesSiteSetV1**](#mediaservicefilessitesetv1) | **POST** /method/media-service-files/set | Set service video|
|[**mediaServiceFilesSiteUpdateV1**](#mediaservicefilessiteupdatev1) | **POST** /method/media-service-files/update | Update service video|

# **mediaServiceFilesSiteCancelV1**
> SuccessResponse mediaServiceFilesSiteCancelV1(cancelMediaServiceFileRequest)

Mark processing of the project\'s own service file media_id in project_id as cancelled and mark it deleted in storage metadata. Only status=processing is allowed; otherwise media_service.status_not_available. Use delete for a completed video; a successful command response is not a file conversion result.

### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration,
    CancelMediaServiceFileRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let cancelMediaServiceFileRequest: CancelMediaServiceFileRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.mediaServiceFilesSiteCancelV1(
    cancelMediaServiceFileRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelMediaServiceFileRequest** | **CancelMediaServiceFileRequest**|  | |
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

# **mediaServiceFilesSiteCreateV1**
> SuccessResponse mediaServiceFilesSiteCreateV1()

Upload a multipart/form-data file (field file) to create a service video for project_id supplied in query. The current pipe limits the file to 300 MiB; the listed media formats are allowed. Access and custom file count are tariff-limited. Success confirms temporary storage upload and creation of a processing session, not video readiness; check list/session.

### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.mediaServiceFilesSiteCreateV1(
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

**SuccessResponse**

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

# **mediaServiceFilesSiteDeleteV1**
> SuccessResponse mediaServiceFilesSiteDeleteV1(deleteMediaServiceFileRequest)

Delete an owned service file media_id from project_id. A processing file or a file used as the selected standby media cannot be deleted; this differs from cancelling processing with POST /method/media-service-files/cancel.

### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration,
    DeleteMediaServiceFileRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let deleteMediaServiceFileRequest: DeleteMediaServiceFileRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.mediaServiceFilesSiteDeleteV1(
    deleteMediaServiceFileRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteMediaServiceFileRequest** | **DeleteMediaServiceFileRequest**|  | |
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

# **mediaServiceFilesSiteGetV1**
> GetMediaServiceFileResponse mediaServiceFilesSiteGetV1()

Read completed service file media_id in project_id. The file must have status=success and belong to the project or be shared; otherwise returns media_service.status_not_available/forbidden_get. Returns metadata and preview/video links, not binary content.

### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let mediaId: number; //Media service file id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.mediaServiceFilesSiteGetV1(
    language,
    projectId,
    mediaId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **mediaId** | [**number**] | Media service file id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**GetMediaServiceFileResponse**

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

# **mediaServiceFilesSiteListV1**
> ListMediaServiceFilesResponse mediaServiceFilesSiteListV1()

Read available media-service-files for project_id: status readiness, isEditable editability, and isDisabled plan restriction. media_id identifies a service file, not video.id. For processing files, event_channel allows tracking progress.

### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.mediaServiceFilesSiteListV1(
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

**ListMediaServiceFilesResponse**

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

# **mediaServiceFilesSiteSessionV1**
> SessionMediaServiceFileResponse mediaServiceFilesSiteSessionV1()

Read the processing session of an owned media_id in project_id. Returns file_id, channel, and a secret Centrifugo subscription token. Available while the file is not success/cancel/error and not deleted; completed states produce media_service.not_ready.

### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let mediaId: number; //Media service file id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.mediaServiceFilesSiteSessionV1(
    language,
    projectId,
    mediaId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **mediaId** | [**number**] | Media service file id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SessionMediaServiceFileResponse**

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

# **mediaServiceFilesSiteSetV1**
> SuccessResponse mediaServiceFilesSiteSetV1(setMediaServiceFileRequest)

Select a prepared service file media_id for project_id: type=pause is a pause placeholder, type=lost is a signal-loss placeholder. Obtain media_id from GET /method/media-service-files/list. Custom files are tariff-limited; base/shared files follow access rules. Success means the selection was saved, not that broadcasting started.

### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration,
    SetMediaServiceFileRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let setMediaServiceFileRequest: SetMediaServiceFileRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.mediaServiceFilesSiteSetV1(
    setMediaServiceFileRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setMediaServiceFileRequest** | **SetMediaServiceFileRequest**|  | |
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

# **mediaServiceFilesSiteUpdateV1**
> SuccessResponse mediaServiceFilesSiteUpdateV1(updateMediaServiceFileRequest)

Rename completed service file media_id in project_id. Requires an owned file with status=success; another owner\'s shared file cannot be edited. Success confirms name was saved.

### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration,
    UpdateMediaServiceFileRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let updateMediaServiceFileRequest: UpdateMediaServiceFileRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.mediaServiceFilesSiteUpdateV1(
    updateMediaServiceFileRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMediaServiceFileRequest** | **UpdateMediaServiceFileRequest**|  | |
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

