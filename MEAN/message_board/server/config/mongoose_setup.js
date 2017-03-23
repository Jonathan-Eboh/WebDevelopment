const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');//This is the line of code that actually lets us connect to our database

// Use native promises
mongoose.Promise = global.Promise; //We might not need this for this project

let fs = require('fs'); //what is fs?
let path = require('path');

let models_path = path.join(__dirname, '/../models');
fs.readdirSync(models_path).forEach(function (file) {
 if (file.indexOf('.js') > 0) { //Need to understand what this line of code is doing
   require(models_path + '/' + file);
 }
})
