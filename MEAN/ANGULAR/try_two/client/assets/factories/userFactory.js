app.factory('userFactory', ['$http', function($http) { //Here we name our factory and utilize $http so that we can pass information around appropriately
    function UserFactory() { //capital U because it is a constructor
        let _this = this; //we are going to reference the object itself with this instead of using factory

        this.login = function(user, callback) { //the user is generated from the form and passed to the controller then passed here
            $http.post("/login", user).then(function(returnedData) { //this is a promise
                callback(returnedData.data);
                console.log("Made it to userFactory .login");
            });
        };

        this.user = function (callback) { //gets the user
            $http.get('/index').then(function(returnedData) {
                callback(returnedData);
                console.log("Made it to userFactory .user");

            });
        };
    }

    return new UserFactory(); //Cut things down by returning a new instance of the UserFactory

}]);
