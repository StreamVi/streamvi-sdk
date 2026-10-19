# MethodChannelStatusRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results; en is used when omitted. Allowed values are defined by enum. | [optional] [default to LanguageEnum_En]
**project_id** | **number** | Target accessible project ID. Account tokens fall back to their personal project only when the target is omitted in every request source; pass the explicit project used for channel search. Project tokens determine their project automatically. | [optional] [default to undefined]
**channel_id** | **number** | Internal numeric StreamVi channel ID. Use results[].group_id from channel search in the same project_id; do not use results[].id (external/platform ID), even if it contains only digits. | [default to undefined]
**active** | **boolean** | Desired enabled state in the selected project: false disables the channel, true enables it. | [default to undefined]

## Example

```typescript
import { MethodChannelStatusRequest } from 'streamvi-api-client';

const instance: MethodChannelStatusRequest = {
    v,
    language,
    project_id,
    channel_id,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
