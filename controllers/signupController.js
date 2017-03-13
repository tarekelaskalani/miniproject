var Signup = require('./datasets/users');
var signupController = require('./controllers/signupController');

var signupController ={

    Signup function(req, res){



Signup.post('/views/signup', function(req, res) {
        Signup.create({
            username: req.body.username,
            major: req.body.major,
            email: req.body.email,
            password: req.body.password
        }, function(err, student) {
            if (err) {
                console.log(err);

            } else {
                console.log(student.username);
                console.log("==========");
                console.log(student.password);
                res.redirect("/views/homepage");
            }
        });
    },
module.exports = signupController;
