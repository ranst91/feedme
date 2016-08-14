app.controller('orderCtrl',['$scope', function ($scope) {
    $scope.food = 'food';
    $scope.page = ['food', 'personal', 'overview'];
    // $scope.next = function (c,n) {
    //     var current = '.'+c;
    //     $('.dialog').html('<adress></adress>');
    // }
}]);

app.directive('food', function () {
    return {
        templateUrl: './assets/views/form/food.html'
    }
});
app.directive('personal', function () {
    return {
        templateUrl: './assets/views/form/address.html'
    }
});
app.directive('overview', function () {
    return {
        templateUrl: './assets/views/form/overview.html'
    }
});