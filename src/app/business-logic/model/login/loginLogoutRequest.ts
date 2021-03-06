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



export interface LoginLogoutRequest {
    /**
     * Redirect URL to use in the provider\'s logout flow
     */
    redirect_url?: string;
    /**
     * Provider key in case call is not authenticated
     */
    provider?: string;
}
