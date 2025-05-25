# SocialsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**socialsControllerGetList1**](#socialscontrollergetlist1) | **GET** /method/socials/list | Social list for user|

# **socialsControllerGetList1**
> socialsControllerGetList1()


### Example

```typescript
import {
    SocialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialsApi(configuration);

const { status, data } = await apiInstance.socialsControllerGetList1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

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

