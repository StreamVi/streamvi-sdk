# GetShortChannelItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **number** | Internal numeric StreamVi channel ID, also returned as group_id in channel search results. Do not use the external/platform id, even if it contains only digits. | [default to undefined]
**type** | **string** | type | [default to undefined]
**name** | **string** | name | [default to undefined]
**photo_default** | **string** | photo_default | [default to undefined]

## Example

```typescript
import { GetShortChannelItem } from 'streamvi-api-client';

const instance: GetShortChannelItem = {
    channel_id,
    type,
    name,
    photo_default,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
