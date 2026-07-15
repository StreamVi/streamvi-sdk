# CentrifugoChannelCatalogItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_type** | **string** | Public method channel type | [default to undefined]
**channel_pattern** | **string** | Centrifuge channel name pattern | [default to undefined]
**required_params** | **Array&lt;string&gt;** | Required request parameters | [default to undefined]
**requires_token** | **boolean** | Requires a Centrifuge channel subscription token in addition to the connect token | [default to undefined]
**response_schema** | **string** | OpenAPI schema name for publication payload | [default to undefined]
**events** | **Array&lt;string&gt;** | Events or publication kinds sent through the channel | [default to undefined]
**description** | **string** | Human-readable channel description | [default to undefined]

## Example

```typescript
import { CentrifugoChannelCatalogItemResponse } from 'streamvi-api-client';

const instance: CentrifugoChannelCatalogItemResponse = {
    channel_type,
    channel_pattern,
    required_params,
    requires_token,
    response_schema,
    events,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
