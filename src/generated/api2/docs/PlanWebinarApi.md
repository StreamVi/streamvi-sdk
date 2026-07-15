# PlanWebinarApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**siteBuyV1**](#sitebuyv1) | **POST** /method/plan_webinar | Buy webinar tariff|
|[**siteCancelV1**](#sitecancelv1) | **DELETE** /method/plan_webinar | Remove after tariff|
|[**siteCheckV1**](#sitecheckv1) | **GET** /method/plan_webinar/check | Check webinar tariff before buy|
|[**siteGetDiscountV1**](#sitegetdiscountv1) | **GET** /method/plan_webinar/get_discount | Get discount webinar|
|[**siteListV1**](#sitelistv1) | **GET** /method/plan_webinar/list | Get list of webinar tariffs|
|[**siteSetProlongationV1**](#sitesetprolongationv1) | **POST** /method/plan_webinar/prolongation | Set webinar tariff auto prolongation|
|[**siteTariffV1**](#sitetariffv1) | **GET** /method/plan_webinar | Get tariff for project|

# **siteBuyV1**
> SuccessResponse siteBuyV1()


### Example

```typescript
import {
    PlanWebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlanWebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let period: 'month' | 'year'; //Period (default to undefined)
let planWebinarId: number; //Webinar plan id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.siteBuyV1(
    language,
    projectId,
    period,
    planWebinarId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **period** | [**&#39;month&#39; | &#39;year&#39;**]**Array<&#39;month&#39; &#124; &#39;year&#39;>** | Period | defaults to undefined|
| **planWebinarId** | [**number**] | Webinar plan id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **siteCancelV1**
> SuccessResponse siteCancelV1()


### Example

```typescript
import {
    PlanWebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlanWebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.siteCancelV1(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **siteCheckV1**
> PlanWebinarCheckV2Response siteCheckV1()


### Example

```typescript
import {
    PlanWebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlanWebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let period: 'month' | 'year'; //Period (default to undefined)
let planWebinarId: number; //Webinar plan id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let useBalance: number; //Is select balance (optional) (default to undefined)

const { status, data } = await apiInstance.siteCheckV1(
    language,
    projectId,
    period,
    planWebinarId,
    v,
    useBalance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **period** | [**&#39;month&#39; | &#39;year&#39;**]**Array<&#39;month&#39; &#124; &#39;year&#39;>** | Period | defaults to undefined|
| **planWebinarId** | [**number**] | Webinar plan id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **useBalance** | [**number**] | Is select balance | (optional) defaults to undefined|


### Return type

**PlanWebinarCheckV2Response**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **siteGetDiscountV1**
> PlanWebinarDiscountResponse siteGetDiscountV1()


### Example

```typescript
import {
    PlanWebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlanWebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.siteGetDiscountV1(
    language,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**PlanWebinarDiscountResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **siteListV1**
> PlanWebinarResponseDto siteListV1()


### Example

```typescript
import {
    PlanWebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlanWebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.siteListV1(
    language,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**PlanWebinarResponseDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **siteSetProlongationV1**
> SuccessResponse siteSetProlongationV1()


### Example

```typescript
import {
    PlanWebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlanWebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let enabled: boolean; //Auto prolongation enabled (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.siteSetProlongationV1(
    language,
    projectId,
    enabled,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **enabled** | [**boolean**] | Auto prolongation enabled | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**SuccessResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **siteTariffV1**
> PlanWebinarForProject siteTariffV1()


### Example

```typescript
import {
    PlanWebinarApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PlanWebinarApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.siteTariffV1(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**PlanWebinarForProject**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

