app.controller('orderCtrl',['$scope','$state', function ($scope, $state) {
    $scope.order = {
        first: '',
        last: '',
        street: '',
        no: '',
        postcode: '',
        city: '',
        size: '',
        toppings: []
    };

    $scope.mark = function (step, boolean) {
        step = step.toUpperCase();
        var arrow = $("li:contains("+step+")").prev().children().children().children();
        if (boolean == true) {
            $('ul.nav li').removeClass('active');
            $("li:contains("+step+")").addClass('active done');
            arrow.addClass('arrow-done');
        }
        else {
            $('ul.nav li').removeClass('active');
            $("li:contains("+step+")").addClass('active');
        }
    };
    
    $scope.cancelOrder = function () {
        this.order = {};
    };

}]);