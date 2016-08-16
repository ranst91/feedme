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
    $scope.regex = {numbers: '^[0-9]+$', letters: '^[a-zA-Z ]+$'};
    
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
    /**
     * Get the clicked pizza size
     * Add a selected class
     * Store the size selected in order's data
     * @param $event
     */
    $scope.sizeSelect = function ($event) {
        var clicked = $event.currentTarget;
        $('.sizes').removeClass('selected');
        $(clicked).addClass('selected');
        this.order.size = $(clicked).data('size');
        $('button').prop('disabled', false);
    };
    
    $scope.toppingsOpt = [
        {name: 'Tomato Sauce', letter: 'X'},
        {name: 'Mozarella Cheese', letter: 'C'},
        {name: 'Mushrooms', letter: 'M'},
        {name: 'Tomatos', letter: 'T'},
        {name: 'Pepperoni', letter: 'P'},
        {name: 'Schinken', letter: 'H'}
    ];
    
    $scope.selectIngredients = function ($event) {
        var selected = $( "select option:selected" );
        this.order.toppings.push($(selected).val());
        selected.remove();
        $('.selected_opt').append('<li data-val="'+$(selected).val()+'"><span>'+$(selected).text()+'</span><span class="delete"></span></li>');
    };

    $scope.process = function () {
        if ($scope.orderForm.$valid){
            if ($scope.order.cheese_rand)
                $scope.order.cheese_rand = 'Yes';
            else
                $scope.order.cheese_rand = 'No';
        }
        
        if ($scope.order.toppings.length<1){
            $scope.order.toppings.push('None');
        }
    };
    
    $scope.submit = function () {
        $state.go('success', {name: $scope.order.first})  
    };
    
    /**
     * Function to remove toppings from array & view
     * On click on the topping's "X" button
     */
    $(document).on('click', '.delete', function (e) {
        var clicked = $(e.currentTarget).parent();
        var i = $scope.order.toppings.indexOf(clicked.data('val'));
        $scope.order.toppings.splice(i, 1);
        clicked.remove();
    });
}]);