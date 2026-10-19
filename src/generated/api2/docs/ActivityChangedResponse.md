# ActivityChangedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **string** |  | [default to undefined]
**schema_version** | **number** |  | [default to undefined]
**event_id** | **string** |  | [default to undefined]
**occurred_at** | **string** |  | [default to undefined]
**scope** | [**ActivityScopeResponse**](ActivityScopeResponse.md) |  | [default to undefined]
**payload** | [**ActivityChangedPayload**](ActivityChangedPayload.md) |  | [default to undefined]

## Example

```typescript
import { ActivityChangedResponse } from 'streamvi-api-client';

const instance: ActivityChangedResponse = {
    event,
    schema_version,
    event_id,
    occurred_at,
    scope,
    payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
