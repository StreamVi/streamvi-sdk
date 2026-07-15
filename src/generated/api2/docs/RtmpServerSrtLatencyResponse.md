# RtmpServerSrtLatencyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**src_ip** | **string** | Source IPv4 address | [default to undefined]
**dst_ip** | **string** | Destination IPv4 address | [default to undefined]
**profile** | **string** | Recommendation profile | [default to undefined]
**latency** | **number** | Recommended latency in ms | [default to undefined]
**found** | **boolean** | Was recommendation data found in KV | [default to undefined]
**stale** | **boolean** | Is recommendation data stale | [default to undefined]
**generated_at** | **string** | Recommendation generation time | [default to undefined]
**message** | **string** | Additional message | [default to undefined]

## Example

```typescript
import { RtmpServerSrtLatencyResponse } from 'streamvi-api-client';

const instance: RtmpServerSrtLatencyResponse = {
    src_ip,
    dst_ip,
    profile,
    latency,
    found,
    stale,
    generated_at,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
