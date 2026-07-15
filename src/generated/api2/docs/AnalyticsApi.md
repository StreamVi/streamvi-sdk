# AnalyticsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**analyticsTsBroadcastMessagesV1**](#analyticstsbroadcastmessagesv1) | **GET** /method/analytics/broadcast/messages | Messages for broadcast|
|[**analyticsTsStreamBitrateV1**](#analyticstsstreambitratev1) | **GET** /method/analytics/stream/graph/bitrate | Bitrate for stream|
|[**analyticsTsStreamEventsV1**](#analyticstsstreameventsv1) | **GET** /method/analytics/stream/events | Events for stream|
|[**analyticsTsStreamViewersV1**](#analyticstsstreamviewersv1) | **GET** /method/analytics/stream/graph/viewers | Viewers for stream|

# **analyticsTsBroadcastMessagesV1**
> BroadcastMessageListResponse analyticsTsBroadcastMessagesV1()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let broadcastId: number; //Broadcast id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let offset: number; //Offset (optional) (default to 0)
let limit: number; //Limit (optional) (default to 50)
let date: string; //Exact date filter (optional) (default to undefined)
let dateStart: string; //Date range start (optional) (default to undefined)
let dateEnd: string; //Date range end (optional) (default to undefined)
let sortByDate: 'asc' | 'desc'; //Sort by date (optional) (default to undefined)
let platform: string; //Platform (optional) (default to undefined)
let restreamId: number; //Restream id (optional) (default to undefined)
let text: string; //Text search (optional) (default to undefined)

const { status, data } = await apiInstance.analyticsTsBroadcastMessagesV1(
    language,
    projectId,
    broadcastId,
    v,
    offset,
    limit,
    date,
    dateStart,
    dateEnd,
    sortByDate,
    platform,
    restreamId,
    text
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **broadcastId** | [**number**] | Broadcast id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **offset** | [**number**] | Offset | (optional) defaults to 0|
| **limit** | [**number**] | Limit | (optional) defaults to 50|
| **date** | [**string**] | Exact date filter | (optional) defaults to undefined|
| **dateStart** | [**string**] | Date range start | (optional) defaults to undefined|
| **dateEnd** | [**string**] | Date range end | (optional) defaults to undefined|
| **sortByDate** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort by date | (optional) defaults to undefined|
| **platform** | [**string**] | Platform | (optional) defaults to undefined|
| **restreamId** | [**number**] | Restream id | (optional) defaults to undefined|
| **text** | [**string**] | Text search | (optional) defaults to undefined|


### Return type

**BroadcastMessageListResponse**

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

# **analyticsTsStreamBitrateV1**
> object analyticsTsStreamBitrateV1()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let streamId: number; //stream id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.analyticsTsStreamBitrateV1(
    language,
    projectId,
    streamId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **streamId** | [**number**] | stream id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**object**

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

# **analyticsTsStreamEventsV1**
> object analyticsTsStreamEventsV1()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let streamId: number; //stream id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.analyticsTsStreamEventsV1(
    language,
    projectId,
    streamId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **streamId** | [**number**] | stream id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**object**

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

# **analyticsTsStreamViewersV1**
> object analyticsTsStreamViewersV1()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let streamId: number; //stream id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.analyticsTsStreamViewersV1(
    language,
    projectId,
    streamId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **streamId** | [**number**] | stream id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**object**

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

