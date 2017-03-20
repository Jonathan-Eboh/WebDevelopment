var app = angular.module('app', []);
app.controller('myController', ['$scope', function($scope){
  //printController will show the current $scope

  $scope.foodlist = [

  ];
  $scope.addFood = function (){
    // add to the array
    $scope.foodlist.push($scope.newFood);
    // clear the form values
    $scope.newFood = "";
}

}]);
