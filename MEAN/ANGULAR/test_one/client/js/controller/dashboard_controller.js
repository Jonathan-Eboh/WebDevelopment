app.controller('dashboardController', ["$scope","questionFactory","$location", function ($scope, questionFactory, $location) {


    $scope.cur_user = null;
    $scope.questions = [];

    questionFactory.getCurUser(function(returnedData){
        if (returnedData.status === false) {
            $location.url("/login");
        } else {
            $scope.cur_user = returnedData;
        }
    });

    questionFactory.getQuestions(function(returnedData){
        $scope.questions = returnedData;
    });



}]);
