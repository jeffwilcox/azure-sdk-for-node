/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * StorageAccounts
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the DataLakeAnalyticsAccountManagementClient.
 */
export interface StorageAccounts {

    /**
     * Gets the specified Azure Storage account linked to the given Data Lake
     * Analytics account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account from
     * which to retrieve Azure storage account details.
     *
     * @param {string} storageAccountName The name of the Azure Storage account for
     * which to retrieve the details.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, accountName: string, storageAccountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StorageAccountInfo>): void;
    get(resourceGroupName: string, accountName: string, storageAccountName: string, callback: ServiceCallback<models.StorageAccountInfo>): void;

    /**
     * Updates the specified Data Lake Analytics account to remove an Azure Storage
     * account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account from
     * which to remove the Azure Storage account.
     *
     * @param {string} storageAccountName The name of the Azure Storage account to
     * remove
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, accountName: string, storageAccountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, storageAccountName: string, callback: ServiceCallback<void>): void;

    /**
     * Updates the Data Lake Analytics account to replace Azure Storage blob
     * account details, such as the access key and/or suffix.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account to
     * modify storage accounts in
     *
     * @param {string} storageAccountName The Azure Storage account to modify
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.parameters] The parameters containing the access
     * key and suffix to update the storage account with, if any. Passing nothing
     * results in no change.
     *
     * @param {string} [options.parameters.accessKey] the updated access key
     * associated with this Azure Storage account that will be used to connect to
     * it.
     *
     * @param {string} [options.parameters.suffix] the optional suffix for the
     * storage account.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    update(resourceGroupName: string, accountName: string, storageAccountName: string, options: { parameters? : models.UpdateStorageAccountParameters, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    update(resourceGroupName: string, accountName: string, storageAccountName: string, callback: ServiceCallback<void>): void;

    /**
     * Updates the specified Data Lake Analytics account to add an Azure Storage
     * account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account to
     * which to add the Azure Storage account.
     *
     * @param {string} storageAccountName The name of the Azure Storage account to
     * add
     *
     * @param {object} parameters The parameters containing the access key and
     * optional suffix for the Azure Storage Account.
     *
     * @param {string} parameters.accessKey the access key associated with this
     * Azure Storage account that will be used to connect to it.
     *
     * @param {string} [parameters.suffix] the optional suffix for the storage
     * account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    add(resourceGroupName: string, accountName: string, storageAccountName: string, parameters: models.AddStorageAccountParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    add(resourceGroupName: string, accountName: string, storageAccountName: string, parameters: models.AddStorageAccountParameters, callback: ServiceCallback<void>): void;

    /**
     * Gets the specified Azure Storage container associated with the given Data
     * Lake Analytics and Azure Storage accounts.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account for
     * which to retrieve blob container.
     *
     * @param {string} storageAccountName The name of the Azure storage account
     * from which to retrieve the blob container.
     *
     * @param {string} containerName The name of the Azure storage container to
     * retrieve
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getStorageContainer(resourceGroupName: string, accountName: string, storageAccountName: string, containerName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StorageContainer>): void;
    getStorageContainer(resourceGroupName: string, accountName: string, storageAccountName: string, containerName: string, callback: ServiceCallback<models.StorageContainer>): void;

    /**
     * Lists the Azure Storage containers, if any, associated with the specified
     * Data Lake Analytics and Azure Storage account combination. The response
     * includes a link to the next page of results, if any.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account for
     * which to list Azure Storage blob containers.
     *
     * @param {string} storageAccountName The name of the Azure storage account
     * from which to list blob containers.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listStorageContainers(resourceGroupName: string, accountName: string, storageAccountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListStorageContainersResult>): void;
    listStorageContainers(resourceGroupName: string, accountName: string, storageAccountName: string, callback: ServiceCallback<models.ListStorageContainersResult>): void;

    /**
     * Gets the SAS token associated with the specified Data Lake Analytics and
     * Azure Storage account and container combination.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account from
     * which an Azure Storage account's SAS token is being requested.
     *
     * @param {string} storageAccountName The name of the Azure storage account for
     * which the SAS token is being requested.
     *
     * @param {string} containerName The name of the Azure storage container for
     * which the SAS token is being requested.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listSasTokens(resourceGroupName: string, accountName: string, storageAccountName: string, containerName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListSasTokensResult>): void;
    listSasTokens(resourceGroupName: string, accountName: string, storageAccountName: string, containerName: string, callback: ServiceCallback<models.ListSasTokensResult>): void;

    /**
     * Gets the first page of Azure Storage accounts, if any, linked to the
     * specified Data Lake Analytics account. The response includes a link to the
     * next page, if any.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account for
     * which to list Azure Storage accounts.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] The OData filter. Optional.
     *
     * @param {number} [options.top] The number of items to return. Optional.
     *
     * @param {number} [options.skip] The number of items to skip over before
     * returning elements. Optional.
     *
     * @param {string} [options.select] OData Select statement. Limits the
     * properties on each entry to just those requested, e.g.
     * Categories?$select=CategoryName,Description. Optional.
     *
     * @param {string} [options.orderby] OrderBy clause. One or more
     * comma-separated expressions with an optional "asc" (the default) or "desc"
     * depending on the order you'd like the values sorted, e.g.
     * Categories?$orderby=CategoryName desc. Optional.
     *
     * @param {boolean} [options.count] The Boolean value of true or false to
     * request a count of the matching resources included with the resources in the
     * response, e.g. Categories?$count=true. Optional.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByAccount(resourceGroupName: string, accountName: string, options: { filter? : string, top? : number, skip? : number, select? : string, orderby? : string, count? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccountListStorageAccountsResult>): void;
    listByAccount(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.DataLakeAnalyticsAccountListStorageAccountsResult>): void;

    /**
     * Lists the Azure Storage containers, if any, associated with the specified
     * Data Lake Analytics and Azure Storage account combination. The response
     * includes a link to the next page of results, if any.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listStorageContainersNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListStorageContainersResult>): void;
    listStorageContainersNext(nextPageLink: string, callback: ServiceCallback<models.ListStorageContainersResult>): void;

    /**
     * Gets the SAS token associated with the specified Data Lake Analytics and
     * Azure Storage account and container combination.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listSasTokensNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListSasTokensResult>): void;
    listSasTokensNext(nextPageLink: string, callback: ServiceCallback<models.ListSasTokensResult>): void;

    /**
     * Gets the first page of Azure Storage accounts, if any, linked to the
     * specified Data Lake Analytics account. The response includes a link to the
     * next page, if any.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByAccountNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccountListStorageAccountsResult>): void;
    listByAccountNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeAnalyticsAccountListStorageAccountsResult>): void;
}

/**
 * @class
 * DataLakeStoreAccounts
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the DataLakeAnalyticsAccountManagementClient.
 */
export interface DataLakeStoreAccounts {

