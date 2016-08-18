app.controller('orderCtrl',['$scope','$state', function ($scope, $state) {
    /**
     * The order:
     * Contains the personal details and the food.
     * This object will be sent to the API and follow us along the flow
     * @type {{first: string, last: string, street: string, no: string, postcode: string, city: string, size: string, toppings: Array}}
     */
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

    /**
     * The culinaric options available:
     * The Sizes of pizza a user can choose from + A class to preserve the DOM side of the choice
     * The list of toppings available for choice.
     */
    $scope.availableSizes = [{size: 20, class: ''},{size: 30, class: ''},{size: 40, class: ''}];
    $scope.toppingsOpt = ['Tomato Sauce','Mozarella Cheese','Mushrooms','Tomatos','Pepperoni','Schinken'];

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