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
 * The swagger 2.0 schema describing a single service input or output. See
 * Swagger specification: http://swagger.io/specification/
 *
 */
class TableSpecification {
  /**
   * Create a TableSpecification.
   * @member {string} [title] Swagger schema title.
   * @member {string} [description] Swagger schema description.
   * @member {string} type The type of the entity described in swagger. Default
   * value: 'object' .
   * @member {string} [format] The format, if 'type' is not 'object'
   * @member {object} [properties] The set of columns within the data table.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TableSpecification
   *
   * @returns {object} metadata of TableSpecification
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TableSpecification',
      type: {
        name: 'Composite',
        className: 'TableSpecification',
        modelProperties: {
          title: {
            required: false,
            serializedName: 'title',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            defaultValue: 'object',
            type: {
              name: 'String'
            }
          },
          format: {
            required: false,
            serializedName: 'format',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ColumnSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ColumnSpecification'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TableSpecification;
