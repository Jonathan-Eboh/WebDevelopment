'use strict'
//Our routes will go in this file this time around

module.exports = function Route(app){

const mongoose = require('mongoose');




let UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
let User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'


// Routes
// Root Request
app.get('/', function(req, res) {

    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({},function(err,users_found) {
        if (err) {
            console.log("User was unable to be found");
        }else {
            console.log("User successfully found");
            res.render('index', {fetched_users: users_found}); //passing the users_found dictionary
        }
    });
})
// Add User Request
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    // create a new User with the name and age corresponding to those from req.body
    let users = new User({name: req.body.name, age: req.body.age}); //white matches the keys in the schema the last one(red) matches the html
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    users.save(function(err,users) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log("User was unable to be saved to the database");
        }else { // else console.log that we did well and then redirect to the root route
            console.log("User successfully saved to database");
        }
    })
    res.redirect('/');
})


}
