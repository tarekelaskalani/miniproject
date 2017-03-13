var Login = require('./datasets/users');

var loginController ={

    Signup function(req, res){
      //  var project = new Project(req.body);

        Login.save(function(err, users){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(users);
                res.redirect('/views/profile');
            }
        })
    }
}

module.exports = loginController;
