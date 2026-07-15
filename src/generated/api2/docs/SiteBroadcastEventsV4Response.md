# SiteBroadcastEventsV4Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**Array&lt;SiteRestreamEventV4Response&gt;**](SiteRestreamEventV4Response.md) | Array of items | [default to undefined]
**limit** | **number** | Limit | [default to undefined]
**offset** | **number** | Offset | [default to undefined]
**total** | **number** | Total | [default to undefined]
**sort_by_date** | **string** | Sort by date | [default to undefined]
**next_cursor_id** | **string** | Next page cursor event id | [optional] [default to undefined]
**next_cursor_datetime** | **string** | Next page cursor event datetime | [optional] [default to undefined]

## Example

```typescript
import { SiteBroadcastEventsV4Response } from 'streamvi-api-client';

const instance: SiteBroadcastEventsV4Response = {
    results,
    limit,
    offset,
    total,
    sort_by_date,
    next_cursor_id,
    next_cursor_datetime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
