# PullServersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**pullServersGetPullServersV1**(#pullserversgetpullserversv1) | **GET** /method/pull-servers/list | Get pull servers|

# **pullServersGetPullServersV1**
> PullServerListResponse pullServersGetPullServersV1()


### Example

```typescript
import {
    PullServersApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PullServersApi(configuration);

const { status, data } = await apiInstance.pullServersGetPullServersV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PullServerListResponse**

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

