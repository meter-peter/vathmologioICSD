const express = require('express')
const router = express.Router();
const User = require('../../Model/User');
const bcrypt = require('bcrypt')



router.post('/register', (req, res) => {
    let {
        username,
        email,
        password,
        confirm_password,
    } = req.body
    let role ='User'

    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Η Επαλήθευση του κωδικού απέτυχε."
        });
    }
    User.findOne({username: username})
    .then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Το Username Χρησιμοποιείται."
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
                msg: "Το Email Χρησιμοποιείται?"
            });
        }
    });

    let newUser = new User({
        username,
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
                    msg: "Εγγραφήκατε με επιτυχία."
                });
            });
        });
    });
});

module.exports = router;