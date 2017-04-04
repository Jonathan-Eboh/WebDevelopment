const questions = require('../controllers/questions_controller.js');


module.exports = function (app) {

app.post('/user', function(req, res){
    questions.user(req, res);
})

//Place all the server side routes here. These are the routes that talk to the factories
app.get('/questions',function(req, res) {
    questions.index(req,res);
})

app.post('/questions',function(req, res) {
    console.log('server-routes');
    questions.create(req,res);
})
}
