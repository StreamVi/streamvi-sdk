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
import type { PlanStorageItem } from './plan-storage-item';
/**
 *
 * @export
 * @interface PlanStorageForProject
 */
export interface PlanStorageForProject {
    /**
     * Before tariff restream
     * @type {PlanStorageItem}
     * @memberof PlanStorageForProject
     */
    'before': PlanStorageItem;
    /**
     * Current tariff restream
     * @type {PlanStorageItem}
     * @memberof PlanStorageForProject
     */
    'current': PlanStorageItem;
    /**
     * Next tariff restream
     * @type {PlanStorageItem}
     * @memberof PlanStorageForProject
     */
    'next': PlanStorageItem;
}
//# sourceMappingURL=plan-storage-for-project.d.ts.map