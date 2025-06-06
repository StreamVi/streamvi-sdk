/* tslint:disable */
/* eslint-disable */
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


// May contain unused imports in some cases
// @ts-ignore
import type { BlogPageSiteResponseId } from './blog-page-site-response-id';
// May contain unused imports in some cases
// @ts-ignore
import type { StructureHelpPageConnectionsItemLang } from './structure-help-page-connections-item-lang';

/**
 * 
 * @export
 * @interface StructureHelpPageConnectionsItemFinal
 */
export interface StructureHelpPageConnectionsItemFinal {
    /**
     * 
     * @type {BlogPageSiteResponseId}
     * @memberof StructureHelpPageConnectionsItemFinal
     */
    '_id': BlogPageSiteResponseId;
    /**
     * Notion id
     * @type {string}
     * @memberof StructureHelpPageConnectionsItemFinal
     */
    'notion_id': string;
    /**
     * Notion parent id
     * @type {string}
     * @memberof StructureHelpPageConnectionsItemFinal
     */
    'notion_parent_id': string;
    /**
     * url
     * @type {string}
     * @memberof StructureHelpPageConnectionsItemFinal
     */
    'url': string;
    /**
     * Generated url from root path
     * @type {string}
     * @memberof StructureHelpPageConnectionsItemFinal
     */
    'url_inherit': string;
    /**
     * Page status
     * @type {string}
     * @memberof StructureHelpPageConnectionsItemFinal
     */
    'status': StructureHelpPageConnectionsItemFinalStatusEnum;
    /**
     * Subject
     * @type {Array<StructureHelpPageConnectionsItemLang>}
     * @memberof StructureHelpPageConnectionsItemFinal
     */
    'title': Array<StructureHelpPageConnectionsItemLang>;
    /**
     * Page icon
     * @type {object}
     * @memberof StructureHelpPageConnectionsItemFinal
     */
    'icon': object | null;
    /**
     * Priority for sorting
     * @type {number}
     * @memberof StructureHelpPageConnectionsItemFinal
     */
    'priority': number;
}

export const StructureHelpPageConnectionsItemFinalStatusEnum = {
    None: 'None',
    Backlog: 'Backlog',
    Drafting: 'Drafting',
    Reviewing: 'Reviewing',
    Done: 'Done',
    Published: 'Published'
} as const;

export type StructureHelpPageConnectionsItemFinalStatusEnum = typeof StructureHelpPageConnectionsItemFinalStatusEnum[keyof typeof StructureHelpPageConnectionsItemFinalStatusEnum];


