app.controller('questionController', ["$scope", "userFactory", "$location","questionFactory", function($scope, userFactory, $location, questionFactory) { //setting up our controller to work with our factory

    $scope.current_user = null;

    userFactory.user(function(returnedData){
       if (returnedData.status === false) {
           $location.url("/login");
       } else {
           $scope.current_user = returnedData;
       }
   });

   $scope.cancel(function(){
        $scope.question = {};
    });

    $scope.addQuestion = function() {
        if (!$scope.question){
            alert("Question cannot be blank!");
        } else {
            questionFactory.addQuestion($scope.question, function(returnedData) {
                if (returnedData.errors) {
                    $scope.errors = returnedData.errors;
                } else {
                    $location.url('/dash');
                }
            });
        }
    };

}]);
