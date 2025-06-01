# MoneyFlowApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|**moneyFlowListV1**(#moneyflowlistv1) | **GET** /method/money_flow/list | Transaction list for frontend|

# **moneyFlowListV1**
> PaginatedResponseOfMoneyFlowResponse moneyFlowListV1()


### Example

```typescript
import {
    MoneyFlowApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MoneyFlowApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1' | '2' | '3'; //Version (automatically defaults to 1 based on method version, can be overridden) (optional) (default to '1')
let limit: number; //Number of results (optional) (default to 20)
let offset: number; //Page offset number (optional) (default to 0)
let dateFrom: string; //Date from (optional) (default to undefined)
let dateTo: string; //Date to (optional) (default to undefined)
let type: string; //Filter code transaction. example 1 or 1,2,3 (optional) (default to '')
let balanceType: string; //Filter code transaction. example 1 or 1,2,3 (optional) (default to '')

const { status, data } = await apiInstance.moneyFlowListV1(
    language,
    projectId,
    v,
    limit,
    offset,
    dateFrom,
    dateTo,
    type,
    balanceType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **projectId** | **number** | Project id | defaults to undefined|
| **v** | **'1' | '2' | '3'** | Version (automatically defaults to 1 based on method version, can be overridden) | (optional) defaults to '1'|
| **limit** | **number** | Number of results | (optional) defaults to 20|
| **offset** | **number** | Page offset number | (optional) defaults to 0|
| **dateFrom** | **string** | Date from | (optional) defaults to undefined|
| **dateTo** | **string** | Date to | (optional) defaults to undefined|
| **type** | **string** | Filter code transaction. example 1 or 1,2,3 | (optional) defaults to ''|
| **balanceType** | **string** | Filter code transaction. example 1 or 1,2,3 | (optional) defaults to ''|


### Return type

**PaginatedResponseOfMoneyFlowResponse**

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

