# MethodChatSendMessageRequestDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Client-assigned UUID v4 of the message to send. Not a stream/channel ID or X-Client-Request-Id. | [default to undefined]
**text** | **string** | Outgoing chat message text, 1–300 characters. | [default to undefined]
**restreams** | **Array&lt;number&gt;** | Optional list of internal broadcast destination restream_id values; obtain them from /method/broadcast/restreams-chat, not platform channel_id. | [optional] [default to undefined]

## Example

```typescript
import { MethodChatSendMessageRequestDto } from 'streamvi-api-client';

const instance: MethodChatSendMessageRequestDto = {
    id,
    text,
    restreams,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
