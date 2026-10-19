# MethodIntegrationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Developer application Mongo ID | [default to undefined]
**user_id** | **number** | Internal numeric application owner ID | [default to undefined]
**title** | **string** | Developer application display title | [default to undefined]
**status** | **string** | Application visibility: private or public | [default to undefined]
**client_id** | **string** | Public OAuth client identifier; no client secret is returned | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Application category codes from the supported category enum | [default to undefined]
**type** | **Array&lt;string&gt;** | Supported application integration type | [default to undefined]
**description** | **string** | Application description | [default to undefined]
**url** | **string** | Application production URL | [default to undefined]
**url_dev** | **string** | Application development URL | [default to undefined]
**is_dev** | **boolean** | Whether the application uses its development URL | [default to undefined]
**urls_oauth2** | **Array&lt;string&gt;** | Exact registered OAuth callback URLs | [default to undefined]
**scopes** | **Array&lt;string&gt;** | Current concrete application allowlist; grants require explicit consent | [default to undefined]
**scope_mode** | **string** | Application scope selection mode: selected allowlist or all supported scopes; grants require consent | [default to undefined]
**official** | **number** | Existing numeric platform official-application flag | [default to undefined]
**category** | **string** | Existing application category code | [optional] [default to undefined]
**icon_app** | **string** | Application icon URL | [default to undefined]
**icon_catalog** | **string** | Catalog icon URL | [default to undefined]
**administrators** | [**Array&lt;IntegrationAdministratorSiteResponse&gt;**](IntegrationAdministratorSiteResponse.md) | Application administrator identities and access levels | [default to undefined]
**access** | **Array&lt;number&gt;** | Internal numeric project IDs with private application test access | [default to undefined]
**moderate** | [**IntegrationModerateSiteResponse**](IntegrationModerateSiteResponse.md) | Existing moderation submission details; submitting does not approve application publication | [optional] [default to undefined]
**date_create** | **string** | Application creation timestamp | [optional] [default to undefined]
**date_update** | **string** | Application last update timestamp | [optional] [default to undefined]
**link_doc** | **string** | Application documentation URL | [default to undefined]
**link_help** | **string** | Application help URL | [default to undefined]

## Example

```typescript
import { MethodIntegrationResponse } from 'streamvi-api-client';

const instance: MethodIntegrationResponse = {
    _id,
    user_id,
    title,
    status,
    client_id,
    tags,
    type,
    description,
    url,
    url_dev,
    is_dev,
    urls_oauth2,
    scopes,
    scope_mode,
    official,
    category,
    icon_app,
    icon_catalog,
    administrators,
    access,
    moderate,
    date_create,
    date_update,
    link_doc,
    link_help,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
