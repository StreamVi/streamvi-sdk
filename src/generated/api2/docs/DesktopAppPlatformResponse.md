# DesktopAppPlatformResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platform** | **string** |  | [default to undefined]
**available** | **boolean** | Always true; unavailable platforms are omitted. | [default to undefined]
**version** | **string** |  | [default to undefined]
**publishedAt** | **string** |  | [default to undefined]
**downloads** | [**Array&lt;DesktopAppDownloadResponse&gt;**](DesktopAppDownloadResponse.md) | Ordered downloads; first is primary. | [default to undefined]

## Example

```typescript
import { DesktopAppPlatformResponse } from 'streamvi-api-client';

const instance: DesktopAppPlatformResponse = {
    platform,
    available,
    version,
    publishedAt,
    downloads,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
