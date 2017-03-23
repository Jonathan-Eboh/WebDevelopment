//The schema goes in here

// This is the file that specifies the schema to be loaded by mongoose.
// This file is required by mongoose.js.
// We do not need to require this file in the controller, instead, the model itself is loaded from mongoose.
// There can be many models in the server/models folder.

//One post can have many comments---------------
//Each comment only belongs to one post---------------
const mongoose = require('mongoose');

let Schema = mongoose.Schema;//Needs to know of the schema


let CommentSchema = new mongoose.Schema({
 name: {type: String},
 comments: {type: String},
 _post: {type: Schema.Types.ObjectId, ref: 'Post'}, //underscore because post is a different table

}, {timestamp: {createdAt: 'created_at', updatedAt: 'updated_at'} });
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('comments').required(true, 'Comment cannot be blank');
// set our models by passing them their respective Schemas
mongoose.model('Comment', CommentSchema);
