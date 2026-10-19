# MethodPluginReportsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**Array&lt;MethodPluginReportResponse&gt;**](MethodPluginReportResponse.md) | Application reports in this page | [default to undefined]
**total** | **number** | Total number of matching records before pagination | [default to undefined]
**limit** | **number** | Maximum number of records in this page | [default to undefined]
**offset** | **number** | Number of matching records to skip before this page | [default to undefined]

## Example

```typescript
import { MethodPluginReportsResponse } from 'streamvi-api-client';

const instance: MethodPluginReportsResponse = {
    results,
    total,
    limit,
    offset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
