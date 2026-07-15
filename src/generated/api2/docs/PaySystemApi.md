# PaySystemApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**paySystemCreateChallengeV1**](#paysystemcreatechallengev1) | **GET** /method/pay-system/payoneer/create | Create payoneer payment challenge redirect url|
|[**paySystemCreateTBankV1**](#paysystemcreatetbankv1) | **GET** /method/pay-system/t-bank/create | Create t-bank payment challenge redirect url|
|[**paySystemCreateUnitpayV1**](#paysystemcreateunitpayv1) | **GET** /method/pay-system/unitpay/create | Create unitpay payment challenge redirect url|
|[**paySystemListV1**](#paysystemlistv1) | **GET** /method/pay-system/list | Load available pay systems|
|[**tonConnectIntentV1**](#tonconnectintentv1) | **GET** /method/pay-system/tonconnect/intent | Create TonConnect payment intent|
|[**tonConnectStatusV1**](#tonconnectstatusv1) | **GET** /method/pay-system/tonconnect/status | Get TonConnect payment verification status|
|[**tonConnectSubmitV1**](#tonconnectsubmitv1) | **POST** /method/pay-system/tonconnect/submit | Submit TonConnect payment transaction|
|[**tronPaymentIntentV1**](#tronpaymentintentv1) | **GET** /method/pay-system/tron/intent | Create TRON USDT deposit payment intent|
|[**tronPaymentStatusV1**](#tronpaymentstatusv1) | **GET** /method/pay-system/tron/status | Get TRON USDT payment status|
|[**tronPaymentSubmitV1**](#tronpaymentsubmitv1) | **POST** /method/pay-system/tron/submit | Submit TRON USDT transaction hash (disabled)|
|[**walletConnectIntentV1**](#walletconnectintentv1) | **GET** /method/pay-system/walletconnect/intent | Create WalletConnect payment intent|
|[**walletConnectStatusV1**](#walletconnectstatusv1) | **GET** /method/pay-system/walletconnect/status | Get WalletConnect payment verification status|
|[**walletConnectSubmitV1**](#walletconnectsubmitv1) | **POST** /method/pay-system/walletconnect/submit | Submit WalletConnect payment transaction hash|

# **paySystemCreateChallengeV1**
> PayRedirectUrlDto paySystemCreateChallengeV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.paySystemCreateChallengeV1(
    language,
    paymentId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**PayRedirectUrlDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paySystemCreateTBankV1**
> PayRedirectUrlDto paySystemCreateTBankV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.paySystemCreateTBankV1(
    language,
    paymentId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**PayRedirectUrlDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paySystemCreateUnitpayV1**
> PayRedirectUrlDto paySystemCreateUnitpayV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.paySystemCreateUnitpayV1(
    language,
    paymentId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**PayRedirectUrlDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paySystemListV1**
> ListOfPaySystemListResponse paySystemListV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

const { status, data } = await apiInstance.paySystemListV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListOfPaySystemListResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tonConnectIntentV1**
> TonConnectPaymentIntentDto tonConnectIntentV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let paymentId: number; //Payment id (default to undefined)
let payerAddress: string; //Connected TON wallet address / payer (default to undefined)

const { status, data } = await apiInstance.tonConnectIntentV1(
    paymentId,
    payerAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **payerAddress** | [**string**] | Connected TON wallet address / payer | defaults to undefined|


### Return type

**TonConnectPaymentIntentDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tonConnectStatusV1**
> TonConnectPaymentStatusDto tonConnectStatusV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.tonConnectStatusV1(
    language,
    paymentId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**TonConnectPaymentStatusDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tonConnectSubmitV1**
> TonConnectPaymentStatusDto tonConnectSubmitV1(tonConnectPaymentSubmitBodyDto)


### Example

```typescript
import {
    PaySystemApi,
    Configuration,
    TonConnectPaymentSubmitBodyDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let tonConnectPaymentSubmitBodyDto: TonConnectPaymentSubmitBodyDto; //

const { status, data } = await apiInstance.tonConnectSubmitV1(
    tonConnectPaymentSubmitBodyDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tonConnectPaymentSubmitBodyDto** | **TonConnectPaymentSubmitBodyDto**|  | |


### Return type

**TonConnectPaymentStatusDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tronPaymentIntentV1**
> TronPaymentIntentDto tronPaymentIntentV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.tronPaymentIntentV1(
    language,
    paymentId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**TronPaymentIntentDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tronPaymentStatusV1**
> TronPaymentStatusDto tronPaymentStatusV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.tronPaymentStatusV1(
    language,
    paymentId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**TronPaymentStatusDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tronPaymentSubmitV1**
> tronPaymentSubmitV1(tronPaymentSubmitBodyDto)


### Example

```typescript
import {
    PaySystemApi,
    Configuration,
    TronPaymentSubmitBodyDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let tronPaymentSubmitBodyDto: TronPaymentSubmitBodyDto; //
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.tronPaymentSubmitV1(
    language,
    tronPaymentSubmitBodyDto,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tronPaymentSubmitBodyDto** | **TronPaymentSubmitBodyDto**|  | |
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **walletConnectIntentV1**
> WalletConnectPaymentIntentDto walletConnectIntentV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let paymentId: number; //Payment id (default to undefined)
let payerAddress: string; //Connected wallet address / EVM payer (default to undefined)

const { status, data } = await apiInstance.walletConnectIntentV1(
    paymentId,
    payerAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **payerAddress** | [**string**] | Connected wallet address / EVM payer | defaults to undefined|


### Return type

**WalletConnectPaymentIntentDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **walletConnectStatusV1**
> WalletConnectPaymentStatusDto walletConnectStatusV1()


### Example

```typescript
import {
    PaySystemApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Current language (default to 'en')
let paymentId: number; //Payment id (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')

const { status, data } = await apiInstance.walletConnectStatusV1(
    language,
    paymentId,
    v
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **paymentId** | [**number**] | Payment id | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|


### Return type

**WalletConnectPaymentStatusDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **walletConnectSubmitV1**
> WalletConnectPaymentStatusDto walletConnectSubmitV1(walletConnectPaymentSubmitBodyDto)


### Example

```typescript
import {
    PaySystemApi,
    Configuration,
    WalletConnectPaymentSubmitBodyDto
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new PaySystemApi(configuration);

let walletConnectPaymentSubmitBodyDto: WalletConnectPaymentSubmitBodyDto; //

const { status, data } = await apiInstance.walletConnectSubmitV1(
    walletConnectPaymentSubmitBodyDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletConnectPaymentSubmitBodyDto** | **WalletConnectPaymentSubmitBodyDto**|  | |


### Return type

**WalletConnectPaymentStatusDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

