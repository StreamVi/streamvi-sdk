# MethodIntegrationUpdateSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**integration_id** | **string** | Developer application Mongo ID; authorization uses its actual owner and administrators | [default to undefined]
**url** | **string** | Application URL, or empty string to clear it | [default to undefined]
**url_dev** | **string** | Development URL, or empty string to clear it | [default to undefined]
**urls_oauth2** | **Array&lt;string&gt;** | Exact registered OAuth callback URLs | [default to undefined]
**is_dev** | **boolean** | Whether the application uses its development URL | [default to undefined]
**scope_mode** | **string** | Omission preserves the current application allowlist mode | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** | Omission preserves the existing selected scope list | [optional] [default to undefined]

## Example

```typescript
import { MethodIntegrationUpdateSettingsRequest } from 'streamvi-api-client';

const instance: MethodIntegrationUpdateSettingsRequest = {
    v,
    language,
    integration_id,
    url,
    url_dev,
    urls_oauth2,
    is_dev,
    scope_mode,
    scopes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
