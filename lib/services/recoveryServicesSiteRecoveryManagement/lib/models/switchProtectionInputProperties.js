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
 * Switch protection input properties.
 *
 */
class SwitchProtectionInputProperties {
  /**
   * Create a SwitchProtectionInputProperties.
   * @member {string} [replicationProtectedItemName] The unique replication
   * protected item name.
   * @member {object} [providerSpecificDetails] Provider specific switch
   * protection input.
   * @member {string} [providerSpecificDetails.instanceType] Polymorphic
   * Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of SwitchProtectionInputProperties
   *
   * @returns {object} metadata of SwitchProtectionInputProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SwitchProtectionInputProperties',
      type: {
        name: 'Composite',
        className: 'SwitchProtectionInputProperties',
        modelProperties: {
          replicationProtectedItemName: {
            required: false,
            serializedName: 'replicationProtectedItemName',
            type: {
              name: 'String'
            }
          },
          providerSpecificDetails: {
            required: false,
            serializedName: 'providerSpecificDetails',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'instanceType',
                clientName: 'instanceType'
              },
              uberParent: 'SwitchProtectionProviderSpecificInput',
              className: 'SwitchProtectionProviderSpecificInput'
            }
          }
        }
      }
    };
  }
}

module.exports = SwitchProtectionInputProperties;