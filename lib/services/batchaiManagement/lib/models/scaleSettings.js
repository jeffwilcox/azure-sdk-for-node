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
 * At least one of manual or autoScale settings must be specified. Only one of
 * manual or autoScale settings can be specified. If autoScale settings are
 * specified, the system automatically scales the cluster up and down (within
 * the supplied limits) based on the pending jobs on the cluster.
 *
 */
class ScaleSettings {
  /**
   * Create a ScaleSettings.
   * @member {object} [manual] The scale for the cluster by manual settings.
   * @member {number} [manual.targetNodeCount] Default is 0. If
   * autoScaleSettings are not specified, then the Cluster starts with this
   * target.
   * @member {string} [manual.nodeDeallocationOption] The default value is
   * requeue. Possible values include: 'requeue', 'terminate',
   * 'waitforjobcompletion', 'unknown'
   * @member {object} [autoScale] The scale for the cluster by autoscale
   * settings.
   * @member {number} [autoScale.minimumNodeCount]
   * @member {number} [autoScale.maximumNodeCount]
   * @member {number} [autoScale.initialNodeCount]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ScaleSettings
   *
   * @returns {object} metadata of ScaleSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ScaleSettings',
      type: {
        name: 'Composite',
        className: 'ScaleSettings',
        modelProperties: {
          manual: {
            required: false,
            serializedName: 'manual',
            type: {
              name: 'Composite',
              className: 'ManualScaleSettings'
            }
          },
          autoScale: {
            required: false,
            serializedName: 'autoScale',
            type: {
              name: 'Composite',
              className: 'AutoScaleSettings'
            }
          }
        }
      }
    };
  }
}

module.exports = ScaleSettings;