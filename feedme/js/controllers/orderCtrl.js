app.controller('orderCtrl',['$scope', function ($scope) {
    $scope.greet = 'hi';
    $scope.fs = function(){
        console.log(food_specification);
    };
}]);


var food_specification = app.directive('food', function () {
    return {
        templateUrl: './assets/views/form/food.html'
    }
});
app.directive('address', function () {
    return {
        templateUrl: './assets/views/form/address.html'
    }
});
app.directive('overview', function () {
    return {
        templateUrl: './assets/views/form/overview.html'
    }
});