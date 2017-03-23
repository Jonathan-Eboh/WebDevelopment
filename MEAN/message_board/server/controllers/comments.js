//The logic from inside of the routes goes in here

// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

const mongoose = require('mongoose');
let Post = mongoose.model('Post');
let Comment = mongoose.model('Comment');

module.exports = {
    //This first method gets us everything
    createComment : function (req, res) {
    let post_id = Post.find({}, false, true) //Need the specific id associated with the post we are dealing with
    Post.findOne({}, function (err, posted_message) { //Whenever we make calls to the database we use err and name the return
        if(err){
            console.log("Sorry unable to comment on message");
        }
        let newComment = new Comment({name: req.body.inputName, comments: req.body.inputComment});
        newComment._post = posted_message._id; //Is this where we link the newly made comment and the id of the message it is attached to?
        console.log("Successfully commented on message!");
        Post.update({_id: posted_message._id}, {$push: {"_comments": newComment}}, function(err){

        });
        //new comment goes here
        newComment.save(function(err){
            if(err){
              console.log(err); //If it fails...
              res.render('index.ejs', {errors: newComment.errors}); //...render the same page and show the errors
          } else { //Else just redirect towards the landing page
              console.log("comment added");
              res.redirect("/");
            }
          });
        });
    }
}
