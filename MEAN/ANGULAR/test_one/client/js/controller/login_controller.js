app.controller('loginController', ["$scope","questionFactory","$location", function ($scope, questionFactory, $location) {
    $scope.user = {};
    $scope.login = function () {

        if (!$scope.user.name) {
            console.log("Error");
            alert("Name cannot be blank");
        }else {
            questionFactory.login($scope.user, function(returnedData) {
                $location.url("/dashboard"); //This takes you to the dashboard after a succful login 
            })
    }
}

}]);
