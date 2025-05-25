# PaySettingApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**paySettingControllerCheckCountry1**](#paysettingcontrollercheckcountry1) | **GET** /method/pay-setting/check-country | Check country after update user|
|[**paySettingControllerGetSettingV31**](#paysettingcontrollergetsettingv31) | **GET** /method/pay-setting | Get pay settings for profile v3|
|[**paySettingControllerSetSetting1**](#paysettingcontrollersetsetting1) | **POST** /method/pay-setting | Set pay settings for profile|

# **paySettingControllerCheckCountry1**
> PayCheckCountryResponse paySettingControllerCheckCountry1()


### Example

```typescript
import {
    PaySettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaySettingApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let countryId: number; //country id (default to undefined)

const { status, data } = await apiInstance.paySettingControllerCheckCountry1(
    v,
    language,
    projectId,
    countryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **countryId** | [**number**] | country id | defaults to undefined|


### Return type

**PayCheckCountryResponse**

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

# **paySettingControllerGetSettingV31**
> GetPaySettingResponseV3 paySettingControllerGetSettingV31()


### Example

```typescript
import {
    PaySettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaySettingApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.paySettingControllerGetSettingV31(
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

**GetPaySettingResponseV3**

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

# **paySettingControllerSetSetting1**
> paySettingControllerSetSetting1(paySettingBodyDto)


### Example

```typescript
import {
    PaySettingApi,
    Configuration,
    PaySettingBodyDto
} from './api';

const configuration = new Configuration();
const apiInstance = new PaySettingApi(configuration);

let paySettingBodyDto: PaySettingBodyDto; //

const { status, data } = await apiInstance.paySettingControllerSetSetting1(
    paySettingBodyDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paySettingBodyDto** | **PaySettingBodyDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

