# ChannelSettingsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**siteChannelChatControllerGetTelegramSetting1**](#sitechannelchatcontrollergettelegramsetting1) | **GET** /method/channel_settings/chat/telegram/setting | Get telegram settings|
|[**siteChannelChatControllerInitTelegramChatConnect1**](#sitechannelchatcontrollerinittelegramchatconnect1) | **GET** /method/channel_settings/chat/telegram/init | Get code for connected chat|
|[**siteChannelChatControllerRemoveTelegramChat1**](#sitechannelchatcontrollerremovetelegramchat1) | **GET** /method/channel_settings/chat/telegram/disconnect | Disconnect telegram chat|
|[**siteChannelChatControllerSetTelegramSetting1**](#sitechannelchatcontrollersettelegramsetting1) | **POST** /method/channel_settings/chat/telegram/setting | Set telegram settings|
|[**siteChannelChatControllerTelegramPosts1**](#sitechannelchatcontrollertelegramposts1) | **GET** /method/channel_settings/chat/telegram/posts | Get telegram post list|
|[**siteChannelChatControllerUpdateOptionsTelegram1**](#sitechannelchatcontrollerupdateoptionstelegram1) | **POST** /method/channel_settings/chat/setTelegram | Optional settings for telegram|
|[**siteChannelOptionsControllerGetPlanned1**](#sitechanneloptionscontrollergetplanned1) | **GET** /method/channel_settings/options/getPlanned | Get planned list|
|[**siteChannelOptionsControllerGetPlayList1**](#sitechanneloptionscontrollergetplaylist1) | **GET** /method/channel_settings/options/getPlaylist | Get playlists from the platform|
|[**siteChannelOptionsControllerUpdateOptionsOk1**](#sitechanneloptionscontrollerupdateoptionsok1) | **POST** /method/channel_settings/options/setOk | Optional settings for ok. Depends on the tariff.|
|[**siteChannelOptionsControllerUpdateOptionsTrovo1**](#sitechanneloptionscontrollerupdateoptionstrovo1) | **POST** /method/channel_settings/options/setTrovo | Optional settings for trovo. Depends on the tariff.|
|[**siteChannelOptionsControllerUpdateOptionsTwitch1**](#sitechanneloptionscontrollerupdateoptionstwitch1) | **POST** /method/channel_settings/options/setTwitch | Optional settings for twitch. Depends on the tariff.|
|[**siteChannelOptionsControllerUpdateOptionsVk1**](#sitechanneloptionscontrollerupdateoptionsvk1) | **POST** /method/channel_settings/options/setVk | Optional settings for vk. Depends on the tariff.|
|[**siteChannelOptionsControllerUpdateOptionsVkVideoLive1**](#sitechanneloptionscontrollerupdateoptionsvkvideolive1) | **POST** /method/channel_settings/options/setVkVideoLive | Optional settings for vk video live. Depends on the tariff.|
|[**siteChannelOptionsControllerUpdateOptionsYoutube1**](#sitechanneloptionscontrollerupdateoptionsyoutube1) | **POST** /method/channel_settings/options/setYoutube | Optional settings for youtube. Depends on the tariff.|
|[**siteChannelOptionsControllerUpdatePlanned1**](#sitechanneloptionscontrollerupdateplanned1) | **POST** /method/channel_settings/options/setPlanned | Set planned id. Depends on the tariff.|
|[**siteChannelSettingControllerGetStatus1**](#sitechannelsettingcontrollergetstatus1) | **GET** /method/channel_settings/getStatus | Get status platform|
|[**siteChannelSettingControllerSetName1**](#sitechannelsettingcontrollersetname1) | **POST** /method/channel_settings/setName | Set name from custom channel. Global settings.|
|[**siteChannelSettingControllerUpdateRtmp1**](#sitechannelsettingcontrollerupdatertmp1) | **POST** /method/channel_settings/setRtmp | Set rtmp url from channel. Global settings.|
|[**siteChannelSettingControllerUpdateToken1**](#sitechannelsettingcontrollerupdatetoken1) | **GET** /method/channel_settings/update-token | Get status platform|
|[**siteChannelSettingControllerUpdateTranscoder1**](#sitechannelsettingcontrollerupdatetranscoder1) | **POST** /method/channel_settings/setTranscoder | Set transcoder from channel. Personal settings.|
|[**telegramGetPostByFilter**](#telegramgetpostbyfilter) | **GET** /method/channel_settings/chat/telegram/posts/get-by-filter | Get telegram post by filter|

# **siteChannelChatControllerGetTelegramSetting1**
> TelegramSettingsResponseDto siteChannelChatControllerGetTelegramSetting1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteChannelChatControllerGetTelegramSetting1(
    v,
    language,
    projectId,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


### Return type

**TelegramSettingsResponseDto**

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

# **siteChannelChatControllerInitTelegramChatConnect1**
> TelegramInitConnectResponseDto siteChannelChatControllerInitTelegramChatConnect1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteChannelChatControllerInitTelegramChatConnect1(
    v,
    language,
    projectId,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


### Return type

**TelegramInitConnectResponseDto**

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

# **siteChannelChatControllerRemoveTelegramChat1**
> SuccessResponse siteChannelChatControllerRemoveTelegramChat1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteChannelChatControllerRemoveTelegramChat1(
    v,
    language,
    projectId,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


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

# **siteChannelChatControllerSetTelegramSetting1**
> SuccessResponse siteChannelChatControllerSetTelegramSetting1(siteTelegramSetSettingsRequestDto)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteTelegramSetSettingsRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let siteTelegramSetSettingsRequestDto: SiteTelegramSetSettingsRequestDto; //

const { status, data } = await apiInstance.siteChannelChatControllerSetTelegramSetting1(
    v,
    language,
    projectId,
    channelId,
    siteTelegramSetSettingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteTelegramSetSettingsRequestDto** | **SiteTelegramSetSettingsRequestDto**|  | |
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


### Return type

**SuccessResponse**

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

# **siteChannelChatControllerTelegramPosts1**
> SiteTelegramChatPostsResponseDto siteChannelChatControllerTelegramPosts1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteChannelChatControllerTelegramPosts1(
    v,
    language,
    projectId,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


### Return type

**SiteTelegramChatPostsResponseDto**

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

# **siteChannelChatControllerUpdateOptionsTelegram1**
> SuccessResponse siteChannelChatControllerUpdateOptionsTelegram1(siteUpdateChatTelegramRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateChatTelegramRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateChatTelegramRequest: SiteUpdateChatTelegramRequest; //

const { status, data } = await apiInstance.siteChannelChatControllerUpdateOptionsTelegram1(
    siteUpdateChatTelegramRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateChatTelegramRequest** | **SiteUpdateChatTelegramRequest**|  | |


### Return type

**SuccessResponse**

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

# **siteChannelOptionsControllerGetPlanned1**
> ListOfSitePlannedResponse siteChannelOptionsControllerGetPlanned1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteChannelOptionsControllerGetPlanned1(
    v,
    language,
    projectId,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


### Return type

**ListOfSitePlannedResponse**

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

# **siteChannelOptionsControllerGetPlayList1**
> ListOfPlaylistItemResponse siteChannelOptionsControllerGetPlayList1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.siteChannelOptionsControllerGetPlayList1(
    v,
    language,
    projectId,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|


### Return type

**ListOfPlaylistItemResponse**

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

# **siteChannelOptionsControllerUpdateOptionsOk1**
> SuccessResponse siteChannelOptionsControllerUpdateOptionsOk1(siteUpdateOptionsOkRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsOkRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsOkRequest: SiteUpdateOptionsOkRequest; //

const { status, data } = await apiInstance.siteChannelOptionsControllerUpdateOptionsOk1(
    siteUpdateOptionsOkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsOkRequest** | **SiteUpdateOptionsOkRequest**|  | |


### Return type

**SuccessResponse**

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

# **siteChannelOptionsControllerUpdateOptionsTrovo1**
> SuccessResponse siteChannelOptionsControllerUpdateOptionsTrovo1(siteUpdateOptionsTrovoRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsTrovoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsTrovoRequest: SiteUpdateOptionsTrovoRequest; //

const { status, data } = await apiInstance.siteChannelOptionsControllerUpdateOptionsTrovo1(
    siteUpdateOptionsTrovoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsTrovoRequest** | **SiteUpdateOptionsTrovoRequest**|  | |


### Return type

**SuccessResponse**

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

# **siteChannelOptionsControllerUpdateOptionsTwitch1**
> SuccessResponse siteChannelOptionsControllerUpdateOptionsTwitch1(siteUpdateOptionsTwitchRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsTwitchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsTwitchRequest: SiteUpdateOptionsTwitchRequest; //

const { status, data } = await apiInstance.siteChannelOptionsControllerUpdateOptionsTwitch1(
    siteUpdateOptionsTwitchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsTwitchRequest** | **SiteUpdateOptionsTwitchRequest**|  | |


### Return type

**SuccessResponse**

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

# **siteChannelOptionsControllerUpdateOptionsVk1**
> SuccessResponse siteChannelOptionsControllerUpdateOptionsVk1(siteUpdateOptionsVkRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsVkRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsVkRequest: SiteUpdateOptionsVkRequest; //

const { status, data } = await apiInstance.siteChannelOptionsControllerUpdateOptionsVk1(
    siteUpdateOptionsVkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsVkRequest** | **SiteUpdateOptionsVkRequest**|  | |


### Return type

**SuccessResponse**

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

# **siteChannelOptionsControllerUpdateOptionsVkVideoLive1**
> SuccessResponse siteChannelOptionsControllerUpdateOptionsVkVideoLive1(siteUpdateOptionsVkVideoLiveRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsVkVideoLiveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsVkVideoLiveRequest: SiteUpdateOptionsVkVideoLiveRequest; //

const { status, data } = await apiInstance.siteChannelOptionsControllerUpdateOptionsVkVideoLive1(
    siteUpdateOptionsVkVideoLiveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsVkVideoLiveRequest** | **SiteUpdateOptionsVkVideoLiveRequest**|  | |


### Return type

**SuccessResponse**

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

# **siteChannelOptionsControllerUpdateOptionsYoutube1**
> SuccessResponse siteChannelOptionsControllerUpdateOptionsYoutube1(siteUpdateOptionsYoutubeRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteUpdateOptionsYoutubeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteUpdateOptionsYoutubeRequest: SiteUpdateOptionsYoutubeRequest; //

const { status, data } = await apiInstance.siteChannelOptionsControllerUpdateOptionsYoutube1(
    siteUpdateOptionsYoutubeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUpdateOptionsYoutubeRequest** | **SiteUpdateOptionsYoutubeRequest**|  | |


### Return type

**SuccessResponse**

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

# **siteChannelOptionsControllerUpdatePlanned1**
> SitePlannedResponse siteChannelOptionsControllerUpdatePlanned1(siteSetPlannedRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteSetPlannedRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteSetPlannedRequest: SiteSetPlannedRequest; //

const { status, data } = await apiInstance.siteChannelOptionsControllerUpdatePlanned1(
    siteSetPlannedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetPlannedRequest** | **SiteSetPlannedRequest**|  | |


### Return type

**SitePlannedResponse**

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

# **siteChannelSettingControllerGetStatus1**
> SiteChannelStatusResponse siteChannelSettingControllerGetStatus1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

const { status, data } = await apiInstance.siteChannelSettingControllerGetStatus1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SiteChannelStatusResponse**

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

# **siteChannelSettingControllerSetName1**
> SuccessResponse siteChannelSettingControllerSetName1(siteSetNameRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteSetNameRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteSetNameRequest: SiteSetNameRequest; //

const { status, data } = await apiInstance.siteChannelSettingControllerSetName1(
    siteSetNameRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetNameRequest** | **SiteSetNameRequest**|  | |


### Return type

**SuccessResponse**

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

# **siteChannelSettingControllerUpdateRtmp1**
> SuccessResponse siteChannelSettingControllerUpdateRtmp1(siteSetUrlRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteSetUrlRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteSetUrlRequest: SiteSetUrlRequest; //

const { status, data } = await apiInstance.siteChannelSettingControllerUpdateRtmp1(
    siteSetUrlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetUrlRequest** | **SiteSetUrlRequest**|  | |


### Return type

**SuccessResponse**

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

# **siteChannelSettingControllerUpdateToken1**
> siteChannelSettingControllerUpdateToken1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let role: 'account' | 'group'; //Token role (default to undefined)

const { status, data } = await apiInstance.siteChannelSettingControllerUpdateToken1(
    v,
    language,
    projectId,
    channelId,
    role
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|
| **role** | [**&#39;account&#39; | &#39;group&#39;**]**Array<&#39;account&#39; &#124; &#39;group&#39;>** | Token role | defaults to undefined|


### Return type

void (empty response body)

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

# **siteChannelSettingControllerUpdateTranscoder1**
> SuccessResponse siteChannelSettingControllerUpdateTranscoder1(siteSetTranscoderRequest)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    SiteSetTranscoderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let siteSetTranscoderRequest: SiteSetTranscoderRequest; //

const { status, data } = await apiInstance.siteChannelSettingControllerUpdateTranscoder1(
    siteSetTranscoderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteSetTranscoderRequest** | **SiteSetTranscoderRequest**|  | |


### Return type

**SuccessResponse**

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

# **telegramGetPostByFilter**
> SiteTelegramChatPostsItem telegramGetPostByFilter()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let filterMode: number; // (default to undefined)

const { status, data } = await apiInstance.telegramGetPostByFilter(
    v,
    language,
    projectId,
    channelId,
    filterMode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|
| **filterMode** | [**number**] |  | defaults to undefined|


### Return type

**SiteTelegramChatPostsItem**

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

