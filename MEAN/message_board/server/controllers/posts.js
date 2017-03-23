const mongoose = require('mongoose'); //We interact with the database in this file so we are going to need mongoose

let Post = mongoose.model('Post');
// route for getting all posts and comments
module.exports = {
    //This first method gets us everything
    getAllMessagesWithComments : function (req, res) {
        let post = Post.find({}, false, true)
        .populate('_comments') //Here populate and exec are needed because one post can have many comments
        .exec(function(err, messages){
        if(err){
            console.log("Sorry unable to find posted messages");
        }
        console.log(messages.comments);
        res.render("index", {fetched_messages: messages}); //set view engine to be ejs, So there is no need to put the .ejs unless we feel the need
        });
    }, //end of first key value pair
    //This second method is where and how we grab the input from the user filled and submitted form
    postMessage : function (req, res) { //always need to pass in res and req to the funciton
        let postMessage = new Post({name: req.body.name, message: req.body.message}); //This line grabs the user submitted data
            postMessage.save(function (err, result) {
                if (err) {
                    console.log(" Error posting message", postMessage.errors);
                }else {
                    console.log("Successfully posted message");
                    res.redirect("/"); //redirects to our landing page
                }

            });
    }//end of second key value pair
    //PICK UP FROM HERE!!!

}

// }
// app.get('/posts/:id', function (req, res){
//  Post.findOne({_id: req.params.id})
//  .populate('comments')
//  .exec(function(err, post) {
//       res.render('post', {post: post});
//         });
// });
