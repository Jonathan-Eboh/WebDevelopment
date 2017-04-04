
app.controller('questionsController', ["$scope","questionFactory", function ($scope, questionFactory) {
    $scope.questions = [];

    // logic to interact with our view(our partial here)
    questionFactory.showQuestions(function(data){
        console.log("showQuestions controller", data);
        $scope.questions = data; //need to attach to scope because this is the only way to send it to the partials
    });

    $scope.new_question = function(){
        let question = $scope.new_q
        console.log("controller",question);
        questionFactory.createQuestion(question, function(data) {
            if (data.errors) {
                console.log(data.errors);
            }else {
                questionFactory.showQuestions(function(data){
                    $scope.questions = data;
                });

            }
        })
        $scope.new_q = null;
    }




    // const login = function() {
    //     if (!questionFactory.loggedUser){
    //         let user = prompt("Please sign in with your name");
    //         console.log(user);
    //         questionFactory.loggedUser = user;
    //     }
    // }
    // loggedUser();
}]);
