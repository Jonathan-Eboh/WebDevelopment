app.factory('questionFactory', ['$http', function($http) {
    function QuestionFactory() {
        let _this = this;

        this.addQuestion = function(question, callback) {
            $http.post("/questions", question).then(function(returnedData) {
                    callback(returnedData.data);
            });
        };

        this.getQuestions = function(callback) {
            $http.get('/questions').then(function(returnedData) {
                callback(returnedData.data);
            });
        };

        this.getCurrentQuestion = function(id, callback) {
            $http.get("/questions/" + id.id).then(function(returnedData){
                callback(returnedData.data);
            });
        };
    }
    return new QuestionFactory();
}]);
