# ErrorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Error name | [default to undefined]
**msg** | **string** | Error message | [default to undefined]
**validatorError** | **Array&lt;ValidationErrorDto&gt;**(ValidationErrorDto.md) | Validator error array if name&#x3D;\&quot;I18nValidationException\&quot; | [optional] [default to undefined]
**_options** | **object** | Options | [default to undefined]
**data** | **object** | Custom object for error | [default to undefined]

## Example

```typescript
import { ErrorData } from 'streamvi-api-client';

const instance: ErrorData = {
    name,
    msg,
    validatorError,
    _options,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
