/**
 * common $resources for osscla
 */
'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.common.services.UserInfo';

angular.module(MODULE_NAME, [
    require('angular-resource'),
    require('../constants')
])

/**
 * Email address for currently logged-in user.
 */
.factory('common.UserInfo', ['$resource', 'OSSCLA_URLS', function($resource, OSSCLA_URLS) {
    return $resource(OSSCLA_URLS.USERINFO);
}]);

module.exports = MODULE_NAME;
