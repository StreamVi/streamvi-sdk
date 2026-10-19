# OkDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**channel_id** | **string** | External OK channel/community identifier from the platform channel list for account_id. Pass the original string, preserving leading zeros. This add-channel method does not take an internal StreamVi channel_id/group_id. | [default to undefined]
**account_id** | **string** | OK account id | [default to undefined]
**rtmp_url** | **string** | Connect url | [default to undefined]
**stream_key** | **string** | Stream key | [default to undefined]

## Example

```typescript
import { OkDto } from 'streamvi-api-client';

const instance: OkDto = {
    v,
    language,
    project_id,
    channel_id,
    account_id,
    rtmp_url,
    stream_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
