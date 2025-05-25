# SiteRefreshAuthBodyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**app** | **string** | App oauth | [default to AppEnum_Site]
**refresh** | **string** | Refresh token | [default to undefined]
**fingerprint** | **string** | Fingerprint | [optional] [default to '']

## Example

```typescript
import { SiteRefreshAuthBodyRequest } from './api';

const instance: SiteRefreshAuthBodyRequest = {
    v,
    language,
    app,
    refresh,
    fingerprint,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
