# RtmpServerStateItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **string** | City | [default to undefined]
**country** | [**CountryItem**](CountryItem.md) | Country | [default to undefined]
**lat** | **number** | Latitude | [default to undefined]
**_long** | **number** | Longitude | [default to undefined]
**network** | [**RtmpServerLoading**](RtmpServerLoading.md) | Network load of the selected time | [default to undefined]
**cpu** | [**RtmpServerLoading**](RtmpServerLoading.md) | CPU load of the selected time | [default to undefined]
**ram** | [**RtmpServerLoading**](RtmpServerLoading.md) | RAM load of the selected time | [default to undefined]
**quality** | **number** | Quality connection of pool | [default to undefined]
**serverStatus** | **string** | Quality in string format | [default to undefined]
**platforms** | [**Array&lt;RtmpServerPlatformQuality&gt;**](RtmpServerPlatformQuality.md) | Quality array | [default to undefined]

## Example

```typescript
import { RtmpServerStateItem } from './api';

const instance: RtmpServerStateItem = {
    city,
    country,
    lat,
    _long,
    network,
    cpu,
    ram,
    quality,
    serverStatus,
    platforms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
