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
 * SSL certificate information.
 *
 */
class CertificateInformation {
  /**
   * Create a CertificateInformation.
   * @member {date} expiry Expiration date of the certificate. The date
   * conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by
   * the ISO 8601 standard.
   * @member {string} thumbprint Thumbprint of the certificate.
   * @member {string} subject Subject of the certificate.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CertificateInformation
   *
   * @returns {object} metadata of CertificateInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CertificateInformation',
      type: {
        name: 'Composite',
        className: 'CertificateInformation',
        modelProperties: {
          expiry: {
            required: true,
            serializedName: 'expiry',
            type: {
              name: 'DateTime'
            }
          },
          thumbprint: {
            required: true,
            serializedName: 'thumbprint',
            type: {
              name: 'String'
            }
          },
          subject: {
            required: true,
            serializedName: 'subject',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CertificateInformation;