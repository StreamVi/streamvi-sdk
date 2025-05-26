# PaySystemApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createChallenge1**](#createchallenge1) | **GET** /method/pay-system/payoneer/create | |
|[**createUnitpay1**](#createunitpay1) | **GET** /method/pay-system/unitpay/create | |
|[**list1**](#list1) | **GET** /method/pay-system/list | Load available pay systems|

# **createChallenge1**
> SuccessResponse createChallenge1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PaySystemApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PaySystemApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)

const { status, data } = await apiInstance.createChallenge1({
    language,
    paymentId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUnitpay1**
> SuccessResponse createUnitpay1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PaySystemApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PaySystemApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)

const { status, data } = await apiInstance.createUnitpay1({
    language,
    paymentId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list1**
> ListOfPaySystemListResponse list1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PaySystemApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PaySystemApi(sdkConfig.configuration);

const { status, data } = await apiInstance.list1({});
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListOfPaySystemListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

