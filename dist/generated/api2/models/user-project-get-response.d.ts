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
/**
 *
 * @export
 * @interface UserProjectGetResponse
 */
export interface UserProjectGetResponse {
    /**
     * Имя
     * @type {string}
     * @memberof UserProjectGetResponse
     */
    'name': string;
    /**
     * Фамилия
     * @type {string}
     * @memberof UserProjectGetResponse
     */
    'fename': string;
    /**
     * Аватарка
     * @type {string}
     * @memberof UserProjectGetResponse
     */
    'photo_50': string;
    /**
     * Тип 0 - личный проект, 1 - командный проект
     * @type {number}
     * @memberof UserProjectGetResponse
     */
    'type': UserProjectGetResponseTypeEnum;
    /**
     * External id
     * @type {string}
     * @memberof UserProjectGetResponse
     */
    'external_id': string;
    /**
     * Internal id
     * @type {number}
     * @memberof UserProjectGetResponse
     */
    'internal_id': number;
    /**
     * Countrie id
     * @type {number}
     * @memberof UserProjectGetResponse
     */
    'countrie_id': number;
    /**
     * Balance bonus
     * @type {number}
     * @memberof UserProjectGetResponse
     */
    'balance_bonus': number;
    /**
     * Balance payment
     * @type {number}
     * @memberof UserProjectGetResponse
     */
    'balance_payment': number;
    /**
     * Balance profit
     * @type {number}
     * @memberof UserProjectGetResponse
     */
    'balance_profit': number;
    /**
     * Currency
     * @type {string}
     * @memberof UserProjectGetResponse
     */
    'currency': UserProjectGetResponseCurrencyEnum;
}
export declare const UserProjectGetResponseTypeEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
};
export type UserProjectGetResponseTypeEnum = typeof UserProjectGetResponseTypeEnum[keyof typeof UserProjectGetResponseTypeEnum];
export declare const UserProjectGetResponseCurrencyEnum: {
    readonly Rub: "rub";
    readonly Usd: "usd";
};
export type UserProjectGetResponseCurrencyEnum = typeof UserProjectGetResponseCurrencyEnum[keyof typeof UserProjectGetResponseCurrencyEnum];
//# sourceMappingURL=user-project-get-response.d.ts.map