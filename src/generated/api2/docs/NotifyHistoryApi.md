# NotifyHistoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**notifyHistoryGetListMyV1**(#notifyhistorygetlistmyv1) | **GET** /method/notify_history/list | Get list of my notifications|
|**notifyHistoryGetStatusMyV1**(#notifyhistorygetstatusmyv1) | **GET** /method/notify_history/get_status | Get my status unread message for user|
|**notifyHistoryGetV1**(#notifyhistorygetv1) | **GET** /method/notify_history/get | Get my NotifyHistory item by id|
|**notifyHistoryMarkOfReadV1**(#notifyhistorymarkofreadv1) | **PUT** /method/notify_history/read | Set notification in cabinet as read|
|**notifyHistoryRunActionV1**(#notifyhistoryrunactionv1) | **POST** /method/notify_history/run_action | Run action in my notify item|
|**notifyHistorySetAllCabinetReadV1**(#notifyhistorysetallcabinetreadv1) | **POST** /method/notify_history/set_all_cabinet_read | Set all notification in cabinet as read|

# **notifyHistoryGetListMyV1**
> PaginatedResponseOfNotifyHistorySiteResponse notifyHistoryGetListMyV1()


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let limit: number; //Number of results (optional) (default to 20)
let offset: number; //Page offset number (optional) (default to 0)
let projectId: number; //Project id (optional) (default to undefined)
let name: 'high_bitrate' | 'request_access_channel' | 'request_access_project' | 'promocode_test' | 'stream_test' | 'plan_restream_expires' | 'plan_restream_expired' | 'plan_restream_renewed' | 'plan_transcoder_expires' | 'plan_transcoder_expired' | 'plan_transcoder_renewed' | 'plan_storage_expires' | 'plan_storage_expired' | 'plan_storage_renewed' | 'broadcast_unsupported_codec' | 'broadcast_unsupported_codec_screen' | 'broadcast_bitrate_exceeded_screen' | 'rtmp_connect_old_server_screen' | 'broadcast_not_audio' | 'broadcast_bitrate_exceeded' | 'broadcast_started' | 'broadcast_stopped' | 'restream_check_twitch_bitrate_1' | 'api_pause_start' | 'api_pause_end' | 'api_wait_edit' | 'api_restream_start' | 'api_restream_stop' | 'api_drop_broadcast' | 'api_drop_broadcast_remove_company' | 'api_drop_broadcast_update_key' | 'publisher_disconnected' | 'publisher_connected' | 'publisher_initializing' | 'publisher_close' | 'broadcast_connected_start' | 'broadcast_connected_end' | 'broadcast_connecting_stream' | 'broadcast_started_new_stream' | 'broadcast_connecting_lost' | 'broadcast_video_lost_start' | 'broadcast_video_lost_end' | 'broadcast_video_pause_start' | 'broadcast_video_pause_end' | 'broadcast_init_restream' | 'start_stream' | 'create_reader' | 'start_channel' | 'stop_channel' | 'stop_stream_video_timeout' | 'stop_stream_no_start_video' | 'stop_stream' | 'delete_reader' | 'transcoder_start' | 'transcoder_stop' | 'start_channel_failed' | 'start_channel_success' | 'api_channel_initializing_start' | 'api_channel_initializing_failed' | 'api_channel_initializing_success' | 'channel_api_update_settings_success' | 'channel_api_update_settings_error' | 'channel_api_update_playlist_success' | 'channel_api_update_playlist_error' | 'channel_api_update_chat_error' | 'channel_api_stream_key_success' | 'channel_api_stream_key_error' | 'channel_api_auto_stop_disable_success' | 'channel_api_auto_stop_disable_error' | 'channel_api_unbinding_stream_key_error' | 'channel_api_create_broadcast_success' | 'channel_api_create_broadcast_error' | 'channel_api_set_planned_success' | 'channel_api_set_planned_error' | 'channel_api_set_thumbnail_success' | 'channel_api_set_thumbnail_error' | 'channel_token_error' | 'channel_api_group_failed' | 'no_audio_reader' | 'restream_check_twitch_bitrate_2' | 'transcoder_support_error_screen' | 'transcoder_tariff_end_screen' | 'transcoder_count_flow_screen' | 'transcoder_resolution_screen' | 'stream_key_banned' | 'broadcast_change_codec' | 'broadcast_change_region' | 'video_upload_error' | 'stop_channel_error' | 'broadcast_user_action_stop'; //Name (optional) (default to undefined)
let channel: 'telegram' | 'cabinet' | 'mobile'; //Channel (optional) (default to undefined)
let dateFrom: string; //Date from (optional) (default to undefined)
let dateTo: string; //Date to (optional) (default to undefined)
let statusRead: 'unread' | 'read'; //Status read (optional) (default to undefined)

const { status, data } = await apiInstance.notifyHistoryGetListMyV1(
    language,
    v,
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
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **limit** | **number** | Number of results | (optional) defaults to 20|
| **offset** | **number** | Page offset number | (optional) defaults to 0|
| **projectId** | **number** | Project id | (optional) defaults to undefined|
| **name** | **'high_bitrate' | 'request_access_channel' | 'request_access_project' | 'promocode_test' | 'stream_test' | 'plan_restream_expires' | 'plan_restream_expired' | 'plan_restream_renewed' | 'plan_transcoder_expires' | 'plan_transcoder_expired' | 'plan_transcoder_renewed' | 'plan_storage_expires' | 'plan_storage_expired' | 'plan_storage_renewed' | 'broadcast_unsupported_codec' | 'broadcast_unsupported_codec_screen' | 'broadcast_bitrate_exceeded_screen' | 'rtmp_connect_old_server_screen' | 'broadcast_not_audio' | 'broadcast_bitrate_exceeded' | 'broadcast_started' | 'broadcast_stopped' | 'restream_check_twitch_bitrate_1' | 'api_pause_start' | 'api_pause_end' | 'api_wait_edit' | 'api_restream_start' | 'api_restream_stop' | 'api_drop_broadcast' | 'api_drop_broadcast_remove_company' | 'api_drop_broadcast_update_key' | 'publisher_disconnected' | 'publisher_connected' | 'publisher_initializing' | 'publisher_close' | 'broadcast_connected_start' | 'broadcast_connected_end' | 'broadcast_connecting_stream' | 'broadcast_started_new_stream' | 'broadcast_connecting_lost' | 'broadcast_video_lost_start' | 'broadcast_video_lost_end' | 'broadcast_video_pause_start' | 'broadcast_video_pause_end' | 'broadcast_init_restream' | 'start_stream' | 'create_reader' | 'start_channel' | 'stop_channel' | 'stop_stream_video_timeout' | 'stop_stream_no_start_video' | 'stop_stream' | 'delete_reader' | 'transcoder_start' | 'transcoder_stop' | 'start_channel_failed' | 'start_channel_success' | 'api_channel_initializing_start' | 'api_channel_initializing_failed' | 'api_channel_initializing_success' | 'channel_api_update_settings_success' | 'channel_api_update_settings_error' | 'channel_api_update_playlist_success' | 'channel_api_update_playlist_error' | 'channel_api_update_chat_error' | 'channel_api_stream_key_success' | 'channel_api_stream_key_error' | 'channel_api_auto_stop_disable_success' | 'channel_api_auto_stop_disable_error' | 'channel_api_unbinding_stream_key_error' | 'channel_api_create_broadcast_success' | 'channel_api_create_broadcast_error' | 'channel_api_set_planned_success' | 'channel_api_set_planned_error' | 'channel_api_set_thumbnail_success' | 'channel_api_set_thumbnail_error' | 'channel_token_error' | 'channel_api_group_failed' | 'no_audio_reader' | 'restream_check_twitch_bitrate_2' | 'transcoder_support_error_screen' | 'transcoder_tariff_end_screen' | 'transcoder_count_flow_screen' | 'transcoder_resolution_screen' | 'stream_key_banned' | 'broadcast_change_codec' | 'broadcast_change_region' | 'video_upload_error' | 'stop_channel_error' | 'broadcast_user_action_stop'** | Name | (optional) defaults to undefined|
| **channel** | **'telegram' | 'cabinet' | 'mobile'** | Channel | (optional) defaults to undefined|
| **dateFrom** | **string** | Date from | (optional) defaults to undefined|
| **dateTo** | **string** | Date to | (optional) defaults to undefined|
| **statusRead** | **'unread' | 'read'** | Status read | (optional) defaults to undefined|


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

# **notifyHistoryGetStatusMyV1**
> NotifyHistoryStatusUserResponse notifyHistoryGetStatusMyV1()


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.notifyHistoryGetStatusMyV1(
    language,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **notifyHistoryGetV1**
> NotifyHistorySiteResponse notifyHistoryGetV1()


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let id: string; //Id of page in mongodb (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.notifyHistoryGetV1(
    id,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | **string** | Id of page in mongodb | defaults to undefined|
| **v** | **'1'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **notifyHistoryMarkOfReadV1**
> SiteMarkReadHistoryResponse notifyHistoryMarkOfReadV1(siteMarkReadHistoryRequest)


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration,
    SiteMarkReadHistoryRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let siteMarkReadHistoryRequest: SiteMarkReadHistoryRequest; //
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.notifyHistoryMarkOfReadV1(
    language,
    siteMarkReadHistoryRequest,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteMarkReadHistoryRequest** | **SiteMarkReadHistoryRequest**|  | |
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **notifyHistoryRunActionV1**
> NotifyHistorySiteResponse notifyHistoryRunActionV1()


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
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.notifyHistoryRunActionV1(
    notifyHistoryId,
    actionName,
    groupId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notifyHistoryId** | **string** | Id of page in mongodb | defaults to undefined|
| **actionName** | **string** | Action name | defaults to undefined|
| **groupId** | **string** | Group id | defaults to undefined|
| **v** | **'1'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **notifyHistorySetAllCabinetReadV1**
> SuccessResponse notifyHistorySetAllCabinetReadV1()


### Example

```typescript
import {
    NotifyHistoryApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new NotifyHistoryApi(configuration);

const { status, data } = await apiInstance.notifyHistorySetAllCabinetReadV1();
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

