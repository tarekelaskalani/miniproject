var Signup = require('../datasets/users');

var signupController ={

    Signup function(req, res){
      //  var project = new Project(req.body);

        Signup.save(function(err, users){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(users);
                res.redirect('/views/homepage');
            }
        })
    }    
}

module.exports = signupController;
