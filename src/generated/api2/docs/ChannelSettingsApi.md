# ChannelSettingsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**channelChatGetTelegramSettingV1**](#channelchatgettelegramsettingv1) | **GET** /method/channel_settings/chat/telegram/setting | Get telegram settings|
|[**channelChatInitTelegramChatConnectV1**](#channelchatinittelegramchatconnectv1) | **GET** /method/channel_settings/chat/telegram/init | Get code for connected chat|
|[**channelChatRemoveTelegramChatV1**](#channelchatremovetelegramchatv1) | **GET** /method/channel_settings/chat/telegram/disconnect | Disconnect telegram chat|
|[**channelChatSetTelegramSettingV1**](#channelchatsettelegramsettingv1) | **POST** /method/channel_settings/chat/telegram/setting | Set telegram settings|
|[**channelChatTelegramPostsV1**](#channelchattelegrampostsv1) | **GET** /method/channel_settings/chat/telegram/posts | Get telegram post list|
|[**channelChatUpdateOptionsTelegramV1**](#channelchatupdateoptionstelegramv1) | **POST** /method/channel_settings/chat/setTelegram | Optional settings for telegram|
|[**channelOptionsDisconnectPlannedProviderV1**](#channeloptionsdisconnectplannedproviderv1) | **POST** /method/channel_settings/options/disconnectPlannedProvider | Disconnect a VK Video Live account from this project channel|
|[**channelOptionsGetPlannedV1**](#channeloptionsgetplannedv1) | **GET** /method/channel_settings/options/getPlanned | Get planned list|
|[**channelOptionsGetPlayListV1**](#channeloptionsgetplaylistv1) | **GET** /method/channel_settings/options/getPlaylist | Get playlists from the platform|
|[**channelOptionsUpdateOptionsOkV1**](#channeloptionsupdateoptionsokv1) | **POST** /method/channel_settings/options/setOk | Optional settings for ok. Depends on the tariff.|
|[**channelOptionsUpdateOptionsTrovoV1**](#channeloptionsupdateoptionstrovov1) | **POST** /method/channel_settings/options/setTrovo | Optional settings for trovo. Depends on the tariff.|
|[**channelOptionsUpdateOptionsTwitchV1**](#channeloptionsupdateoptionstwitchv1) | **POST** /method/channel_settings/options/setTwitch | Optional settings for twitch. Depends on the tariff.|
|[**channelOptionsUpdateOptionsVkV1**](#channeloptionsupdateoptionsvkv1) | **POST** /method/channel_settings/options/setVk | Optional settings for vk. Depends on the tariff.|
|[**channelOptionsUpdateOptionsVkVideoLiveV1**](#channeloptionsupdateoptionsvkvideolivev1) | **POST** /method/channel_settings/options/setVkVideoLive | Optional settings for vk video live. Depends on the tariff.|
|[**channelOptionsUpdateOptionsYoutubeV1**](#channeloptionsupdateoptionsyoutubev1) | **POST** /method/channel_settings/options/setYoutube | Optional settings for youtube. Depends on the tariff.|
|[**channelOptionsUpdatePlannedV1**](#channeloptionsupdateplannedv1) | **POST** /method/channel_settings/options/setPlanned | Set planned id. Depends on the tariff.|
|[**channelOptionsVerifyPlannedAccessV1**](#channeloptionsverifyplannedaccessv1) | **POST** /method/channel_settings/options/verifyPlannedAccess | Confirm a VK channel connection using the first accessible planned broadcast|
|[**channelSettingBulkUpdateV1**](#channelsettingbulkupdatev1) | **POST** /method/channel_settings/bulkUpdate | Bulk update channel title and description. Global settings.|
|[**channelSettingConnectProviderV1**](#channelsettingconnectproviderv1) | **GET** /method/channel_settings/connect-provider | Connect VK Video Live to an existing VK channel|
|[**channelSettingGetStatusV1**](#channelsettinggetstatusv1) | **GET** /method/channel_settings/getStatus | Get status platform|
|[**channelSettingSetNameV1**](#channelsettingsetnamev1) | **POST** /method/channel_settings/setName | Set name from custom channel. Global settings.|
|[**channelSettingUpdateRtmpV1**](#channelsettingupdatertmpv1) | **POST** /method/channel_settings/setRtmp | Set rtmp url from channel. Global settings.|
|[**channelSettingUpdateSrtUrlV1**](#channelsettingupdatesrturlv1) | **POST** /method/channel_settings/setSrt | Set srt url from channel. Global settings.|
|[**channelSettingUpdateTokenV1**](#channelsettingupdatetokenv1) | **GET** /method/channel_settings/update-token | Redirect to OAuth for updating a channel token|
|[**channelSettingUpdateTranscoderV1**](#channelsettingupdatetranscoderv1) | **POST** /method/channel_settings/setTranscoder | Set transcoder from channel. Personal settings.|
|[**telegramGetPostByFilterV1**](#telegramgetpostbyfilterv1) | **GET** /method/channel_settings/chat/telegram/posts/get-by-filter | Get telegram post by filter|

# **channelChatGetTelegramSettingV1**
> TelegramSettingsResponseDto channelChatGetTelegramSettingV1()

Read saved Telegram post/chat settings for the selected channel_id in project_id. This reads configuration; save filter_mode, message_id, and link using POST /method/channel_settings/chat/telegram/setting.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelChatGetTelegramSettingV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**TelegramSettingsResponseDto**

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

# **channelChatInitTelegramChatConnectV1**
> TelegramInitConnectResponseDto channelChatInitTelegramChatConnectV1()

Start Telegram chat connection for the selected internal channel_id in project_id and obtain code. Despite using GET, this creates a connection code; the response alone does not mean connection is complete.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelChatInitTelegramChatConnectV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**TelegramInitConnectResponseDto**

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

# **channelChatRemoveTelegramChatV1**
> channelChatRemoveTelegramChatV1()

Disconnect the Telegram chat of the selected internal channel_id in project_id. Despite using GET, this changes the connection. The successful response has no body; this neither deletes the channel nor disables the streaming destination.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelChatRemoveTelegramChatV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Telegram chat is disconnected; the response has no body. |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **channelChatSetTelegramSettingV1**
> SuccessResponse channelChatSetTelegramSettingV1(telegramSetSettingsRequestDto)

Save filter_mode, message_id, and link for the Telegram chat of the selected internal channel_id in project_id. message_id identifies a Telegram message, not a StreamVi channel. Success confirms settings were saved, not that a message was sent.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    TelegramSetSettingsRequestDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let telegramSetSettingsRequestDto: TelegramSetSettingsRequestDto; //
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelChatSetTelegramSettingV1(
    language,
    projectId,
    channelId,
    telegramSetSettingsRequestDto,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **telegramSetSettingsRequestDto** | **TelegramSetSettingsRequestDto**|  | |
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
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

# **channelChatTelegramPostsV1**
> TelegramChatPostsResponseDto channelChatTelegramPostsV1()

Get Telegram posts for the selected channel with internal channel_id in project_id. Returns results; the external chat_id is resolved from the connected channel and does not replace channel_id.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelChatTelegramPostsV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**TelegramChatPostsResponseDto**

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

# **channelChatUpdateOptionsTelegramV1**
> SuccessResponse channelChatUpdateOptionsTelegramV1(siteUpdateChatTelegramRequest)

Change Telegram chat settings for the selected internal channel_id in project_id. Checks the Telegram chat/channel association and connection type; configures the chat rather than changing the broadcast destination\'s active state.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateChatTelegramRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateChatTelegramRequest: SiteUpdateChatTelegramRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelChatUpdateOptionsTelegramV1(
    siteUpdateChatTelegramRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateChatTelegramRequest** | **SiteUpdateChatTelegramRequest**|  | |
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

# **channelOptionsDisconnectPlannedProviderV1**
> VerifyPlannedAccessResponse channelOptionsDisconnectPlannedProviderV1(disconnectPlannedProviderRequest)

Disconnect the VK Video Live connection identified by token_id for channel_id in project_id. The account token and selected planned broadcast are preserved.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    DisconnectPlannedProviderRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let disconnectPlannedProviderRequest: DisconnectPlannedProviderRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsDisconnectPlannedProviderV1(
    disconnectPlannedProviderRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **disconnectPlannedProviderRequest** | **DisconnectPlannedProviderRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**VerifyPlannedAccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **channelOptionsGetPlannedV1**
> PlannedListResponse channelOptionsGetPlannedV1()

Read available platform scheduled broadcasts for the selected internal channel_id in project_id. Requires an active primary token. Pass a result ID to POST /method/channel_settings/options/setPlanned; this is not the /method/scheduler list.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsGetPlannedV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PlannedListResponse**

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

# **channelOptionsGetPlayListV1**
> PlaylistResponse channelOptionsGetPlayListV1()

Read platform playlists of the connected internal channel_id in project_id. Requires an active primary token; otherwise token.no_found. Returns external playlist results, not StreamVi video schedules.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsGetPlayListV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PlaylistResponse**

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

# **channelOptionsUpdateOptionsOkV1**
> SuccessResponse channelOptionsUpdateOptionsOkV1(siteUpdateOptionsOkRequest)

Save OK broadcast settings for the selected internal channel_id in project_id. Requires a plan with change_subject. Transformed DTO fields are merged into current streamInfo; individual fields define optional/default values. Saving settings does not start a broadcast.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsOkRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsOkRequest: SiteUpdateOptionsOkRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsUpdateOptionsOkV1(
    siteUpdateOptionsOkRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsOkRequest** | **SiteUpdateOptionsOkRequest**|  | |
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

# **channelOptionsUpdateOptionsTrovoV1**
> SuccessResponse channelOptionsUpdateOptionsTrovoV1(siteUpdateOptionsTrovoRequest)

Save Trovo broadcast settings for the selected internal channel_id in project_id. Requires a plan with change_subject. Transformed DTO fields are merged into current streamInfo; read optional/default values from the request schema. Updating settings does not start a broadcast.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsTrovoRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsTrovoRequest: SiteUpdateOptionsTrovoRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsUpdateOptionsTrovoV1(
    siteUpdateOptionsTrovoRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsTrovoRequest** | **SiteUpdateOptionsTrovoRequest**|  | |
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

# **channelOptionsUpdateOptionsTwitchV1**
> SuccessResponse channelOptionsUpdateOptionsTwitchV1(siteUpdateOptionsTwitchRequest)

Save Twitch broadcast settings for the selected internal channel_id in project_id. Requires a plan with change_subject. Transformed DTO fields are merged into current streamInfo; category ID is an external platform ID. Updating settings neither enables the destination nor starts a broadcast.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsTwitchRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsTwitchRequest: SiteUpdateOptionsTwitchRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsUpdateOptionsTwitchV1(
    siteUpdateOptionsTwitchRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsTwitchRequest** | **SiteUpdateOptionsTwitchRequest**|  | |
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

# **channelOptionsUpdateOptionsVkV1**
> SuccessResponse channelOptionsUpdateOptionsVkV1(siteUpdateOptionsVkRequest)

Save VK broadcast settings for the channel with internal channel_id in project_id. Requires a plan with change_subject; parameters pass through toFormatted DTO and merge into current streamInfo, so each DTO field determines defaults/empty values. wall=true records consent to publish on VK wall. Updates an active broadcast; success does not mean a broadcast was started.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsVkRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsVkRequest: SiteUpdateOptionsVkRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsUpdateOptionsVkV1(
    siteUpdateOptionsVkRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsVkRequest** | **SiteUpdateOptionsVkRequest**|  | |
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

# **channelOptionsUpdateOptionsVkVideoLiveV1**
> SuccessResponse channelOptionsUpdateOptionsVkVideoLiveV1(siteUpdateOptionsVkVideoLiveRequest)

Save VK Video Live broadcast settings for the selected internal channel_id in project_id. Requires a plan with change_subject. Transformed DTO fields are merged into current streamInfo; category ID belongs to the platform catalog. Saving settings does not start a broadcast.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsVkVideoLiveRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsVkVideoLiveRequest: SiteUpdateOptionsVkVideoLiveRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsUpdateOptionsVkVideoLiveV1(
    siteUpdateOptionsVkVideoLiveRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsVkVideoLiveRequest** | **SiteUpdateOptionsVkVideoLiveRequest**|  | |
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

# **channelOptionsUpdateOptionsYoutubeV1**
> SuccessResponse channelOptionsUpdateOptionsYoutubeV1(siteUpdateOptionsYoutubeRequest)

Save YouTube broadcast settings for the channel with internal channel_id in project_id. Requires a plan with change_subject; parameters pass through toFormatted DTO and merge into current streamInfo. The DTO determines defaults, empty tags, and image. Attempts to update an active broadcast if present; this method does not start a broadcast.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsYoutubeRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsYoutubeRequest: SiteUpdateOptionsYoutubeRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsUpdateOptionsYoutubeV1(
    siteUpdateOptionsYoutubeRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsYoutubeRequest** | **SiteUpdateOptionsYoutubeRequest**|  | |
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

# **channelOptionsUpdatePlannedV1**
> SitePlannedResponse channelOptionsUpdatePlannedV1(siteSetPlannedRequest)

Select a scheduled platform broadcast for the internal channel_id in project_id. id is the string ID from GET /method/channel_settings/options/getPlanned; auto selects the automatic option, null/omission clears selection. An active primary token is required. Returns the selected planned value; does not create a StreamVi video schedule.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteSetPlannedRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteSetPlannedRequest: SiteSetPlannedRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsUpdatePlannedV1(
    siteSetPlannedRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetPlannedRequest** | **SiteSetPlannedRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SitePlannedResponse**

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

# **channelOptionsVerifyPlannedAccessV1**
> VerifyPlannedAccessResponse channelOptionsVerifyPlannedAccessV1(verifyPlannedAccessRequest)

Read the VK Video Live connection state for channel_id in project_id. recheck repeats the check; connect explicitly links an accessible account. A regular read does not create a connection.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    VerifyPlannedAccessRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let verifyPlannedAccessRequest: VerifyPlannedAccessRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelOptionsVerifyPlannedAccessV1(
    verifyPlannedAccessRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyPlannedAccessRequest** | **VerifyPlannedAccessRequest**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**VerifyPlannedAccessResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**201** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **channelSettingBulkUpdateV1**
> SuccessResponse channelSettingBulkUpdateV1(siteBulkUpdateChannelRequest)

Save shared default title/description for project_id and update these fields on supported project destinations. Requires a plan with change_subject; integration access checks channel editing permissions. Other streamInfo fields are preserved. Attempts to update active platform broadcasts; individual failures are logged, so success does not guarantee synchronous updates on every platform. Read the template with GET /method/broadcast/template.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteBulkUpdateChannelRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteBulkUpdateChannelRequest: SiteBulkUpdateChannelRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelSettingBulkUpdateV1(
    siteBulkUpdateChannelRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteBulkUpdateChannelRequest** | **SiteBulkUpdateChannelRequest**|  | |
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

# **channelSettingConnectProviderV1**
> channelSettingConnectProviderV1()

Start the VK Video Live OAuth connection to an existing channel_id in project_id using the current planned broadcast ids. Returns an HTTP 302 redirect to provider authorization rather than JSON.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let ids: Set<string>; //Planned VK video IDs of this channel (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelSettingConnectProviderV1(
    language,
    projectId,
    channelId,
    ids,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **ids** | **Set&lt;string&gt;** | Planned VK video IDs of this channel | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**302** | Redirect to VK Video Live OAuth |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **channelSettingGetStatusV1**
> SiteChannelStatusResponse channelSettingGetStatusV1()

Read platform channel status by internal channel_id in project_id. Requires an active primary platform token; otherwise token.no_found. This is platform status, not the project\'s desired active value; enable/disable with PUT /method/channel/status.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelSettingGetStatusV1(
    language,
    projectId,
    channelId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteChannelStatusResponse**

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

# **channelSettingSetNameV1**
> SuccessResponse channelSettingSetNameV1(siteSetNameRequest)

Rename the channel with internal channel_id in project_id if the platform allows edit_name; otherwise channel.name_update. The name changes on the shared channel entity and is visible to projects using this channel. This is the channel display name, not the current broadcast title.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteSetNameRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteSetNameRequest: SiteSetNameRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelSettingSetNameV1(
    siteSetNameRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetNameRequest** | **SiteSetNameRequest**|  | |
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

# **channelSettingUpdateRtmpV1**
> SuccessResponse channelSettingUpdateRtmpV1(siteSetUrlRequest)

Save the shared RTMP/RTMPS publishing URL of the channel with internal channel_id in project_id. url with stream_key specifies credentials; without stream_key the URL must contain the stream path/name. Changes the shared channel entity, not only the project relationship. Success confirms ingress was saved, not that a connection was established. Do not log secret credentials.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteSetUrlRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteSetUrlRequest: SiteSetUrlRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelSettingUpdateRtmpV1(
    siteSetUrlRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetUrlRequest** | **SiteSetUrlRequest**|  | |
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

# **channelSettingUpdateSrtUrlV1**
> SuccessResponse channelSettingUpdateSrtUrlV1(siteSetSrtUrlRequest)

Replace the complete SRT ingress_url of the internal channel_id in project_id. The URL includes port and streamid/latency parameters when needed and may contain secrets. Changes the shared channel entity and clears RTMP settings and the separate ingress_stream_key. Success does not confirm an active broadcast.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteSetSrtUrlRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteSetSrtUrlRequest: SiteSetSrtUrlRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelSettingUpdateSrtUrlV1(
    siteSetSrtUrlRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetSrtUrlRequest** | **SiteSetSrtUrlRequest**|  | |
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

# **channelSettingUpdateTokenV1**
> channelSettingUpdateTokenV1()

Start platform token OAuth refresh for the internal channel_id in project_id and the selected role. Returns an HTTP redirect to platform authorization, not new-token JSON. User authorization and a callback are required to finish; GET initiates an OAuth flow.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let role: 'account' | 'group'; //Token role (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let tokenId: number; //Local ID of a linked account token (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelSettingUpdateTokenV1(
    language,
    projectId,
    channelId,
    role,
    v,
    tokenId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **role** | [**&#39;account&#39; | &#39;group&#39;**]**Array<&#39;account&#39; &#124; &#39;group&#39;>** | Token role | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **tokenId** | [**number**] | Local ID of a linked account token | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**302** | Redirect to the platform OAuth authorization page |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **channelSettingUpdateTranscoderV1**
> SuccessResponse channelSettingUpdateTranscoderV1(siteSetTranscoderRequest)

Assign transcoder_id to a channel in the selected project_id; omitting transcoder_id clears the assignment. Changes the project/channel link, not settings for all projects. Checks that the transcoder belongs to the project; Twitch mode allows only one Twitch channel. Create/change the transcoder itself through /method/transcoder/add and /method/transcoder/update.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteSetTranscoderRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteSetTranscoderRequest: SiteSetTranscoderRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelSettingUpdateTranscoderV1(
    siteSetTranscoderRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetTranscoderRequest** | **SiteSetTranscoderRequest**|  | |
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

# **telegramGetPostByFilterV1**
> TelegramChatPostsItem telegramGetPostByFilterV1()

Get a channel\'s Telegram post using filter_mode from the request enum. channel_id is the internal ID in the selected project_id; a Telegram message ID has a separate purpose. Returns a single post matching the selected filter, not a list.

### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let filterMode: 0 | 1 | 2 | 3; //Telegram post selection rule from enum; not an OAuth scope. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.telegramGetPostByFilterV1(
    language,
    projectId,
    channelId,
    filterMode,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | defaults to undefined|
| **filterMode** | [**0 | 1 | 2 | 3**]**Array<0 &#124; 1 &#124; 2 &#124; 3>** | Telegram post selection rule from enum; not an OAuth scope. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**TelegramChatPostsItem**

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

