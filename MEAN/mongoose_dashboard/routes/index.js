'use strict'
//Our routes will go in this file this time around

module.exports = function Route(app){

const mongoose = require('mongoose');




let AnimalSchema = new mongoose.Schema({
 name: String, //These two field are kinda like the SQL fields CHARfield
 weight: Number// and INTfield respectively
})
mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'
let Animal = mongoose.model('Animal') // We are retrieving this Schema from our Models, named 'User'


// Routes
// Root Request
app.get('/', function(req, res) {

    //This is where we will display all the Mongooses
    Animal.find({},function(err,animals_found) {
        console.log(animals_found);
        if (err) {
            console.log("Mongooses were unable to be displayed");
        }else {
            console.log("Mongooses were successfully displayed"); //Need to change where this line of code and logic check is placed in this project
            res.render('index', {fetched_animals: animals_found}); //passing the fetched_animals dictionary
            //The fetched_animals key IS the name for our animals_found array. It is the name of the pointer to our array
        }
    });
})


app.get('/animals/new', function(req, res) {

    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Animal.find({},function(err,animals_found) {
        if (err) {
            console.log("New mongoose unable to be generated");
        }else {
            console.log("Lets make a new mongoose!!!"); //Need to change where this line of code and logic check is placed in this project
            res.render('newGoose', {fetched_animals: animals_found}); //passing the users_found dictionary
        }
    });
})




app.get('/animals/:id', function(req, res) {

    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Animal.findOne({_id: req.params.id},function(err,animals_found) {
        if (err) {
            console.log("New mongoose unable to be generated");
        }else {
            console.log("Lets make a new mongoose!!!"); //Need to change where this line of code and logic check is placed in this project
            res.render('singleGoose', {fetched_animals: animals_found}); //passing the users_found dictionary
            //{single_animal: animals_found}
        }
    });
})


app.get('/animals/:id/edit', function(req, res) {

    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Animal.findOne({_id: req.params.id},function(err,animals_found) {
        if (err) {
            console.log("New mongoose unable to be generated");
        }else {
            console.log("Lets make a new mongoose!!!"); //Need to change where this line of code and logic check is placed in this project
            res.render('editGoose', {fetched_animals: animals_found}); //passing the users_found dictionary
            //{single_animal: animals_found}
        }
    });
})


app.post('/animals/:id', function(req, res) {

    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Animal.update({_id: req.params.id},{name: req.body.newName, weight: req.body.newWeight}, function(err,animals_found) {
        if (err) {
            console.log("New mongoose unable to be generated");
        }else {
            console.log("Lets make a new mongoose!!!"); //Need to change where this line of code and logic check is placed in this project
            res.redirect('/');  //
        }
    });
})



app.post('/animals/:id/destroy', function(req, res) {

    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Animal.remove({_id: req.params.id}, function(err,animals_found) {
        if (err) {
            console.log("New mongoose unable to be generated");
        }else {
            console.log("Lets make a new mongoose!!!"); //Need to change where this line of code and logic check is placed in this project
            res.redirect('/');  //
        }
    });
})




// Add User Request
app.post('/animals', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    // create a new User with the name and age corresponding to those from req.body
    let animals = new Animal({name: req.body.name, weight: req.body.weight}); //white matches the keys in the schema the last one(red) matches the html
    // Try to save that new user to the database (this is the method that actually inserts into the db) and runs a callback function with an error (if any) from the operation.
    animals.save(function(err,animals) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log("Mongoose was unable to be saved to the database");
        }else { // else console.log that we did well and then redirect to the root route
            console.log("Mongoose successfully saved to database");
        }
    })
    res.redirect('/');
})


}
