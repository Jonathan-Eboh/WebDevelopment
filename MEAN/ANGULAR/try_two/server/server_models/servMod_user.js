//This is the Schema for our users model

let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name:{type: String, required: true}
});

let User = mongoose.model("User", UserSchema);
