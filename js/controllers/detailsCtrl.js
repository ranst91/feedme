/**
 * A controller for the personal details form
 */
app.controller('detailsCtrl',['$scope', function ($scope) {

    /**
     * The the regular expressions used in the address form:
     * 
     * regex.numbers = contain only number
     * 
     * regex.letters = contain only A-Z english letters, 
     * both uppercase or lower case, without characters. 
     * Blank spaces allowed
     * 
     * @type {{numbers: string, letters: string}}
     */
    $scope.regex = {numbers: '^[0-9]+$', letters: '^[a-zA-Z ]+$'};
    
    /**
     * Turn a boolean value into "yes/no" value
     */
    $scope.process = function () {
        if ($scope.orderForm.$valid){
            if ($scope.order.cheese_rand)
                $scope.order.cheese_rand = 'Yes';
            else
                $scope.order.cheese_rand = 'No';
        }
    };
}]);


