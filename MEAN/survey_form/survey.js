'use strict'

//allows our app to untilize the express module
const express = require("express");

//This preps our server to use the body-parser module
const bodyParser = require("body-parser");

//allows our app to untilize the session module
const session = require('express-session');

//allows our app to untilize the path module
const path = require("path"); //This comes with node by default

let app = express();

app.use(bodyParser.urlencoded({extended: true})); //This allows us to actually use body-parser


//This is for our static content
app.use(express.static(path.join(__dirname, "./static"))); //The "path.join" part is new here

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs'); //ejs stands for embedded javascript

app.use(session({secret: 'THIS IS DISCRETE!!!'})); //we use session here to toss around information

//This next line allows us to organize our code a bit better
//Here we pass our express app instance to our index.js file in route folder
let route = require('./routes/index.js')(app);//Immediatly envoke the function with our app as a param



//Finally we tell our express app ot run on a specified port

app.listen(8000, function(){
    console.log("Listening on port 8000");
});
