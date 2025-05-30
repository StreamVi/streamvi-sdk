/**
 * StreamVi Backend
 * API
 *
 * The version of the OpenAPI document: 3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { MoneyFlowDetails } from './money-flow-details';
/**
 *
 * @export
 * @interface MoneyFlowResponse
 */
export interface MoneyFlowResponse {
    /**
     * id
     * @type {number}
     * @memberof MoneyFlowResponse
     */
    'money_flow_id': number;
    /**
     * Amount
     * @type {number}
     * @memberof MoneyFlowResponse
     */
    'amount': number;
    /**
     * Currency
     * @type {string}
     * @memberof MoneyFlowResponse
     */
    'currency': MoneyFlowResponseCurrencyEnum | null;
    /**
     * Date
     * @type {string}
     * @memberof MoneyFlowResponse
     */
    'date': string;
    /**
     * Type
     * @type {string}
     * @memberof MoneyFlowResponse
     */
    'type': MoneyFlowResponseTypeEnum;
    /**
     * Current balance before transaction
     * @type {number}
     * @memberof MoneyFlowResponse
     */
    'balance': number;
    /**
     * Details
     * @type {MoneyFlowDetails}
     * @memberof MoneyFlowResponse
     */
    'details': MoneyFlowDetails | null;
}
export declare const MoneyFlowResponseCurrencyEnum: {
    readonly Rub: "rub";
    readonly Usd: "usd";
};
export type MoneyFlowResponseCurrencyEnum = typeof MoneyFlowResponseCurrencyEnum[keyof typeof MoneyFlowResponseCurrencyEnum];
export declare const MoneyFlowResponseTypeEnum: {
    readonly RegistrationBonus: "registration_bonus";
    readonly PlanRestreamBuy: "plan_restream_buy";
    readonly PlanTranscodingBuy: "plan_transcoding_buy";
    readonly PlanStorageBuy: "plan_storage_buy";
    readonly ChannelStoryBuy: "channel_story_buy";
    readonly ChannelShopSell: "channel_shop_sell";
    readonly ReferralProfit: "referral_profit";
    readonly Payment: "payment";
    readonly PaymentCancel: "payment_cancel";
    readonly Payout: "payout";
    readonly PayoutCancel: "payout_cancel";
    readonly Refund: "refund";
    readonly Conversion: "conversion";
    readonly Withdrawal: "withdrawal";
    readonly TransferredOfOldSite: "transferred_of_old_site";
    readonly AccruedAdmin: "accrued_admin";
    readonly ReducedAdmin: "reduced_admin";
    readonly PromoTopup1: "promo_topup_1";
    readonly PromoTopup2: "promo_topup_2";
    readonly PromoCreatePlanRestream1: "promo_create_plan_restream_1";
    readonly PromoCreatePlanRestream2: "promo_create_plan_restream_2";
};
export type MoneyFlowResponseTypeEnum = typeof MoneyFlowResponseTypeEnum[keyof typeof MoneyFlowResponseTypeEnum];
//# sourceMappingURL=money-flow-response.d.ts.map