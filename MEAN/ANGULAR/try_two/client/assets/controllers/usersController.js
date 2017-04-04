app.controller('userController', ["$scope", "userFactory", "$location", function($scope, userFactory, $location) { //setting up our controller to work with our factory

    $scope.user = {};

    $scope.login = function() {
        if(!$scope.user.name){
            alert("User name can't be blank");
        } else {
            userFactory.login($scope.user, function(returnedData) {
                console.log("made it to userController .login");
                $scope.user = {};
                $location.url("/dashboard"); //This brings you to the dashboard on successful login

            })
        }
    };

}]);
