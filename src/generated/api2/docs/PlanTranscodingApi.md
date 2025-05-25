# PlanTranscodingApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sitePlanTranscodingControllerBuy1**](#siteplantranscodingcontrollerbuy1) | **POST** /method/plan_transcoding | Buy transcoder tariff|
|[**sitePlanTranscodingControllerCancel1**](#siteplantranscodingcontrollercancel1) | **DELETE** /method/plan_transcoding | Remove after tariff|
|[**sitePlanTranscodingControllerCheck1**](#siteplantranscodingcontrollercheck1) | **GET** /method/plan_transcoding/check | Check transcoding tariff before buy|
|[**sitePlanTranscodingControllerGetDiscount1**](#siteplantranscodingcontrollergetdiscount1) | **GET** /method/plan_transcoding/get_discount | Get discount transcoding|
|[**sitePlanTranscodingControllerList1**](#siteplantranscodingcontrollerlist1) | **GET** /method/plan_transcoding/list | Get list of transcoding tariffs|
|[**sitePlanTranscodingControllerTariff1**](#siteplantranscodingcontrollertariff1) | **GET** /method/plan_transcoding | Get tariff for project|

# **sitePlanTranscodingControllerBuy1**
> SuccessResponse sitePlanTranscodingControllerBuy1()


### Example

```typescript
import {
    PlanTranscodingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanTranscodingApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let period: 'month' | 'year'; //Period (default to undefined)
let planTranscodingId: number; //Transcoding plan id (default to undefined)
let count: number; //Count flow (optional) (default to undefined)

const { status, data } = await apiInstance.sitePlanTranscodingControllerBuy1(
    v,
    language,
    projectId,
    period,
    planTranscodingId,
    count
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **period** | [**&#39;month&#39; | &#39;year&#39;**]**Array<&#39;month&#39; &#124; &#39;year&#39;>** | Period | defaults to undefined|
| **planTranscodingId** | [**number**] | Transcoding plan id | defaults to undefined|
| **count** | [**number**] | Count flow | (optional) defaults to undefined|


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
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sitePlanTranscodingControllerCancel1**
> SuccessResponse sitePlanTranscodingControllerCancel1()


### Example

```typescript
import {
    PlanTranscodingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanTranscodingApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.sitePlanTranscodingControllerCancel1(
    v,
    language,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|


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
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sitePlanTranscodingControllerCheck1**
> PlanTranscodingCheckResponse sitePlanTranscodingControllerCheck1()


### Example

```typescript
import {
    PlanTranscodingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanTranscodingApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.sitePlanTranscodingControllerCheck1(
    v,
    language,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|


### Return type

**PlanTranscodingCheckResponse**

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

# **sitePlanTranscodingControllerGetDiscount1**
> PlanTranscodingDiscountResponse sitePlanTranscodingControllerGetDiscount1()


### Example

```typescript
import {
    PlanTranscodingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanTranscodingApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.sitePlanTranscodingControllerGetDiscount1(
    v,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|


### Return type

**PlanTranscodingDiscountResponse**

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

# **sitePlanTranscodingControllerList1**
> PlanTranscodingResponseDto sitePlanTranscodingControllerList1()


### Example

```typescript
import {
    PlanTranscodingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanTranscodingApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.sitePlanTranscodingControllerList1(
    v,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|


### Return type

**PlanTranscodingResponseDto**

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

# **sitePlanTranscodingControllerTariff1**
> PlanTranscodingForProject sitePlanTranscodingControllerTariff1()


### Example

```typescript
import {
    PlanTranscodingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanTranscodingApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.sitePlanTranscodingControllerTariff1(
    v,
    language,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|


### Return type

**PlanTranscodingForProject**

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

