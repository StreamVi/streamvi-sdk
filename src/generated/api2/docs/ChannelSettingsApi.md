# ChannelSettingsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTelegramSetting1**](#gettelegramsetting1) | **GET** /method/channel_settings/chat/telegram/setting | Get telegram settings|
|[**initTelegramChatConnect1**](#inittelegramchatconnect1) | **GET** /method/channel_settings/chat/telegram/init | Get code for connected chat|
|[**removeTelegramChat1**](#removetelegramchat1) | **GET** /method/channel_settings/chat/telegram/disconnect | Disconnect telegram chat|
|[**setTelegramSetting1**](#settelegramsetting1) | **POST** /method/channel_settings/chat/telegram/setting | Set telegram settings|
|[**telegramPosts1**](#telegramposts1) | **GET** /method/channel_settings/chat/telegram/posts | Get telegram post list|
|[**updateOptionsTelegram1**](#updateoptionstelegram1) | **POST** /method/channel_settings/chat/setTelegram | Optional settings for telegram|
|[**getPlanned1**](#getplanned1) | **GET** /method/channel_settings/options/getPlanned | Get planned list|
|[**getPlayList1**](#getplaylist1) | **GET** /method/channel_settings/options/getPlaylist | Get playlists from the platform|
|[**updateOptionsOk1**](#updateoptionsok1) | **POST** /method/channel_settings/options/setOk | Optional settings for ok. Depends on the tariff.|
|[**updateOptionsTrovo1**](#updateoptionstrovo1) | **POST** /method/channel_settings/options/setTrovo | Optional settings for trovo. Depends on the tariff.|
|[**updateOptionsTwitch1**](#updateoptionstwitch1) | **POST** /method/channel_settings/options/setTwitch | Optional settings for twitch. Depends on the tariff.|
|[**updateOptionsVk1**](#updateoptionsvk1) | **POST** /method/channel_settings/options/setVk | Optional settings for vk. Depends on the tariff.|
|[**updateOptionsVkVideoLive1**](#updateoptionsvkvideolive1) | **POST** /method/channel_settings/options/setVkVideoLive | Optional settings for vk video live. Depends on the tariff.|
|[**updateOptionsYoutube1**](#updateoptionsyoutube1) | **POST** /method/channel_settings/options/setYoutube | Optional settings for youtube. Depends on the tariff.|
|[**updatePlanned1**](#updateplanned1) | **POST** /method/channel_settings/options/setPlanned | Set planned id. Depends on the tariff.|
|[**getStatus1**](#getstatus1) | **GET** /method/channel_settings/getStatus | Get status platform|
|[**setName1**](#setname1) | **POST** /method/channel_settings/setName | Set name from custom channel. Global settings.|
|[**updateRtmp1**](#updatertmp1) | **POST** /method/channel_settings/setRtmp | Set rtmp url from channel. Global settings.|
|[**updateToken1**](#updatetoken1) | **GET** /method/channel_settings/update-token | Get status platform|
|[**updateTranscoder1**](#updatetranscoder1) | **POST** /method/channel_settings/setTranscoder | Set transcoder from channel. Personal settings.|
|[**telegramGetPostByFilter**](#telegramgetpostbyfilter) | **GET** /method/channel_settings/chat/telegram/posts/get-by-filter | Get telegram post by filter|

# **getTelegramSetting1**
> TelegramSettingsResponseDto getTelegramSetting1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.getTelegramSetting1({
    language,
    projectId,
    channelId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **initTelegramChatConnect1**
> TelegramInitConnectResponseDto initTelegramChatConnect1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.initTelegramChatConnect1({
    language,
    projectId,
    channelId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **removeTelegramChat1**
> SuccessResponse removeTelegramChat1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.removeTelegramChat1({
    language,
    projectId,
    channelId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **setTelegramSetting1**
> SuccessResponse setTelegramSetting1(siteTelegramSetSettingsRequestDto)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteTelegramSetSettingsRequestDto } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let siteTelegramSetSettingsRequestDto: SiteTelegramSetSettingsRequestDto; //

const { status, data } = await apiInstance.setTelegramSetting1({
    language,
    projectId,
    channelId,
    siteTelegramSetSettingsRequestDto
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteTelegramSetSettingsRequestDto** | **SiteTelegramSetSettingsRequestDto**|  | |
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

# **telegramPosts1**
> SiteTelegramChatPostsResponseDto telegramPosts1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.telegramPosts1({
    language,
    projectId,
    channelId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **updateOptionsTelegram1**
> SuccessResponse updateOptionsTelegram1(siteUpdateChatTelegramRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteUpdateChatTelegramRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteUpdateChatTelegramRequest: SiteUpdateChatTelegramRequest; //

const { status, data } = await apiInstance.updateOptionsTelegram1({
    siteUpdateChatTelegramRequest
  });
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

# **getPlanned1**
> ListOfSitePlannedResponse getPlanned1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.getPlanned1({
    language,
    projectId,
    channelId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **getPlayList1**
> ListOfPlaylistItemResponse getPlayList1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)

const { status, data } = await apiInstance.getPlayList1({
    language,
    projectId,
    channelId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **updateOptionsOk1**
> SuccessResponse updateOptionsOk1(siteUpdateOptionsOkRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteUpdateOptionsOkRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteUpdateOptionsOkRequest: SiteUpdateOptionsOkRequest; //

const { status, data } = await apiInstance.updateOptionsOk1({
    siteUpdateOptionsOkRequest
  });
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

# **updateOptionsTrovo1**
> SuccessResponse updateOptionsTrovo1(siteUpdateOptionsTrovoRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteUpdateOptionsTrovoRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteUpdateOptionsTrovoRequest: SiteUpdateOptionsTrovoRequest; //

const { status, data } = await apiInstance.updateOptionsTrovo1({
    siteUpdateOptionsTrovoRequest
  });
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

# **updateOptionsTwitch1**
> SuccessResponse updateOptionsTwitch1(siteUpdateOptionsTwitchRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteUpdateOptionsTwitchRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteUpdateOptionsTwitchRequest: SiteUpdateOptionsTwitchRequest; //

const { status, data } = await apiInstance.updateOptionsTwitch1({
    siteUpdateOptionsTwitchRequest
  });
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

# **updateOptionsVk1**
> SuccessResponse updateOptionsVk1(siteUpdateOptionsVkRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteUpdateOptionsVkRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteUpdateOptionsVkRequest: SiteUpdateOptionsVkRequest; //

const { status, data } = await apiInstance.updateOptionsVk1({
    siteUpdateOptionsVkRequest
  });
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

# **updateOptionsVkVideoLive1**
> SuccessResponse updateOptionsVkVideoLive1(siteUpdateOptionsVkVideoLiveRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteUpdateOptionsVkVideoLiveRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteUpdateOptionsVkVideoLiveRequest: SiteUpdateOptionsVkVideoLiveRequest; //

const { status, data } = await apiInstance.updateOptionsVkVideoLive1({
    siteUpdateOptionsVkVideoLiveRequest
  });
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

# **updateOptionsYoutube1**
> SuccessResponse updateOptionsYoutube1(siteUpdateOptionsYoutubeRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteUpdateOptionsYoutubeRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteUpdateOptionsYoutubeRequest: SiteUpdateOptionsYoutubeRequest; //

const { status, data } = await apiInstance.updateOptionsYoutube1({
    siteUpdateOptionsYoutubeRequest
  });
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

# **updatePlanned1**
> SitePlannedResponse updatePlanned1(siteSetPlannedRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteSetPlannedRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteSetPlannedRequest: SiteSetPlannedRequest; //

const { status, data } = await apiInstance.updatePlanned1({
    siteSetPlannedRequest
  });
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

# **getStatus1**
> SiteChannelStatusResponse getStatus1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

const { status, data } = await apiInstance.getStatus1({});
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

# **setName1**
> SuccessResponse setName1(siteSetNameRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteSetNameRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteSetNameRequest: SiteSetNameRequest; //

const { status, data } = await apiInstance.setName1({
    siteSetNameRequest
  });
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

# **updateRtmp1**
> SuccessResponse updateRtmp1(siteSetUrlRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteSetUrlRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteSetUrlRequest: SiteSetUrlRequest; //

const { status, data } = await apiInstance.updateRtmp1({
    siteSetUrlRequest
  });
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

# **updateToken1**
> updateToken1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let role: 'account' | 'group'; //Token role (default to undefined)

const { status, data } = await apiInstance.updateToken1({
    language,
    projectId,
    channelId,
    role
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **updateTranscoder1**
> SuccessResponse updateTranscoder1(siteSetTranscoderRequest)


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi
    SiteSetTranscoderRequest } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let siteSetTranscoderRequest: SiteSetTranscoderRequest; //

const { status, data } = await apiInstance.updateTranscoder1({
    siteSetTranscoderRequest
  });
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
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ChannelSettingsApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ChannelSettingsApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let filterMode: number; // (default to undefined)

const { status, data } = await apiInstance.telegramGetPostByFilter({
    language,
    projectId,
    channelId,
    filterMode
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

