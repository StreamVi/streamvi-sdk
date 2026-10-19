# UserProjectGetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | First name | [default to undefined]
**fename** | **string** | Last name | [default to undefined]
**photo_50** | **string** | Avatar | [default to undefined]
**type** | **number** | Type 0: personal project; 1: team project | [default to undefined]
**external_id** | **string** | External id | [default to undefined]
**internal_id** | **number** | Internal id | [default to undefined]
**countrie_id** | **number** | Countrie id | [default to undefined]
**balance_bonus** | **number** | Balance bonus. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**balance_payment** | **number** | Balance payment. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**balance_profit** | **number** | Balance profit. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**currency** | **string** | Currency | [default to undefined]

## Example

```typescript
import { UserProjectGetResponse } from 'streamvi-api-client';

const instance: UserProjectGetResponse = {
    name,
    fename,
    photo_50,
    type,
    external_id,
    internal_id,
    countrie_id,
    balance_bonus,
    balance_payment,
    balance_profit,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
