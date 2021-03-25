(function () {
    'use strict';
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Son";
        $scope.stateOfBeing = "hungry";
        $scope.sayMessage = function () {
            return "Hello message";
        }
        $scope.feed = function () {
            $scope.stateOfBeing = "fed";
        }
    }
})();