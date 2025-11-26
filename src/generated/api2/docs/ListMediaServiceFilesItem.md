# ListMediaServiceFilesItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_id** | **number** | Media service file id | [default to undefined]
**isEditable** | **boolean** | Is editable | [default to undefined]
**name** | **string** | Name | [default to undefined]
**duration** | **number** | Duration | [default to undefined]
**size** | **number** | Size | [default to undefined]
**content_type** | **string** | Content type | [default to undefined]
**thumbnail** | **string** | Thumbnail | [default to undefined]
**video** | **string** | Video url | [default to undefined]
**isDisabled** | **boolean** | No select video | [default to undefined]
**status** | **MediaServiceFilesStatus**(MediaServiceFilesStatus.md) | Status | [default to undefined]
**error** | **string** | Error | [optional] [default to undefined]
**created_at** | **string** | Created at | [default to undefined]
**event_channel** | **string** | Event channel for connect to centrifuge | [optional] [default to undefined]

## Example

```typescript
import { ListMediaServiceFilesItem } from 'streamvi-api-client';

const instance: ListMediaServiceFilesItem = {
    media_id,
    isEditable,
    name,
    duration,
    size,
    content_type,
    thumbnail,
    video,
    isDisabled,
    status,
    error,
    created_at,
    event_channel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
