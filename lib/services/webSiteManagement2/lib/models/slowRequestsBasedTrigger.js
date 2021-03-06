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
 * Trigger based on request execution time.
 *
 */
class SlowRequestsBasedTrigger {
  /**
   * Create a SlowRequestsBasedTrigger.
   * @member {string} [timeTaken] Time taken.
   * @member {number} [count] Count.
   * @member {string} [timeInterval] Time interval.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SlowRequestsBasedTrigger
   *
   * @returns {object} metadata of SlowRequestsBasedTrigger
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SlowRequestsBasedTrigger',
      type: {
        name: 'Composite',
        className: 'SlowRequestsBasedTrigger',
        modelProperties: {
          timeTaken: {
            required: false,
            serializedName: 'timeTaken',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          timeInterval: {
            required: false,
            serializedName: 'timeInterval',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SlowRequestsBasedTrigger;
