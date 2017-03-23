'use strict'

myAppModule.controller('ordersController', [
    '$scope',
    'productFactory',
    function($scope, productFactory) {
        function setProducts(data) {
            $scope.products = data;
            $scope.product = {};
        }
        $scope.products = [];

        productFactory.index(setProducts);
        $scope.buy = function(id) {
            productFactory.buy({
                id: id,
                quantity: 1
            }, setProducts);
        }
    }
]);
