'use strict'

//This file serves as our web server and our logic units

// Require the Express Module
const express = require('express');

// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');

// Require path
const path = require('path');

const mongoose = require('mongoose');

// Create an Express App
let app = express();

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');

// Setting our Server to Listen on Port: 8000

//This next line allows us to organize our code a bit better
//Here we pass our express app instance to our index.js file in route folder
let route = require('./routes/index.js')(app);//Immediatly envoke the function with our app as a param

app.listen(8000, function() {
    console.log("listening on port 8000");
})
