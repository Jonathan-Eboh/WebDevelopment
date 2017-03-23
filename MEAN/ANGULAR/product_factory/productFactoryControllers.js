'use strict'

//This next segment of code is our controller which sits between our model and our views
//Helps facilitate the logic generated in our models to flow towards and be presented on our views
//Views and models dont interact directly
myAppModule.controller('productController', ['$scope','productFactory', function ($scope, productFactory){
    //This sets us up to use a named callback function, rather than an anonymous one

    function setProducts(data) {
        $scope.products = data;
        $scope.product = null;// this resets the form field
    }

 $scope.product = {}; //Is this scope.product differnt than the one that lives inside the function above?
 $scope.products = {};


$scope.index = function(){ //our link to our index method
  productFactory.index(setProducts);
}

$scope.index(); //why do we do this? Is there where we communicate with out index method?
$scope.create = function(){
    productFactory.create($scope.product, setProducts);//from the form
    console.log("create product",setProducts);
}


$scope.delete = function(id){
     productFactory.delete(id,setProducts); //id is an implicit field so thats why we can do this?
   }

}]);
