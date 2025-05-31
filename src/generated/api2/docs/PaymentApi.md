# PaymentApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**paymentCreateV1**](#paymentcreatev1) | **POST** /method/payment | Create payment item for pay system|
|[**paymentGetStatusV1**](#paymentgetstatusv1) | **GET** /method/payment | |
|[**paymentListV1**](#paymentlistv1) | **GET** /method/payment/list | |

# **paymentCreateV1**
> PaymentCreateResponse paymentCreateV1(paymentCreateV1Request)


### Example

```typescript
import {
    PaymentApi,
    Configuration,
    PaymentCreateV1Request
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaymentApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentCreateV1Request: PaymentCreateV1Request; //
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.paymentCreateV1(
    language,
    paymentCreateV1Request,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentCreateV1Request** | **PaymentCreateV1Request**|  | |
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**PaymentCreateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentGetStatusV1**
> PaymentStatusResponse paymentGetStatusV1()


### Example

```typescript
import {
    PaymentApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaymentApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let payId: number; //Pay order id (default to undefined)
let projectId: number; //Project id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.paymentGetStatusV1(
    language,
    payId,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **payId** | [**number**] | Pay order id | defaults to undefined|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**PaymentStatusResponse**

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

# **paymentListV1**
> paymentListV1()


### Example

```typescript
import {
    PaymentApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaymentApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let pageSize: number; //Number of results (optional) (default to 20)
let page: number; //Page number (optional) (default to 1)

const { status, data } = await apiInstance.paymentListV1(
    language,
    v,
    pageSize,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **pageSize** | [**number**] | Number of results | (optional) defaults to 20|
| **page** | [**number**] | Page number | (optional) defaults to 1|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

