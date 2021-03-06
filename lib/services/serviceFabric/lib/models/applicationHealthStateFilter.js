/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Defines matching criteria to determine whether a application should be
 * included in the cluster health chunk.
 * One filter can match zero, one or multiple applications, depending on its
 * properties.
 *
 *
 */
class ApplicationHealthStateFilter {
  /**
   * Create a ApplicationHealthStateFilter.
   * @member {string} [applicationNameFilter] The name of the application that
   * matches the filter, as a fabric uri. The filter is applied only to the
   * specified application, if it exists.
   * If the application doesn't exist, no application is returned in the
   * cluster health chunk based on this filter.
   * If the application exists, it is included in the cluster health chunk if
   * it respects the other filter properties.
   * If not specified, all applications are matched against the other filter
   * members, like health state filter.
   * @member {string} [applicationTypeNameFilter] The name of the application
   * type that matches the filter.
   * If specified, the filter is applied only to applications of the selected
   * application type, if any exists.
   * If no applications of the specified application type exists, no
   * application is returned in the cluster health chunk based on this filter.
   * Each application of the specified application type is included in the
   * cluster health chunk if it respects the other filter properties.
   * If not specified, all applications are matched against the other filter
   * members, like health state filter.
   * @member {number} [healthStateFilter] The filter for the health state of
   * the applications. It allows selecting applications if they match the
   * desired health states.
   * The possible values are integer value of one of the following health
   * states. Only applications that match the filter are returned. All
   * applications are used to evaluate the cluster aggregated health state.
   * If not specified, default value is None, unless the application name or
   * the application type name are specified. If the filter has default value
   * and application name is specified, the matching application is returned.
   * The state values are flag based enumeration, so the value could be a
   * combination of these values obtained using bitwise 'OR' operator.
   * For example, if the provided value is 6, it matches applications with
   * HealthState value of OK (2) and Warning (4).
   *
   * - Default - Default value. Matches any HealthState. The value is zero.
   * - None - Filter that doesn't match any HealthState value. Used in order to
   * return no results on a given collection of states. The value is 1.
   * - Ok - Filter that matches input with HealthState value Ok. The value is
   * 2.
   * - Warning - Filter that matches input with HealthState value Warning. The
   * value is 4.
   * - Error - Filter that matches input with HealthState value Error. The
   * value is 8.
   * - All - Filter that matches input with any HealthState value. The value is
   * 65535.
   * . Default value: 0 .
   * @member {array} [serviceFilters] Defines a list of filters that specify
   * which services to be included in the returned cluster health chunk as
   * children of the application. The services are returned only if the parent
   * application matches a filter.
   * If the list is empty, no services are returned. All the services are used
   * to evaluate the parent application aggregated health state, regardless of
   * the input filters.
   * The application filter may specify multiple service filters.
   * For example, it can specify a filter to return all services with health
   * state Error and another filter to always include a service identified by
   * its service name.
   * @member {array} [deployedApplicationFilters] Defines a list of filters
   * that specify which deployed applications to be included in the returned
   * cluster health chunk as children of the application. The deployed
   * applications are returned only if the parent application matches a filter.
   * If the list is empty, no deployed applications are returned. All the
   * deployed applications are used to evaluate the parent application
   * aggregated health state, regardless of the input filters.
   * The application filter may specify multiple deployed application filters.
   * For example, it can specify a filter to return all deployed applications
   * with health state Error and another filter to always include a deployed
   * application on a specified node.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationHealthStateFilter
   *
   * @returns {object} metadata of ApplicationHealthStateFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationHealthStateFilter',
      type: {
        name: 'Composite',
        className: 'ApplicationHealthStateFilter',
        modelProperties: {
          applicationNameFilter: {
            required: false,
            serializedName: 'ApplicationNameFilter',
            type: {
              name: 'String'
            }
          },
          applicationTypeNameFilter: {
            required: false,
            serializedName: 'ApplicationTypeNameFilter',
            type: {
              name: 'String'
            }
          },
          healthStateFilter: {
            required: false,
            serializedName: 'HealthStateFilter',
            defaultValue: 0,
            type: {
              name: 'Number'
            }
          },
          serviceFilters: {
            required: false,
            serializedName: 'ServiceFilters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceHealthStateFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceHealthStateFilter'
                  }
              }
            }
          },
          deployedApplicationFilters: {
            required: false,
            serializedName: 'DeployedApplicationFilters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeployedApplicationHealthStateFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeployedApplicationHealthStateFilter'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationHealthStateFilter;
