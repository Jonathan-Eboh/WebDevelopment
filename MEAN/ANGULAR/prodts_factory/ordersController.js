app.controller('ordersController', [
    '$scope',
    'productFactory',
    function($scope, productFactory) {
        function setProducts(data) {
            $scope.products = data;
            $scope.product = {};
        }
        $scope.products = [];

        productFactory.index(setProducts);
        $scope.update = function(id) {
            productFactory.update({
                id: id,
                quantity: 1
            }, setProducts);
        }
    }
]);
