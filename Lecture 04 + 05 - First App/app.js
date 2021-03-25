(function () {
    'use strict';
    angular.module('myFirstApp', [])
        .controller('MyFirstController', function ($scope) {
            $scope.name = "Son"
            $scope.sayHello = function () {
                return "Hello Coursera";
            }
        });
})();