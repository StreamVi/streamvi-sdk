# NotifyHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Id of page in mongodb | [default to undefined]
**uuid** | **string** | Uuid for execute actions | [default to undefined]
**v** | **string** | Version | [optional] [default to undefined]
**project_id** | **number** | Project id | [default to undefined]
**user_id** | **number** | User id | [default to undefined]
**name** | **string** | Name | [optional] [default to undefined]
**channel** | **string** | Channel | [default to undefined]
**actions** | [**Array&lt;NotifyHistoryAction&gt;**](NotifyHistoryAction.md) | Actions | [default to undefined]
**text** | [**Array&lt;InternalNotifyTypeText&gt;**](InternalNotifyTypeText.md) | Array of texts | [default to undefined]
**date_create** | **string** | Date create | [optional] [default to 2026-10-19T21:13:06.412Z]
**date_process** | **string** | Date process | [optional] [default to 2026-10-19T21:13:06.412Z]
**status_delivery** | **string** | Status delivery | [optional] [default to StatusDeliveryEnum_Pending]
**status_read** | **boolean** | Status read | [default to undefined]
**date_read** | **string** | Date read | [default to 2026-10-19T21:13:06.412Z]
**icon** | **string** | Icon (special symbol) | [default to undefined]
**variables** | **object** | Object of variables. E.g.: {name: \&#39;value\&#39;} | [default to undefined]
**data** | **object** | Object of custom data | [default to undefined]
**user_notify_category** | **string** | Category of user notify | [default to undefined]
**message** | **string** | Message | [optional] [default to undefined]
**error** | **object** |  | [default to undefined]
**language** | **string** | Language for indexing | [default to LanguageEnum_Russian]
**language_iso** | **string** | Language ISO | [default to LanguageIsoEnum_Ru]
**telegram** | [**NotifyHistoryChannelTelegram**](NotifyHistoryChannelTelegram.md) |  | [optional] [default to undefined]
**mobile** | [**NotifyHistoryChannelMobile**](NotifyHistoryChannelMobile.md) |  | [optional] [default to undefined]
**cabinet** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { NotifyHistory } from 'streamvi-api-client';

const instance: NotifyHistory = {
    _id,
    uuid,
    v,
    project_id,
    user_id,
    name,
    channel,
    actions,
    text,
    date_create,
    date_process,
    status_delivery,
    status_read,
    date_read,
    icon,
    variables,
    data,
    user_notify_category,
    message,
    error,
    language,
    language_iso,
    telegram,
    mobile,
    cabinet,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
