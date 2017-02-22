var bcrypt = require('bcrypt-nodejs');
var User = require('../models/User.model');

exports.register = function(req, res) {
    var newUser = new User();

    newUser.username = req.body.username;
    newUser.email = req.body.email;

    newUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);

    newUser.save(function(err, user) {
        if (err) {
            console.log("Error", err);
            console.log("User", user)

            // if username or email is already taken go to another page, for now i am just going back to the sam epage
            res.redirect('/');
        } else {
            console.log(user);
            res.redirect('/signup.html')
        }
    });
};

