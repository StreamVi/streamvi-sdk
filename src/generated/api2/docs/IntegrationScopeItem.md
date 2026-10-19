# IntegrationScopeItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | OAuth scope code | [default to undefined]
**title** | **string** | Localized scope title | [default to undefined]
**description** | **string** | Localized scope description | [default to undefined]
**implies** | **Array&lt;string&gt;** | Scopes implicitly granted together with the selected scope | [default to undefined]

## Example

```typescript
import { IntegrationScopeItem } from 'streamvi-api-client';

const instance: IntegrationScopeItem = {
    code,
    title,
    description,
    implies,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
