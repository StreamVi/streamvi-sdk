# PromoApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**promoApplyV1**](#promoapplyv1) | **GET** /method/promo/apply | Apply code|
|[**promoCheckV1**](#promocheckv1) | **GET** /method/promo/check | Check code|

# **promoApplyV1**
> SitePromoApplyResponse promoApplyV1()


### Example

```typescript
import {
    PromoApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PromoApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let code: number; //Code (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.promoApplyV1(
    language,
    projectId,
    code,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **code** | [**number**] | Code | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SitePromoApplyResponse**

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

# **promoCheckV1**
> SitePromoCheckResponse promoCheckV1()


### Example

```typescript
import {
    PromoApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PromoApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let code: number; //Code (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.promoCheckV1(
    language,
    projectId,
    code,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **code** | [**number**] | Code | defaults to undefined|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


### Return type

**SitePromoCheckResponse**

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

