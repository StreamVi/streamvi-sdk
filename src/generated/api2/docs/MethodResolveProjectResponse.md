# MethodResolveProjectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**internal_id** | **number** | Resolved numeric project ID. Pass this value as project_id in subsequent API calls; no project is selected or switched. | [default to undefined]
**external_id** | **string** | Text project ID / short code shown in the cabinet (ref_id); corresponds to the supplied project_external_id. Distinct from numeric internal_id. | [default to undefined]
**name** | **string** | Display name | [default to undefined]
**fename** | **string** | Existing additional display name field | [default to undefined]
**photo_50** | **string** | Resolved avatar URL | [default to undefined]
**type** | **number** | Existing account or project type | [default to undefined]
**countrie_id** | **number** | Existing project country ID | [default to undefined]
**balance_bonus** | **number** | Authorized project bonus balance as stored by the existing project contract. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**balance_payment** | **number** | Authorized project payment balance as stored by the existing project contract. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**balance_profit** | **number** | Authorized project profit balance as stored by the existing project contract. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**currency** | **string** | Currency code for the authorized project balances | [default to undefined]

## Example

```typescript
import { MethodResolveProjectResponse } from 'streamvi-api-client';

const instance: MethodResolveProjectResponse = {
    internal_id,
    external_id,
    name,
    fename,
    photo_50,
    type,
    countrie_id,
    balance_bonus,
    balance_payment,
    balance_profit,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
