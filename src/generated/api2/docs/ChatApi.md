# ChatApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatGatewayKeyV1**](#chatgatewaykeyv1) | **GET** /method/chat/key | Get chat key|

# **chatGatewayKeyV1**
> SiteChatKeyResponse chatGatewayKeyV1()


### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let projectId: number; //Project id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.chatGatewayKeyV1(
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

**SiteChatKeyResponse**

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

