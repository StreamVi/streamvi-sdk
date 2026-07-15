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

const { status, data } = await apiInstance.mediaServiceFilesSiteCancelV1(
    cancelMediaServiceFileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelMediaServiceFileRequest** | **CancelMediaServiceFileRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

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


### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.mediaServiceFilesSiteCreateV1(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

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

const { status, data } = await apiInstance.mediaServiceFilesSiteDeleteV1(
    deleteMediaServiceFileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteMediaServiceFileRequest** | **DeleteMediaServiceFileRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

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


### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let mediaId: number; //Media service file id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.mediaServiceFilesSiteGetV1(
    language,
    projectId,
    mediaId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **mediaId** | [**number**] | Media service file id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**GetMediaServiceFileResponse**

### Authorization

[oauth2](../README.md#oauth2)

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


### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.mediaServiceFilesSiteListV1(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**ListMediaServiceFilesResponse**

### Authorization

[oauth2](../README.md#oauth2)

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


### Example

```typescript
import {
    MediaServiceFilesApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MediaServiceFilesApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let mediaId: number; //Media service file id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.mediaServiceFilesSiteSessionV1(
    language,
    projectId,
    mediaId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **mediaId** | [**number**] | Media service file id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SessionMediaServiceFileResponse**

### Authorization

[oauth2](../README.md#oauth2)

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

const { status, data } = await apiInstance.mediaServiceFilesSiteSetV1(
    setMediaServiceFileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setMediaServiceFileRequest** | **SetMediaServiceFileRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

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

const { status, data } = await apiInstance.mediaServiceFilesSiteUpdateV1(
    updateMediaServiceFileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMediaServiceFileRequest** | **UpdateMediaServiceFileRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

