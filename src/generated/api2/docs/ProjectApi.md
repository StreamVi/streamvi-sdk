# ProjectApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodControllerLiveStatus**](#methodcontrollerlivestatus) | **GET** /method/project/live-status | Get live status|

# **methodControllerLiveStatus**
> MethodProjectLiveStatusResponse methodControllerLiveStatus()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ProjectApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ProjectApi(sdkConfig.configuration);

const { status, data } = await apiInstance.methodControllerLiveStatus({});
```

### Parameters
This endpoint does not have any parameters.


### Return type

**MethodProjectLiveStatusResponse**

### Authorization

[X-API-KEY](../README.md#X-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

