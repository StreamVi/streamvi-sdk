# PlanTranscodingApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**buy1**](#buy1) | **POST** /method/plan_transcoding | Buy transcoder tariff|
|[**cancel1**](#cancel1) | **DELETE** /method/plan_transcoding | Remove after tariff|
|[**check1**](#check1) | **GET** /method/plan_transcoding/check | Check transcoding tariff before buy|
|[**getDiscount1**](#getdiscount1) | **GET** /method/plan_transcoding/get_discount | Get discount transcoding|
|[**list1**](#list1) | **GET** /method/plan_transcoding/list | Get list of transcoding tariffs|
|[**tariff1**](#tariff1) | **GET** /method/plan_transcoding | Get tariff for project|

# **buy1**
> SuccessResponse buy1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PlanTranscodingApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PlanTranscodingApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let period: 'month' | 'year'; //Period (default to undefined)
let planTranscodingId: number; //Transcoding plan id (default to undefined)
let count: number; //Count flow (optional) (default to undefined)

const { status, data } = await apiInstance.buy1({
    language,
    projectId,
    period,
    planTranscodingId,
    count
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **cancel1**
> SuccessResponse cancel1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PlanTranscodingApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PlanTranscodingApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.cancel1({
    language,
    projectId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **check1**
> PlanTranscodingCheckResponse check1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PlanTranscodingApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PlanTranscodingApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.check1({
    language,
    projectId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **getDiscount1**
> PlanTranscodingDiscountResponse getDiscount1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PlanTranscodingApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PlanTranscodingApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.getDiscount1({
    language
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **list1**
> PlanTranscodingResponseDto list1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PlanTranscodingApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PlanTranscodingApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.list1({
    language
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **tariff1**
> PlanTranscodingForProject tariff1()


### Example

```typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { PlanTranscodingApi } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new PlanTranscodingApi(sdkConfig.configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.tariff1({
    language,
    projectId
  });
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

