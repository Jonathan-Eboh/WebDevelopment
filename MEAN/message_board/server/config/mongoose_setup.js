const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');

// Use native promises
mongoose.Promise = global.Promise; //Do we need it???

let fs = require('fs');
let path = require('path');

let models_path = path.join(__dirname, '/../models');
fs.readdirSync(models_path).forEach(function (file) {
 if (file.indexOf('.js') > 0) {
   require(models_path + '/' + file);
 }
})
