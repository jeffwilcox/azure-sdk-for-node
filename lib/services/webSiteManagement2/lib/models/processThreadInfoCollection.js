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

/**
 * Collection of Kudu thread information elements.
 */
class ProcessThreadInfoCollection extends Array {
  /**
   * Create a ProcessThreadInfoCollection.
   * @member {string} [nextLink] Link to next page of resources.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProcessThreadInfoCollection
   *
   * @returns {object} metadata of ProcessThreadInfoCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProcessThreadInfoCollection',
      type: {
        name: 'Composite',
        className: 'ProcessThreadInfoCollection',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProcessThreadInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'ProcessThreadInfo'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProcessThreadInfoCollection;
