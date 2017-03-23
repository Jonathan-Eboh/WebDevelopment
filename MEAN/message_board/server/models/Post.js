
const mongoose = require('mongoose');


// define Schema variable
let Schema = mongoose.Schema;
// define Post Schema
let PostSchema = new mongoose.Schema({
 name: {type: String, required: true, min: [4, 'Name should be atleast 4 characters long'] },
 message: {type: String, required: true },
 _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}] //underscore because this comes from another table
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} }); // just made the created_at and updated_at here Similar to python MySQL
// set our models by passing them their respective Schemas
mongoose.model('Post', PostSchema);
// store our models in variables
