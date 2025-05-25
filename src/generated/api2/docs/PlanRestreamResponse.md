# PlanRestreamResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_restream_id** | **number** | Unique ID | [default to undefined]
**title** | **string** | Title | [default to undefined]
**active** | **boolean** | Active | [default to undefined]
**count_channel_min** | **number** | Minimum channel count | [default to undefined]
**count_channel_max** | **number** | Maximum channel count | [default to undefined]
**type** | **string** | Type | [default to undefined]
**price_rub** | **number** | Price (RUB) | [default to undefined]
**price_usd** | **number** | Price (USD) | [default to undefined]
**bitrate_max** | **number** | Maximum bitrate, kbps | [default to undefined]
**bitrate_min** | **number** | Minimum bitrate, kbps | [default to undefined]
**resolution** | **string** | Resolution | [default to undefined]
**fps** | **string** | Fps | [default to undefined]
**create_projects** | **boolean** | Create project in account | [default to undefined]
**chat** | **boolean** | Use multichat | [default to undefined]
**video** | **boolean** | Playing video as a broadcast | [default to undefined]
**video_storage** | **number** | Storage of video files, Gb | [default to undefined]
**change_subject** | **boolean** | Change title, description, image and other data of stream | [default to undefined]
**background_chat** | **boolean** | Collect chat messages in the background | [default to undefined]
**dedicated_server** | **boolean** | Dedicated server | [default to undefined]
**personal_manager** | **number** | Personal manager | [default to undefined]
**pull_link_limit** | **number** | pull links | [default to undefined]
**index** | **number** | Field for sort | [default to undefined]
**discount** | [**PlanRestreamDiscountResponse**](PlanRestreamDiscountResponse.md) | Discount | [default to undefined]

## Example

```typescript
import { PlanRestreamResponse } from './api';

const instance: PlanRestreamResponse = {
    plan_restream_id,
    title,
    active,
    count_channel_min,
    count_channel_max,
    type,
    price_rub,
    price_usd,
    bitrate_max,
    bitrate_min,
    resolution,
    fps,
    create_projects,
    chat,
    video,
    video_storage,
    change_subject,
    background_chat,
    dedicated_server,
    personal_manager,
    pull_link_limit,
    index,
    discount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
