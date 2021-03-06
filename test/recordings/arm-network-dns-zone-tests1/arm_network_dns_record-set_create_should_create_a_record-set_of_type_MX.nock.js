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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/MX/set-mx?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"b4544a3a-80a2-4944-94d1-a2535628970f\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.exampledns.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: 'b4544a3a-80a2-4944-94d1-a2535628970f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd933c899-5ea2-407b-98b8-f51176e847c5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5fab1ca2-ff40-41f3-9f11-d563408c6068',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111950Z:5fab1ca2-ff40-41f3-9f11-d563408c6068',
  date: 'Fri, 27 Jan 2017 11:19:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/MX/set-mx?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"b4544a3a-80a2-4944-94d1-a2535628970f\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.exampledns.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: 'b4544a3a-80a2-4944-94d1-a2535628970f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd933c899-5ea2-407b-98b8-f51176e847c5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5fab1ca2-ff40-41f3-9f11-d563408c6068',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111950Z:5fab1ca2-ff40-41f3-9f11-d563408c6068',
  date: 'Fri, 27 Jan 2017 11:19:50 GMT',
  connection: 'close' });
 return result; }]];