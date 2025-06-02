# LiveRestreamInfoItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Restream id | [default to undefined]
**channel_id** | **number** | Channel id | [default to undefined]
**channel_name** | **string** | Channel name | [default to undefined]
**channel_type** | **string** | Channel type | [default to undefined]
**url** | **string** | Stream url | [optional] [default to undefined]
**viewer** | **number** | Count of viewers | [optional] [default to undefined]
**message** | **number** | Count of message | [optional] [default to undefined]
**like** | **number** | Count of like | [optional] [default to undefined]

## Example

```typescript
import { LiveRestreamInfoItem } from 'streamvi-api-client';

const instance: LiveRestreamInfoItem = {
    id,
    channel_id,
    channel_name,
    channel_type,
    url,
    viewer,
    message,
    like,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
