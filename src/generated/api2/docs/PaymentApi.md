# PaymentApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**paymentCreateV1**](#paymentcreatev1) | **POST** /method/payment | Create payment item for pay system|
|[**paymentGetStatusV1**](#paymentgetstatusv1) | **GET** /method/payment | Get payment status for a project|

# **paymentCreateV1**
> PaymentCreateResponse paymentCreateV1(paymentCreateV1Request)

Create a pending payment for project_id and type (topup/restream/transcoding/storage/webinar) without completing payment. amount uses minor currency units (10000 = 100 major units); the project\'s billing payment system determines currency. Plan purchases require the fields for the corresponding type and plan_period. Returns payment_id and provider details; use its challenge/intent next. Returned payment provider credentials must not be logged.

### Example

```typescript
import {
    PaymentApi,
    Configuration,
    PaymentCreateV1Request
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaymentApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let paymentCreateV1Request: PaymentCreateV1Request; //
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.paymentCreateV1(
    language,
    paymentCreateV1Request,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentCreateV1Request** | **PaymentCreateV1Request**|  | |
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PaymentCreateResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

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

Read the saved status of payment payId in project_id. payId is payment_id from payment creation; amount is in minor currency units of currency. Reading status neither creates a payment challenge nor confirms a new payment; returns the current pending/success/cancel/error state.

### Example

```typescript
import {
    PaymentApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaymentApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let payId: number; //Pay order id (default to undefined)
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.paymentGetStatusV1(
    language,
    payId,
    projectId,
    v,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **payId** | [**number**] | Pay order id | defaults to undefined|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PaymentStatusResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

