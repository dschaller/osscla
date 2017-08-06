'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.common.controllers.NavCtrl';

angular.module(MODULE_NAME, [
    require('../services/NavService')
])

.controller('common.NavCtrl', [
    '$scope', 'common.NavService',
    function($scope, NavService) {
        $scope.getViewLocation = NavService.getViewLocation;
        $scope.$watch('getViewLocation()', function(newViewLocation, oldViewLocation) {
            if(newViewLocation !== oldViewLocation) {
                $scope.viewLocation = newViewLocation;
            }
        });
        $scope.getHistoryView = NavService.getHistoryView;
        $scope.$watch('getHistoryView()', function(newHistoryView, oldHistoryView) {
            if(newHistoryView !== oldHistoryView) {
                $scope.historyView = newHistoryView;
            }
        });
    }
]);

module.exports = MODULE_NAME;
