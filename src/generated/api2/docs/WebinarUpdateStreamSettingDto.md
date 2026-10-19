# WebinarUpdateStreamSettingDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version (automatically defaults to 1 based on the API contract, can be overridden) | [optional] [default to VEnum__1]
**language** | **string** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | [default to LanguageEnum_En]
**project_id** | **number** | Required selected project for account integration credentials; room prefix must match its external ID | [optional] [default to undefined]
**client_id** | **string** | Client ID | [default to undefined]
**room_id** | **string** | Room id | [default to undefined]
**width** | **number** | Video width in pixels | [default to undefined]
**height** | **number** | Video height in pixels | [default to undefined]
**fps** | **number** | Video frames per second | [default to undefined]
**bitrate** | **number** | Video bitrate in kbps | [default to undefined]

## Example

```typescript
import { WebinarUpdateStreamSettingDto } from 'streamvi-api-client';

const instance: WebinarUpdateStreamSettingDto = {
    v,
    language,
    project_id,
    client_id,
    room_id,
    width,
    height,
    fps,
    bitrate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
