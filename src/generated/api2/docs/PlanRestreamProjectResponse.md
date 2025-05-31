# PlanRestreamProjectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planRestreamId** | **number** | Unique ID | [default to undefined]
**title** | **string** | Title | [default to undefined]
**active** | **boolean** | Active | [default to undefined]
**countChannelMin** | **number** | Minimum channel count | [optional] [default to undefined]
**countChannelMax** | **number** | Maximum channel count | [default to undefined]
**countChannelStep** | **number** | Step channel | [optional] [default to undefined]
**type** | **string** | Type | [default to undefined]
**bitrateMax** | **number** | Maximum bitrate, kbps | [default to undefined]
**bitrateMin** | **number** | Minimum bitrate, kbps | [optional] [default to undefined]
**bitrateStep** | **number** | Step bitrate | [optional] [default to undefined]
**index** | **number** | Field for sort | [default to undefined]
**price** | [**PlanRestreamPrice**](PlanRestreamPrice.md) | Price | [default to undefined]
**status** | **string** | Status | [default to undefined]
**feature** | [**Array&lt;PlanRestreamFeatureItemV2&gt;**](PlanRestreamFeatureItemV2.md) | Features | [default to undefined]
**ownTariff** | [**PlanRestreamForProjectV2**](PlanRestreamForProjectV2.md) | Tariff project | [default to undefined]

## Example

```typescript
import { PlanRestreamProjectResponse } from 'streamvi-api-client';

const instance: PlanRestreamProjectResponse = {
    planRestreamId,
    title,
    active,
    countChannelMin,
    countChannelMax,
    countChannelStep,
    type,
    bitrateMax,
    bitrateMin,
    bitrateStep,
    index,
    price,
    status,
    feature,
    ownTariff,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
