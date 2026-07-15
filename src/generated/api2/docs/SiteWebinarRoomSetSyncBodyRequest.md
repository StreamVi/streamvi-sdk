# SiteWebinarRoomSetSyncBodyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **string** | Version | [default to undefined]
**language** | **string** | Current language | [default to LanguageEnum_En]
**room_id** | **string** | Room name | [default to undefined]
**client_id** | **string** | Client ID | [default to undefined]
**publication_sid** | **string** | Focus publication SID | [optional] [default to undefined]
**participant_sid** | **string** | Focus participant SID | [optional] [default to undefined]
**source** | **string** | Focus source | [optional] [default to undefined]

## Example

```typescript
import { SiteWebinarRoomSetSyncBodyRequest } from 'streamvi-api-client';

const instance: SiteWebinarRoomSetSyncBodyRequest = {
    v,
    language,
    room_id,
    client_id,
    publication_sid,
    participant_sid,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
