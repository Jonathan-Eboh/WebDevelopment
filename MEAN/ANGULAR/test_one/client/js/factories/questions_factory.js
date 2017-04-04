app.factory("questionFactory", ['$http', function($http) { //the $http that is passed into the fuction here must match the name of the $http that we use throughout the rest of the file eg ($http.get)
    let factory = {};
    let questions = [];
    // let loggedUser = "";

    factory.login = function(user,callback) {
        console.log("factory created USER", user);
        $http.post('/user', user).then(function (userData) {
            callback(userData.data);
            console.log("This is a data object", userData.data);
        })
    }

    factory.showUser = function(callback) {
        $http.get('/questions').then(function (userData) {//promise
            callback(userData.data);
        })
    },

    factory.showQuestions = function(callback) {
        $http.get('/questions').then(function (all_questions) {//promise
            callback(all_questions.data);
        })
    },



    factory.createQuestion = function(new_q,callback) {
        console.log("factory new_q", new_q);
        $http.post('/questions', new_q).then(function (created_q) {
                    callback(created_q);
        })
    }

    return factory;
}]);
