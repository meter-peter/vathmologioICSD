const express = require('express')
const router = express.Router();
const User = require('../Model/User');
const bcrypt = require('bcrypt')



router.post('/register', (req, res) => {
    let {
        username,
        firstname,
        lastname,
        email,
        password,
        confirm_password,
        role
    } = req.body


    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Passwords do not match."
        });
    }
    User.findOne({username: username})
    .then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Username is already taken."
            });
        }
    }).catch(err=>{
        return res.send(err);
    })
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registred. Did you forgot your password?"
            });
        }
    });

    let newUser = new User({
        username,
        firstname,
        lastname,
        email,
        password,
        confirm_password,
        role
    });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User is now registered."
                });
            });
        });
    });
});

module.exports = router;