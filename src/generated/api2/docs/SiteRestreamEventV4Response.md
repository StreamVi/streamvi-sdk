# SiteRestreamEventV4Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Event id | [default to undefined]
**level** | **string** | Level of event. \&#39;info\&#39;, \&#39;warning\&#39;, \&#39;error\&#39;, \&#39;debug\&#39; only. Default is \&#39;info | [default to undefined]
**text** | **string** | text | [default to undefined]
**created_at** | **string** | Create time | [default to undefined]
**app** | **string** | App | [default to undefined]
**server** | [**SiteRestreamEventServerResponse**](SiteRestreamEventServerResponse.md) | Server location info | [default to undefined]
**platform** | **string** | Platform | [optional] [default to undefined]

## Example

```typescript
import { SiteRestreamEventV4Response } from 'streamvi-api-client';

const instance: SiteRestreamEventV4Response = {
    id,
    level,
    text,
    created_at,
    app,
    server,
    platform,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
