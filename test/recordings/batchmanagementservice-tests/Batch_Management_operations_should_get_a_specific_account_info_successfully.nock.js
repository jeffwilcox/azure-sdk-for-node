// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2017-09-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"name\":\"batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"dedicatedCoreQuota\":20,\"lowPriorityCoreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/nodesdkteststorage\",\"lastKeySync\":\"2017-11-08T22:00:54.2960443Z\"},\"poolAllocationMode\":\"BatchService\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '735',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 08 Nov 2017 22:00:54 GMT',
  etag: '"0x8D526F42EDDDB3B"',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '268ae06d-da06-4e8c-bbae-2034b83daaaf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '4430cf24-5284-45ad-9559-c6aad10caba5',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220220Z:4430cf24-5284-45ad-9559-c6aad10caba5',
  date: 'Wed, 08 Nov 2017 22:02:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2017-09-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"name\":\"batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"dedicatedCoreQuota\":20,\"lowPriorityCoreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/nodesdkteststorage\",\"lastKeySync\":\"2017-11-08T22:00:54.2960443Z\"},\"poolAllocationMode\":\"BatchService\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '735',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 08 Nov 2017 22:00:54 GMT',
  etag: '"0x8D526F42EDDDB3B"',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '268ae06d-da06-4e8c-bbae-2034b83daaaf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '4430cf24-5284-45ad-9559-c6aad10caba5',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220220Z:4430cf24-5284-45ad-9559-c6aad10caba5',
  date: 'Wed, 08 Nov 2017 22:02:19 GMT',
  connection: 'close' });
 return result; }]];