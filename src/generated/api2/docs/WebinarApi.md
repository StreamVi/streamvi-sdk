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
|[**webinarStreamSitePlayV1**](#webinarstreamsiteplayv1) | **POST** /method/webinar/stream/play | Resume an active webinar stream|
|[**webinarStreamSiteSettingStreamV1**](#webinarstreamsitesettingstreamv1) | **POST** /method/webinar/stream/setting | Setting a webinar stream|
|[**webinarStreamSiteUpdateV1**](#webinarstreamsiteupdatev1) | **POST** /method/webinar/stream/stop | Stop a webinar stream|

# **webinarRoomSiteCreateV1**
> SiteWebinarRoomCreateResponse webinarRoomSiteCreateV1(webinarRoomCreateDto)

Create a webinar room for project_id with room_name and a room_id suffix. The full ID combines the lowercase external project code and suffix; returns invite_link. Requires a current webinar plan; maximum participants depend on the plan\'s participants_room and rooms. Success means the room was created, not that broadcasting started.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarRoomSiteCreateV1(
    webinarRoomCreateDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarRoomCreateDto** | **WebinarRoomCreateDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteWebinarRoomCreateResponse**

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

# **webinarRoomSiteDeleteV1**
> SiteWebinarRoomDeleteResponse webinarRoomSiteDeleteV1(webinarRoomDeleteDto)

Delete room_id in project_id through the LiveKit service. This deletes the room, not merely its stream; to stop the stream use POST /method/webinar/stream/stop.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarRoomSiteDeleteV1(
    webinarRoomDeleteDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarRoomDeleteDto** | **WebinarRoomDeleteDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteWebinarRoomDeleteResponse**

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

# **webinarRoomSiteGetSyncV1**
> SiteWebinarRoomSyncResponse webinarRoomSiteGetSyncV1()

Read synchronization for room_id and client_id: tracks and optional focus_track with participant_sid/publication_sid. Public transport; an existing room context is required. This method neither issues RTC credentials nor connects a participant.

### Example

```typescript
import {
    WebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let roomId: string; //Room name (default to undefined)
let clientId: string; //Client ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarRoomSiteGetSyncV1(
    language,
    roomId,
    clientId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **roomId** | [**string**] | Room name | defaults to undefined|
| **clientId** | [**string**] | Client ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteWebinarRoomSyncResponse**

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

# **webinarRoomSiteJoinAnonymousV1**
> SiteWebinarRoomJoinResponse webinarRoomSiteJoinAnonymousV1(webinarRoomJoinAnonymousDto)

Join room_id anonymously with client_id/participant_name/region. Public transport; returns a secret participant_token and RTC server_url, with is_stream=false. A full or missing room returns the corresponding webinar.join_room_error_* error; credentials are not stored in the corpus.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarRoomSiteJoinAnonymousV1(
    webinarRoomJoinAnonymousDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarRoomJoinAnonymousDto** | **WebinarRoomJoinAnonymousDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteWebinarRoomJoinResponse**

### Authorization

No authorization required

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

Join room_id as the current authenticated user: participant_name/photo come from their profile. Returns server_url, secret participant_token and chat_token, room details and is_stream according to access. Available only to the project subject; issues RTC credentials rather than starting a broadcast.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarRoomSiteJoinV1(
    webinarRoomJoinDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarRoomJoinDto** | **WebinarRoomJoinDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteWebinarRoomJoinResponse**

### Authorization

[oauth2Project](../README.md#oauth2Project)

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

Read webinar rooms of project_id with participants, limits, status/stream_status, and invite_link. Data comes from the LiveKit service; listing neither creates a room nor starts a stream.

### Example

```typescript
import {
    WebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarRoomSiteListV1(
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

**SiteWebinarRoomListResponse**

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

# **webinarRoomSitePreJoinV1**
> SiteWebinarRoomPreJoinResponse webinarRoomSitePreJoinV1()

Get preliminary details for room_id: participants, owner, and client_id; if client_id is absent, a UUID is created. This prepares entry through the LiveKit service without obtaining participant_token. Do not treat this GET as an ordinary project catalog.

### Example

```typescript
import {
    WebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let roomId: string; //Room id (default to undefined)
let clientId: string; //Client ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarRoomSitePreJoinV1(
    language,
    roomId,
    clientId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **roomId** | [**string**] | Room id | defaults to undefined|
| **clientId** | [**string**] | Client ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteWebinarRoomPreJoinResponse**

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

# **webinarRoomSiteSyncV1**
> SuccessResponse webinarRoomSiteSyncV1(siteWebinarRoomSetSyncBodyRequest)

Updates synchronization for a room belonging to the selected project. Requires the existing room/client context; participant_sid and publication_sid must refer to actual media context. This operation does not join the room or issue RTC credentials.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarRoomSiteSyncV1(
    siteWebinarRoomSetSyncBodyRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteWebinarRoomSetSyncBodyRequest** | **SiteWebinarRoomSetSyncBodyRequest**|  | |
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

# **webinarRoomSiteUpdateV1**
> SiteWebinarRoomUpdateResponse webinarRoomSiteUpdateV1(webinarRoomUpdateDto)

Update the name/settings of the existing room_id in project_id via LiveKit. The participant limit comes from the current webinar tariff, or 0 if absent. Returns the update result, not new participant credentials.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarRoomSiteUpdateV1(
    webinarRoomUpdateDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarRoomUpdateDto** | **WebinarRoomUpdateDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteWebinarRoomUpdateResponse**

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

# **webinarStreamSiteCreateV1**
> SuccessResponse webinarStreamSiteCreateV1(webinarStreamStartDto)

Start a stream for room_id through LiveKit egress using a source URL prepared for the room project. failed_to_start_stream becomes webinar.stream_start_error. Success confirms the start command response; verify actual status with GET /method/webinar/stream/last.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarStreamSiteCreateV1(
    webinarStreamStartDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarStreamStartDto** | **WebinarStreamStartDto**|  | |
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

# **webinarStreamSiteGetSettingStreamV1**
> SiteWebinarGetSettingsStreamResponse webinarStreamSiteGetSettingStreamV1()

Read saved width/height/fps/bitrate for the stream of room_id. Missing settings produce stream.not_found. This is the configuration of future/current output, not a start command; save it with POST /method/webinar/stream/setting.

### Example

```typescript
import {
    WebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let clientId: string; //Client ID (default to undefined)
let roomId: string; //Room id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let projectId: number; //Required selected project for account integration credentials; room prefix must match its external ID (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarStreamSiteGetSettingStreamV1(
    language,
    clientId,
    roomId,
    v,
    projectId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **clientId** | [**string**] | Client ID | defaults to undefined|
| **roomId** | [**string**] | Room id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **projectId** | [**number**] | Required selected project for account integration credentials; room prefix must match its external ID | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteWebinarGetSettingsStreamResponse**

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

# **webinarStreamSiteLastV1**
> SiteWebinarRoomStreamLastResponse webinarStreamSiteLastV1()

Read the latest stream state for room_id, matched against the project\'s active stream and LiveKit data. is_current_room/is_webinar_room indicate ownership; start_at/end_at and status may be absent. Public reads neither start nor resume the stream.

### Example

```typescript
import {
    WebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new WebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let roomId: string; //Room id (default to undefined)
let clientId: string; //Client ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarStreamSiteLastV1(
    language,
    roomId,
    clientId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **roomId** | [**string**] | Room id | defaults to undefined|
| **clientId** | [**string**] | Client ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteWebinarRoomStreamLastResponse**

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

# **webinarStreamSitePauseV1**
> SuccessResponse webinarStreamSitePauseV1(webinarStreamPauseDto)

Send a pause command to the active live stream of room_id after checking the existing webinar stream. Errors in the current use case are reported as other.unknown. Success confirms the management command response, not completion of all external actions; read state using GET /method/webinar/stream/last.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarStreamSitePauseV1(
    webinarStreamPauseDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarStreamPauseDto** | **WebinarStreamPauseDto**|  | |
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

# **webinarStreamSitePlayV1**
> SuccessResponse webinarStreamSitePlayV1(webinarStreamPlayDto)

Resume the active live stream of room_id after a pause. Commands an existing stream, rather than starting a new broadcast; to start one, use POST /method/webinar/stream/start. Current workflow errors are represented as other.unknown.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarStreamSitePlayV1(
    webinarStreamPlayDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarStreamPlayDto** | **WebinarStreamPlayDto**|  | |
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

# **webinarStreamSiteSettingStreamV1**
> SuccessResponse webinarStreamSiteSettingStreamV1(webinarUpdateStreamSettingDto)

Save stream width/height/fps/bitrate for room_id through the LiveKit service. Checks the current webinar plan, available resolution, and the restream plan\'s maximum bitrate; errors are webinar.stream_resolution_max_error/restream.bitrate_max_error. Supply all settings according to the DTO. Success confirms settings were saved, not that the stream started.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarStreamSiteSettingStreamV1(
    webinarUpdateStreamSettingDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarUpdateStreamSettingDto** | **WebinarUpdateStreamSettingDto**|  | |
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

# **webinarStreamSiteUpdateV1**
> SuccessResponse webinarStreamSiteUpdateV1(webinarStreamStopDto)

Stop the stream of room_id: the use case attempts to reset the active source wait to zero and stop LiveKit egress. Errors in the first stage are logged; success does not guarantee that stage completed. failed_to_stop_stream produces webinar.stream_stop_error. This stops the stream without deleting the room.

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
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.webinarStreamSiteUpdateV1(
    webinarStreamStopDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webinarStreamStopDto** | **WebinarStreamStopDto**|  | |
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

