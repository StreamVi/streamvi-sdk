# MethodIntegrationWebhookResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Webhook Mongo ID | [default to undefined]
**integration_id** | **string** | Developer application Mongo ID owning this webhook | [default to undefined]
**title** | **string** | Webhook display title | [default to undefined]
**url** | **string** | HTTP or HTTPS destination for the webhook delivery | [default to undefined]
**type** | **string** | Delivery encoding: GET, JSON POST or form-data POST | [default to undefined]
**events** | **Array&lt;string&gt;** | Subscribed application webhook event codes | [default to undefined]
**active** | **boolean** | Whether webhook delivery is enabled | [default to undefined]

## Example

```typescript
import { MethodIntegrationWebhookResponse } from 'streamvi-api-client';

const instance: MethodIntegrationWebhookResponse = {
    _id,
    integration_id,
    title,
    url,
    type,
    events,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
