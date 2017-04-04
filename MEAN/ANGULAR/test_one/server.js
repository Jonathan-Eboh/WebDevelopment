const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const mongoose = require('mongoose');

let app = express();



app.use(express.static(path.join(__dirname, './client'))); //This always points to the client directory
app.use(express.static(path.join(__dirname, './bower_components')));

app.use(body_parser.json());
//require the database
require('./server/config/mongoose.js');
//require the routes
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000 fam");
});
