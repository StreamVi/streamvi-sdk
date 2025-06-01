# ProjectApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**methodLiveStatusV1**(#methodlivestatusv1) | **GET** /method/project/live-status | Get live status|

# **methodLiveStatusV1**
> MethodProjectLiveStatusResponse methodLiveStatusV1()


### Example

```typescript
import {
    ProjectApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectApi(configuration);

const { status, data } = await apiInstance.methodLiveStatusV1();
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

