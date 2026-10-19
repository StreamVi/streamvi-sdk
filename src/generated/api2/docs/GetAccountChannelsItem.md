# GetAccountChannelsItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Id channel | [default to undefined]
**name** | **string** | Name channel | [default to undefined]
**photo** | **string** | Photo channel | [default to undefined]
**members** | **number** | Members channel | [default to undefined]
**isPrimary** | **boolean** | Main channel of the selected VK Video Live account | [optional] [default to undefined]
**connectedId** | **number** | Connected id | [default to undefined]
**accounts** | [**Array&lt;GetAccountChannelsAccountItem&gt;**](GetAccountChannelsAccountItem.md) | Accounts | [default to undefined]

## Example

```typescript
import { GetAccountChannelsItem } from 'streamvi-api-client';

const instance: GetAccountChannelsItem = {
    id,
    name,
    photo,
    members,
    isPrimary,
    connectedId,
    accounts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
