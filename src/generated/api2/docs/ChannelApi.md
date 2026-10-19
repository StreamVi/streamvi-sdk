# ChannelApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addChannelMethodAddBizonV1**](#addchannelmethodaddbizonv1) | **POST** /method/channel/add/bizon | Add bizon channel|
|[**addChannelMethodAddBoostyV1**](#addchannelmethodaddboostyv1) | **POST** /method/channel/add/boosty | Add boosty channel|
|[**addChannelMethodAddCustomV1**](#addchannelmethodaddcustomv1) | **POST** /method/channel/add/custom | Add custom channel|
|[**addChannelMethodAddDouyuV1**](#addchannelmethodadddouyuv1) | **POST** /method/channel/add/douyu | Add douyu channel|
|[**addChannelMethodAddFbV1**](#addchannelmethodaddfbv1) | **POST** /method/channel/add/fb | Add fb channel|
|[**addChannelMethodAddFc2LiveV1**](#addchannelmethodaddfc2livev1) | **POST** /method/channel/add/fc2Live | Add fc2Live channel|
|[**addChannelMethodAddGetcourseV1**](#addchannelmethodaddgetcoursev1) | **POST** /method/channel/add/getcourse | Add getcourse channel|
|[**addChannelMethodAddGoodgameV1**](#addchannelmethodaddgoodgamev1) | **POST** /method/channel/add/goodgame | Add goodgame channel|
|[**addChannelMethodAddHuyaV1**](#addchannelmethodaddhuyav1) | **POST** /method/channel/add/huya | Add huya channel|
|[**addChannelMethodAddInstagramV1**](#addchannelmethodaddinstagramv1) | **POST** /method/channel/add/instagram | Add instagram channel|
|[**addChannelMethodAddKickV1**](#addchannelmethodaddkickv1) | **POST** /method/channel/add/kick | Add kick channel|
|[**addChannelMethodAddKinescopeV1**](#addchannelmethodaddkinescopev1) | **POST** /method/channel/add/kinescope | Add kinescope channel|
|[**addChannelMethodAddLinkedinV1**](#addchannelmethodaddlinkedinv1) | **POST** /method/channel/add/linkedin | Add linkedin channel|
|[**addChannelMethodAddNavertvV1**](#addchannelmethodaddnavertvv1) | **POST** /method/channel/add/navertv | Add navertv channel|
|[**addChannelMethodAddNimotvV1**](#addchannelmethodaddnimotvv1) | **POST** /method/channel/add/nimotv | Add nimotv channel|
|[**addChannelMethodAddNonoliveV1**](#addchannelmethodaddnonolivev1) | **POST** /method/channel/add/nonolive | Add nonolive channel|
|[**addChannelMethodAddOkV1**](#addchannelmethodaddokv1) | **POST** /method/channel/add/ok | Add ok channel|
|[**addChannelMethodAddPlvideoV1**](#addchannelmethodaddplvideov1) | **POST** /method/channel/add/plvideo | Add plvideo channel|
|[**addChannelMethodAddRutubeV1**](#addchannelmethodaddrutubev1) | **POST** /method/channel/add/rutube | Add rutube channel|
|[**addChannelMethodAddSrtV1**](#addchannelmethodaddsrtv1) | **POST** /method/channel/add/srt | Add srt channel|
|[**addChannelMethodAddSteamV1**](#addchannelmethodaddsteamv1) | **POST** /method/channel/add/steam | Add steam channel|
|[**addChannelMethodAddTachidV1**](#addchannelmethodaddtachidv1) | **POST** /method/channel/add/tachid | Add tach channel|
|[**addChannelMethodAddTelegramV1**](#addchannelmethodaddtelegramv1) | **POST** /method/channel/add/telegram | Add telegram channel|
|[**addChannelMethodAddTiktokV1**](#addchannelmethodaddtiktokv1) | **POST** /method/channel/add/tiktok | Add tiktok channel|
|[**addChannelMethodAddVkV1**](#addchannelmethodaddvkv1) | **POST** /method/channel/add/vk | Add vk channel|
|[**addChannelMethodAddVliveV1**](#addchannelmethodaddvlivev1) | **POST** /method/channel/add/vlive | Add vlive channel|
|[**addChannelMethodAddZhanqiTvV1**](#addchannelmethodaddzhanqitvv1) | **POST** /method/channel/add/zhanqitv | Add zhanqitv channel|
|[**channelDeleteChannelV1**](#channeldeletechannelv1) | **POST** /method/channel/delete | Delete channel|
|[**channelGetChannelV1**](#channelgetchannelv1) | **GET** /method/channel/get | Get channel by id|
|[**channelSetDelayV1**](#channelsetdelayv1) | **GET** /method/channel/set-delay | Emit simulated channel statuses for manual testing|
|[**channelShortChannelListV1**](#channelshortchannellistv1) | **GET** /method/channel/short | Minimal channel list|
|[**methodSearchV1**](#methodsearchv1) | **GET** /method/channel/search | Search channels connected to a project|
|[**methodSetStatusLegacyV1**](#methodsetstatuslegacyv1) | **POST** /method/channel/set-status | Set desired channel state|
|[**methodSetStatusV1**](#methodsetstatusv1) | **PUT** /method/channel/status | Set desired channel state|

# **addChannelMethodAddBizonV1**
> AddChannelResponse addChannelMethodAddBizonV1(bizonDto)

Add a bizon destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    BizonDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let bizonDto: BizonDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddBizonV1(
    bizonDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bizonDto** | **BizonDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddBoostyV1**
> AddChannelResponse addChannelMethodAddBoostyV1(boostyDto)

Add a boosty destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    BoostyDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let boostyDto: BoostyDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddBoostyV1(
    boostyDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **boostyDto** | **BoostyDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddCustomV1**
> AddChannelResponse addChannelMethodAddCustomV1(customDto)

Add a custom destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    CustomDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let customDto: CustomDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddCustomV1(
    customDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customDto** | **CustomDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddDouyuV1**
> AddChannelResponse addChannelMethodAddDouyuV1(douyuDto)

Add a douyu destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    DouyuDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let douyuDto: DouyuDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddDouyuV1(
    douyuDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **douyuDto** | **DouyuDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddFbV1**
> AddChannelResponse addChannelMethodAddFbV1(fbDto)

Add a fb destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    FbDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let fbDto: FbDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddFbV1(
    fbDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fbDto** | **FbDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddFc2LiveV1**
> AddChannelResponse addChannelMethodAddFc2LiveV1(fc2liveDto)

Add a fc2live destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    Fc2liveDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let fc2liveDto: Fc2liveDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddFc2LiveV1(
    fc2liveDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fc2liveDto** | **Fc2liveDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddGetcourseV1**
> AddChannelResponse addChannelMethodAddGetcourseV1(getcourseDto)

Add a getcourse destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    GetcourseDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let getcourseDto: GetcourseDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddGetcourseV1(
    getcourseDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getcourseDto** | **GetcourseDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddGoodgameV1**
> AddChannelResponse addChannelMethodAddGoodgameV1(goodgameDto)

Add a goodgame destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    GoodgameDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let goodgameDto: GoodgameDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddGoodgameV1(
    goodgameDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goodgameDto** | **GoodgameDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddHuyaV1**
> AddChannelResponse addChannelMethodAddHuyaV1(huyaDto)

Add a huya destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    HuyaDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let huyaDto: HuyaDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddHuyaV1(
    huyaDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **huyaDto** | **HuyaDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddInstagramV1**
> AddChannelResponse addChannelMethodAddInstagramV1(instagramDto)

Add a instagram destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    InstagramDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let instagramDto: InstagramDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddInstagramV1(
    instagramDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instagramDto** | **InstagramDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddKickV1**
> AddChannelResponse addChannelMethodAddKickV1(kickDto)

Add a kick destination to project_id. channel_url is the platform channel URL; rtmp_url and stream_key are publishing credentials. Channel details are checked on the platform. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    KickDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let kickDto: KickDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddKickV1(
    kickDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kickDto** | **KickDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddKinescopeV1**
> AddChannelResponse addChannelMethodAddKinescopeV1(kinescopeDto)

Add a kinescope destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    KinescopeDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let kinescopeDto: KinescopeDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddKinescopeV1(
    kinescopeDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kinescopeDto** | **KinescopeDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddLinkedinV1**
> AddChannelResponse addChannelMethodAddLinkedinV1(linkedinDto)

Add a linkedin destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    LinkedinDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let linkedinDto: LinkedinDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddLinkedinV1(
    linkedinDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **linkedinDto** | **LinkedinDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddNavertvV1**
> AddChannelResponse addChannelMethodAddNavertvV1(navertvDto)

Add a navertv destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    NavertvDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let navertvDto: NavertvDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddNavertvV1(
    navertvDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **navertvDto** | **NavertvDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddNimotvV1**
> AddChannelResponse addChannelMethodAddNimotvV1(nimotvDto)

Add a nimotv destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    NimotvDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let nimotvDto: NimotvDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddNimotvV1(
    nimotvDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nimotvDto** | **NimotvDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddNonoliveV1**
> AddChannelResponse addChannelMethodAddNonoliveV1(nonoliveDto)

Add a nonolive destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    NonoliveDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let nonoliveDto: NonoliveDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddNonoliveV1(
    nonoliveDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nonoliveDto** | **NonoliveDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddOkV1**
> AddChannelResponse addChannelMethodAddOkV1(okDto)

Add a ok destination to project_id. account_id is the connected platform account; channel_id is the external string ID from GET /method/platforms/account/channels, not the internal group_id. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    OkDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let okDto: OkDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddOkV1(
    okDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **okDto** | **OkDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddPlvideoV1**
> AddChannelResponse addChannelMethodAddPlvideoV1(plvideoDto)

Add a plvideo destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    PlvideoDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let plvideoDto: PlvideoDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddPlvideoV1(
    plvideoDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **plvideoDto** | **PlvideoDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddRutubeV1**
> AddChannelResponse addChannelMethodAddRutubeV1(rutubeDto)

Add a rutube destination to project_id. channel_url is the platform channel URL; rtmp_url and stream_key are publishing credentials. Channel details are checked on the platform. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    RutubeDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let rutubeDto: RutubeDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddRutubeV1(
    rutubeDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rutubeDto** | **RutubeDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddSrtV1**
> AddChannelResponse addChannelMethodAddSrtV1(methodSrtDto)

Add a srt destination to project_id. ingress_url is the complete SRT URL with port and publishing parameters; name is the display name. The URL may contain secrets. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    MethodSrtDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let methodSrtDto: MethodSrtDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddSrtV1(
    methodSrtDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodSrtDto** | **MethodSrtDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddSteamV1**
> AddChannelResponse addChannelMethodAddSteamV1(steamDto)

Add a steam destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    SteamDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let steamDto: SteamDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddSteamV1(
    steamDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **steamDto** | **SteamDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddTachidV1**
> AddChannelResponse addChannelMethodAddTachidV1(tachidDto)

Add a tachid destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    TachidDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let tachidDto: TachidDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddTachidV1(
    tachidDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tachidDto** | **TachidDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddTelegramV1**
> AddChannelResponse addChannelMethodAddTelegramV1(telegramDto)

Add a telegram destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    TelegramDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let telegramDto: TelegramDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddTelegramV1(
    telegramDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **telegramDto** | **TelegramDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddTiktokV1**
> AddChannelResponse addChannelMethodAddTiktokV1(tiktokDto)

Add a tiktok destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    TiktokDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let tiktokDto: TiktokDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddTiktokV1(
    tiktokDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tiktokDto** | **TiktokDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddVkV1**
> AddChannelResponse addChannelMethodAddVkV1(vkDto)

Add a vk destination to project_id. account_id is the connected platform account; channel_id is the external string ID from GET /method/platforms/account/channels, not the internal group_id. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    VkDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let vkDto: VkDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddVkV1(
    vkDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vkDto** | **VkDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddVliveV1**
> AddChannelResponse addChannelMethodAddVliveV1(vliveDto)

Add a vlive destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    VliveDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let vliveDto: VliveDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddVliveV1(
    vliveDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vliveDto** | **VliveDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **addChannelMethodAddZhanqiTvV1**
> AddChannelResponse addChannelMethodAddZhanqiTvV1(zhanqitvDto)

Add a zhanqitv destination to project_id. name is the display name; rtmp_url and stream_key are platform publishing credentials, not the StreamVi input source key. Returns an internal numeric channel_id corresponding to results[].group_id in GET /method/channel/search. Creation depends on platform availability and project/tariff restrictions; it does not confirm a running broadcast. Credentials must not be included in logs or examples.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    ZhanqitvDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let zhanqitvDto: ZhanqitvDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.addChannelMethodAddZhanqiTvV1(
    zhanqitvDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zhanqitvDto** | **ZhanqitvDto**|  | |
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**AddChannelResponse**

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

# **channelDeleteChannelV1**
> SuccessResponse channelDeleteChannelV1(deleteChannelDto)

Delete a channel through the deletion use case for project_id and internal channel_id after checking user permissions. This deletes/revokes the relationship rather than temporarily disabling it. For \"disable the channel\", use PUT /method/channel/status with active=false; obtain the internal ID from search results[].group_id.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    DeleteChannelDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let deleteChannelDto: DeleteChannelDto; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelDeleteChannelV1(
    deleteChannelDto,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteChannelDto** | **DeleteChannelDto**|  | |
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

# **channelGetChannelV1**
> SearchChannelItem channelGetChannelV1()

Read the channel connected to project_id by internal numeric channel_id. Obtain it from results[].group_id in GET /method/channel/search; results[].id is the external platform identifier. Returns the channel object without changing active.

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelGetChannelV1(
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

**SearchChannelItem**

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

# **channelSetDelayV1**
> SuccessResponse channelSetDelayV1()

Legacy manual-test endpoint. Emits simulated wait_transcoding, init, live and offline channel-status notifications through Centrifugo. Despite using GET, this triggers notifications; it does not configure a real broadcast delay or report the actual channel state. The response does not wait for the sequence to finish. Not intended for normal channel management or automated broadcast workflows.

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let channelId: number; //Internal channel ID for simulated notifications; not an external platform id. (default to undefined)
let projectId: number; //Project for simulated notifications; this method does not configure actual latency. (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelSetDelayV1(
    channelId,
    projectId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelId** | [**number**] | Internal channel ID for simulated notifications; not an external platform id. | defaults to undefined|
| **projectId** | [**number**] | Project for simulated notifications; this method does not configure actual latency. | defaults to undefined|
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

# **channelShortChannelListV1**
> SiteGetShortChannelResponse channelShortChannelListV1()

Get a short channel list for the selected project_id. Intended for channel selection; use GET /method/channel/search for filtering and a full result. Listing neither enables nor disables channels.

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.channelShortChannelListV1(
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

**SiteGetShortChannelResponse**

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

# **methodSearchV1**
> SiteSearchChannelResponse methodSearchV1()

Returns a paginated list of channels connected to project_id. Each result has group_id (internal numeric StreamVi channel ID, used as channel_id in management calls) and id (external/platform string ID, not for management). Keep the same project_id for later channel calls. The type, platform and name filters are combined. Results are ordered by channel ID; offset is the number of results to skip, not a page number. The active filter means enabled in the project, not necessarily broadcasting live.

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //ID of the project whose connected channels are searched. (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let type: 'all' | 'my' | 'available' | 'active'; //Channel selection within the project. all (also used when omitted): all connected channels; my: channels whose owner ID equals project_id; available: channels connected with guest usage; active: channels enabled in the project, regardless of whether they are currently broadcasting. Combined with the platform and name filters. (optional) (default to undefined)
let platform: string; //Comma-separated platform codes, for example youtube,vk,twitch, without spaces. Matches any listed platform; when omitted, does not filter by platform. Combined with the other filters. (optional) (default to undefined)
let name: string; //Channel name filter, up to 10 characters. Matches names using a contains pattern; percent (%) and underscore (_) act as SQL LIKE wildcards. When omitted or empty, does not filter by name. (optional) (default to undefined)
let limit: number; //Requested number of channels in the result page. Defaults to 30. (optional) (default to 30)
let offset: number; //Number of matching channels to skip, not a page number. Defaults to 0. Results are ordered by channel ID. (optional) (default to 0)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodSearchV1(
    language,
    projectId,
    v,
    type,
    platform,
    name,
    limit,
    offset,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | ID of the project whose connected channels are searched. | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **type** | [**&#39;all&#39; | &#39;my&#39; | &#39;available&#39; | &#39;active&#39;**]**Array<&#39;all&#39; &#124; &#39;my&#39; &#124; &#39;available&#39; &#124; &#39;active&#39;>** | Channel selection within the project. all (also used when omitted): all connected channels; my: channels whose owner ID equals project_id; available: channels connected with guest usage; active: channels enabled in the project, regardless of whether they are currently broadcasting. Combined with the platform and name filters. | (optional) defaults to undefined|
| **platform** | [**string**] | Comma-separated platform codes, for example youtube,vk,twitch, without spaces. Matches any listed platform; when omitted, does not filter by platform. Combined with the other filters. | (optional) defaults to undefined|
| **name** | [**string**] | Channel name filter, up to 10 characters. Matches names using a contains pattern; percent (%) and underscore (_) act as SQL LIKE wildcards. When omitted or empty, does not filter by name. | (optional) defaults to undefined|
| **limit** | [**number**] | Requested number of channels in the result page. Defaults to 30. | (optional) defaults to 30|
| **offset** | [**number**] | Number of matching channels to skip, not a page number. Defaults to 0. Results are ordered by channel ID. | (optional) defaults to 0|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**SiteSearchChannelResponse**

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

# **methodSetStatusLegacyV1**
> SuccessResponse methodSetStatusLegacyV1(methodSetStatusChannelRequest)

Deprecated. Use PUT /method/channel/status with the active field instead of status.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    MethodSetStatusChannelRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let methodSetStatusChannelRequest: MethodSetStatusChannelRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodSetStatusLegacyV1(
    methodSetStatusChannelRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodSetStatusChannelRequest** | **MethodSetStatusChannelRequest**|  | |
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
|**200** |  |  -  |
|**400** | &#x60;tariff_limit_channels&#x60; when the active-channel limit is reached; &#x60;tariff_not_support_custom_channels&#x60; when the tariff does not support custom channels. |  -  |
|**403** | &#x60;restream_tariff_required&#x60; when the project has no active restream tariff. |  -  |
|**503** | &#x60;restream_tariff_check_unavailable&#x60; when the tariff service cannot complete the check. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodSetStatusV1**
> SuccessResponse methodSetStatusV1(methodChannelStatusRequest)

Enable or disable an existing channel in the selected project. Use channel_id=group_id from channel search results, not the external/platform id. Keep the same project_id used for search. Send active=false to disable and active=true to enable. Both \'turn off the channel\' and \'disable the channel\' mean active=false; \'enable the channel\' means active=true. Success confirms the desired state; verify actual broadcasting separately.

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    MethodChannelStatusRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let methodChannelStatusRequest: MethodChannelStatusRequest; //
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodSetStatusV1(
    methodChannelStatusRequest,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodChannelStatusRequest** | **MethodChannelStatusRequest**|  | |
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
|**200** |  |  -  |
|**400** | &#x60;tariff_limit_channels&#x60; when the active-channel limit is reached; &#x60;tariff_not_support_custom_channels&#x60; when the tariff does not support custom channels. |  -  |
|**403** | &#x60;restream_tariff_required&#x60; when the project has no active restream tariff. |  -  |
|**503** | &#x60;restream_tariff_check_unavailable&#x60; when the tariff service cannot complete the check. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

