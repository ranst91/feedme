app.controller('orderCtrl',['$scope', function ($scope) {
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
    // $(document).on('change', '#cheese-rand', function(){
    //     if ($scope.order.cheese_rand) 
    //         $scope.order.cheese_rand = 'Yes';
    //     else 
    //         $scope.order.cheese_rand = 'No';
    // });
    
    $scope.regex = {numbers: '^[0-9]+$', letters: '^[a-zA-Z]+$'};
    
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
    // $("[name='cheese-rand']").bootstrapSwitch();
}]);