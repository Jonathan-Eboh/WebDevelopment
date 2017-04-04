app.controller('dashboardController', ["$scope", "userFactory", "$location","questionFactory", function($scope, userFactory, $location, questionFactory) { //setting up our controller to work with our factory

    $scope.current_user = null;
    $scope.questions = [];

    userFactory.user(function(returnedData){
       if (returnedData.status === false) {
           $location.url("/login");
       } else {
           $scope.current_user = returnedData;
       }
   });

   questionFactory.getQuestions(function(returnedData){
        $scope.questions = returnedData;
    });

}]);
