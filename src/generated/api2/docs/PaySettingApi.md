# PaySettingApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**paySettingCheckCountryV1**(#paysettingcheckcountryv1) | **GET** /method/pay-setting/check-country | Check country after update user|
|**paySettingGetSettingV3**(#paysettinggetsettingv3) | **GET** /method/pay-setting | Get pay settings for profile v3|
|**paySettingSetSettingV1**(#paysettingsetsettingv1) | **POST** /method/pay-setting | Set pay settings for profile|

# **paySettingCheckCountryV1**
> PayCheckCountryResponse paySettingCheckCountryV1()


### Example

```typescript
import {
    PaySettingApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySettingApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let countryId: number; //country id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.paySettingCheckCountryV1(
    language,
    projectId,
    countryId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **countryId** | **number** | country id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|


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

# **paySettingGetSettingV3**
> GetPaySettingResponseV3 paySettingGetSettingV3()


### Example

```typescript
import {
    PaySettingApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySettingApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 3 based on method version, can be overridden) (optional) (default to '3')

const { status, data } = await apiInstance.paySettingGetSettingV3(
    language,
    projectId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 3 based on method version, can be overridden) | (optional) defaults to '3'|


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

# **paySettingSetSettingV1**
> paySettingSetSettingV1(paySettingBodyDto)


### Example

```typescript
import {
    PaySettingApi,
    Configuration,
    PaySettingBodyDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySettingApi(configuration);

let paySettingBodyDto: PaySettingBodyDto; //

const { status, data } = await apiInstance.paySettingSetSettingV1(
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

