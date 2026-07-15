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
|[**channelSetDelayV1**](#channelsetdelayv1) | **GET** /method/channel/set-delay | Set delay - test point|
|[**channelShortChannelListV1**](#channelshortchannellistv1) | **GET** /method/channel/short | Minimal channel list|
|[**methodSearchV1**](#methodsearchv1) | **GET** /method/channel/search | Search channel list|
|[**methodSetStatusV1**](#methodsetstatusv1) | **POST** /method/channel/set-status | Get live status|

# **addChannelMethodAddBizonV1**
> addChannelMethodAddBizonV1(bizonDto)


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

const { status, data } = await apiInstance.addChannelMethodAddBizonV1(
    bizonDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bizonDto** | **BizonDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddBoostyV1**
> addChannelMethodAddBoostyV1(boostyDto)


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

const { status, data } = await apiInstance.addChannelMethodAddBoostyV1(
    boostyDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **boostyDto** | **BoostyDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddCustomV1**
> addChannelMethodAddCustomV1(customDto)


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

const { status, data } = await apiInstance.addChannelMethodAddCustomV1(
    customDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customDto** | **CustomDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddDouyuV1**
> addChannelMethodAddDouyuV1(douyuDto)


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

const { status, data } = await apiInstance.addChannelMethodAddDouyuV1(
    douyuDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **douyuDto** | **DouyuDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddFbV1**
> addChannelMethodAddFbV1(fbDto)


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

const { status, data } = await apiInstance.addChannelMethodAddFbV1(
    fbDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fbDto** | **FbDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddFc2LiveV1**
> addChannelMethodAddFc2LiveV1(fc2liveDto)


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

const { status, data } = await apiInstance.addChannelMethodAddFc2LiveV1(
    fc2liveDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fc2liveDto** | **Fc2liveDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddGetcourseV1**
> addChannelMethodAddGetcourseV1(getcourseDto)


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

const { status, data } = await apiInstance.addChannelMethodAddGetcourseV1(
    getcourseDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getcourseDto** | **GetcourseDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddGoodgameV1**
> addChannelMethodAddGoodgameV1(goodgameDto)


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

const { status, data } = await apiInstance.addChannelMethodAddGoodgameV1(
    goodgameDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goodgameDto** | **GoodgameDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddHuyaV1**
> addChannelMethodAddHuyaV1(huyaDto)


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

const { status, data } = await apiInstance.addChannelMethodAddHuyaV1(
    huyaDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **huyaDto** | **HuyaDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddInstagramV1**
> addChannelMethodAddInstagramV1(instagramDto)


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

const { status, data } = await apiInstance.addChannelMethodAddInstagramV1(
    instagramDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instagramDto** | **InstagramDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddKickV1**
> addChannelMethodAddKickV1(kickDto)


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

const { status, data } = await apiInstance.addChannelMethodAddKickV1(
    kickDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kickDto** | **KickDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddKinescopeV1**
> addChannelMethodAddKinescopeV1(kinescopeDto)


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

const { status, data } = await apiInstance.addChannelMethodAddKinescopeV1(
    kinescopeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kinescopeDto** | **KinescopeDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddLinkedinV1**
> addChannelMethodAddLinkedinV1(linkedinDto)


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

const { status, data } = await apiInstance.addChannelMethodAddLinkedinV1(
    linkedinDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **linkedinDto** | **LinkedinDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddNavertvV1**
> addChannelMethodAddNavertvV1(navertvDto)


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

const { status, data } = await apiInstance.addChannelMethodAddNavertvV1(
    navertvDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **navertvDto** | **NavertvDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddNimotvV1**
> addChannelMethodAddNimotvV1(nimotvDto)


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

const { status, data } = await apiInstance.addChannelMethodAddNimotvV1(
    nimotvDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nimotvDto** | **NimotvDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddNonoliveV1**
> addChannelMethodAddNonoliveV1(nonoliveDto)


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

const { status, data } = await apiInstance.addChannelMethodAddNonoliveV1(
    nonoliveDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nonoliveDto** | **NonoliveDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddOkV1**
> addChannelMethodAddOkV1(okDto)


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

const { status, data } = await apiInstance.addChannelMethodAddOkV1(
    okDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **okDto** | **OkDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddPlvideoV1**
> addChannelMethodAddPlvideoV1(plvideoDto)


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

const { status, data } = await apiInstance.addChannelMethodAddPlvideoV1(
    plvideoDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **plvideoDto** | **PlvideoDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddRutubeV1**
> addChannelMethodAddRutubeV1(rutubeDto)


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

const { status, data } = await apiInstance.addChannelMethodAddRutubeV1(
    rutubeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rutubeDto** | **RutubeDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddSrtV1**
> addChannelMethodAddSrtV1(methodSrtDto)


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

const { status, data } = await apiInstance.addChannelMethodAddSrtV1(
    methodSrtDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodSrtDto** | **MethodSrtDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddSteamV1**
> addChannelMethodAddSteamV1(steamDto)


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

const { status, data } = await apiInstance.addChannelMethodAddSteamV1(
    steamDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **steamDto** | **SteamDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddTachidV1**
> addChannelMethodAddTachidV1(tachidDto)


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

const { status, data } = await apiInstance.addChannelMethodAddTachidV1(
    tachidDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tachidDto** | **TachidDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddTelegramV1**
> addChannelMethodAddTelegramV1(telegramDto)


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

const { status, data } = await apiInstance.addChannelMethodAddTelegramV1(
    telegramDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **telegramDto** | **TelegramDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddTiktokV1**
> addChannelMethodAddTiktokV1(tiktokDto)


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

const { status, data } = await apiInstance.addChannelMethodAddTiktokV1(
    tiktokDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tiktokDto** | **TiktokDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddVkV1**
> addChannelMethodAddVkV1(vkDto)


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

const { status, data } = await apiInstance.addChannelMethodAddVkV1(
    vkDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vkDto** | **VkDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddVliveV1**
> addChannelMethodAddVliveV1(vliveDto)


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

const { status, data } = await apiInstance.addChannelMethodAddVliveV1(
    vliveDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vliveDto** | **VliveDto**|  | |


### Return type

void (empty response body)

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

# **addChannelMethodAddZhanqiTvV1**
> addChannelMethodAddZhanqiTvV1(zhanqitvDto)


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

const { status, data } = await apiInstance.addChannelMethodAddZhanqiTvV1(
    zhanqitvDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zhanqitvDto** | **ZhanqitvDto**|  | |


### Return type

void (empty response body)

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

# **channelDeleteChannelV1**
> SuccessResponse channelDeleteChannelV1(deleteChannelDto)


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

const { status, data } = await apiInstance.channelDeleteChannelV1(
    deleteChannelDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteChannelDto** | **DeleteChannelDto**|  | |


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

# **channelGetChannelV1**
> SearchChannelItem channelGetChannelV1()


### Example

```typescript
import {
    ChannelApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelId: number; //Channel id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelGetChannelV1(
    language,
    projectId,
    channelId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelId** | [**number**] | Channel id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SearchChannelItem**

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

# **channelSetDelayV1**
> SuccessResponse channelSetDelayV1()


### Example

```typescript
import {
    ChannelApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let channelId: number; // (default to undefined)
let projectId: number; // (default to undefined)

const { status, data } = await apiInstance.channelSetDelayV1(
    channelId,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelId** | [**number**] |  | defaults to undefined|
| **projectId** | [**number**] |  | defaults to undefined|


### Return type

**SuccessResponse**

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

# **channelShortChannelListV1**
> SiteGetShortChannelResponse channelShortChannelListV1()


### Example

```typescript
import {
    ChannelApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.channelShortChannelListV1(
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

**SiteGetShortChannelResponse**

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

# **methodSearchV1**
> SiteSearchChannelResponse methodSearchV1()


### Example

```typescript
import {
    ChannelApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let type: 'all' | 'my' | 'available' | 'active'; // (optional) (default to undefined)
let platform: string; //platform type (optional) (default to undefined)
let name: string; //name (optional) (default to undefined)
let limit: number; //Number of results (optional) (default to 30)
let offset: number; //Page offset number (optional) (default to 0)

const { status, data } = await apiInstance.methodSearchV1(
    language,
    projectId,
    v,
    type,
    platform,
    name,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **type** | [**&#39;all&#39; | &#39;my&#39; | &#39;available&#39; | &#39;active&#39;**]**Array<&#39;all&#39; &#124; &#39;my&#39; &#124; &#39;available&#39; &#124; &#39;active&#39;>** |  | (optional) defaults to undefined|
| **platform** | [**string**] | platform type | (optional) defaults to undefined|
| **name** | [**string**] | name | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results | (optional) defaults to 30|
| **offset** | [**number**] | Page offset number | (optional) defaults to 0|


### Return type

**SiteSearchChannelResponse**

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **methodSetStatusV1**
> SuccessResponse methodSetStatusV1(methodSetStatusChannelRequest)


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

const { status, data } = await apiInstance.methodSetStatusV1(
    methodSetStatusChannelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **methodSetStatusChannelRequest** | **MethodSetStatusChannelRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

