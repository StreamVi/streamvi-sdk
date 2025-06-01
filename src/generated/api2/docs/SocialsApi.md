# SocialsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**socialsGetListV1**(#socialsgetlistv1) | **GET** /method/socials/list | Social list for user|

# **socialsGetListV1**
> socialsGetListV1()


### Example

```typescript
import {
    SocialsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new SocialsApi(configuration);

const { status, data } = await apiInstance.socialsGetListV1();
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

