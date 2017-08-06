/**
 * common $resources for osscla
 */
'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.common.services.Cla';

angular.module(MODULE_NAME, [
    require('angular-resource'),
    require('../constants').OSSCLA_URLS
])

.factory('common.ClaVersion', ['$resource', 'OSSCLA_URLS', function($resource, OSSCLA_URLS) {
    return $resource(OSSCLA_URLS.CLAVERSION);
}]);

module.exports = MODULE_NAME;
