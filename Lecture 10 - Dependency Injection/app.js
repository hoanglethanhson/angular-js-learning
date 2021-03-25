// (function () {
//     'use strict';
//     angular.module('DIApp', [])
//         .controller('DIController', DIController);

//         DIController.$inject = ['$scope', '$filter'];
//     function DIController($scope, $filter) {
//         $scope.name = "Son";

//         $scope.upper = function () {
//             var upCase =  $filter('uppercase');
//             $scope.name = upCase($scope.name);
//         };
//     }
// })();

//minified

!function () { "use strict"; function n(n, e) { n.name = "Son", n.upper = function () { var o = e("uppercase"); n.name = o(n.name) } } angular.module("DIApp", []).controller("DIController", n), n.$inject = ["$scope", "$filter"] }();