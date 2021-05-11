/**
 * login
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.13
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/**
 * The user data for the CRM system
 */
export interface LoginSignupUserRequestSignupDataCrmFormData {
    /**
     * The ID of the form
     */
    form_id?: string;
    /**
     * The ID of the portal
     */
    portal_id?: string;
    /**
     * The filled form data
     */
    form_data?: string;
}
