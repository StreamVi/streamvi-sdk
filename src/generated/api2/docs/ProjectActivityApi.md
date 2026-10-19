# ProjectActivityApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**methodProjectActivityListV1**](#methodprojectactivitylistv1) | **GET** /method/project_activity/list | Get localized project activity|

# **methodProjectActivityListV1**
> ProjectActivityListResponse methodProjectActivityListV1()

Read the localized activity feed for project_id with category/event_type, actor_type/actor_id, subject_type/subject_id, and date_from/date_to filters. Uses cursor pagination: limit is the result size, cursor is an opaque value from the previous response. This reads events without creating or modifying activity; account subject access and project permissions are checked separately.

### Example

```typescript
import {
    ProjectActivityApi,
    Configuration
} from 'streamvi-api-client';

const configuration = new Configuration();
const apiInstance = new ProjectActivityApi(configuration);

let language: 'ru' | 'en' | 'cn'; //Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. (default to 'en')
let projectId: number; //Project ID (default to undefined)
let v: '1'; //Version (automatically defaults to 1 based on the API contract, can be overridden) (optional) (default to '1')
let limit: number; //Activity page size, 1–100; default 20. (optional) (default to 20)
let cursor: string; //Opaque pagination cursor (optional) (default to undefined)
let dateFrom: string; //Lower event date boundary; ISO date-time converted to Date. (optional) (default to undefined)
let dateTo: string; //Upper event date boundary; ISO date-time converted to Date. (optional) (default to undefined)
let category: 'transcoders' | 'scheduler' | 'project_lifecycle' | 'project_members' | 'channel_access' | 'integrations' | 'stream_settings' | 'dedicated_servers' | 'videos' | 'account_profile' | 'account_access' | 'channels' | 'billing'; //Functional event category filter from enum. (optional) (default to undefined)
let eventType: 'transcoder.created' | 'transcoder.updated' | 'transcoder.deleted' | 'transcoder.stop_requested' | 'transcoder.delay_reset_requested' | 'scheduler.created' | 'scheduler.deleted' | 'stream.pull_link.created' | 'stream.pull_link.region_changed' | 'stream.pull_link.deleted' | 'project.created' | 'project.updated' | 'project.deleted' | 'account.project_created' | 'account.project_deleted' | 'account.deleted' | 'project.member.invited' | 'project.member.invitation_accepted' | 'project.member.invitation_declined' | 'project.member.invitation_cancelled' | 'project.member.removed' | 'project.member.access_changed' | 'project.owner.transferred' | 'channel.invitation.sent' | 'channel.invitation.declined' | 'channel.invitation.cancelled' | 'channel.access_granted' | 'channel.access_revoked' | 'channel.access_changed' | 'channel.owner.transferred' | 'integration.installed' | 'integration.uninstalled' | 'integration.scopes_changed' | 'integration.token_regenerated' | 'stream.key.rotated' | 'stream.chat_key.rotated' | 'stream.disconnect_protection.enabled' | 'stream.disconnect_protection.disabled' | 'stream.disconnect_protection.delay_changed' | 'stream.placeholder.pause_changed' | 'stream.placeholder.connection_lost_changed' | 'dedicated_server.requested' | 'dedicated_server.pool_changed' | 'dedicated_server.removed' | 'dedicated_server.status_changed' | 'video.upload_initiated' | 'video.renamed' | 'video.deleted' | 'account.profile.updated' | 'account.profile.name_changed' | 'account.profile.avatar_changed' | 'account.social_login.connected' | 'account.social_login.disconnected' | 'channel.added_to_project' | 'channel.removed_from_project' | 'channel.deleted' | 'channel.enabled' | 'channel.disabled' | 'channel.name_changed' | 'channel.ingress_changed' | 'channel.transcoder_changed' | 'channel.stream_settings_changed' | 'channel.planned_broadcast_changed' | 'channel.defaults_changed' | 'billing.country_changed' | 'billing.payment_system_changed' | 'billing.settings_changed'; //Exact event type filter from enum, not a command to create an event. (optional) (default to undefined)
let actorType: 'user' | 'integration' | 'system'; //Change initiator type from enum. (optional) (default to undefined)
let actorId: string; //Actor identifier in the actor_type context; do not substitute a project ID. (optional) (default to undefined)
let subjectType: 'schedule' | 'pull_link' | 'user' | 'project' | 'channel' | 'integration' | 'integration_installation' | 'invitation' | 'media_service_file' | 'dedicated_server' | 'ingest_server_pool' | 'video' | 'transcoder' | 'country' | 'payment_system'; //Main event entity type from enum. (optional) (default to undefined)
let subjectId: string; //Primary entity identifier in the subject_type context. (optional) (default to undefined)
let xClientRequestId: string; //UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. (optional) (default to undefined)

const { status, data } = await apiInstance.methodProjectActivityListV1(
    language,
    projectId,
    v,
    limit,
    cursor,
    dateFrom,
    dateTo,
    category,
    eventType,
    actorType,
    actorId,
    subjectType,
    subjectId,
    xClientRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Language of localized messages and results. When omitted, the DTO uses en; supported values are defined by enum. | defaults to 'en'|
| **projectId** | [**number**] | Project ID | defaults to undefined|
| **v** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Version (automatically defaults to 1 based on the API contract, can be overridden) | (optional) defaults to '1'|
| **limit** | [**number**] | Activity page size, 1–100; default 20. | (optional) defaults to 20|
| **cursor** | [**string**] | Opaque pagination cursor | (optional) defaults to undefined|
| **dateFrom** | [**string**] | Lower event date boundary; ISO date-time converted to Date. | (optional) defaults to undefined|
| **dateTo** | [**string**] | Upper event date boundary; ISO date-time converted to Date. | (optional) defaults to undefined|
| **category** | [**&#39;transcoders&#39; | &#39;scheduler&#39; | &#39;project_lifecycle&#39; | &#39;project_members&#39; | &#39;channel_access&#39; | &#39;integrations&#39; | &#39;stream_settings&#39; | &#39;dedicated_servers&#39; | &#39;videos&#39; | &#39;account_profile&#39; | &#39;account_access&#39; | &#39;channels&#39; | &#39;billing&#39;**]**Array<&#39;transcoders&#39; &#124; &#39;scheduler&#39; &#124; &#39;project_lifecycle&#39; &#124; &#39;project_members&#39; &#124; &#39;channel_access&#39; &#124; &#39;integrations&#39; &#124; &#39;stream_settings&#39; &#124; &#39;dedicated_servers&#39; &#124; &#39;videos&#39; &#124; &#39;account_profile&#39; &#124; &#39;account_access&#39; &#124; &#39;channels&#39; &#124; &#39;billing&#39;>** | Functional event category filter from enum. | (optional) defaults to undefined|
| **eventType** | [**&#39;transcoder.created&#39; | &#39;transcoder.updated&#39; | &#39;transcoder.deleted&#39; | &#39;transcoder.stop_requested&#39; | &#39;transcoder.delay_reset_requested&#39; | &#39;scheduler.created&#39; | &#39;scheduler.deleted&#39; | &#39;stream.pull_link.created&#39; | &#39;stream.pull_link.region_changed&#39; | &#39;stream.pull_link.deleted&#39; | &#39;project.created&#39; | &#39;project.updated&#39; | &#39;project.deleted&#39; | &#39;account.project_created&#39; | &#39;account.project_deleted&#39; | &#39;account.deleted&#39; | &#39;project.member.invited&#39; | &#39;project.member.invitation_accepted&#39; | &#39;project.member.invitation_declined&#39; | &#39;project.member.invitation_cancelled&#39; | &#39;project.member.removed&#39; | &#39;project.member.access_changed&#39; | &#39;project.owner.transferred&#39; | &#39;channel.invitation.sent&#39; | &#39;channel.invitation.declined&#39; | &#39;channel.invitation.cancelled&#39; | &#39;channel.access_granted&#39; | &#39;channel.access_revoked&#39; | &#39;channel.access_changed&#39; | &#39;channel.owner.transferred&#39; | &#39;integration.installed&#39; | &#39;integration.uninstalled&#39; | &#39;integration.scopes_changed&#39; | &#39;integration.token_regenerated&#39; | &#39;stream.key.rotated&#39; | &#39;stream.chat_key.rotated&#39; | &#39;stream.disconnect_protection.enabled&#39; | &#39;stream.disconnect_protection.disabled&#39; | &#39;stream.disconnect_protection.delay_changed&#39; | &#39;stream.placeholder.pause_changed&#39; | &#39;stream.placeholder.connection_lost_changed&#39; | &#39;dedicated_server.requested&#39; | &#39;dedicated_server.pool_changed&#39; | &#39;dedicated_server.removed&#39; | &#39;dedicated_server.status_changed&#39; | &#39;video.upload_initiated&#39; | &#39;video.renamed&#39; | &#39;video.deleted&#39; | &#39;account.profile.updated&#39; | &#39;account.profile.name_changed&#39; | &#39;account.profile.avatar_changed&#39; | &#39;account.social_login.connected&#39; | &#39;account.social_login.disconnected&#39; | &#39;channel.added_to_project&#39; | &#39;channel.removed_from_project&#39; | &#39;channel.deleted&#39; | &#39;channel.enabled&#39; | &#39;channel.disabled&#39; | &#39;channel.name_changed&#39; | &#39;channel.ingress_changed&#39; | &#39;channel.transcoder_changed&#39; | &#39;channel.stream_settings_changed&#39; | &#39;channel.planned_broadcast_changed&#39; | &#39;channel.defaults_changed&#39; | &#39;billing.country_changed&#39; | &#39;billing.payment_system_changed&#39; | &#39;billing.settings_changed&#39;**]**Array<&#39;transcoder.created&#39; &#124; &#39;transcoder.updated&#39; &#124; &#39;transcoder.deleted&#39; &#124; &#39;transcoder.stop_requested&#39; &#124; &#39;transcoder.delay_reset_requested&#39; &#124; &#39;scheduler.created&#39; &#124; &#39;scheduler.deleted&#39; &#124; &#39;stream.pull_link.created&#39; &#124; &#39;stream.pull_link.region_changed&#39; &#124; &#39;stream.pull_link.deleted&#39; &#124; &#39;project.created&#39; &#124; &#39;project.updated&#39; &#124; &#39;project.deleted&#39; &#124; &#39;account.project_created&#39; &#124; &#39;account.project_deleted&#39; &#124; &#39;account.deleted&#39; &#124; &#39;project.member.invited&#39; &#124; &#39;project.member.invitation_accepted&#39; &#124; &#39;project.member.invitation_declined&#39; &#124; &#39;project.member.invitation_cancelled&#39; &#124; &#39;project.member.removed&#39; &#124; &#39;project.member.access_changed&#39; &#124; &#39;project.owner.transferred&#39; &#124; &#39;channel.invitation.sent&#39; &#124; &#39;channel.invitation.declined&#39; &#124; &#39;channel.invitation.cancelled&#39; &#124; &#39;channel.access_granted&#39; &#124; &#39;channel.access_revoked&#39; &#124; &#39;channel.access_changed&#39; &#124; &#39;channel.owner.transferred&#39; &#124; &#39;integration.installed&#39; &#124; &#39;integration.uninstalled&#39; &#124; &#39;integration.scopes_changed&#39; &#124; &#39;integration.token_regenerated&#39; &#124; &#39;stream.key.rotated&#39; &#124; &#39;stream.chat_key.rotated&#39; &#124; &#39;stream.disconnect_protection.enabled&#39; &#124; &#39;stream.disconnect_protection.disabled&#39; &#124; &#39;stream.disconnect_protection.delay_changed&#39; &#124; &#39;stream.placeholder.pause_changed&#39; &#124; &#39;stream.placeholder.connection_lost_changed&#39; &#124; &#39;dedicated_server.requested&#39; &#124; &#39;dedicated_server.pool_changed&#39; &#124; &#39;dedicated_server.removed&#39; &#124; &#39;dedicated_server.status_changed&#39; &#124; &#39;video.upload_initiated&#39; &#124; &#39;video.renamed&#39; &#124; &#39;video.deleted&#39; &#124; &#39;account.profile.updated&#39; &#124; &#39;account.profile.name_changed&#39; &#124; &#39;account.profile.avatar_changed&#39; &#124; &#39;account.social_login.connected&#39; &#124; &#39;account.social_login.disconnected&#39; &#124; &#39;channel.added_to_project&#39; &#124; &#39;channel.removed_from_project&#39; &#124; &#39;channel.deleted&#39; &#124; &#39;channel.enabled&#39; &#124; &#39;channel.disabled&#39; &#124; &#39;channel.name_changed&#39; &#124; &#39;channel.ingress_changed&#39; &#124; &#39;channel.transcoder_changed&#39; &#124; &#39;channel.stream_settings_changed&#39; &#124; &#39;channel.planned_broadcast_changed&#39; &#124; &#39;channel.defaults_changed&#39; &#124; &#39;billing.country_changed&#39; &#124; &#39;billing.payment_system_changed&#39; &#124; &#39;billing.settings_changed&#39;>** | Exact event type filter from enum, not a command to create an event. | (optional) defaults to undefined|
| **actorType** | [**&#39;user&#39; | &#39;integration&#39; | &#39;system&#39;**]**Array<&#39;user&#39; &#124; &#39;integration&#39; &#124; &#39;system&#39;>** | Change initiator type from enum. | (optional) defaults to undefined|
| **actorId** | [**string**] | Actor identifier in the actor_type context; do not substitute a project ID. | (optional) defaults to undefined|
| **subjectType** | [**&#39;schedule&#39; | &#39;pull_link&#39; | &#39;user&#39; | &#39;project&#39; | &#39;channel&#39; | &#39;integration&#39; | &#39;integration_installation&#39; | &#39;invitation&#39; | &#39;media_service_file&#39; | &#39;dedicated_server&#39; | &#39;ingest_server_pool&#39; | &#39;video&#39; | &#39;transcoder&#39; | &#39;country&#39; | &#39;payment_system&#39;**]**Array<&#39;schedule&#39; &#124; &#39;pull_link&#39; &#124; &#39;user&#39; &#124; &#39;project&#39; &#124; &#39;channel&#39; &#124; &#39;integration&#39; &#124; &#39;integration_installation&#39; &#124; &#39;invitation&#39; &#124; &#39;media_service_file&#39; &#124; &#39;dedicated_server&#39; &#124; &#39;ingest_server_pool&#39; &#124; &#39;video&#39; &#124; &#39;transcoder&#39; &#124; &#39;country&#39; &#124; &#39;payment_system&#39;>** | Main event entity type from enum. | (optional) defaults to undefined|
| **subjectId** | [**string**] | Primary entity identifier in the subject_type context. | (optional) defaults to undefined|
| **xClientRequestId** | [**string**] | UUID v4 correlating the request, logs, and events. If absent or invalid, the server generates an ID and returns it in the response header with the same name. | (optional) defaults to undefined|


### Return type

**ProjectActivityListResponse**

### Authorization

[oauth2Account](../README.md#oauth2Account)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

