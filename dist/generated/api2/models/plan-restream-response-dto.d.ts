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
import type { PlanRestreamFeatureListResponse } from './plan-restream-feature-list-response';
import type { PlanRestreamResponse } from './plan-restream-response';
/**
 *
 * @export
 * @interface PlanRestreamResponseDto
 */
export interface PlanRestreamResponseDto {
    /**
     * Array of items
     * @type {Array<PlanRestreamResponse>}
     * @memberof PlanRestreamResponseDto
     */
    'results': Array<PlanRestreamResponse>;
    /**
     * Features
     * @type {PlanRestreamFeatureListResponse}
     * @memberof PlanRestreamResponseDto
     */
    'feature': PlanRestreamFeatureListResponse;
}
//# sourceMappingURL=plan-restream-response-dto.d.ts.map