(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$injector = ['$scope'];
    function LunchCheckController($scope) {
        $scope.checkLunch = function () {
            var items = $scope.items;
            console.log(items);
            if (items === '' || items === undefined) {
                $scope.message = 'Please enter data first';
                $scope.color = 'red';
                return;
            }
            var itemsArray = items.split(",");
            if (itemsArray.length <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
            $scope.color='green';
        }
    }
})();