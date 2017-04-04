const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    name: {type:String, minlength: 2}, //name of user
    question: {type:String, minlength: 2},
    description: {type:String, minlength: 2},
    answer: [{name:{type:String},answer:{type:String},description:{type:String},likes:{type:Number}}]
},{timestamps: true});

mongoose.model('Question',QuestionSchema);
