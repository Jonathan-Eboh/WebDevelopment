let users = require('../server_controllers/serv_users.js');
let questions = require('../server_controllers/serv_questions.js');
let answers = require('../server_controllers/serv_answers.js');


module.exports = function(app) {
    app.post("/login", users.login);
    app.get("/index", users.index);
    app.get("/logut", users.logout);
    // app.post("/questions", questions.create);
    // app.get("/questions", questions.index);

};
