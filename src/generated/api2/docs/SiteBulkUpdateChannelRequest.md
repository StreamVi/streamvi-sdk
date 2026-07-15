# SiteBulkUpdateChannelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Current language | [default to LanguageEnum_En]
**project_id** | **number** | Project id | [default to undefined]
**title** | **string** |  | [default to 'title']
**description** | **string** |  | [default to 'description']

## Example

```typescript
import { SiteBulkUpdateChannelRequest } from 'streamvi-api-client';

const instance: SiteBulkUpdateChannelRequest = {
    v,
    language,
    project_id,
    title,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
