let app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
//
$routeProvider
    .when('/',{
        templateUrl: 'static/partials/login.html'
    })
    .when('/dashboard',{
        templateUrl: 'static/partials/dashboard.html'
    })
    .when('/new_question', {
        templateUrl: 'static/partials/question.html'
    })
    .when('/question/:id', {
        templateUrl: 'static/partials/QA.html'
    })
    .when('/question/:id/new_answer', {
        templateUrl: 'static/partials/answer.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
