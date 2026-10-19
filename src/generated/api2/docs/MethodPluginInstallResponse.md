# MethodPluginInstallResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Created project installation Mongo ID; not an account grant ID | [default to undefined]
**success** | **boolean** | True only after the requested domain operation completed | [default to undefined]
**access_token** | **string** | Sensitive installation credential. Never log or include in diagnostics; no account grant is created. | [optional] [default to undefined]

## Example

```typescript
import { MethodPluginInstallResponse } from 'streamvi-api-client';

const instance: MethodPluginInstallResponse = {
    _id,
    success,
    access_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
