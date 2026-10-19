# TransactionsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**transactionsListV1**](#transactionslistv1) | **GET** /method/transactions/list | Transaction list for frontend|

# **transactionsListV1**
> PaginatedTransactionResponse transactionsListV1()

Read financial transactions of project_id for the current user using limit/offset, date_from/date_to, and code. offset is the number of records to skip; code filters transaction types. Monetary amounts are minor currency units; divide by 100 for display. This reads transaction history without creating a payment, topping up, or issuing a refund.

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let limit: number; //Number of results (optional) (default to 20)
let offset: number; //Page offset number (optional) (default to 0)
let dateFrom: string; //Date from (optional) (default to undefined)
let dateTo: string; //Date to (optional) (default to undefined)
let code: string; //Filter code transaction. example 1 or 1,2,3 (optional) (default to '')
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.transactionsListV1(
    language,
    projectId,
    v,
    limit,
    offset,
    dateFrom,
    dateTo,
    code,
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
| **code** | [**string**] | Filter code transaction. example 1 or 1,2,3 | (optional) defaults to ''|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**PaginatedTransactionResponse**

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

