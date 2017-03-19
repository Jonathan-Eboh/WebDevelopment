'use strict'

//This is the sever set up file
//So the app.use and app.set things go in here as well as our const and requirments

// Always start with your server.js file
// The server.js file acts as the home base for your application. This is where you require the routes and the mongoose configurations
// The server.js also creates the express application, loads configurations onto it, and then tells it to listen!


// Require the Express Module
const express = require('express');

// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const path = require('path');


// Create an Express App
let app = express();

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/css')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

require("./server/config/mongoose_setup.js");

let route = require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})
