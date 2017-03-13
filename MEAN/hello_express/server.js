'use strict'

const express = require("express");

//This preps our server to use the body-parser module
const bodyParser = require("body-parser");

const session = require('express-session');

let app = express();

app.get('/', function(req, res) {
    res.render('index', {title: "my Express project"});// This line allows us to change what our home page renders
})
//I changed 'index' to 'index.ejs' and nothing happened? what does that string need to be (if anything)
//in order for everything to work properly?

app.get("/users", function (req, res){
    // hard-coded user data
    let users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})

//users/:id    //where :id is the id of a particular user.  HTTP method is GET
app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});


//This line is responsible for our servers ability to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));

//This line is where we tell our server to utilize the body-parser module
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret: 'codingdojorocks'})); //The string here is for encryption

//now, within any of the routes, there will be an object called req.session. It is an object and we can assign properties to it like normal


//This line sets the location where express will look for the ejs views
app.set('views',__dirname + '/views');

//This line sets the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    req.session.name = req.body.name;
    //And now req.session.name will be available to any other route afterward.
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.redirect('/')
});

app.listen(8000, function() {
    console.log("listening on 8000");
})



//m-muh dependencies...
// {
//   "dependencies": {
//     "body-parser": "^1.13.3",
//     "ejs": "^2.3.3",
//     "express": "^4.13.3",
//     "socket.io": "^1.3.6"
//   }
// }
