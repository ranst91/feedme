app.controller('submitCtrl',['$scope', '$state', '$http', function ($scope, $state, $http) {
    var data = JSON.stringify($scope.order);
    $scope.submit = function () {
        $http.post("http://echo.getpostman.com/post", data)
            .then(function(response) {
                //Go to success page - Not implemented due to failure on postman's side
            },function (err) {
                console.log(err);
            });
        $state.go('success', {name: $scope.order.first});    
    };
    
}]);