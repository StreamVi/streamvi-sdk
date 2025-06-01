# CentrifugeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**centrifugeAuthV2**(#centrifugeauthv2) | **GET** /method/centrifuge | Auth centrifuge|
|**centrifugeProjectV1**(#centrifugeprojectv1) | **GET** /method/centrifuge/auth/project | Auth token for project|
|**getTokenBroadcastV1**(#gettokenbroadcastv1) | **GET** /method/centrifuge/token/broadcast | Auth token for broadcast|

# **centrifugeAuthV2**
> SiteAuthCentrifugeResponse centrifugeAuthV2()


### Example

```typescript
import {
    CentrifugeApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new CentrifugeApi(configuration);

let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.centrifugeAuthV2(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | **number** | Project id | defaults to undefined|


### Return type

**SiteAuthCentrifugeResponse**

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

# **centrifugeProjectV1**
> SiteAuthCentrifugeResponse centrifugeProjectV1()

       channel - \"$project_channels:{project_id}\"       expiresIn - 30min       project access min - editor     

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
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.centrifugeProjectV1(
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
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteAuthCentrifugeResponse**

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

# **getTokenBroadcastV1**
> SiteAuthCentrifugeResponse getTokenBroadcastV1()

       channel - \"$broadcast:{broadcast_id}\"       expiresIn - 30min     

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
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

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
| **broadcastId** | **number** |  | defaults to undefined|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SiteAuthCentrifugeResponse**

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

