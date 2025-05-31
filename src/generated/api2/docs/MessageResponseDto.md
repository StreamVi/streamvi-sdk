# MessageResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventId** | **string** |  | [default to undefined]
**restreams** | [**Array&lt;MessageRestreamResponseDto&gt;**](MessageRestreamResponseDto.md) |  | [default to undefined]
**entities** | **Array&lt;object&gt;** |  | [default to undefined]
**text** | **string** |  | [default to undefined]
**sender** | **object** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**broadcastId** | **number** |  | [default to undefined]
**isOutgoing** | **boolean** |  | [default to undefined]

## Example

```typescript
import { MessageResponseDto } from 'streamvi-api-client';

const instance: MessageResponseDto = {
    eventId,
    restreams,
    entities,
    text,
    sender,
    createdAt,
    broadcastId,
    isOutgoing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
