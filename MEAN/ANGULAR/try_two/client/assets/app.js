//our client side routing will go in this file

let app = angular.module('app', ['ngRoute']); //we name our app here and make sure we are calling ngRoute

app.config(function($routeProvider) {
    $routeProvider
    .when('/login',{ //This will act as our landing page
        templateUrl: 'partials/login.html',
        controller: 'userController'
    })
    .when('/dashboard',{ //This will act as our landing page
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardController'
    })
    .when('/ask', {
        templateUrl: 'partials/ask.html',
        controller: 'questionController'
    })
    .otherwise({
        redirectTo: 'login' //This makes it seem as though our login page is our landing page to our user even though we dont make our index page our landing page
    });
});
