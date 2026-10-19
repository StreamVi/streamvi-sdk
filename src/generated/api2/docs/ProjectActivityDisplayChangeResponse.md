# ProjectActivityDisplayChangeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**label** | **string** |  | [default to undefined]
**kind** | **string** |  | [default to undefined]
**origin** | **string** |  | [default to undefined]
**caused_by** | **string** |  | [optional] [default to undefined]
**before** | [**ProjectActivityDisplayValueResponse**](ProjectActivityDisplayValueResponse.md) |  | [optional] [default to undefined]
**after** | [**ProjectActivityDisplayValueResponse**](ProjectActivityDisplayValueResponse.md) |  | [optional] [default to undefined]
**added** | [**Array&lt;ProjectActivityDisplayValueResponse&gt;**](ProjectActivityDisplayValueResponse.md) |  | [optional] [default to undefined]
**removed** | [**Array&lt;ProjectActivityDisplayValueResponse&gt;**](ProjectActivityDisplayValueResponse.md) |  | [optional] [default to undefined]
**before_text** | **string** |  | [optional] [default to undefined]
**after_text** | **string** |  | [optional] [default to undefined]
**added_text** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**removed_text** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ProjectActivityDisplayChangeResponse } from 'streamvi-api-client';

const instance: ProjectActivityDisplayChangeResponse = {
    key,
    label,
    kind,
    origin,
    caused_by,
    before,
    after,
    added,
    removed,
    before_text,
    after_text,
    added_text,
    removed_text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
