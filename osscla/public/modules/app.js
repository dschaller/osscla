'use strict';

window.$ = window.jQuery = require('jquery');
var angular = require('angular');

var MODULE_NAME = 'ossclaApp';

angular.module(MODULE_NAME, [
    // external libs
    require('angular-route'),

    // load routes
    require('./routes')
])

/*
 * Main controller
 */
.controller('OssclaMainCtrl', [
    '$scope',
    '$log',
    'common.UserInfo',
    'common.ClaVersion',
    function OssclaMainCtrl($scope, $log, UserInfo, ClaVersion) {
        UserInfo.get().$promise.then(function(user){
            $scope.user = user;
        });
        ClaVersion.get().$promise.then(function(claVersion){
            $scope.claVersion = claVersion.cla_version;
            $scope.claUrl = 'clas/' + $scope.claVersion;
        });
}]);

module.exports = MODULE_NAME;
