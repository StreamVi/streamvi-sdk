# ErrorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Error name | [default to undefined]
**msg** | **string** | Error message | [default to undefined]
**_options** | **object** | Options | [default to undefined]
**data** | **object** | Custom object for error | [default to undefined]
**validator_error** | [**Array&lt;ValidationErrorDto&gt;**](ValidationErrorDto.md) | Validator error array if name&#x3D;\&quot;I18nValidationException\&quot; | [optional] [default to undefined]

## Example

```typescript
import { ErrorData } from './api';

const instance: ErrorData = {
    name,
    msg,
    _options,
    data,
    validator_error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
