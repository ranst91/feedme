app.controller('foodCtrl',['$scope', function ($scope) {
    /**
     * Get the clicked pizza size
     * Add a selected class
     * Store the size selected in order's data
     * @param $event
     */
    $scope.sizeSelect = function ($index) {
        $scope.order.size = $scope.availableSizes[$index].size;
        $('button').prop('disabled', false);
    };

    if ($scope.order.size){
        $('button').prop('disabled', false);
    }

    /**
     * This function takes selected topping for select menu
     * and adds it to the selected toppings list
     */
    $scope.selectIngredients = function () {
        if ($scope.toppingsOpt.length > 0 && $scope.selected != undefined) {
            var current = $scope.toppingsOpt.indexOf($scope.selected);
            $scope.toppingsOpt.splice(current, 1);
            $scope.order.toppings.push($scope.selected);
            $scope.selected = $scope.toppingsOpt[0];
        } else {
            return;
        }
    };

    /**
     * Function to remove toppings from array & view
     * On click on the topping's "X" button:
     *  Remove topping from order
     *  Add it back to toppings options in select menu
     */
    $scope.removeTopping = function ($event) {
        var current = $event.target;
        var topping = $(current).parent().data('val');
        var i = $scope.order.toppings.indexOf(topping);
        $scope.order.toppings.splice(i, 1);
        $scope.toppingsOpt.push(topping);
    };
}]);