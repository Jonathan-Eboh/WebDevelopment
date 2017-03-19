// This is the file that specifies which routes will be handled and by which controller methods.
// From routes.js we require the controller file (or files).

// const mongoose = require('mongoose');
// const Message = mongoose.model('Message');// preemtivly naming our schema model that will be made in Message.js


const postsController = require("./../controllers/posts.js")//walks us up and over to posts and grabs that whole file
const commentsController = require("./../controllers/comments.js")//walks us up and over to comments and grabs that whole file

module.exports = function (app) {
    //root route
    app.get('/', postsController.getAllMessagesWithComments); //This renders our landing page

}
