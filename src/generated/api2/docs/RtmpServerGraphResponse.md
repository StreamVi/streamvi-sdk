# RtmpServerGraphResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of graph to display | [default to undefined]
**timeLine** | **Array&lt;number&gt;** | Time line for graph [timestamp] | [default to undefined]
**countries** | **Array&lt;TCountryChartData&gt;**(TCountryChartData.md) |  | [default to undefined]

## Example

```typescript
import { RtmpServerGraphResponse } from 'streamvi-api-client';

const instance: RtmpServerGraphResponse = {
    type,
    timeLine,
    countries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
