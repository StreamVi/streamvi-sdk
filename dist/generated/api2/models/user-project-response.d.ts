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
import type { UserProject2ProjectResponse } from './user-project2-project-response';
/**
 *
 * @export
 * @interface UserProjectResponse
 */
export interface UserProjectResponse {
    /**
     * Primary key
     * @type {number}
     * @memberof UserProjectResponse
     */
    'id': number;
    /**
     * User id
     * @type {number}
     * @memberof UserProjectResponse
     */
    'user_id': number;
    /**
     * Project id
     * @type {number}
     * @memberof UserProjectResponse
     */
    'project_id': number;
    /**
     * Access type
     * @type {number}
     * @memberof UserProjectResponse
     */
    'access_type': UserProjectResponseAccessTypeEnum;
    /**
     * Project data
     * @type {UserProject2ProjectResponse}
     * @memberof UserProjectResponse
     */
    'project': UserProject2ProjectResponse;
    /**
     * Members count
     * @type {number}
     * @memberof UserProjectResponse
     */
    'member_count': number;
}
export declare const UserProjectResponseAccessTypeEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
    readonly NUMBER_2: 2;
};
export type UserProjectResponseAccessTypeEnum = typeof UserProjectResponseAccessTypeEnum[keyof typeof UserProjectResponseAccessTypeEnum];
//# sourceMappingURL=user-project-response.d.ts.map