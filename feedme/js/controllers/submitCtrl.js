app.controller('submitCtrl',['$scope', '$state', '$http', function ($scope, $state, $http) {
    var data = JSON.stringify($scope.order);
    $scope.submit = function () {
        $http.post("https://echo.getpostman.com/post", data)
            .then(function(response) {
                $state.go('success', {name: $scope.order.first});
            });
    };
}]);