# NotifyHistoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**siteNotifyHistoryControllerGet1**](#sitenotifyhistorycontrollerget1) | **GET** /method/notify_history/get | Get my NotifyHistory item by id|
|[**siteNotifyHistoryControllerGetListMy1**](#sitenotifyhistorycontrollergetlistmy1) | **GET** /method/notify_history/list | Get list of my notifications|
|[**siteNotifyHistoryControllerGetStatusMy1**](#sitenotifyhistorycontrollergetstatusmy1) | **GET** /method/notify_history/get_status | Get my status unread message for user|
|[**siteNotifyHistoryControllerMarkOfRead1**](#sitenotifyhistorycontrollermarkofread1) | **PUT** /method/notify_history/read | Set notification in cabinet as read|
|[**siteNotifyHistoryControllerRunAction1**](#sitenotifyhistorycontrollerrunaction1) | **POST** /method/notify_history/run_action | Run action in my notify item|
|[**siteNotifyHistoryControllerSetAllCabinetRead1**](#sitenotifyhistorycontrollersetallcabinetread1) | **POST** /method/notify_history/set_all_cabinet_read | Set all notification in cabinet as read|

# **siteNotifyHistoryControllerGet1**
> NotifyHistorySiteResponse siteNotifyHistoryControllerGet1()


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let v: '1'; //Version (default to undefined)
let id: string; //Id of page in mongodb (default to undefined)

const { status, data } = await apiInstance.siteNotifyHistoryControllerGet1(
    v,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version | defaults to undefined|
| **id** | [**string**] | Id of page in mongodb | defaults to undefined|


### Return type

**NotifyHistorySiteResponse**

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

# **siteNotifyHistoryControllerGetListMy1**
> PaginatedResponseOfNotifyHistorySiteResponse siteNotifyHistoryControllerGetListMy1()


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let limit: number; //Number of results (optional) (default to 20)
let offset: number; //Page offset number (optional) (default to 0)
let projectId: number; //Project id (optional) (default to undefined)
let name: 'high_bitrate' | 'request_access_channel' | 'request_access_project' | 'promocode_test' | 'stream_test' | 'plan_restream_expires' | 'plan_restream_expired' | 'plan_restream_renewed' | 'plan_transcoder_expires' | 'plan_transcoder_expired' | 'plan_transcoder_renewed' | 'plan_storage_expires' | 'plan_storage_expired' | 'plan_storage_renewed' | 'broadcast_unsupported_codec' | 'broadcast_unsupported_codec_screen' | 'broadcast_bitrate_exceeded_screen' | 'rtmp_connect_old_server_screen' | 'broadcast_not_audio' | 'broadcast_bitrate_exceeded' | 'broadcast_started' | 'broadcast_stopped' | 'restream_check_twitch_bitrate_1' | 'api_pause_start' | 'api_pause_end' | 'api_wait_edit' | 'api_restream_start' | 'api_restream_stop' | 'api_drop_broadcast' | 'api_drop_broadcast_remove_company' | 'api_drop_broadcast_update_key' | 'publisher_disconnected' | 'publisher_connected' | 'publisher_initializing' | 'publisher_close' | 'broadcast_connected_start' | 'broadcast_connected_end' | 'broadcast_connecting_stream' | 'broadcast_started_new_stream' | 'broadcast_connecting_lost' | 'broadcast_video_lost_start' | 'broadcast_video_lost_end' | 'broadcast_video_pause_start' | 'broadcast_video_pause_end' | 'broadcast_init_restream' | 'start_stream' | 'create_reader' | 'start_channel' | 'stop_channel' | 'stop_stream_video_timeout' | 'stop_stream_no_start_video' | 'stop_stream' | 'delete_reader' | 'transcoder_start' | 'transcoder_stop' | 'start_channel_failed' | 'start_channel_success' | 'api_channel_initializing_start' | 'api_channel_initializing_failed' | 'api_channel_initializing_success' | 'channel_api_update_settings_success' | 'channel_api_update_settings_error' | 'channel_api_update_playlist_success' | 'channel_api_update_playlist_error' | 'channel_api_update_chat_error' | 'channel_api_stream_key_success' | 'channel_api_stream_key_error' | 'channel_api_auto_stop_disable_success' | 'channel_api_auto_stop_disable_error' | 'channel_api_unbinding_stream_key_error' | 'channel_api_create_broadcast_success' | 'channel_api_create_broadcast_error' | 'channel_api_set_planned_success' | 'channel_api_set_planned_error' | 'channel_api_set_thumbnail_success' | 'channel_api_set_thumbnail_error' | 'channel_token_error' | 'channel_api_group_failed' | 'no_audio_reader' | 'restream_check_twitch_bitrate_2' | 'transcoder_support_error_screen' | 'transcoder_tariff_end_screen' | 'transcoder_count_flow_screen' | 'transcoder_resolution_screen' | 'stream_key_banned' | 'broadcast_change_codec' | 'broadcast_change_region' | 'video_upload_error' | 'stop_channel_error' | 'broadcast_user_action_stop'; //Name (optional) (default to undefined)
let channel: 'telegram' | 'cabinet' | 'mobile'; //Channel (optional) (default to undefined)
let dateFrom: string; //Date from (optional) (default to undefined)
let dateTo: string; //Date to (optional) (default to undefined)
let statusRead: 'unread' | 'read'; //Status read (optional) (default to undefined)

const { status, data } = await apiInstance.siteNotifyHistoryControllerGetListMy1(
    v,
    language,
    limit,
    offset,
    projectId,
    name,
    channel,
    dateFrom,
    dateTo,
    statusRead
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **limit** | [**number**] | Number of results | (optional) defaults to 20|
| **offset** | [**number**] | Page offset number | (optional) defaults to 0|
| **projectId** | [**number**] | Project id | (optional) defaults to undefined|
| **name** | [**&#39;high_bitrate&#39; | &#39;request_access_channel&#39; | &#39;request_access_project&#39; | &#39;promocode_test&#39; | &#39;stream_test&#39; | &#39;plan_restream_expires&#39; | &#39;plan_restream_expired&#39; | &#39;plan_restream_renewed&#39; | &#39;plan_transcoder_expires&#39; | &#39;plan_transcoder_expired&#39; | &#39;plan_transcoder_renewed&#39; | &#39;plan_storage_expires&#39; | &#39;plan_storage_expired&#39; | &#39;plan_storage_renewed&#39; | &#39;broadcast_unsupported_codec&#39; | &#39;broadcast_unsupported_codec_screen&#39; | &#39;broadcast_bitrate_exceeded_screen&#39; | &#39;rtmp_connect_old_server_screen&#39; | &#39;broadcast_not_audio&#39; | &#39;broadcast_bitrate_exceeded&#39; | &#39;broadcast_started&#39; | &#39;broadcast_stopped&#39; | &#39;restream_check_twitch_bitrate_1&#39; | &#39;api_pause_start&#39; | &#39;api_pause_end&#39; | &#39;api_wait_edit&#39; | &#39;api_restream_start&#39; | &#39;api_restream_stop&#39; | &#39;api_drop_broadcast&#39; | &#39;api_drop_broadcast_remove_company&#39; | &#39;api_drop_broadcast_update_key&#39; | &#39;publisher_disconnected&#39; | &#39;publisher_connected&#39; | &#39;publisher_initializing&#39; | &#39;publisher_close&#39; | &#39;broadcast_connected_start&#39; | &#39;broadcast_connected_end&#39; | &#39;broadcast_connecting_stream&#39; | &#39;broadcast_started_new_stream&#39; | &#39;broadcast_connecting_lost&#39; | &#39;broadcast_video_lost_start&#39; | &#39;broadcast_video_lost_end&#39; | &#39;broadcast_video_pause_start&#39; | &#39;broadcast_video_pause_end&#39; | &#39;broadcast_init_restream&#39; | &#39;start_stream&#39; | &#39;create_reader&#39; | &#39;start_channel&#39; | &#39;stop_channel&#39; | &#39;stop_stream_video_timeout&#39; | &#39;stop_stream_no_start_video&#39; | &#39;stop_stream&#39; | &#39;delete_reader&#39; | &#39;transcoder_start&#39; | &#39;transcoder_stop&#39; | &#39;start_channel_failed&#39; | &#39;start_channel_success&#39; | &#39;api_channel_initializing_start&#39; | &#39;api_channel_initializing_failed&#39; | &#39;api_channel_initializing_success&#39; | &#39;channel_api_update_settings_success&#39; | &#39;channel_api_update_settings_error&#39; | &#39;channel_api_update_playlist_success&#39; | &#39;channel_api_update_playlist_error&#39; | &#39;channel_api_update_chat_error&#39; | &#39;channel_api_stream_key_success&#39; | &#39;channel_api_stream_key_error&#39; | &#39;channel_api_auto_stop_disable_success&#39; | &#39;channel_api_auto_stop_disable_error&#39; | &#39;channel_api_unbinding_stream_key_error&#39; | &#39;channel_api_create_broadcast_success&#39; | &#39;channel_api_create_broadcast_error&#39; | &#39;channel_api_set_planned_success&#39; | &#39;channel_api_set_planned_error&#39; | &#39;channel_api_set_thumbnail_success&#39; | &#39;channel_api_set_thumbnail_error&#39; | &#39;channel_token_error&#39; | &#39;channel_api_group_failed&#39; | &#39;no_audio_reader&#39; | &#39;restream_check_twitch_bitrate_2&#39; | &#39;transcoder_support_error_screen&#39; | &#39;transcoder_tariff_end_screen&#39; | &#39;transcoder_count_flow_screen&#39; | &#39;transcoder_resolution_screen&#39; | &#39;stream_key_banned&#39; | &#39;broadcast_change_codec&#39; | &#39;broadcast_change_region&#39; | &#39;video_upload_error&#39; | &#39;stop_channel_error&#39; | &#39;broadcast_user_action_stop&#39;**]**Array<&#39;high_bitrate&#39; &#124; &#39;request_access_channel&#39; &#124; &#39;request_access_project&#39; &#124; &#39;promocode_test&#39; &#124; &#39;stream_test&#39; &#124; &#39;plan_restream_expires&#39; &#124; &#39;plan_restream_expired&#39; &#124; &#39;plan_restream_renewed&#39; &#124; &#39;plan_transcoder_expires&#39; &#124; &#39;plan_transcoder_expired&#39; &#124; &#39;plan_transcoder_renewed&#39; &#124; &#39;plan_storage_expires&#39; &#124; &#39;plan_storage_expired&#39; &#124; &#39;plan_storage_renewed&#39; &#124; &#39;broadcast_unsupported_codec&#39; &#124; &#39;broadcast_unsupported_codec_screen&#39; &#124; &#39;broadcast_bitrate_exceeded_screen&#39; &#124; &#39;rtmp_connect_old_server_screen&#39; &#124; &#39;broadcast_not_audio&#39; &#124; &#39;broadcast_bitrate_exceeded&#39; &#124; &#39;broadcast_started&#39; &#124; &#39;broadcast_stopped&#39; &#124; &#39;restream_check_twitch_bitrate_1&#39; &#124; &#39;api_pause_start&#39; &#124; &#39;api_pause_end&#39; &#124; &#39;api_wait_edit&#39; &#124; &#39;api_restream_start&#39; &#124; &#39;api_restream_stop&#39; &#124; &#39;api_drop_broadcast&#39; &#124; &#39;api_drop_broadcast_remove_company&#39; &#124; &#39;api_drop_broadcast_update_key&#39; &#124; &#39;publisher_disconnected&#39; &#124; &#39;publisher_connected&#39; &#124; &#39;publisher_initializing&#39; &#124; &#39;publisher_close&#39; &#124; &#39;broadcast_connected_start&#39; &#124; &#39;broadcast_connected_end&#39; &#124; &#39;broadcast_connecting_stream&#39; &#124; &#39;broadcast_started_new_stream&#39; &#124; &#39;broadcast_connecting_lost&#39; &#124; &#39;broadcast_video_lost_start&#39; &#124; &#39;broadcast_video_lost_end&#39; &#124; &#39;broadcast_video_pause_start&#39; &#124; &#39;broadcast_video_pause_end&#39; &#124; &#39;broadcast_init_restream&#39; &#124; &#39;start_stream&#39; &#124; &#39;create_reader&#39; &#124; &#39;start_channel&#39; &#124; &#39;stop_channel&#39; &#124; &#39;stop_stream_video_timeout&#39; &#124; &#39;stop_stream_no_start_video&#39; &#124; &#39;stop_stream&#39; &#124; &#39;delete_reader&#39; &#124; &#39;transcoder_start&#39; &#124; &#39;transcoder_stop&#39; &#124; &#39;start_channel_failed&#39; &#124; &#39;start_channel_success&#39; &#124; &#39;api_channel_initializing_start&#39; &#124; &#39;api_channel_initializing_failed&#39; &#124; &#39;api_channel_initializing_success&#39; &#124; &#39;channel_api_update_settings_success&#39; &#124; &#39;channel_api_update_settings_error&#39; &#124; &#39;channel_api_update_playlist_success&#39; &#124; &#39;channel_api_update_playlist_error&#39; &#124; &#39;channel_api_update_chat_error&#39; &#124; &#39;channel_api_stream_key_success&#39; &#124; &#39;channel_api_stream_key_error&#39; &#124; &#39;channel_api_auto_stop_disable_success&#39; &#124; &#39;channel_api_auto_stop_disable_error&#39; &#124; &#39;channel_api_unbinding_stream_key_error&#39; &#124; &#39;channel_api_create_broadcast_success&#39; &#124; &#39;channel_api_create_broadcast_error&#39; &#124; &#39;channel_api_set_planned_success&#39; &#124; &#39;channel_api_set_planned_error&#39; &#124; &#39;channel_api_set_thumbnail_success&#39; &#124; &#39;channel_api_set_thumbnail_error&#39; &#124; &#39;channel_token_error&#39; &#124; &#39;channel_api_group_failed&#39; &#124; &#39;no_audio_reader&#39; &#124; &#39;restream_check_twitch_bitrate_2&#39; &#124; &#39;transcoder_support_error_screen&#39; &#124; &#39;transcoder_tariff_end_screen&#39; &#124; &#39;transcoder_count_flow_screen&#39; &#124; &#39;transcoder_resolution_screen&#39; &#124; &#39;stream_key_banned&#39; &#124; &#39;broadcast_change_codec&#39; &#124; &#39;broadcast_change_region&#39; &#124; &#39;video_upload_error&#39; &#124; &#39;stop_channel_error&#39; &#124; &#39;broadcast_user_action_stop&#39;>** | Name | (optional) defaults to undefined|
| **channel** | [**&#39;telegram&#39; | &#39;cabinet&#39; | &#39;mobile&#39;**]**Array<&#39;telegram&#39; &#124; &#39;cabinet&#39; &#124; &#39;mobile&#39;>** | Channel | (optional) defaults to undefined|
| **dateFrom** | [**string**] | Date from | (optional) defaults to undefined|
| **dateTo** | [**string**] | Date to | (optional) defaults to undefined|
| **statusRead** | [**&#39;unread&#39; | &#39;read&#39;**]**Array<&#39;unread&#39; &#124; &#39;read&#39;>** | Status read | (optional) defaults to undefined|


### Return type

**PaginatedResponseOfNotifyHistorySiteResponse**

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

# **siteNotifyHistoryControllerGetStatusMy1**
> NotifyHistoryStatusUserResponse siteNotifyHistoryControllerGetStatusMy1()


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.siteNotifyHistoryControllerGetStatusMy1(
    v,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|


### Return type

**NotifyHistoryStatusUserResponse**

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

# **siteNotifyHistoryControllerMarkOfRead1**
> SiteMarkReadHistoryResponse siteNotifyHistoryControllerMarkOfRead1(siteMarkReadHistoryRequest)


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration,
    SiteMarkReadHistoryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let siteMarkReadHistoryRequest: SiteMarkReadHistoryRequest; //

const { status, data } = await apiInstance.siteNotifyHistoryControllerMarkOfRead1(
    v,
    language,
    siteMarkReadHistoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteMarkReadHistoryRequest** | **SiteMarkReadHistoryRequest**|  | |
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|


### Return type

**SiteMarkReadHistoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **siteNotifyHistoryControllerRunAction1**
> NotifyHistorySiteResponse siteNotifyHistoryControllerRunAction1()


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let v: '1'; //Version (default to undefined)
let notifyHistoryId: string; //Id of page in mongodb (default to undefined)
let actionName: string; //Action name (default to undefined)
let groupId: string; //Group id (default to undefined)

const { status, data } = await apiInstance.siteNotifyHistoryControllerRunAction1(
    v,
    notifyHistoryId,
    actionName,
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version | defaults to undefined|
| **notifyHistoryId** | [**string**] | Id of page in mongodb | defaults to undefined|
| **actionName** | [**string**] | Action name | defaults to undefined|
| **groupId** | [**string**] | Group id | defaults to undefined|


### Return type

**NotifyHistorySiteResponse**

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

# **siteNotifyHistoryControllerSetAllCabinetRead1**
> SuccessResponse siteNotifyHistoryControllerSetAllCabinetRead1()


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

const { status, data } = await apiInstance.siteNotifyHistoryControllerSetAllCabinetRead1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SuccessResponse**

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

