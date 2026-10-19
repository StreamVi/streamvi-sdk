# PlanRestreamCheckV2Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tariff_price_month** | **number** | Price for one month with monthly payment. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**tariff_price_year** | **number** | Price for one month with the annual-payment discount; this is not the full annual charge. See sum for the selected period. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**balance** | **number** | Balance for pay. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [default to undefined]
**sum** | **number** | Amount for the selected billing period before refunds. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [optional] [default to undefined]
**refund_current** | **number** | Refund current. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [optional] [default to undefined]
**refund_after** | **number** | Refund after. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [optional] [default to undefined]
**refund_balance** | **number** | Refund balance. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [optional] [default to undefined]
**decrease_balance** | **number** | Decrease balance. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [optional] [default to undefined]
**total** | **number** | Remaining external payment after refunds and any balance deduction. Omitted when no external payment is due; not the full tariff price. Amount in minor currency units: kopecks for rub, cents for usd; 12345 &#x3D; 123.45 major units. Divide by 100 for display; send API amounts in minor units. | [optional] [default to undefined]
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
