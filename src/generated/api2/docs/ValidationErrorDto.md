# ValidationErrorDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **object** | Object that was validated. | [optional] [default to undefined]
**property** | **string** | Object\'s property that hasn\'t passed validation. | [optional] [default to undefined]
**value** | **object** | Value that haven\'t pass a validation. | [optional] [default to undefined]
**constraints** | **object** | Constraints that failed validation with error messages. Array of object {string: string} | [optional] [default to undefined]
**children** | **Array&lt;ValidationErrorDto&gt;**(ValidationErrorDto.md) | Which value caused the error. Childrens its this class | [optional] [default to undefined]
**contexts** | **object** | A transient set of data passed through to the validation result for response mapping | [optional] [default to undefined]

## Example

```typescript
import { ValidationErrorDto } from 'streamvi-api-client';

const instance: ValidationErrorDto = {
    target,
    property,
    value,
    constraints,
    children,
    contexts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
