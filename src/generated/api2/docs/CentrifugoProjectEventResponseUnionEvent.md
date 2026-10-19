# CentrifugoProjectEventResponseUnionEvent

Centrifugo project event response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **string** | Event type | [default to undefined]
**schema_version** | **number** |  | [default to undefined]
**event_id** | **string** |  | [default to undefined]
**occurred_at** | **string** |  | [default to undefined]
**scope** | [**ActivityScopeResponse**](ActivityScopeResponse.md) |  | [default to undefined]
**payload** | [**CentrifugoPaymentUpdatePayload**](CentrifugoPaymentUpdatePayload.md) | Payload | [default to undefined]

## Example

```typescript
import { CentrifugoProjectEventResponseUnionEvent } from 'streamvi-api-client';

const instance: CentrifugoProjectEventResponseUnionEvent = {
    event,
    schema_version,
    event_id,
    occurred_at,
    scope,
    payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
