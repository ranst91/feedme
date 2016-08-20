app.controller('detailsCtrl',['$scope', function ($scope) {
    $scope.regex = {numbers: '^[0-9]+$', letters: '^[a-zA-Z ]+$'};

    $scope.process = function () {
        if ($scope.orderForm.$valid){
            if ($scope.order.cheese_rand)
                $scope.order.cheese_rand = 'Yes';
            else
                $scope.order.cheese_rand = 'No';
        }
    };
}]);


