'use strict'

let myAppModule = angular.module('myApp', []);
//factories are singletons
//Instantiated once and then avaiable to the rest of the program
myAppModule.factory('productFactory', ['$http', function($http) {
    let factory = {};
    let products = []; //need to store products so that we can do operations on them
    //This is our index method that returns our products
    factory.index = function(callback){
        //callback is the funciton that is passed to the productindex by the controller, in this caseP: setProducts
        callback(products);
    }
    //This is our add method
    factory.create = function(product, callback) { //how to we know price is an attribute of product?
        if(product.price && Number(parseFloat(product.price))==product.price){
            product.qty = 50; //This works because whenever we want
            products.push(product);
            callback(products);
        }
    }
    factory.delete = function(id, callback){
        products.splice(id,1); //this method of deletion assures us that we will be able to delete things at their specific index
        callback(products);
    }

    factory.buy = function(product, callback) { //what does this take?
        if (Number.isInteger(product.quantity)) {
            if (products[product.id].qty - product.qty > 0) { //pretty sure the first qty is the one above in this file and the second one is the one from the OrdersController file
                products[product.id].quantity -= product.quantity;
            }else {
                products[product.id].quantity = 0;
            }
        }
        callback(products);
    }
    //We return our object literal (let factory = {}) so that we may use it elsewhere throughout the program
    return factory; //So everything form myAppModule.factory to return factory is considered our factory generation function
}]);
