# ProjectActivityItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [default to undefined]
**schema_version** | **number** |  | [default to undefined]
**event_type** | **string** |  | [default to undefined]
**category** | **string** |  | [default to undefined]
**operation** | **string** |  | [default to undefined]
**impact** | **string** |  | [default to undefined]
**project_id** | **number** |  | [default to undefined]
**actor** | [**ProjectActivityActorResponse**](ProjectActivityActorResponse.md) |  | [default to undefined]
**source** | [**ProjectActivitySourceResponse**](ProjectActivitySourceResponse.md) |  | [default to undefined]
**subject** | [**ProjectActivityEntityRefResponse**](ProjectActivityEntityRefResponse.md) |  | [default to undefined]
**subject_display** | [**ProjectActivityEntityDisplayResponse**](ProjectActivityEntityDisplayResponse.md) |  | [default to undefined]
**related** | [**Array&lt;ProjectActivityEntityRefResponse&gt;**](ProjectActivityEntityRefResponse.md) |  | [optional] [default to undefined]
**related_display** | [**Array&lt;ProjectActivityEntityDisplayResponse&gt;**](ProjectActivityEntityDisplayResponse.md) |  | [optional] [default to undefined]
**context** | [**ProjectActivityContextResponse**](ProjectActivityContextResponse.md) |  | [default to undefined]
**changes** | [**ProjectActivityChangesResponse**](ProjectActivityChangesResponse.md) |  | [optional] [default to undefined]
**change_keys** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**visibility** | **string** |  | [default to undefined]
**occurred_at** | **string** |  | [default to undefined]
**correlation_id** | **string** |  | [optional] [default to undefined]
**causation_id** | **string** |  | [optional] [default to undefined]
**plain_text** | **string** |  | [default to undefined]
**parts** | [**Array&lt;ProjectActivityPartResponse&gt;**](ProjectActivityPartResponse.md) |  | [default to undefined]
**action_text** | **string** |  | [optional] [default to undefined]
**action_parts** | [**Array&lt;ProjectActivityPartResponse&gt;**](ProjectActivityPartResponse.md) |  | [optional] [default to undefined]
**display_changes** | [**Array&lt;ProjectActivityDisplayChangeResponse&gt;**](ProjectActivityDisplayChangeResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProjectActivityItemResponse } from 'streamvi-api-client';

const instance: ProjectActivityItemResponse = {
    _id,
    schema_version,
    event_type,
    category,
    operation,
    impact,
    project_id,
    actor,
    source,
    subject,
    subject_display,
    related,
    related_display,
    context,
    changes,
    change_keys,
    visibility,
    occurred_at,
    correlation_id,
    causation_id,
    plain_text,
    parts,
    action_text,
    action_parts,
    display_changes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
