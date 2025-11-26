# BroadcastApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**broadcastCredentialsV1**(#broadcastcredentialsv1) | **GET** /method/broadcast/credentials | Get credentials|
|**broadcastEventsV1**(#broadcasteventsv1) | **GET** /method/broadcast/events | Events from broadcast|
|**broadcastFindV1**(#broadcastfindv1) | **GET** /method/broadcast | Get one broadcast|
|**broadcastGraphBitrateV1**(#broadcastgraphbitratev1) | **GET** /method/broadcast/graph/bitrate | Bitrate from broadcast|
|**broadcastGraphViewersV1**(#broadcastgraphviewersv1) | **GET** /method/broadcast/graph/viewers | Viewers from broadcast|
|**broadcastListV1**(#broadcastlistv1) | **GET** /method/broadcast/list | List broadcast|
|**broadcastRestreamChatV1**(#broadcastrestreamchatv1) | **GET** /method/broadcast/restreams-chat | Get restreams for chat|
|**broadcastRestreamsV1**(#broadcastrestreamsv1) | **GET** /method/broadcast/restreams | View live info|
|**broadcastTokenChannelV1**(#broadcasttokenchannelv1) | **GET** /method/broadcast/longpoll | Connect channel, long polling|

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
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.broadcastCredentialsV1(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **v** | **'1'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteBroadcastCredentialsResponse**

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

# **broadcastEventsV1**
> SiteBroadcastEventsResponse broadcastEventsV1()


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
let channels: Set<number>; //Channels id (optional) (default to undefined)
let level: 'info' | 'warning' | 'error' | 'debug'; //Level log (optional) (default to undefined)
let platform: string; //Platform (optional) (default to undefined)
let app: string; //App stream (optional) (default to undefined)
let server: string; //Server IP (optional) (default to undefined)
let dateFrom: string; //Date only after create date (optional) (default to undefined)
let dateTo: string; //Date only after create date (optional) (default to undefined)
let v: '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.broadcastEventsV1(
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
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **broadcastId** | **number** | broadcast id | defaults to undefined|
| **channels** | **Set&lt;number&gt;** | Channels id | (optional) defaults to undefined|
| **level** | **'info' | 'warning' | 'error' | 'debug'** | Level log | (optional) defaults to undefined|
| **platform** | **string** | Platform | (optional) defaults to undefined|
| **app** | **string** | App stream | (optional) defaults to undefined|
| **server** | **string** | Server IP | (optional) defaults to undefined|
| **dateFrom** | **string** | Date only after create date | (optional) defaults to undefined|
| **dateTo** | **string** | Date only after create date | (optional) defaults to undefined|
| **v** | **'3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteBroadcastEventsResponse**

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
let v: '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

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
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **broadcastId** | **number** | broadcast id | defaults to undefined|
| **v** | **'3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteBroadcastFindResponse**

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
let v: '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

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
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **broadcastId** | **number** | broadcast id | defaults to undefined|
| **v** | **'3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteBroadcastGraphResponse**

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
let v: '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

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
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **broadcastId** | **number** | broadcast id | defaults to undefined|
| **v** | **'3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteBroadcastGraphResponse**

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
let v: '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

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
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **limit** | **number** | Number of results | (optional) defaults to 20|
| **offset** | **number** | Page offset number | (optional) defaults to 0|
| **order** | **'asc' | 'desc'** | order | (optional) defaults to 'asc'|
| **v** | **'3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteBroadcastListResponse**

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
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

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
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **broadcastId** | **number** | broadcast id | defaults to undefined|
| **key** | **string** | Chat token | defaults to undefined|
| **v** | **'1'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**MethodBroadcastRestreamsResponse**

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
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

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
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **broadcastId** | **number** | Broadcast id | defaults to undefined|
| **v** | **'1'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteBroadcastRestreamsInfoResponse**

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
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.broadcastTokenChannelV1(
    language,
    key,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **key** | **string** |  | defaults to undefined|
| **v** | **'1'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**MethodCurrentBroadcastResponse**

### Authorization

No authorization required

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

