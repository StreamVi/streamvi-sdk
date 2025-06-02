# PlanRestreamCheckV2Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tariff_price_month** | **number** | Tariff price | [default to undefined]
**tariff_price_year** | **number** | Tariff price | [default to undefined]
**balance** | **number** | Balance for pay | [default to undefined]
**sum** | **number** | Sum for pay | [optional] [default to undefined]
**refund_current** | **number** | Refund current | [optional] [default to undefined]
**refund_after** | **number** | Refund after | [optional] [default to undefined]
**refund_balance** | **number** | Refund balance | [optional] [default to undefined]
**decrease_balance** | **number** | Decrease balance | [optional] [default to undefined]
**total** | **number** | Value for total | [optional] [default to undefined]
**notification** | **string** | Name for button | [optional] [default to undefined]
**notification_date** | **string** | Date for notification | [optional] [default to undefined]
**button_name** | **string** | Name for button | [default to undefined]
**currency** | **string** | Currency | [default to undefined]
**choose_status** | **string** | Status for plan | [default to undefined]
**status** | **string** | Status for plan | [default to undefined]
**channel** | **number** | Current channels | [optional] [default to undefined]
**bitrate** | **number** | Current bitrate | [optional] [default to undefined]

## Example

```typescript
import { PlanRestreamCheckV2Response } from 'streamvi-api-client';

const instance: PlanRestreamCheckV2Response = {
    tariff_price_month,
    tariff_price_year,
    balance,
    sum,
    refund_current,
    refund_after,
    refund_balance,
    decrease_balance,
    total,
    notification,
    notification_date,
    button_name,
    currency,
    choose_status,
    status,
    channel,
    bitrate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
