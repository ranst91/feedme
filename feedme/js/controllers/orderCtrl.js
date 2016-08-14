app.controller('orderCtrl',['$scope', function ($scope) {
    $scope.order = {
        first: '',
        last: '',
        street: '',
        no: '',
        postcode: '',
        city: '',
        size: '',
        toppings: [],
        cheese_rand: this.checked
    };
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
    
    $scope.submit = function () {
        if ($scope.orderForm.$valid){
            console.log(this.order);
        }
    };
    
    $(document).on('click', '.delete', function (e) {
        var clicked = $(e.currentTarget).parent();
        var i = $scope.order.toppings.indexOf(clicked.data('val'));
        $scope.order.toppings.splice(i, 1);
        clicked.remove();
    });
    $("[name='cheese-rand']").bootstrapSwitch();
}]);