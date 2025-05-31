# PlanRestreamResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planRestreamId** | **number** | Unique ID | [default to undefined]
**title** | **string** | Title | [default to undefined]
**active** | **boolean** | Active | [default to undefined]
**countChannelMin** | **number** | Minimum channel count | [default to undefined]
**countChannelMax** | **number** | Maximum channel count | [default to undefined]
**type** | **string** | Type | [default to undefined]
**priceRub** | **number** | Price (RUB) | [default to undefined]
**priceUsd** | **number** | Price (USD) | [default to undefined]
**bitrateMax** | **number** | Maximum bitrate, kbps | [default to undefined]
**bitrateMin** | **number** | Minimum bitrate, kbps | [default to undefined]
**resolution** | **string** | Resolution | [default to undefined]
**fps** | **string** | Fps | [default to undefined]
**createProjects** | **boolean** | Create project in account | [default to undefined]
**chat** | **boolean** | Use multichat | [default to undefined]
**video** | **boolean** | Playing video as a broadcast | [default to undefined]
**videoStorage** | **number** | Storage of video files, Gb | [default to undefined]
**changeSubject** | **boolean** | Change title, description, image and other data of stream | [default to undefined]
**backgroundChat** | **boolean** | Collect chat messages in the background | [default to undefined]
**dedicatedServer** | **boolean** | Dedicated server | [default to undefined]
**personalManager** | **number** | Personal manager | [default to undefined]
**pullLinkLimit** | **number** | pull links | [default to undefined]
**index** | **number** | Field for sort | [default to undefined]
**discount** | [**PlanRestreamDiscountResponse**](PlanRestreamDiscountResponse.md) | Discount | [default to undefined]

## Example

```typescript
import { PlanRestreamResponse } from 'streamvi-api-client';

const instance: PlanRestreamResponse = {
    planRestreamId,
    title,
    active,
    countChannelMin,
    countChannelMax,
    type,
    priceRub,
    priceUsd,
    bitrateMax,
    bitrateMin,
    resolution,
    fps,
    createProjects,
    chat,
    video,
    videoStorage,
    changeSubject,
    backgroundChat,
    dedicatedServer,
    personalManager,
    pullLinkLimit,
    index,
    discount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
