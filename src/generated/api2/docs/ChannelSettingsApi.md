# ChannelSettingsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**channelChatGetTelegramSettingV1**(#channelchatgettelegramsettingv1) | **GET** /method/channel_settings/chat/telegram/setting | Get telegram settings|
|**channelChatInitTelegramChatConnectV1**(#channelchatinittelegramchatconnectv1) | **GET** /method/channel_settings/chat/telegram/init | Get code for connected chat|
|**channelChatRemoveTelegramChatV1**(#channelchatremovetelegramchatv1) | **GET** /method/channel_settings/chat/telegram/disconnect | Disconnect telegram chat|
|**channelChatSetTelegramSettingV1**(#channelchatsettelegramsettingv1) | **POST** /method/channel_settings/chat/telegram/setting | Set telegram settings|
|**channelChatTelegramPostsV1**(#channelchattelegrampostsv1) | **GET** /method/channel_settings/chat/telegram/posts | Get telegram post list|
|**channelChatUpdateOptionsTelegramV1**(#channelchatupdateoptionstelegramv1) | **POST** /method/channel_settings/chat/setTelegram | Optional settings for telegram|
|**channelOptionsGetPlannedV1**(#channeloptionsgetplannedv1) | **GET** /method/channel_settings/options/getPlanned | Get planned list|
|**channelOptionsGetPlayListV1**(#channeloptionsgetplaylistv1) | **GET** /method/channel_settings/options/getPlaylist | Get playlists from the platform|
|**channelOptionsUpdateOptionsOkV1**(#channeloptionsupdateoptionsokv1) | **POST** /method/channel_settings/options/setOk | Optional settings for ok. Depends on the tariff.|
|**channelOptionsUpdateOptionsTrovoV1**(#channeloptionsupdateoptionstrovov1) | **POST** /method/channel_settings/options/setTrovo | Optional settings for trovo. Depends on the tariff.|
|**channelOptionsUpdateOptionsTwitchV1**(#channeloptionsupdateoptionstwitchv1) | **POST** /method/channel_settings/options/setTwitch | Optional settings for twitch. Depends on the tariff.|
|**channelOptionsUpdateOptionsVkV1**(#channeloptionsupdateoptionsvkv1) | **POST** /method/channel_settings/options/setVk | Optional settings for vk. Depends on the tariff.|
|**channelOptionsUpdateOptionsVkVideoLiveV1**(#channeloptionsupdateoptionsvkvideolivev1) | **POST** /method/channel_settings/options/setVkVideoLive | Optional settings for vk video live. Depends on the tariff.|
|**channelOptionsUpdateOptionsYoutubeV1**(#channeloptionsupdateoptionsyoutubev1) | **POST** /method/channel_settings/options/setYoutube | Optional settings for youtube. Depends on the tariff.|
|**channelOptionsUpdatePlannedV1**(#channeloptionsupdateplannedv1) | **POST** /method/channel_settings/options/setPlanned | Set planned id. Depends on the tariff.|
|**channelSettingGetStatusV1**(#channelsettinggetstatusv1) | **GET** /method/channel_settings/getStatus | Get status platform|
|**channelSettingSetNameV1**(#channelsettingsetnamev1) | **POST** /method/channel_settings/setName | Set name from custom channel. Global settings.|
|**channelSettingUpdateRtmpV1**(#channelsettingupdatertmpv1) | **POST** /method/channel_settings/setRtmp | Set rtmp url from channel. Global settings.|
|**channelSettingUpdateTokenV1**(#channelsettingupdatetokenv1) | **GET** /method/channel_settings/update-token | Get status platform|
|**channelSettingUpdateTranscoderV1**(#channelsettingupdatetranscoderv1) | **POST** /method/channel_settings/setTranscoder | Set transcoder from channel. Personal settings.|
|**telegramGetPostByFilterV1**(#telegramgetpostbyfilterv1) | **GET** /method/channel_settings/chat/telegram/posts/get-by-filter | Get telegram post by filter|

# **channelChatGetTelegramSettingV1**
> TelegramSettingsResponseDto channelChatGetTelegramSettingV1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelChatGetTelegramSettingV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **channelChatInitTelegramChatConnectV1**
> TelegramInitConnectResponseDto channelChatInitTelegramChatConnectV1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelChatInitTelegramChatConnectV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **channelChatRemoveTelegramChatV1**
> SuccessResponse channelChatRemoveTelegramChatV1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelChatRemoveTelegramChatV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **channelChatSetTelegramSettingV1**
> SuccessResponse channelChatSetTelegramSettingV1(telegramSetSettingsRequestDto)


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration,
    TelegramSetSettingsRequestDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let telegramSetSettingsRequestDto: TelegramSetSettingsRequestDto; //
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelChatSetTelegramSettingV1(
    language,
    projectId,
    channelId,
    telegramSetSettingsRequestDto,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **telegramSetSettingsRequestDto** | **TelegramSetSettingsRequestDto**|  | |
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **channelChatTelegramPostsV1**
> TelegramChatPostsResponseDto channelChatTelegramPostsV1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelChatTelegramPostsV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**TelegramChatPostsResponseDto**

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

# **channelChatUpdateOptionsTelegramV1**
> SuccessResponse channelChatUpdateOptionsTelegramV1(siteUpdateChatTelegramRequest)


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

const { status, data } = await apiInstance.channelChatUpdateOptionsTelegramV1(
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

# **channelOptionsGetPlannedV1**
> ListOfSitePlannedResponse channelOptionsGetPlannedV1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelOptionsGetPlannedV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **channelOptionsGetPlayListV1**
> ListOfPlaylistItemResponse channelOptionsGetPlayListV1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelOptionsGetPlayListV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **channelOptionsUpdateOptionsOkV1**
> SuccessResponse channelOptionsUpdateOptionsOkV1(siteUpdateOptionsOkRequest)


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

const { status, data } = await apiInstance.channelOptionsUpdateOptionsOkV1(
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

# **channelOptionsUpdateOptionsTrovoV1**
> SuccessResponse channelOptionsUpdateOptionsTrovoV1(siteUpdateOptionsTrovoRequest)


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

const { status, data } = await apiInstance.channelOptionsUpdateOptionsTrovoV1(
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

# **channelOptionsUpdateOptionsTwitchV1**
> SuccessResponse channelOptionsUpdateOptionsTwitchV1(siteUpdateOptionsTwitchRequest)


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

const { status, data } = await apiInstance.channelOptionsUpdateOptionsTwitchV1(
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

# **channelOptionsUpdateOptionsVkV1**
> SuccessResponse channelOptionsUpdateOptionsVkV1(siteUpdateOptionsVkRequest)


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

const { status, data } = await apiInstance.channelOptionsUpdateOptionsVkV1(
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

# **channelOptionsUpdateOptionsVkVideoLiveV1**
> SuccessResponse channelOptionsUpdateOptionsVkVideoLiveV1(siteUpdateOptionsVkVideoLiveRequest)


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

const { status, data } = await apiInstance.channelOptionsUpdateOptionsVkVideoLiveV1(
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

# **channelOptionsUpdateOptionsYoutubeV1**
> SuccessResponse channelOptionsUpdateOptionsYoutubeV1(siteUpdateOptionsYoutubeRequest)


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

const { status, data } = await apiInstance.channelOptionsUpdateOptionsYoutubeV1(
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

# **channelOptionsUpdatePlannedV1**
> SitePlannedResponse channelOptionsUpdatePlannedV1(siteSetPlannedRequest)


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

const { status, data } = await apiInstance.channelOptionsUpdatePlannedV1(
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

# **channelSettingGetStatusV1**
> SiteChannelStatusResponse channelSettingGetStatusV1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

const { status, data } = await apiInstance.channelSettingGetStatusV1();
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

# **channelSettingSetNameV1**
> SuccessResponse channelSettingSetNameV1(siteSetNameRequest)


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

const { status, data } = await apiInstance.channelSettingSetNameV1(
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

# **channelSettingUpdateRtmpV1**
> SuccessResponse channelSettingUpdateRtmpV1(siteSetUrlRequest)


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

const { status, data } = await apiInstance.channelSettingUpdateRtmpV1(
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

# **channelSettingUpdateTokenV1**
> channelSettingUpdateTokenV1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let role: 'account' | 'group'; //Token role (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelSettingUpdateTokenV1(
    language,
    projectId,
    channelId,
    role,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **role** | **'account' | 'group'** | Token role | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **channelSettingUpdateTranscoderV1**
> SuccessResponse channelSettingUpdateTranscoderV1(siteSetTranscoderRequest)


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

const { status, data } = await apiInstance.channelSettingUpdateTranscoderV1(
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

# **telegramGetPostByFilterV1**
> TelegramChatPostsItem telegramGetPostByFilterV1()


### Example

```typescript
import {
    ChannelSettingsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelSettingsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let filterMode: number; // (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.telegramGetPostByFilterV1(
    language,
    projectId,
    channelId,
    filterMode,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **channelId** | **number** | Channel id | defaults to undefined|
| **filterMode** | **number** |  | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**TelegramChatPostsItem**

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

