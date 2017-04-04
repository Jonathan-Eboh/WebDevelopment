//This is the serverside controller for our users

let mongoose = require('mongoose');
let newUser = mongoose.model('User');

// This will be our final step of the login process where we finally communicate with the database
function userController() {
    this.login = function(req, res) {
        newUser.findOne({name: req.body.name}, function(err, result) {
            if(!result){
                newUser.create(req.body, function(err, user) {
                    if (err) {
                        console.log(err);
                        res.json(err);
                    }else{
                        req.session.user = user;
                        req.session.save(); //This is where the user is being saved to the database
                        console.log("saved user to database 1");
                        res.json(user);
                    }
                });
            }else {
                if(err){
                    res.json(err);
                } else {
                    req.session.user = result;
                    req.session.save();
                    console.log("saved user to database 2");
                    res.json(result);
                }
            }
        });

    };

    this.index = function(req, res) {
        if (!req.session.user || req.session.user === null) {
            res.json({status: false});
        } else {
            res.json(req.session.user);
        }
    };

    this.logout = function(req, res) {
        req.session.destroy();
        res.redirect("/");
    };
}

module.exports = new userController();
