# LiveRestreamInfoItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Restream id | [default to undefined]
**channelId** | **number** | Channel id | [default to undefined]
**channelName** | **string** | Channel name | [default to undefined]
**channelType** | **string** | Channel type | [default to undefined]
**url** | **string** | Stream url | [optional] [default to undefined]
**viewer** | **number** | Count of viewers | [optional] [default to undefined]
**message** | **number** | Count of message | [optional] [default to undefined]
**like** | **number** | Count of like | [optional] [default to undefined]

## Example

```typescript
import { LiveRestreamInfoItem } from 'streamvi-api-client';

const instance: LiveRestreamInfoItem = {
    id,
    channelId,
    channelName,
    channelType,
    url,
    viewer,
    message,
    like,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
