# ProjectActivityChangeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** |  | [default to undefined]
**before** | [**ProjectActivityChangeResponseBefore**](ProjectActivityChangeResponseBefore.md) |  | [optional] [default to undefined]
**after** | [**ProjectActivityChangeResponseBefore**](ProjectActivityChangeResponseBefore.md) |  | [optional] [default to undefined]
**added** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**removed** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**changed** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ProjectActivityChangeResponse } from 'streamvi-api-client';

const instance: ProjectActivityChangeResponse = {
    kind,
    before,
    after,
    added,
    removed,
    changed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
