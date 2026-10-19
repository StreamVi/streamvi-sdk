# MoneyFlowApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**moneyFlowListV1**](#moneyflowlistv1) | **GET** /method/money_flow/list | Transaction list for frontend|

# **moneyFlowListV1**
> PaginatedMoneyFlowResponse moneyFlowListV1()

Read fund movements for project_id with limit/offset, date_from/date_to, and type/balance_type filters. offset is the number of records to skip; filters are comma-separated strings transformed according to allowed codes. Monetary values are minor currency units: divide by 100 for display in the response currency. This reads history without topping up or making a payment.

### Example

```typescript
import {
    MoneyFlowApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new MoneyFlowApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let limit: number; //Number of results (optional) (default to 20)
let offset: number; //Page offset number (optional) (default to 0)
let dateFrom: string; //Date from (optional) (default to undefined)
let dateTo: string; //Date to (optional) (default to undefined)
let type: string; //Filter code transaction. example: referral_profit or payment,referral_profit (optional) (default to '')
let balanceType: string; //Filter code transaction. example 1 or 1,2,3 (optional) (default to '')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.moneyFlowListV1(
    language,
    projectId,
    v,
    limit,
    offset,
    dateFrom,
    dateTo,
    type,
    balanceType,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **limit** | [**number**] | Number of results | (optional) defaults to 20|
| **offset** | [**number**] | Page offset number | (optional) defaults to 0|
| **dateFrom** | [**string**] | Date from | (optional) defaults to undefined|
| **dateTo** | [**string**] | Date to | (optional) defaults to undefined|
| **type** | [**string**] | Filter code transaction. example: referral_profit or payment,referral_profit | (optional) defaults to ''|
| **balanceType** | [**string**] | Filter code transaction. example 1 or 1,2,3 | (optional) defaults to ''|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PaginatedMoneyFlowResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account), [oauth2Project](../README.md#oauth2Project)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

