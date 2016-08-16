app.controller('submitCtrl',['$scope', '$state', function ($scope, $state) {
    $scope.submit = function () {
        //Call the api
        //if true:
        $state.go('success', {name: $scope.order.first});
    };
}]);