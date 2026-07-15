# WebinarApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**webinarRoomSiteCreateV1**](#webinarroomsitecreatev1) | **POST** /method/webinar/room/create | Create a new webinar room|
|[**webinarRoomSiteDeleteV1**](#webinarroomsitedeletev1) | **POST** /method/webinar/room/delete | Delete a webinar room|
|[**webinarRoomSiteGetSyncV1**](#webinarroomsitegetsyncv1) | **GET** /method/webinar/room/sync | Get sync a webinar room|
|[**webinarRoomSiteJoinAnonymousV1**](#webinarroomsitejoinanonymousv1) | **POST** /method/webinar/room/join-anonymous | join in room anonymously|
|[**webinarRoomSiteJoinV1**](#webinarroomsitejoinv1) | **POST** /method/webinar/room/join | join in room|
|[**webinarRoomSiteListV1**](#webinarroomsitelistv1) | **GET** /method/webinar/room/list | List of webinar rooms|
|[**webinarRoomSitePreJoinV1**](#webinarroomsiteprejoinv1) | **GET** /method/webinar/room/pre-join | Pre-join in room|
|[**webinarRoomSiteSyncV1**](#webinarroomsitesyncv1) | **POST** /method/webinar/room/sync | Sync a webinar room|
|[**webinarRoomSiteUpdateV1**](#webinarroomsiteupdatev1) | **POST** /method/webinar/room/update | Update a webinar room|
|[**webinarStreamSiteCreateV1**](#webinarstreamsitecreatev1) | **POST** /method/webinar/stream/start | Start a webinar stream|
|[**webinarStreamSiteGetSettingStreamV1**](#webinarstreamsitegetsettingstreamv1) | **GET** /method/webinar/stream/setting | Get setting a webinar stream|
|[**webinarStreamSiteLastV1**](#webinarstreamsitelastv1) | **GET** /method/webinar/stream/last | Get last webinar stream|
|[**webinarStreamSitePauseV1**](#webinarstreamsitepausev1) | **POST** /method/webinar/stream/pause | Pause a webinar stream|
|[**webinarStreamSitePlayV1**](#webinarstreamsiteplayv1) | **POST** /method/webinar/stream/play | Play after pause|
|[**webinarStreamSiteSettingStreamV1**](#webinarstreamsitesettingstreamv1) | **POST** /method/webinar/stream/setting | Setting a webinar stream|
|[**webinarStreamSiteUpdateV1**](#webinarstreamsiteupdatev1) | **POST** /method/webinar/stream/stop | Stop a webinar stream|

# **webinarRoomSiteCreateV1**
> SiteWebinarRoomCreateResponse webinarRoomSiteCreateV1(webinarRoomCreateDto)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    WebinarRoomCreateDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let webinarRoomCreateDto: WebinarRoomCreateDto; //

const { status, data } = await apiInstance.webinarRoomSiteCreateV1(
    webinarRoomCreateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarRoomCreateDto** | **WebinarRoomCreateDto**|  | |


### Return type

**SiteWebinarRoomCreateResponse**

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

# **webinarRoomSiteDeleteV1**
> SiteWebinarRoomDeleteResponse webinarRoomSiteDeleteV1(webinarRoomDeleteDto)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    WebinarRoomDeleteDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let webinarRoomDeleteDto: WebinarRoomDeleteDto; //

const { status, data } = await apiInstance.webinarRoomSiteDeleteV1(
    webinarRoomDeleteDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarRoomDeleteDto** | **WebinarRoomDeleteDto**|  | |


### Return type

**SiteWebinarRoomDeleteResponse**

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

# **webinarRoomSiteGetSyncV1**
> SiteWebinarRoomSyncResponse webinarRoomSiteGetSyncV1()


### Example

```typescript
import {
    WebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let roomId: string; //Room name (default to undefined)
let clientId: string; //Client ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.webinarRoomSiteGetSyncV1(
    language,
    roomId,
    clientId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **roomId** | [**string**] | Room name | defaults to undefined|
| **clientId** | [**string**] | Client ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteWebinarRoomSyncResponse**

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

# **webinarRoomSiteJoinAnonymousV1**
> SiteWebinarRoomJoinResponse webinarRoomSiteJoinAnonymousV1(webinarRoomJoinAnonymousDto)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    WebinarRoomJoinAnonymousDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let webinarRoomJoinAnonymousDto: WebinarRoomJoinAnonymousDto; //

const { status, data } = await apiInstance.webinarRoomSiteJoinAnonymousV1(
    webinarRoomJoinAnonymousDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarRoomJoinAnonymousDto** | **WebinarRoomJoinAnonymousDto**|  | |


### Return type

**SiteWebinarRoomJoinResponse**

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

# **webinarRoomSiteJoinV1**
> SiteWebinarRoomJoinResponse webinarRoomSiteJoinV1(webinarRoomJoinDto)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    WebinarRoomJoinDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let webinarRoomJoinDto: WebinarRoomJoinDto; //

const { status, data } = await apiInstance.webinarRoomSiteJoinV1(
    webinarRoomJoinDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarRoomJoinDto** | **WebinarRoomJoinDto**|  | |


### Return type

**SiteWebinarRoomJoinResponse**

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

# **webinarRoomSiteListV1**
> SiteWebinarRoomListResponse webinarRoomSiteListV1()


### Example

```typescript
import {
    WebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.webinarRoomSiteListV1(
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

**SiteWebinarRoomListResponse**

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

# **webinarRoomSitePreJoinV1**
> SiteWebinarRoomPreJoinResponse webinarRoomSitePreJoinV1()


### Example

```typescript
import {
    WebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let roomId: string; //Room id (default to undefined)
let clientId: string; //Client ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.webinarRoomSitePreJoinV1(
    language,
    roomId,
    clientId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **roomId** | [**string**] | Room id | defaults to undefined|
| **clientId** | [**string**] | Client ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteWebinarRoomPreJoinResponse**

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

# **webinarRoomSiteSyncV1**
> SuccessResponse webinarRoomSiteSyncV1(siteWebinarRoomSetSyncBodyRequest)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    SiteWebinarRoomSetSyncBodyRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let siteWebinarRoomSetSyncBodyRequest: SiteWebinarRoomSetSyncBodyRequest; //

const { status, data } = await apiInstance.webinarRoomSiteSyncV1(
    siteWebinarRoomSetSyncBodyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteWebinarRoomSetSyncBodyRequest** | **SiteWebinarRoomSetSyncBodyRequest**|  | |


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

# **webinarRoomSiteUpdateV1**
> SiteWebinarRoomUpdateResponse webinarRoomSiteUpdateV1(webinarRoomUpdateDto)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    WebinarRoomUpdateDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let webinarRoomUpdateDto: WebinarRoomUpdateDto; //

const { status, data } = await apiInstance.webinarRoomSiteUpdateV1(
    webinarRoomUpdateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarRoomUpdateDto** | **WebinarRoomUpdateDto**|  | |


### Return type

**SiteWebinarRoomUpdateResponse**

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

# **webinarStreamSiteCreateV1**
> SuccessResponse webinarStreamSiteCreateV1(webinarStreamStartDto)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    WebinarStreamStartDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let webinarStreamStartDto: WebinarStreamStartDto; //

const { status, data } = await apiInstance.webinarStreamSiteCreateV1(
    webinarStreamStartDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarStreamStartDto** | **WebinarStreamStartDto**|  | |


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

# **webinarStreamSiteGetSettingStreamV1**
> SiteWebinarGetSettingsStreamResponse webinarStreamSiteGetSettingStreamV1()


### Example

```typescript
import {
    WebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let clientId: string; //Client ID (default to undefined)
let roomId: string; //Room id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.webinarStreamSiteGetSettingStreamV1(
    language,
    clientId,
    roomId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **clientId** | [**string**] | Client ID | defaults to undefined|
| **roomId** | [**string**] | Room id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteWebinarGetSettingsStreamResponse**

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

# **webinarStreamSiteLastV1**
> SiteWebinarRoomStreamLastResponse webinarStreamSiteLastV1()


### Example

```typescript
import {
    WebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let roomId: string; //Room id (default to undefined)
let clientId: string; //Client ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.webinarStreamSiteLastV1(
    language,
    roomId,
    clientId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **roomId** | [**string**] | Room id | defaults to undefined|
| **clientId** | [**string**] | Client ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteWebinarRoomStreamLastResponse**

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

# **webinarStreamSitePauseV1**
> SuccessResponse webinarStreamSitePauseV1(webinarStreamPauseDto)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    WebinarStreamPauseDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let webinarStreamPauseDto: WebinarStreamPauseDto; //

const { status, data } = await apiInstance.webinarStreamSitePauseV1(
    webinarStreamPauseDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarStreamPauseDto** | **WebinarStreamPauseDto**|  | |


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

# **webinarStreamSitePlayV1**
> SuccessResponse webinarStreamSitePlayV1(webinarStreamPlayDto)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    WebinarStreamPlayDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let webinarStreamPlayDto: WebinarStreamPlayDto; //

const { status, data } = await apiInstance.webinarStreamSitePlayV1(
    webinarStreamPlayDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarStreamPlayDto** | **WebinarStreamPlayDto**|  | |


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

# **webinarStreamSiteSettingStreamV1**
> SuccessResponse webinarStreamSiteSettingStreamV1(webinarUpdateStreamSettingDto)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    WebinarUpdateStreamSettingDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let webinarUpdateStreamSettingDto: WebinarUpdateStreamSettingDto; //

const { status, data } = await apiInstance.webinarStreamSiteSettingStreamV1(
    webinarUpdateStreamSettingDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarUpdateStreamSettingDto** | **WebinarUpdateStreamSettingDto**|  | |


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

# **webinarStreamSiteUpdateV1**
> SuccessResponse webinarStreamSiteUpdateV1(webinarStreamStopDto)


### Example

```typescript
import {
    WebinarApi,
    Configuration,
    WebinarStreamStopDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let webinarStreamStopDto: WebinarStreamStopDto; //

const { status, data } = await apiInstance.webinarStreamSiteUpdateV1(
    webinarStreamStopDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarStreamStopDto** | **WebinarStreamStopDto**|  | |


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

