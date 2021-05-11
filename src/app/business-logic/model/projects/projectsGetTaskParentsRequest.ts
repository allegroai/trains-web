/**
 * projects
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.12
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface ProjectsGetTaskParentsRequest {
    /**
     * The list of projects which task parents are retieved. If not passed or empty   then all the projects are searched
     */
    projects?: Array<string>;

  tasks_state?: ProjectsGetTaskParentsRequest.TasksStateEnum;
}

export namespace ProjectsGetTaskParentsRequest {
  export type TasksStateEnum = 'active' | 'archived';
  export const TasksStateEnum = {
    Active: 'active' as TasksStateEnum,
    Archived: 'archived' as TasksStateEnum
  };
}
