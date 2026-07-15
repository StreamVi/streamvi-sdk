# RtmpServerListItemV3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pool_id** | **number** | Pool id | [default to undefined]
**id** | **number** | id | [default to undefined]
**city** | **string** | City | [default to undefined]
**urls** | [**ServerUrl**](ServerUrl.md) | Connection urls | [default to undefined]
**pingHost** | **string** | Ping host | [default to undefined]
**country** | [**CountryItem**](CountryItem.md) | Country | [default to undefined]
**index** | **number** | Sort index | [default to undefined]
**_options** | [**RtmpServerListOptionsV3**](RtmpServerListOptionsV3.md) | Pool options | [default to undefined]

## Example

```typescript
import { RtmpServerListItemV3 } from 'streamvi-api-client';

const instance: RtmpServerListItemV3 = {
    pool_id,
    id,
    city,
    urls,
    pingHost,
    country,
    index,
    _options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
