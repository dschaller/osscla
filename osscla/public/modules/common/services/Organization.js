/**
 * common $resources for osscla
 */
'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.common.services.Organization';

angular.module(MODULE_NAME, [
    require('angular-resource'),
    require('../constants').OSSCLA_URLS
])

.factory('common.Organizations', ['$resource', 'OSSCLA_URLS', function($resource, OSSCLA_URLS) {
    return $resource(OSSCLA_URLS.ORGANIZATIONS, {
    });
}]);

module.exports = MODULE_NAME;
