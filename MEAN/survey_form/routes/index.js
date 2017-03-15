'use strict'
//Our routes will go in this file this time around

module.exports = function Route(app){

//This is our landing page which renders our index.ejs file
    app.get('/', function(req, res) {
  res.render("index");
 })
 // post route for adding a data from a survey
   app.post('/result', function(req, res) {
       // submitted_info = {
       //1)Here we pass the user information from the form in index.ejs to our session
           req.session.name= req.body.name;
           req.session.dojo_location= req.body.dojo_location;
           req.session.fave_language= req.body.fave_language;
           req.session.comment= req.body.comment;
       // };
    res.redirect('/success'); //we redirect on post, never render

   });

 app.get('/success', function(request, response){
     //This works because all this information has been caught by the session here in our case
     //2)Now here is where we pass the user information from the session into our javascript object
    let results_info = {
     name: request.session.name,
     dojo_location: request.session.dojo_location,
     favorite_language: request.session.fave_language,
     comment: request.session.comment,
 };
   console.log(results_info);
   //3)This is where we finally make that user information available for rendering
   response.render("results", {user_data:results_info}) //This is where we make the user entered data available
   //for us to use.
   //we store it in a dictionary that has key user_data and a value of a javascript object
 });
}
