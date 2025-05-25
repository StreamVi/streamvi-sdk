# MessageResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **string** |  | [default to undefined]
**restreams** | [**Array&lt;MessageRestreamResponseDto&gt;**](MessageRestreamResponseDto.md) |  | [default to undefined]
**entities** | **Array&lt;object&gt;** |  | [default to undefined]
**text** | **string** |  | [default to undefined]
**sender** | **object** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**broadcast_id** | **number** |  | [default to undefined]
**is_outgoing** | **boolean** |  | [default to undefined]

## Example

```typescript
import { MessageResponseDto } from './api';

const instance: MessageResponseDto = {
    event_id,
    restreams,
    entities,
    text,
    sender,
    created_at,
    broadcast_id,
    is_outgoing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
