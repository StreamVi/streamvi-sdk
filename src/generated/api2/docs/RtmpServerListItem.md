# RtmpServerListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **string** | City | [default to undefined]
**url** | **string** | Rtmp url | [default to undefined]
**country** | [**CountryItem**](CountryItem.md) | Country | [default to undefined]
**network** | [**RtmpServerLoading**](RtmpServerLoading.md) | Network load of the selected time | [default to undefined]
**cpu** | [**RtmpServerLoading**](RtmpServerLoading.md) | CPU load of the selected time | [default to undefined]
**ram** | [**RtmpServerLoading**](RtmpServerLoading.md) | RAM load of the selected time | [default to undefined]
**quality** | **number** | Quality connection of pool | [default to undefined]
**index** | **number** | Sort index | [default to undefined]
**serverStatus** | **string** | Quality in string format | [default to undefined]
**platforms** | [**Array&lt;RtmpServerPlatformQuality&gt;**](RtmpServerPlatformQuality.md) | Quality array | [default to undefined]

## Example

```typescript
import { RtmpServerListItem } from './api';

const instance: RtmpServerListItem = {
    city,
    url,
    country,
    network,
    cpu,
    ram,
    quality,
    index,
    serverStatus,
    platforms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
