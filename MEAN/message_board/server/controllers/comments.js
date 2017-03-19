//The logic from inside of the routes goes in here

// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

// const mongoose = require('mongoose');
//
// let Post = mongoose.model('Post');
// let Comment = mongoose.model('Comment');
// // route for getting all posts and comments
// app.get('/posts/:id', function (req, res){
//  Post.findOne({_id: req.params.id})
//  .populate('comments')
//  .exec(function(err, post) {
//       res.render('post', {post: post});
//         });
// });
// // route for creating one comment with the parent post id
// app.post('/posts/:id', function (req, res){
//   Post.findOne({_id: req.params.id}, function(err, post){
//          let comment = new Comment(req.body);
//          comment._post = post._id;
//          post.comments.push(comment);
//          comment.save(function(err){
//                  post.save(function(err){
//                        if(err) { console.log('Error'); }
//                        else { res.redirect('/'); }
//                  });
//          });
//    });
//  });
