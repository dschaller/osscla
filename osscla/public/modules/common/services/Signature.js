/**
 * common $resources for osscla
 */
'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.common.services.Signature';

angular.module(MODULE_NAME, [
    require('angular-resource'),
    require('../constants')
])

.factory('common.Signature', ['$resource', 'OSSCLA_URLS', function($resource, OSSCLA_URLS) {
    return $resource(OSSCLA_URLS.SIGNATURE, {username: '@username'}, {
        put: {method: 'PUT', isArray: false}
    });
}])

.factory('common.Signatures', ['$resource', 'OSSCLA_URLS', function($resource, OSSCLA_URLS) {
    return $resource(OSSCLA_URLS.SIGNATURES);
}]);

module.exports = MODULE_NAME;
