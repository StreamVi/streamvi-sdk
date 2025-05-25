# PaySystemApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**paySystemControllerCreateChallenge1**](#paysystemcontrollercreatechallenge1) | **GET** /method/pay-system/payoneer/create | |
|[**paySystemControllerCreateUnitpay1**](#paysystemcontrollercreateunitpay1) | **GET** /method/pay-system/unitpay/create | |
|[**paySystemControllerList1**](#paysystemcontrollerlist1) | **GET** /method/pay-system/list | Load available pay systems|

# **paySystemControllerCreateChallenge1**
> SuccessResponse paySystemControllerCreateChallenge1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)

const { status, data } = await apiInstance.paySystemControllerCreateChallenge1(
    v,
    language,
    paymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
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

# **paySystemControllerCreateUnitpay1**
> SuccessResponse paySystemControllerCreateUnitpay1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)

const { status, data } = await apiInstance.paySystemControllerCreateUnitpay1(
    v,
    language,
    paymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
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

# **paySystemControllerList1**
> ListOfPaySystemListResponse paySystemControllerList1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

const { status, data } = await apiInstance.paySystemControllerList1();
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

