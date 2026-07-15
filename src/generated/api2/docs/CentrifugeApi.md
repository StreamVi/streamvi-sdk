# CentrifugeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**centrifugeAuthV2**](#centrifugeauthv2) | **GET** /method/centrifuge | Auth centrifuge for project|
|[**centrifugeChannelTokenV1**](#centrifugechanneltokenv1) | **GET** /method/centrifuge/auth/channel | Get token for connect to centrifuge for channel|
|[**centrifugeChannelsCatalogV1**](#centrifugechannelscatalogv1) | **GET** /method/centrifuge/channels | List available Method API Centrifuge channels|
|[**centrifugeConnectionTokenV1**](#centrifugeconnectiontokenv1) | **GET** /method/centrifuge/auth/connect | Get token for connect to centrifuge for project|
|[**centrifugeProjectV1**](#centrifugeprojectv1) | **GET** /method/centrifuge/auth/project | Auth token for project|
|[**getTokenBroadcastV1**](#gettokenbroadcastv1) | **GET** /method/centrifuge/token/broadcast | Auth token for broadcast|

# **centrifugeAuthV2**
> SiteAuthCentrifugeResponse centrifugeAuthV2()

Use /method/centrifuge/auth/connect instead.

### Example

```typescript
import {
    CentrifugeApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new CentrifugeApi(configuration);

let projectId: number; //Project id (default to undefined)
let v: '2'; //Version (automatically defaults to 2 based on method version, can be overridden) (optional) (default to '2')

const { status, data } = await apiInstance.centrifugeAuthV2(
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;2&#39;**]**Array<&#39;2&#39;>** | Version (automatically defaults to 2 based on method version, can be overridden) | (optional) defaults to '2'|


### Return type

**SiteAuthCentrifugeResponse**

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

# **centrifugeChannelTokenV1**
> AuthCentrifugoChannelResponse centrifugeChannelTokenV1()

       Get token for specific channel name:       - channel_name: \"channel_name\" - channel name              Examples:       - $broadcast:123 - broadcast       - $widget_template:507f1f77bcf86cd799439011 - integration template widget data     

### Example

```typescript
import {
    CentrifugeApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new CentrifugeApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let channelName: string; //Channel name (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.centrifugeChannelTokenV1(
    language,
    projectId,
    channelName,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **channelName** | [**string**] | Channel name | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**AuthCentrifugoChannelResponse**

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

# **centrifugeChannelsCatalogV1**
> CentrifugoChannelsCatalogResponse centrifugeChannelsCatalogV1()

Returns supported channel_type values, required params, events, and response schema names.

### Example

```typescript
import {
    CentrifugeApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new CentrifugeApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.centrifugeChannelsCatalogV1(
    language,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**CentrifugoChannelsCatalogResponse**

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

# **centrifugeConnectionTokenV1**
> AuthCentrifugoConnectResponse centrifugeConnectionTokenV1()

Get token for connect to centrifuge for project

### Example

```typescript
import {
    CentrifugeApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new CentrifugeApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.centrifugeConnectionTokenV1(
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

**AuthCentrifugoConnectResponse**

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

# **centrifugeProjectV1**
> SiteAuthCentrifugeResponse centrifugeProjectV1()

Use /method/centrifuge/auth/channel instead.

### Example

```typescript
import {
    CentrifugeApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new CentrifugeApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.centrifugeProjectV1(
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

**SiteAuthCentrifugeResponse**

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

# **getTokenBroadcastV1**
> SiteAuthCentrifugeResponse getTokenBroadcastV1()

Use /method/centrifuge/auth/channel instead.

### Example

```typescript
import {
    CentrifugeApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new CentrifugeApi(configuration);

let broadcastId: number; // (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '2'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.getTokenBroadcastV1(
    broadcastId,
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **broadcastId** | [**number**] |  | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;2&#39;**]**Array<&#39;2&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteAuthCentrifugeResponse**

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

