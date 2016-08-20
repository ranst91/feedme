app.controller('submitCtrl',['$scope', '$state', '$http', function ($scope, $state, $http) {
    var data = JSON.stringify($scope.order);
    
    if ($scope.order.toppings.length<1)
        $scope.selectedToppings = "None";
    else
        $scope.selectedToppings = $scope.order.toppings.join(', ');
    
    $scope.submit = function () {
        /**
         * This function is not implemented due to the endpoint not accepting cross origin requests
         */
        // $http.post("http://echo.getpostman.com/post", data)
        //     .then(function(response) {
        //         //Go to success page - Not implemented due to failure on postman's side
        //     },function (err) {
        //         //Display an error to the screen
        //     });
        $state.go('success', {name: $scope.order.first});    
    };
}]);