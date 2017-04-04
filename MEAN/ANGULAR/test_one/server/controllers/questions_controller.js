const mongoose = require('mongoose');
let Question = mongoose.model("Question");

module.exports = ( function() {
    return{

        user: function(req, res){
            let receivedUser = new Question(req.body);
            // console.log(receiveUser);
            receivedUser.save(function(err, results){
                if (err){
                    console.log(err);
                    res.json(err);
                } else {
                    res.json(results);
                }
            })
        },

        index: function (req, res) {
            Question.find({}, function(err, results) {
                console.log('finding all questions in db...');
                if(err){
                    res.json(err);
                }else {
                    res.json(results);
                }
            })
        },

        create: function(req, res) {
            recievedQuestion = new Question(req.body);
            console.log('sever-controller');
            recievedQuestion.save(function(err, results) {
                if (err) {
                    console.log(err); //good for debugging
                    res.json(err);
                }else {
                    res.json(results)
                }
            })
        }
    }
})();
