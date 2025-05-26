# PlanRestreamProjectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_restream_id** | **number** | Unique ID | [default to undefined]
**title** | **string** | Title | [default to undefined]
**active** | **boolean** | Active | [default to undefined]
**count_channel_max** | **number** | Maximum channel count | [default to undefined]
**type** | **string** | Type | [default to undefined]
**bitrate_max** | **number** | Maximum bitrate, kbps | [default to undefined]
**index** | **number** | Field for sort | [default to undefined]
**price** | [**PlanRestreamPrice**](PlanRestreamPrice.md) | Price | [default to undefined]
**status** | **string** | Status | [default to undefined]
**feature** | [**Array&lt;PlanRestreamFeatureItemV2&gt;**](PlanRestreamFeatureItemV2.md) | Features | [default to undefined]
**own_tariff** | [**PlanRestreamForProjectV2**](PlanRestreamForProjectV2.md) | Tariff project | [default to undefined]
**count_channel_min** | **number** | Minimum channel count | [optional] [default to undefined]
**count_channel_step** | **number** | Step channel | [optional] [default to undefined]
**bitrate_min** | **number** | Minimum bitrate, kbps | [optional] [default to undefined]
**bitrate_step** | **number** | Step bitrate | [optional] [default to undefined]

## Example

```typescript
import { PlanRestreamProjectResponse } from './api';

const instance: PlanRestreamProjectResponse = {
    plan_restream_id,
    title,
    active,
    count_channel_max,
    type,
    bitrate_max,
    index,
    price,
    status,
    feature,
    own_tariff,
    count_channel_min,
    count_channel_step,
    bitrate_min,
    bitrate_step,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
