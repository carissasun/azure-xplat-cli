// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate4756/providers/Microsoft.ContainerService/containerServices?api-version=2016-09-30')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '6121f8e9-6d40-47cf-8fd0-d73aed216171',
  'x-ms-correlation-request-id': '6121f8e9-6d40-47cf-8fd0-d73aed216171',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T094932Z:6121f8e9-6d40-47cf-8fd0-d73aed216171',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 Jan 2017 09:49:31 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate4756/providers/Microsoft.ContainerService/containerServices?api-version=2016-09-30')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '6121f8e9-6d40-47cf-8fd0-d73aed216171',
  'x-ms-correlation-request-id': '6121f8e9-6d40-47cf-8fd0-d73aed216171',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T094932Z:6121f8e9-6d40-47cf-8fd0-d73aed216171',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 Jan 2017 09:49:31 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; }]];