    /**
     * Gets the specified Data Lake Store account details in the specified Data
     * Lake Analytics account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account from
     * which to retrieve the Data Lake Store account details.
     *
     * @param {string} dataLakeStoreAccountName The name of the Data Lake Store
     * account to retrieve
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, accountName: string, dataLakeStoreAccountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccountInfo>): void;
    get(resourceGroupName: string, accountName: string, dataLakeStoreAccountName: string, callback: ServiceCallback<models.DataLakeStoreAccountInfo>): void;

    /**
     * Updates the Data Lake Analytics account specified to remove the specified
     * Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account from
     * which to remove the Data Lake Store account.
     *
     * @param {string} dataLakeStoreAccountName The name of the Data Lake Store
     * account to remove
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, accountName: string, dataLakeStoreAccountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, dataLakeStoreAccountName: string, callback: ServiceCallback<void>): void;

    /**
     * Updates the specified Data Lake Analytics account to include the additional
     * Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account to
     * which to add the Data Lake Store account.
     *
     * @param {string} dataLakeStoreAccountName The name of the Data Lake Store
     * account to add.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.parameters] The details of the Data Lake Store
     * account.
     *
     * @param {string} [options.parameters.suffix] the optional suffix for the Data
     * Lake Store account.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    add(resourceGroupName: string, accountName: string, dataLakeStoreAccountName: string, options: { parameters? : models.AddDataLakeStoreParameters, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    add(resourceGroupName: string, accountName: string, dataLakeStoreAccountName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets the first page of Data Lake Store accounts linked to the specified Data
     * Lake Analytics account. The response includes a link to the next page, if
     * any.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account for
     * which to list Data Lake Store accounts.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] OData filter. Optional.
     *
     * @param {number} [options.top] The number of items to return. Optional.
     *
     * @param {number} [options.skip] The number of items to skip over before
     * returning elements. Optional.
     *
     * @param {string} [options.select] OData Select statement. Limits the
     * properties on each entry to just those requested, e.g.
     * Categories?$select=CategoryName,Description. Optional.
     *
     * @param {string} [options.orderby] OrderBy clause. One or more
     * comma-separated expressions with an optional "asc" (the default) or "desc"
     * depending on the order you'd like the values sorted, e.g.
     * Categories?$orderby=CategoryName desc. Optional.
     *
     * @param {boolean} [options.count] The Boolean value of true or false to
     * request a count of the matching resources included with the resources in the
     * response, e.g. Categories?$count=true. Optional.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByAccount(resourceGroupName: string, accountName: string, options: { filter? : string, top? : number, skip? : number, select? : string, orderby? : string, count? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccountListDataLakeStoreResult>): void;
    listByAccount(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.DataLakeAnalyticsAccountListDataLakeStoreResult>): void;

    /**
     * Gets the first page of Data Lake Store accounts linked to the specified Data
     * Lake Analytics account. The response includes a link to the next page, if
     * any.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByAccountNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccountListDataLakeStoreResult>): void;
    listByAccountNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeAnalyticsAccountListDataLakeStoreResult>): void;
}

/**
 * @class
 * Account
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the DataLakeAnalyticsAccountManagementClient.
 */
export interface Account {

