# MethodSetStatusChannelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [optional] [default to LanguageEnum_En]
**channel_id** | **number** | Channel id | [default to undefined]
**status** | **boolean** | Status channel status | [default to undefined]

## Example

```typescript
import { MethodSetStatusChannelRequest } from 'streamvi-api-client';

const instance: MethodSetStatusChannelRequest = {
    v,
    language,
    channel_id,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
