
//Require all the things we need
const express = require("express");
const path = require("path");
const bp = require("body-parser");
const session = require("express-session");

let app = express();


//use body-parser and tell it to return data in JSON format
app.use(bp.json());

//accessing our client and bower_components
app.use(express.static(path.join(__dirname + "/client")));
app.use(express.static(path.join(__dirname + "/bower_components")));

//enableing us to utilize session
app.use(session({
    secret: "This is a secret",
    resave: false,
    saveUninitialized: true,

}));

//Allowing us to use our routes as a function that we exported from that file and require here
require('./server/server_config/mongoose.js');
require('./server/server_config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});
