# NotifyHistoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodExecuteNotifyActionExecuteV1**](#methodexecutenotifyactionexecutev1) | **POST** /method/notify_history/execute_action | Execute an owned notification action|
|[**notifyHistoryGetListMyV1**](#notifyhistorygetlistmyv1) | **GET** /method/notify_history/list | Get list of my notifications|
|[**notifyHistoryGetStatusMyV1**](#notifyhistorygetstatusmyv1) | **GET** /method/notify_history/get_status | Get my status unread message for user|
|[**notifyHistoryGetV1**](#notifyhistorygetv1) | **GET** /method/notify_history/get | Get my NotifyHistory item by id|
|[**notifyHistoryMarkOfReadV1**](#notifyhistorymarkofreadv1) | **PUT** /method/notify_history/read | Set notification in cabinet as read|
|[**notifyHistoryRunActionV1**](#notifyhistoryrunactionv1) | **POST** /method/notify_history/run_action | Run action in my notify item|
|[**notifyHistorySetAllCabinetReadV1**](#notifyhistorysetallcabinetreadv1) | **POST** /method/notify_history/set_all_cabinet_read | Set all notification in cabinet as read|

# **methodExecuteNotifyActionExecuteV1**
> SuccessResponse methodExecuteNotifyActionExecuteV1(methodExecuteNotifyActionRequest)

Requires notification:write and the actual operation scope: channel:write, project-invite:write, integration:write or billing:write. Invitation recipient and project roles are checked. Only supported invitation accept/decline and tariff renewal accept actions execute. Links and test actions fail; purchase errors propagate and do not mark the action done.

### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration,
    MethodExecuteNotifyActionRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let methodExecuteNotifyActionRequest: MethodExecuteNotifyActionRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodExecuteNotifyActionExecuteV1(
    methodExecuteNotifyActionRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodExecuteNotifyActionRequest** | **MethodExecuteNotifyActionRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** | Validation, account credential, scope, resource access or domain operation error; inspect error.name. No operation is reported as successful when its domain action fails. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifyHistoryGetListMyV1**
> PaginatedResponseOfNotifyHistorySiteResponse notifyHistoryGetListMyV1()

Read the current user\'s notification history using request filters and pagination. Returns results and pagination metadata; notification actions are not executed. Use POST /method/notify_history/execute_action to execute a supported account API action.

### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let limit: number; //Number of results (default to undefined)
let offset: number; //Page offset number (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let projectId: number; //Project id (optional) (default to undefined)
let name: 'high_bitrate' | 'request_access_channel' | 'request_access_project' | 'request_access_integration' | 'promocode_test' | 'stream_test' | 'plan_restream_expires' | 'plan_restream_expired' | 'plan_restream_renewed' | 'plan_transcoder_expires' | 'plan_transcoder_expired' | 'plan_transcoder_renewed' | 'plan_storage_expires' | 'plan_storage_expired' | 'plan_storage_renewed' | 'compensation_received' | 'broadcast_unsupported_codec' | 'broadcast_unsupported_codec_screen' | 'broadcast_bitrate_exceeded_screen' | 'rtmp_connect_old_server_screen' | 'broadcast_not_audio' | 'broadcast_bitrate_exceeded' | 'broadcast_started' | 'broadcast_stopped' | 'restream_check_twitch_bitrate_1' | 'api_pause_start' | 'api_pause_end' | 'api_wait_edit' | 'api_restream_start' | 'api_restream_stop' | 'api_drop_broadcast' | 'api_drop_broadcast_remove_company' | 'api_drop_broadcast_update_key' | 'publisher_disconnected' | 'publisher_connected' | 'publisher_initializing' | 'publisher_close' | 'publisher_connection_interrupted' | 'publisher_connection_timeout' | 'publisher_protocol_error' | 'publisher_start_failed' | 'publisher_reconnect_failed' | 'broadcast_connected_start' | 'broadcast_connected_end' | 'broadcast_connecting_stream' | 'broadcast_started_new_stream' | 'broadcast_connecting_lost' | 'broadcast_video_lost_start' | 'broadcast_video_lost_end' | 'broadcast_video_pause_start' | 'broadcast_video_pause_end' | 'broadcast_init_restream' | 'broadcast_placeholder_ready' | 'broadcast_placeholder_failed' | 'broadcast_placeholder_fallback_used' | 'start_stream' | 'create_reader' | 'start_channel' | 'stop_channel' | 'stop_stream_video_timeout' | 'stop_stream_no_start_video' | 'stop_stream' | 'delete_reader' | 'transcoder_start' | 'transcoder_stop' | 'start_channel_failed' | 'start_channel_success' | 'api_channel_initializing_start' | 'api_channel_initializing_failed' | 'api_channel_initializing_success' | 'channel_api_update_settings_success' | 'channel_api_update_settings_error' | 'channel_api_update_playlist_success' | 'channel_api_update_playlist_error' | 'channel_api_update_chat_error' | 'channel_api_stream_key_success' | 'channel_api_stream_key_error' | 'channel_api_auto_stop_disable_success' | 'channel_api_auto_stop_disable_error' | 'channel_api_unbinding_stream_key_error' | 'channel_api_create_broadcast_success' | 'channel_api_create_broadcast_error' | 'channel_api_set_planned_success' | 'channel_api_set_planned_error' | 'channel_api_set_thumbnail_success' | 'channel_api_set_thumbnail_error' | 'channel_token_error' | 'channel_api_group_failed' | 'no_audio_reader' | 'restream_check_twitch_bitrate_2' | 'transcoder_support_error_screen' | 'transcoder_tariff_end_screen' | 'transcoder_count_flow_screen' | 'transcoder_resolution_screen' | 'stream_key_banned' | 'broadcast_change_codec' | 'broadcast_change_region' | 'video_upload_error' | 'stop_channel_error' | 'broadcast_user_action_stop' | 'completed_api_channel_error' | 'transcoder_twitch_tracks' | 'plan_webinar_expired' | 'plan_webinar_renewed' | 'plan_webinar_expires' | 'payout_created' | 'payout_status_execution' | 'payout_status_success' | 'payout_status_canceled' | 'payout_status_error' | 'plan_trial_expires' | 'plan_trial_expired'; //Name (optional) (default to undefined)
let channel: 'telegram' | 'cabinet' | 'mobile'; //Channel (optional) (default to undefined)
let dateFrom: string; //Date from (optional) (default to undefined)
let dateTo: string; //Date to (optional) (default to undefined)
let statusRead: 'unread' | 'read'; //Status read (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.notifyHistoryGetListMyV1(
    language,
    limit,
    offset,
    v,
    projectId,
    name,
    channel,
    dateFrom,
    dateTo,
    statusRead,
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
| **projectId** | [**number**] | Project id | (optional) defaults to undefined|
| **name** | [**&#39;high_bitrate&#39; | &#39;request_access_channel&#39; | &#39;request_access_project&#39; | &#39;request_access_integration&#39; | &#39;promocode_test&#39; | &#39;stream_test&#39; | &#39;plan_restream_expires&#39; | &#39;plan_restream_expired&#39; | &#39;plan_restream_renewed&#39; | &#39;plan_transcoder_expires&#39; | &#39;plan_transcoder_expired&#39; | &#39;plan_transcoder_renewed&#39; | &#39;plan_storage_expires&#39; | &#39;plan_storage_expired&#39; | &#39;plan_storage_renewed&#39; | &#39;compensation_received&#39; | &#39;broadcast_unsupported_codec&#39; | &#39;broadcast_unsupported_codec_screen&#39; | &#39;broadcast_bitrate_exceeded_screen&#39; | &#39;rtmp_connect_old_server_screen&#39; | &#39;broadcast_not_audio&#39; | &#39;broadcast_bitrate_exceeded&#39; | &#39;broadcast_started&#39; | &#39;broadcast_stopped&#39; | &#39;restream_check_twitch_bitrate_1&#39; | &#39;api_pause_start&#39; | &#39;api_pause_end&#39; | &#39;api_wait_edit&#39; | &#39;api_restream_start&#39; | &#39;api_restream_stop&#39; | &#39;api_drop_broadcast&#39; | &#39;api_drop_broadcast_remove_company&#39; | &#39;api_drop_broadcast_update_key&#39; | &#39;publisher_disconnected&#39; | &#39;publisher_connected&#39; | &#39;publisher_initializing&#39; | &#39;publisher_close&#39; | &#39;publisher_connection_interrupted&#39; | &#39;publisher_connection_timeout&#39; | &#39;publisher_protocol_error&#39; | &#39;publisher_start_failed&#39; | &#39;publisher_reconnect_failed&#39; | &#39;broadcast_connected_start&#39; | &#39;broadcast_connected_end&#39; | &#39;broadcast_connecting_stream&#39; | &#39;broadcast_started_new_stream&#39; | &#39;broadcast_connecting_lost&#39; | &#39;broadcast_video_lost_start&#39; | &#39;broadcast_video_lost_end&#39; | &#39;broadcast_video_pause_start&#39; | &#39;broadcast_video_pause_end&#39; | &#39;broadcast_init_restream&#39; | &#39;broadcast_placeholder_ready&#39; | &#39;broadcast_placeholder_failed&#39; | &#39;broadcast_placeholder_fallback_used&#39; | &#39;start_stream&#39; | &#39;create_reader&#39; | &#39;start_channel&#39; | &#39;stop_channel&#39; | &#39;stop_stream_video_timeout&#39; | &#39;stop_stream_no_start_video&#39; | &#39;stop_stream&#39; | &#39;delete_reader&#39; | &#39;transcoder_start&#39; | &#39;transcoder_stop&#39; | &#39;start_channel_failed&#39; | &#39;start_channel_success&#39; | &#39;api_channel_initializing_start&#39; | &#39;api_channel_initializing_failed&#39; | &#39;api_channel_initializing_success&#39; | &#39;channel_api_update_settings_success&#39; | &#39;channel_api_update_settings_error&#39; | &#39;channel_api_update_playlist_success&#39; | &#39;channel_api_update_playlist_error&#39; | &#39;channel_api_update_chat_error&#39; | &#39;channel_api_stream_key_success&#39; | &#39;channel_api_stream_key_error&#39; | &#39;channel_api_auto_stop_disable_success&#39; | &#39;channel_api_auto_stop_disable_error&#39; | &#39;channel_api_unbinding_stream_key_error&#39; | &#39;channel_api_create_broadcast_success&#39; | &#39;channel_api_create_broadcast_error&#39; | &#39;channel_api_set_planned_success&#39; | &#39;channel_api_set_planned_error&#39; | &#39;channel_api_set_thumbnail_success&#39; | &#39;channel_api_set_thumbnail_error&#39; | &#39;channel_token_error&#39; | &#39;channel_api_group_failed&#39; | &#39;no_audio_reader&#39; | &#39;restream_check_twitch_bitrate_2&#39; | &#39;transcoder_support_error_screen&#39; | &#39;transcoder_tariff_end_screen&#39; | &#39;transcoder_count_flow_screen&#39; | &#39;transcoder_resolution_screen&#39; | &#39;stream_key_banned&#39; | &#39;broadcast_change_codec&#39; | &#39;broadcast_change_region&#39; | &#39;video_upload_error&#39; | &#39;stop_channel_error&#39; | &#39;broadcast_user_action_stop&#39; | &#39;completed_api_channel_error&#39; | &#39;transcoder_twitch_tracks&#39; | &#39;plan_webinar_expired&#39; | &#39;plan_webinar_renewed&#39; | &#39;plan_webinar_expires&#39; | &#39;payout_created&#39; | &#39;payout_status_execution&#39; | &#39;payout_status_success&#39; | &#39;payout_status_canceled&#39; | &#39;payout_status_error&#39; | &#39;plan_trial_expires&#39; | &#39;plan_trial_expired&#39;**]**Array<&#39;high_bitrate&#39; &#124; &#39;request_access_channel&#39; &#124; &#39;request_access_project&#39; &#124; &#39;request_access_integration&#39; &#124; &#39;promocode_test&#39; &#124; &#39;stream_test&#39; &#124; &#39;plan_restream_expires&#39; &#124; &#39;plan_restream_expired&#39; &#124; &#39;plan_restream_renewed&#39; &#124; &#39;plan_transcoder_expires&#39; &#124; &#39;plan_transcoder_expired&#39; &#124; &#39;plan_transcoder_renewed&#39; &#124; &#39;plan_storage_expires&#39; &#124; &#39;plan_storage_expired&#39; &#124; &#39;plan_storage_renewed&#39; &#124; &#39;compensation_received&#39; &#124; &#39;broadcast_unsupported_codec&#39; &#124; &#39;broadcast_unsupported_codec_screen&#39; &#124; &#39;broadcast_bitrate_exceeded_screen&#39; &#124; &#39;rtmp_connect_old_server_screen&#39; &#124; &#39;broadcast_not_audio&#39; &#124; &#39;broadcast_bitrate_exceeded&#39; &#124; &#39;broadcast_started&#39; &#124; &#39;broadcast_stopped&#39; &#124; &#39;restream_check_twitch_bitrate_1&#39; &#124; &#39;api_pause_start&#39; &#124; &#39;api_pause_end&#39; &#124; &#39;api_wait_edit&#39; &#124; &#39;api_restream_start&#39; &#124; &#39;api_restream_stop&#39; &#124; &#39;api_drop_broadcast&#39; &#124; &#39;api_drop_broadcast_remove_company&#39; &#124; &#39;api_drop_broadcast_update_key&#39; &#124; &#39;publisher_disconnected&#39; &#124; &#39;publisher_connected&#39; &#124; &#39;publisher_initializing&#39; &#124; &#39;publisher_close&#39; &#124; &#39;publisher_connection_interrupted&#39; &#124; &#39;publisher_connection_timeout&#39; &#124; &#39;publisher_protocol_error&#39; &#124; &#39;publisher_start_failed&#39; &#124; &#39;publisher_reconnect_failed&#39; &#124; &#39;broadcast_connected_start&#39; &#124; &#39;broadcast_connected_end&#39; &#124; &#39;broadcast_connecting_stream&#39; &#124; &#39;broadcast_started_new_stream&#39; &#124; &#39;broadcast_connecting_lost&#39; &#124; &#39;broadcast_video_lost_start&#39; &#124; &#39;broadcast_video_lost_end&#39; &#124; &#39;broadcast_video_pause_start&#39; &#124; &#39;broadcast_video_pause_end&#39; &#124; &#39;broadcast_init_restream&#39; &#124; &#39;broadcast_placeholder_ready&#39; &#124; &#39;broadcast_placeholder_failed&#39; &#124; &#39;broadcast_placeholder_fallback_used&#39; &#124; &#39;start_stream&#39; &#124; &#39;create_reader&#39; &#124; &#39;start_channel&#39; &#124; &#39;stop_channel&#39; &#124; &#39;stop_stream_video_timeout&#39; &#124; &#39;stop_stream_no_start_video&#39; &#124; &#39;stop_stream&#39; &#124; &#39;delete_reader&#39; &#124; &#39;transcoder_start&#39; &#124; &#39;transcoder_stop&#39; &#124; &#39;start_channel_failed&#39; &#124; &#39;start_channel_success&#39; &#124; &#39;api_channel_initializing_start&#39; &#124; &#39;api_channel_initializing_failed&#39; &#124; &#39;api_channel_initializing_success&#39; &#124; &#39;channel_api_update_settings_success&#39; &#124; &#39;channel_api_update_settings_error&#39; &#124; &#39;channel_api_update_playlist_success&#39; &#124; &#39;channel_api_update_playlist_error&#39; &#124; &#39;channel_api_update_chat_error&#39; &#124; &#39;channel_api_stream_key_success&#39; &#124; &#39;channel_api_stream_key_error&#39; &#124; &#39;channel_api_auto_stop_disable_success&#39; &#124; &#39;channel_api_auto_stop_disable_error&#39; &#124; &#39;channel_api_unbinding_stream_key_error&#39; &#124; &#39;channel_api_create_broadcast_success&#39; &#124; &#39;channel_api_create_broadcast_error&#39; &#124; &#39;channel_api_set_planned_success&#39; &#124; &#39;channel_api_set_planned_error&#39; &#124; &#39;channel_api_set_thumbnail_success&#39; &#124; &#39;channel_api_set_thumbnail_error&#39; &#124; &#39;channel_token_error&#39; &#124; &#39;channel_api_group_failed&#39; &#124; &#39;no_audio_reader&#39; &#124; &#39;restream_check_twitch_bitrate_2&#39; &#124; &#39;transcoder_support_error_screen&#39; &#124; &#39;transcoder_tariff_end_screen&#39; &#124; &#39;transcoder_count_flow_screen&#39; &#124; &#39;transcoder_resolution_screen&#39; &#124; &#39;stream_key_banned&#39; &#124; &#39;broadcast_change_codec&#39; &#124; &#39;broadcast_change_region&#39; &#124; &#39;video_upload_error&#39; &#124; &#39;stop_channel_error&#39; &#124; &#39;broadcast_user_action_stop&#39; &#124; &#39;completed_api_channel_error&#39; &#124; &#39;transcoder_twitch_tracks&#39; &#124; &#39;plan_webinar_expired&#39; &#124; &#39;plan_webinar_renewed&#39; &#124; &#39;plan_webinar_expires&#39; &#124; &#39;payout_created&#39; &#124; &#39;payout_status_execution&#39; &#124; &#39;payout_status_success&#39; &#124; &#39;payout_status_canceled&#39; &#124; &#39;payout_status_error&#39; &#124; &#39;plan_trial_expires&#39; &#124; &#39;plan_trial_expired&#39;>** | Name | (optional) defaults to undefined|
| **channel** | [**&#39;telegram&#39; | &#39;cabinet&#39; | &#39;mobile&#39;**]**Array<&#39;telegram&#39; &#124; &#39;cabinet&#39; &#124; &#39;mobile&#39;>** | Channel | (optional) defaults to undefined|
| **dateFrom** | [**string**] | Date from | (optional) defaults to undefined|
| **dateTo** | [**string**] | Date to | (optional) defaults to undefined|
| **statusRead** | [**&#39;unread&#39; | &#39;read&#39;**]**Array<&#39;unread&#39; &#124; &#39;read&#39;>** | Status read | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PaginatedResponseOfNotifyHistorySiteResponse**

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

# **notifyHistoryGetStatusMyV1**
> NotifyHistoryStatusUserResponse notifyHistoryGetStatusMyV1()

Read count_unread, the number of unread notifications for the current user. This does not mark them as read; use PUT /method/notify_history/read or POST /method/notify_history/set_all_cabinet_read for that.

### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.notifyHistoryGetStatusMyV1(
    language,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**NotifyHistoryStatusUserResponse**

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

# **notifyHistoryGetV1**
> NotifyHistory notifyHistoryGetV1()

Read notification _id of the current user. _id is the MongoDB ID from the notification list; the service checks ownership. Reading is distinct from marking as read or executing an action.

### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let id: string; //Id of page in mongodb (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.notifyHistoryGetV1(
    id,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Id of page in mongodb | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**NotifyHistory**

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

# **notifyHistoryMarkOfReadV1**
> SiteMarkReadHistoryResponse notifyHistoryMarkOfReadV1(siteMarkReadHistoryRequest)

Mark the listed notify_history_ids of the current user as read and return the actual update result. This neither executes an action nor deletes a notification; IDs come from notification history.

### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration,
    SiteMarkReadHistoryRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let siteMarkReadHistoryRequest: SiteMarkReadHistoryRequest; //
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.notifyHistoryMarkOfReadV1(
    language,
    siteMarkReadHistoryRequest,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteMarkReadHistoryRequest** | **SiteMarkReadHistoryRequest**|  | |
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteMarkReadHistoryResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifyHistoryRunActionV1**
> object notifyHistoryRunActionV1()

Execute a legacy action_name on the current user\'s notify_history_id, with group_id in query. Only the project subject is supported; this can change invitations/tariffs and is not a safe read. For the account API, use POST /method/notify_history/execute_action with a separate scope check for the specific action.

### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let notifyHistoryId: string; //Id of page in mongodb (default to undefined)
let actionName: string; //Action name (default to undefined)
let groupId: string; //Group id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.notifyHistoryRunActionV1(
    notifyHistoryId,
    actionName,
    groupId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notifyHistoryId** | [**string**] | Id of page in mongodb | defaults to undefined|
| **actionName** | [**string**] | Action name | defaults to undefined|
| **groupId** | [**string**] | Group id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifyHistorySetAllCabinetReadV1**
> SuccessResponse notifyHistorySetAllCabinetReadV1()

Mark all cabinet notifications of the current user as read. This changes read state without executing an invitation/payment action or deleting history. Returns success.

### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.notifyHistorySetAllCabinetReadV1(
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

