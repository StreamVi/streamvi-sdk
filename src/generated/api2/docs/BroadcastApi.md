# BroadcastApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**broadcastCredentialsV1**](#broadcastcredentialsv1) | **GET** /method/broadcast/credentials | Get credentials|
|[**broadcastEventItemV1**](#broadcasteventitemv1) | **GET** /method/broadcast/events/item | Broadcast event item|
|[**broadcastEventsV4**](#broadcasteventsv4) | **GET** /method/broadcast/events | Events from broadcast v4|
|[**broadcastFindV1**](#broadcastfindv1) | **GET** /method/broadcast | Get one broadcast|
|[**broadcastGraphBitrateV1**](#broadcastgraphbitratev1) | **GET** /method/broadcast/graph/bitrate | Bitrate from broadcast|
|[**broadcastGraphViewersV1**](#broadcastgraphviewersv1) | **GET** /method/broadcast/graph/viewers | Viewers from broadcast|
|[**broadcastListV1**](#broadcastlistv1) | **GET** /method/broadcast/list | List broadcast|
|[**broadcastPauseV1**](#broadcastpausev1) | **POST** /method/broadcast/pause | Pause stream|
|[**broadcastPlayV1**](#broadcastplayv1) | **POST** /method/broadcast/play | Play stream|
|[**broadcastRestreamChatV1**](#broadcastrestreamchatv1) | **GET** /method/broadcast/restreams-chat | Get restreams for chat|
|[**broadcastRestreamsV1**](#broadcastrestreamsv1) | **GET** /method/broadcast/restreams | View live info|
|[**broadcastStatusV1**](#broadcaststatusv1) | **GET** /method/broadcast/status | Live status info by project id|
|[**broadcastStopV1**](#broadcaststopv1) | **POST** /method/broadcast/stop | Stop stream|
|[**broadcastTokenChannelV1**](#broadcasttokenchannelv1) | **GET** /method/broadcast/longpoll | Connect channel, long polling|

# **broadcastCredentialsV1**
> SiteBroadcastCredentialsResponse broadcastCredentialsV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.broadcastCredentialsV1(
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
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteBroadcastCredentialsResponse**

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

# **broadcastEventItemV1**
> SiteRestreamEventResponse broadcastEventItemV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let id: string; //Event id (default to undefined)
let date: string; //Event date (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.broadcastEventItemV1(
    language,
    id,
    date,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **id** | [**string**] | Event id | defaults to undefined|
| **date** | [**string**] | Event date | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteRestreamEventResponse**

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

# **broadcastEventsV4**
> SiteBroadcastEventsV4Response broadcastEventsV4()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let channels: Array<number>; //Channels id (optional) (default to undefined)
let level: 'info' | 'warning' | 'error' | 'debug'; //Level log (optional) (default to undefined)
let platform: string; //Platform (optional) (default to undefined)
let app: string; //App stream (optional) (default to undefined)
let server: string; //Server IP (optional) (default to undefined)
let dateFrom: string; //Date only after create date (optional) (default to undefined)
let dateTo: string; //Date only after create date (optional) (default to undefined)
let offset: number; //Page offset number (optional) (default to 0)
let limit: number; //Number of results (optional) (default to 50)
let sortByDate: 'asc' | 'desc'; //Sort order by created_at (optional) (default to 'desc')
let cursorId: string; //Cursor event id (optional) (default to undefined)
let cursorDatetime: string; //Cursor event datetime (optional) (default to undefined)
let v: '4'; //Version (automatically defaults to 4 based on the API contract, can be overridden) (optional) (default to '4')

const { status, data } = await apiInstance.broadcastEventsV4(
    language,
    projectId,
    broadcastId,
    channels,
    level,
    platform,
    app,
    server,
    dateFrom,
    dateTo,
    offset,
    limit,
    sortByDate,
    cursorId,
    cursorDatetime,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **channels** | **Array&lt;number&gt;** | Channels id | (optional) defaults to undefined|
| **level** | [**&#39;info&#39; | &#39;warning&#39; | &#39;error&#39; | &#39;debug&#39;**]**Array<&#39;info&#39; &#124; &#39;warning&#39; &#124; &#39;error&#39; &#124; &#39;debug&#39;>** | Level log | (optional) defaults to undefined|
| **platform** | [**string**] | Platform | (optional) defaults to undefined|
| **app** | [**string**] | App stream | (optional) defaults to undefined|
| **server** | [**string**] | Server IP | (optional) defaults to undefined|
| **dateFrom** | [**string**] | Date only after create date | (optional) defaults to undefined|
| **dateTo** | [**string**] | Date only after create date | (optional) defaults to undefined|
| **offset** | [**number**] | Page offset number | (optional) defaults to 0|
| **limit** | [**number**] | Number of results | (optional) defaults to 50|
| **sortByDate** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order by created_at | (optional) defaults to 'desc'|
| **cursorId** | [**string**] | Cursor event id | (optional) defaults to undefined|
| **cursorDatetime** | [**string**] | Cursor event datetime | (optional) defaults to undefined|
| **v** | [**&#39;4&#39;**]**Array<&#39;4&#39;>** | Version (automatically defaults to 4 based on the API contract, can be overridden) | (optional) defaults to '4'|


### Return type

**SiteBroadcastEventsV4Response**

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

# **broadcastFindV1**
> SiteBroadcastFindResponse broadcastFindV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let v: '3'; //Version (automatically defaults to 3 based on the API contract, can be overridden) (optional) (default to '3')

const { status, data } = await apiInstance.broadcastFindV1(
    language,
    projectId,
    broadcastId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **v** | [**&#39;3&#39;**]**Array<&#39;3&#39;>** | Version (automatically defaults to 3 based on the API contract, can be overridden) | (optional) defaults to '3'|


### Return type

**SiteBroadcastFindResponse**

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

# **broadcastGraphBitrateV1**
> SiteBroadcastGraphResponse broadcastGraphBitrateV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let v: '3'; //Version (automatically defaults to 3 based on the API contract, can be overridden) (optional) (default to '3')

const { status, data } = await apiInstance.broadcastGraphBitrateV1(
    language,
    projectId,
    broadcastId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **v** | [**&#39;3&#39;**]**Array<&#39;3&#39;>** | Version (automatically defaults to 3 based on the API contract, can be overridden) | (optional) defaults to '3'|


### Return type

**SiteBroadcastGraphResponse**

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

# **broadcastGraphViewersV1**
> SiteBroadcastGraphResponse broadcastGraphViewersV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //broadcast id (default to undefined)
let v: '3'; //Version (automatically defaults to 3 based on the API contract, can be overridden) (optional) (default to '3')

const { status, data } = await apiInstance.broadcastGraphViewersV1(
    language,
    projectId,
    broadcastId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **v** | [**&#39;3&#39;**]**Array<&#39;3&#39;>** | Version (automatically defaults to 3 based on the API contract, can be overridden) | (optional) defaults to '3'|


### Return type

**SiteBroadcastGraphResponse**

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

# **broadcastListV1**
> SiteBroadcastListResponse broadcastListV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let limit: number; //Number of results (optional) (default to 20)
let offset: number; //Page offset number (optional) (default to 0)
let order: 'asc' | 'desc'; //order (optional) (default to 'asc')
let v: '3'; //Version (automatically defaults to 3 based on the API contract, can be overridden) (optional) (default to '3')

const { status, data } = await apiInstance.broadcastListV1(
    language,
    projectId,
    limit,
    offset,
    order,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **limit** | [**number**] | Number of results | (optional) defaults to 20|
| **offset** | [**number**] | Page offset number | (optional) defaults to 0|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | order | (optional) defaults to 'asc'|
| **v** | [**&#39;3&#39;**]**Array<&#39;3&#39;>** | Version (automatically defaults to 3 based on the API contract, can be overridden) | (optional) defaults to '3'|


### Return type

**SiteBroadcastListResponse**

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

# **broadcastPauseV1**
> SuccessResponse broadcastPauseV1(siteBroadcastPauseRequest)


### Example

```typescript
import {
    BroadcastApi,
    Configuration,
    SiteBroadcastPauseRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let siteBroadcastPauseRequest: SiteBroadcastPauseRequest; //

const { status, data } = await apiInstance.broadcastPauseV1(
    siteBroadcastPauseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteBroadcastPauseRequest** | **SiteBroadcastPauseRequest**|  | |


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

# **broadcastPlayV1**
> SuccessResponse broadcastPlayV1(siteBroadcastPlayRequest)


### Example

```typescript
import {
    BroadcastApi,
    Configuration,
    SiteBroadcastPlayRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let siteBroadcastPlayRequest: SiteBroadcastPlayRequest; //

const { status, data } = await apiInstance.broadcastPlayV1(
    siteBroadcastPlayRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteBroadcastPlayRequest** | **SiteBroadcastPlayRequest**|  | |


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

# **broadcastRestreamChatV1**
> MethodBroadcastRestreamsResponse broadcastRestreamChatV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let broadcastId: number; //broadcast id (default to undefined)
let key: string; //Chat token (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.broadcastRestreamChatV1(
    language,
    broadcastId,
    key,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **broadcastId** | [**number**] | broadcast id | defaults to undefined|
| **key** | [**string**] | Chat token | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**MethodBroadcastRestreamsResponse**

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

# **broadcastRestreamsV1**
> SiteBroadcastRestreamsInfoResponse broadcastRestreamsV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //Broadcast id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.broadcastRestreamsV1(
    language,
    projectId,
    broadcastId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | Broadcast id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteBroadcastRestreamsInfoResponse**

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

# **broadcastStatusV1**
> BroadcastStatusV1200Response broadcastStatusV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.broadcastStatusV1(
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
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**BroadcastStatusV1200Response**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Broadcast live status |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **broadcastStopV1**
> SuccessResponse broadcastStopV1(siteBroadcastStopRequest)


### Example

```typescript
import {
    BroadcastApi,
    Configuration,
    SiteBroadcastStopRequest
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let siteBroadcastStopRequest: SiteBroadcastStopRequest; //

const { status, data } = await apiInstance.broadcastStopV1(
    siteBroadcastStopRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteBroadcastStopRequest** | **SiteBroadcastStopRequest**|  | |


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
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **broadcastTokenChannelV1**
> MethodCurrentBroadcastResponse broadcastTokenChannelV1()


### Example

```typescript
import {
    BroadcastApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new BroadcastApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let key: string; // (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.broadcastTokenChannelV1(
    language,
    key,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **key** | [**string**] |  | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**MethodCurrentBroadcastResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Channel token |  -  |
|**204** | No content |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

