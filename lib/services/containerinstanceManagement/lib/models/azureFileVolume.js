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
 * The properties of the Azure File volume. Azure File shares are mounted as
 * volumes.
 *
 */
class AzureFileVolume {
  /**
   * Create a AzureFileVolume.
   * @member {string} shareName The name of the Azure File share to be mounted
   * as a volume.
   * @member {boolean} [readOnly] The flag indicating whether the Azure File
   * shared mounted as a volume is read-only.
   * @member {string} storageAccountName The name of the storage account that
   * contains the Azure File share.
   * @member {string} [storageAccountKey] The storage account access key used
   * to access the Azure File share.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureFileVolume
   *
   * @returns {object} metadata of AzureFileVolume
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureFileVolume',
      type: {
        name: 'Composite',
        className: 'AzureFileVolume',
        modelProperties: {
          shareName: {
            required: true,
            serializedName: 'shareName',
            type: {
              name: 'String'
            }
          },
          readOnly: {
            required: false,
            serializedName: 'readOnly',
            type: {
              name: 'Boolean'
            }
          },
          storageAccountName: {
            required: true,
            serializedName: 'storageAccountName',
            type: {
              name: 'String'
            }
          },
          storageAccountKey: {
            required: false,
            serializedName: 'storageAccountKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureFileVolume;
