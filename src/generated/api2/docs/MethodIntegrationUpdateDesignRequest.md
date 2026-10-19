# MethodIntegrationUpdateDesignRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**integration_id** | **string** | Developer application Mongo ID; authorization uses its actual owner and administrators | [default to undefined]
**icon_app** | **string** | Existing integration CDN URL or PNG/JPEG/GIF image data URL | [optional] [default to undefined]
**icon_catalog** | **string** | Existing integration CDN URL or PNG/JPEG/GIF image data URL | [optional] [default to undefined]

## Example

```typescript
import { MethodIntegrationUpdateDesignRequest } from 'streamvi-api-client';

const instance: MethodIntegrationUpdateDesignRequest = {
    v,
    language,
    integration_id,
    icon_app,
    icon_catalog,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