    /**
     * Gets the first page of Data Lake Analytics accounts, if any, within a
     * specific resource group. This includes a link to the next page, if any.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] OData filter. Optional.
     *
     * @param {number} [options.top] The number of items to return. Optional.
     *
     * @param {number} [options.skip] The number of items to skip over before
     * returning elements. Optional.
     *
     * @param {string} [options.select] OData Select statement. Limits the
     * properties on each entry to just those requested, e.g.
     * Categories?$select=CategoryName,Description. Optional.
     *
     * @param {string} [options.orderby] OrderBy clause. One or more
     * comma-separated expressions with an optional "asc" (the default) or "desc"
     * depending on the order you'd like the values sorted, e.g.
     * Categories?$orderby=CategoryName desc. Optional.
     *
     * @param {boolean} [options.count] The Boolean value of true or false to
     * request a count of the matching resources included with the resources in the
     * response, e.g. Categories?$count=true. Optional.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroup(resourceGroupName: string, options: { filter? : string, top? : number, skip? : number, select? : string, orderby? : string, count? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccountListResult>): void;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.DataLakeAnalyticsAccountListResult>): void;

    /**
     * Gets the first page of Data Lake Analytics accounts, if any, within the
     * current subscription. This includes a link to the next page, if any.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] OData filter. Optional.
     *
     * @param {number} [options.top] The number of items to return. Optional.
     *
     * @param {number} [options.skip] The number of items to skip over before
     * returning elements. Optional.
     *
     * @param {string} [options.select] OData Select statement. Limits the
     * properties on each entry to just those requested, e.g.
     * Categories?$select=CategoryName,Description. Optional.
     *
     * @param {string} [options.orderby] OrderBy clause. One or more
     * comma-separated expressions with an optional "asc" (the default) or "desc"
     * depending on the order you'd like the values sorted, e.g.
     * Categories?$orderby=CategoryName desc. Optional.
     *
     * @param {boolean} [options.count] The Boolean value of true or false to
     * request a count of the matching resources included with the resources in the
     * response, e.g. Categories?$count=true. Optional.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { filter? : string, top? : number, skip? : number, select? : string, orderby? : string, count? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccountListResult>): void;
    list(callback: ServiceCallback<models.DataLakeAnalyticsAccountListResult>): void;

    /**
     * Gets details of the specified Data Lake Analytics account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account to
     * retrieve.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccount>): void;
    get(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.DataLakeAnalyticsAccount>): void;

    /**
     * Begins the delete delete process for the Data Lake Analytics account object
     * specified by the account name.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account to
     * delete
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Creates the specified Data Lake Analytics account. This supplies the user
     * with computation services for Data Lake Analytics workloads
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.the account will be associated
     * with.
     *
     * @param {string} accountName The name of the Data Lake Analytics account to
     * create.
     *
     * @param {object} parameters Parameters supplied to the create Data Lake
     * Analytics account operation.
     *
     * @param {string} parameters.defaultDataLakeStoreAccount the default data lake
     * storage account associated with this Data Lake Analytics account.
     *
     * @param {number} [parameters.maxDegreeOfParallelism] the maximum supported
     * degree of parallelism for this account.
     *
     * @param {number} [parameters.queryStoreRetention] the number of days that job
     * metadata is retained.
     *
     * @param {number} [parameters.maxJobCount] the maximum supported jobs running
     * under the account at the same time.
     *
     * @param {array} parameters.dataLakeStoreAccounts the list of Data Lake
     * storage accounts associated with this account.
     *
     * @param {array} [parameters.storageAccounts] the list of Azure Blob storage
     * accounts associated with this account.
     *
     * @param {string} parameters.location Resource location
     *
     * @param {object} [parameters.tags] Resource tags
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(resourceGroupName: string, accountName: string, parameters: models.DataLakeAnalyticsAccount, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccount>): void;
    create(resourceGroupName: string, accountName: string, parameters: models.DataLakeAnalyticsAccount, callback: ServiceCallback<models.DataLakeAnalyticsAccount>): void;

    /**
     * Updates the Data Lake Analytics account object specified by the accountName
     * with the contents of the account object.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account to
     * update.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.parameters] Parameters supplied to the update Data
     * Lake Analytics account operation.
     *
     * @param {object} [options.parameters.tags] Resource tags
     *
     * @param {number} [options.parameters.maxDegreeOfParallelism] the maximum
     * supported degree of parallelism for this account.
     *
     * @param {number} [options.parameters.queryStoreRetention] the number of days
     * that job metadata is retained.
     *
     * @param {number} [options.parameters.maxJobCount] the maximum supported jobs
     * running under the account at the same time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    update(resourceGroupName: string, accountName: string, options: { parameters? : models.DataLakeAnalyticsAccountUpdateParameters, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccount>): void;
    update(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.DataLakeAnalyticsAccount>): void;

    /**
     * Begins the delete delete process for the Data Lake Analytics account object
     * specified by the account name.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account to
     * delete
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginDeleteMethod(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Creates the specified Data Lake Analytics account. This supplies the user
     * with computation services for Data Lake Analytics workloads
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.the account will be associated
     * with.
     *
     * @param {string} accountName The name of the Data Lake Analytics account to
     * create.
     *
     * @param {object} parameters Parameters supplied to the create Data Lake
     * Analytics account operation.
     *
     * @param {string} parameters.defaultDataLakeStoreAccount the default data lake
     * storage account associated with this Data Lake Analytics account.
     *
     * @param {number} [parameters.maxDegreeOfParallelism] the maximum supported
     * degree of parallelism for this account.
     *
     * @param {number} [parameters.queryStoreRetention] the number of days that job
     * metadata is retained.
     *
     * @param {number} [parameters.maxJobCount] the maximum supported jobs running
     * under the account at the same time.
     *
     * @param {array} parameters.dataLakeStoreAccounts the list of Data Lake
     * storage accounts associated with this account.
     *
     * @param {array} [parameters.storageAccounts] the list of Azure Blob storage
     * accounts associated with this account.
     *
     * @param {string} parameters.location Resource location
     *
     * @param {object} [parameters.tags] Resource tags
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginCreate(resourceGroupName: string, accountName: string, parameters: models.DataLakeAnalyticsAccount, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccount>): void;
    beginCreate(resourceGroupName: string, accountName: string, parameters: models.DataLakeAnalyticsAccount, callback: ServiceCallback<models.DataLakeAnalyticsAccount>): void;

    /**
     * Updates the Data Lake Analytics account object specified by the accountName
     * with the contents of the account object.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Analytics account.
     *
     * @param {string} accountName The name of the Data Lake Analytics account to
     * update.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.parameters] Parameters supplied to the update Data
     * Lake Analytics account operation.
     *
     * @param {object} [options.parameters.tags] Resource tags
     *
     * @param {number} [options.parameters.maxDegreeOfParallelism] the maximum
     * supported degree of parallelism for this account.
     *
     * @param {number} [options.parameters.queryStoreRetention] the number of days
     * that job metadata is retained.
     *
     * @param {number} [options.parameters.maxJobCount] the maximum supported jobs
     * running under the account at the same time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginUpdate(resourceGroupName: string, accountName: string, options: { parameters? : models.DataLakeAnalyticsAccountUpdateParameters, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccount>): void;
    beginUpdate(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.DataLakeAnalyticsAccount>): void;

    /**
     * Gets the first page of Data Lake Analytics accounts, if any, within a
     * specific resource group. This includes a link to the next page, if any.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroupNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccountListResult>): void;
    listByResourceGroupNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeAnalyticsAccountListResult>): void;

    /**
     * Gets the first page of Data Lake Analytics accounts, if any, within the
     * current subscription. This includes a link to the next page, if any.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeAnalyticsAccountListResult>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeAnalyticsAccountListResult>): void;
}
