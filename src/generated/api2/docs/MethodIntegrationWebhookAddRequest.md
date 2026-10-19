# MethodIntegrationWebhookAddRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**integration_id** | **string** | Actual application owning the webhook; when optional, supplied ID must match the resolved application | [default to undefined]
**title** | **string** | Webhook display title | [default to undefined]
**url** | **string** | HTTP or HTTPS destination for the webhook delivery | [default to undefined]
**type** | **string** | Delivery encoding: GET, JSON POST or form-data POST | [default to undefined]
**events** | **Array&lt;string&gt;** | Subscribed application webhook event codes | [default to undefined]
**active** | **boolean** | Whether webhook delivery is enabled | [default to undefined]

## Example

```typescript
import { MethodIntegrationWebhookAddRequest } from 'streamvi-api-client';

const instance: MethodIntegrationWebhookAddRequest = {
    v,
    language,
    integration_id,
    title,
    url,
    type,
    events,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
