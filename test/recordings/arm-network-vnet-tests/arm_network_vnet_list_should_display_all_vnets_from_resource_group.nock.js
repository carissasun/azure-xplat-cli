// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks?api-version=2016-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-vnet\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n      \"etag\": \"W/\\\"edbf78d7-eb22-486b-9cda-54422d4bce29\\\"\",\r\n      \"type\": \"Microsoft.Network/virtualNetworks\",\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"1e5187dd-02d2-48c7-bdef-97c7eb9cb870\",\r\n        \"addressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/24\",\r\n            \"10.0.1.0/24\"\r\n          ]\r\n        },\r\n        \"dhcpOptions\": {\r\n          \"dnsServers\": [\r\n            \"192.168.1.1\",\r\n            \"192.168.1.2\"\r\n          ]\r\n        },\r\n        \"subnets\": [],\r\n        \"virtualNetworkPeerings\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '932',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '03598868-b889-4fff-9c1a-474f19761963',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'f47f06de-04f9-4d8c-b887-cba4629a1c38',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094941Z:f47f06de-04f9-4d8c-b887-cba4629a1c38',
  date: 'Tue, 24 Jan 2017 09:49:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks?api-version=2016-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-vnet\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n      \"etag\": \"W/\\\"edbf78d7-eb22-486b-9cda-54422d4bce29\\\"\",\r\n      \"type\": \"Microsoft.Network/virtualNetworks\",\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"1e5187dd-02d2-48c7-bdef-97c7eb9cb870\",\r\n        \"addressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/24\",\r\n            \"10.0.1.0/24\"\r\n          ]\r\n        },\r\n        \"dhcpOptions\": {\r\n          \"dnsServers\": [\r\n            \"192.168.1.1\",\r\n            \"192.168.1.2\"\r\n          ]\r\n        },\r\n        \"subnets\": [],\r\n        \"virtualNetworkPeerings\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '932',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '03598868-b889-4fff-9c1a-474f19761963',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'f47f06de-04f9-4d8c-b887-cba4629a1c38',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094941Z:f47f06de-04f9-4d8c-b887-cba4629a1c38',
  date: 'Tue, 24 Jan 2017 09:49:41 GMT',
  connection: 'close' });
 return result; }]];