# SiteAuthExchangeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_en]
**code** | **string** | Auth code for exchange of token | [default to undefined]
**userAgent** | **string** | userAgent | [default to undefined]
**app** | **string** | App oauth | [default to AppEnum_site]
**fingerprint** | **string** | Fingerprint | [optional] [default to '']

## Example

```typescript
import { SiteAuthExchangeRequest } from './api';

const instance: SiteAuthExchangeRequest = {
    v,
    language,
    code,
    userAgent,
    app,
    fingerprint,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
