# PlanRestreamApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sitePlanRestreamControllerBuy1**](#siteplanrestreamcontrollerbuy1) | **POST** /method/plan_restream | Buy restream tariff|
|[**sitePlanRestreamControllerCheck21**](#siteplanrestreamcontrollercheck21) | **GET** /method/plan_restream/check | Load data for show card the tariffs v2|
|[**sitePlanRestreamControllerGetDiscount1**](#siteplanrestreamcontrollergetdiscount1) | **GET** /method/plan_restream/get_discount | Get discount restream|
|[**sitePlanRestreamControllerList1**](#siteplanrestreamcontrollerlist1) | **GET** /method/plan_restream/list | Get list of restream tariffs|
|[**sitePlanRestreamControllerListProject1**](#siteplanrestreamcontrollerlistproject1) | **GET** /method/plan_restream/list/project | Get list of restream tariffs for project|
|[**sitePlanRestreamControllerRemove1**](#siteplanrestreamcontrollerremove1) | **DELETE** /method/plan_restream | Remove after tariff|
|[**sitePlanRestreamControllerTariff1**](#siteplanrestreamcontrollertariff1) | **GET** /method/plan_restream | Get tariff for project|

# **sitePlanRestreamControllerBuy1**
> SuccessResponse sitePlanRestreamControllerBuy1()


### Example

```typescript
import {
    PlanRestreamApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanRestreamApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let period: 'month' | 'year'; //Period (default to undefined)
let planRestreamId: number; //Restream plan id (default to undefined)
let countChannel: number; //Channel count (optional) (default to undefined)
let bitrate: number; //Bitrate, kbps (optional) (default to undefined)

const { status, data } = await apiInstance.sitePlanRestreamControllerBuy1(
    v,
    language,
    projectId,
    period,
    planRestreamId,
    countChannel,
    bitrate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **period** | [**&#39;month&#39; | &#39;year&#39;**]**Array<&#39;month&#39; &#124; &#39;year&#39;>** | Period | defaults to undefined|
| **planRestreamId** | [**number**] | Restream plan id | defaults to undefined|
| **countChannel** | [**number**] | Channel count | (optional) defaults to undefined|
| **bitrate** | [**number**] | Bitrate, kbps | (optional) defaults to undefined|


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

# **sitePlanRestreamControllerCheck21**
> PlanRestreamCheckV2Response sitePlanRestreamControllerCheck21()


### Example

```typescript
import {
    PlanRestreamApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanRestreamApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let period: 'month' | 'year'; //Period (default to undefined)
let planRestreamId: number; //Restream plan id (default to undefined)
let useBalance: number; //Is select balance (optional) (default to undefined)
let channels: number; //Channels count (optional) (default to undefined)
let bitrate: number; //Bitrate, kbps (optional) (default to undefined)

const { status, data } = await apiInstance.sitePlanRestreamControllerCheck21(
    v,
    language,
    projectId,
    period,
    planRestreamId,
    useBalance,
    channels,
    bitrate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **period** | [**&#39;month&#39; | &#39;year&#39;**]**Array<&#39;month&#39; &#124; &#39;year&#39;>** | Period | defaults to undefined|
| **planRestreamId** | [**number**] | Restream plan id | defaults to undefined|
| **useBalance** | [**number**] | Is select balance | (optional) defaults to undefined|
| **channels** | [**number**] | Channels count | (optional) defaults to undefined|
| **bitrate** | [**number**] | Bitrate, kbps | (optional) defaults to undefined|


### Return type

**PlanRestreamCheckV2Response**

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

# **sitePlanRestreamControllerGetDiscount1**
> PlanRestreamDiscountResponse sitePlanRestreamControllerGetDiscount1()


### Example

```typescript
import {
    PlanRestreamApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanRestreamApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.sitePlanRestreamControllerGetDiscount1(
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

**PlanRestreamDiscountResponse**

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

# **sitePlanRestreamControllerList1**
> PlanRestreamResponseDto sitePlanRestreamControllerList1()


### Example

```typescript
import {
    PlanRestreamApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanRestreamApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')

const { status, data } = await apiInstance.sitePlanRestreamControllerList1(
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

**PlanRestreamResponseDto**

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

# **sitePlanRestreamControllerListProject1**
> PlanRestreamProjectResponseDto sitePlanRestreamControllerListProject1()


### Example

```typescript
import {
    PlanRestreamApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanRestreamApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.sitePlanRestreamControllerListProject1(
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

**PlanRestreamProjectResponseDto**

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

# **sitePlanRestreamControllerRemove1**
> SuccessResponse sitePlanRestreamControllerRemove1()


### Example

```typescript
import {
    PlanRestreamApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanRestreamApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let planRestreamId: number; //Restream plan id (default to undefined)

const { status, data } = await apiInstance.sitePlanRestreamControllerRemove1(
    v,
    language,
    projectId,
    planRestreamId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **planRestreamId** | [**number**] | Restream plan id | defaults to undefined|


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

# **sitePlanRestreamControllerTariff1**
> PlanRestreamForProject sitePlanRestreamControllerTariff1()


### Example

```typescript
import {
    PlanRestreamApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlanRestreamApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.sitePlanRestreamControllerTariff1(
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

**PlanRestreamForProject**

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

