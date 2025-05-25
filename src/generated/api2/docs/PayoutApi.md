# PayoutApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**payoutControllerCreate1**](#payoutcontrollercreate1) | **POST** /method/payout/create | Create payout|
|[**payoutControllerPrepare1**](#payoutcontrollerprepare1) | **GET** /method/payout/prepare | Get payout data for create|

# **payoutControllerCreate1**
> SuccessResponse payoutControllerCreate1(payoutCreateRequestBodyDto)


### Example

```typescript
import {
    PayoutApi,
    Configuration,
    PayoutCreateRequestBodyDto
} from './api';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let payoutCreateRequestBodyDto: PayoutCreateRequestBodyDto; //

const { status, data } = await apiInstance.payoutControllerCreate1(
    v,
    language,
    payoutCreateRequestBodyDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payoutCreateRequestBodyDto** | **PayoutCreateRequestBodyDto**|  | |
| **v** | [**&#39;1&#39; | &#39;2&#39; | &#39;3&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | Version | defaults to undefined|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|


### Return type

**SuccessResponse**

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

# **payoutControllerPrepare1**
> ListOfPayoutSystemAccountListItemResponse payoutControllerPrepare1()


### Example

```typescript
import {
    PayoutApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let v: '1' | '2' | '3'; //Version (default to undefined)
let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)

const { status, data } = await apiInstance.payoutControllerPrepare1(
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

**ListOfPayoutSystemAccountListItemResponse**

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

