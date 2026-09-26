# ProjectInfoRestreamDataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_restream_id** | **number** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**active** | **boolean** |  | [default to undefined]
**count_channel_max** | **number** |  | [default to undefined]
**count_channel_min** | **number** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**price_rub** | **number** |  | [default to undefined]
**price_usd** | **number** |  | [default to undefined]
**bitrate_max** | **number** |  | [default to undefined]
**bitrate_min** | **number** |  | [default to undefined]
**resolution** | **string** |  | [default to undefined]
**fps** | **string** |  | [default to undefined]
**create_projects** | **boolean** |  | [default to undefined]
**chat** | **boolean** |  | [default to undefined]
**video** | **boolean** |  | [default to undefined]
**video_storage** | **number** |  | [default to undefined]
**change_subject** | **boolean** |  | [default to undefined]
**background_chat** | **boolean** |  | [default to undefined]
**dedicated_server** | **boolean** |  | [default to undefined]
**personal_manager** | **number** |  | [default to undefined]
**index** | **number** |  | [default to undefined]
**pull_link_limit** | **number** |  | [default to undefined]
**discount** | [**PlanRestreamDiscountResponse**](PlanRestreamDiscountResponse.md) |  | [default to undefined]
**support_custom_channel** | **boolean** |  | [default to undefined]
**purchase_available** | **boolean** |  | [default to undefined]
**prolongation_available** | **boolean** |  | [default to undefined]
**disconnect_protection_max_minutes** | **number** | Maximum disconnect protection time for this purchased period, in minutes | [default to undefined]

## Example

```typescript
import { ProjectInfoRestreamDataResponse } from 'streamvi-api-client';

const instance: ProjectInfoRestreamDataResponse = {
    plan_restream_id,
    title,
    active,
    count_channel_max,
    count_channel_min,
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
    index,
    pull_link_limit,
    discount,
    support_custom_channel,
    purchase_available,
    prolongation_available,
    disconnect_protection_max_minutes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
