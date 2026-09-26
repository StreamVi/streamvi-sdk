# ErrorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**ErrorDataName**](ErrorDataName.md) |  | [default to undefined]
**msg** | **string** | Error message | [optional] [default to undefined]
**validator_error** | [**Array&lt;ValidationErrorDto&gt;**](ValidationErrorDto.md) | Validator error array if name&#x3D;\&quot;I18nValidationException\&quot; | [optional] [default to undefined]
**_options** | **object** | Options | [default to undefined]
**data** | [**ErrorDataData**](ErrorDataData.md) |  | [default to undefined]

## Example

```typescript
import { ErrorData } from 'streamvi-api-client';

const instance: ErrorData = {
    name,
    msg,
    validator_error,
    _options,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
