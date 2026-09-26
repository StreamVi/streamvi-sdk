# PlanRestreamItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Plan restream id | [default to undefined]
**channel_max** | **number** | Max channels | [default to undefined]
**bitrate_max** | **number** | Max bitrate | [default to undefined]
**support_custom_channel** | **boolean** | Support custom channel | [default to undefined]
**date_end** | **string** | Date end tariff | [optional] [default to undefined]
**custom_video** | **number** | Custom video | [default to undefined]
**disconnect_protection_max_minutes** | **number** | Maximum disconnect protection time for this purchased period, in minutes | [default to undefined]
**prolongation** | **boolean** | Prolongation status | [default to undefined]
**title** | **string** | Title | [default to undefined]
**type** | **string** | Tariff type | [default to undefined]
**period** | **string** | Period | [default to undefined]

## Example

```typescript
import { PlanRestreamItem } from 'streamvi-api-client';

const instance: PlanRestreamItem = {
    id,
    channel_max,
    bitrate_max,
    support_custom_channel,
    date_end,
    custom_video,
    disconnect_protection_max_minutes,
    prolongation,
    title,
    type,
    period,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
