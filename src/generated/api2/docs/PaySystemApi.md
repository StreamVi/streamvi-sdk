# PaySystemApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**paySystemCreateChallengeV1**](#paysystemcreatechallengev1) | **GET** /method/pay-system/payoneer/create | |
|[**paySystemCreateUnitpayV1**](#paysystemcreateunitpayv1) | **GET** /method/pay-system/unitpay/create | |
|[**paySystemListV1**](#paysystemlistv1) | **GET** /method/pay-system/list | Load available pay systems|

# **paySystemCreateChallengeV1**
> SuccessResponse paySystemCreateChallengeV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.paySystemCreateChallengeV1(
    language,
    paymentId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **paySystemCreateUnitpayV1**
> SuccessResponse paySystemCreateUnitpayV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.paySystemCreateUnitpayV1(
    language,
    paymentId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **paySystemListV1**
> ListOfPaySystemListResponse paySystemListV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

const { status, data } = await apiInstance.paySystemListV1();
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

