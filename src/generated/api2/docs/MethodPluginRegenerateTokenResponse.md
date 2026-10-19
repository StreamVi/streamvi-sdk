# MethodPluginRegenerateTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | True only after the requested domain operation completed | [default to undefined]
**access_token** | **string** | Sensitive new installation credential; the old token is invalidated. Never log or include in diagnostics. | [default to undefined]

## Example

```typescript
import { MethodPluginRegenerateTokenResponse } from 'streamvi-api-client';

const instance: MethodPluginRegenerateTokenResponse = {
    success,
    access_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
