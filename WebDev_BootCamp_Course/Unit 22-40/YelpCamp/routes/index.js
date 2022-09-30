const express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    User = require('../models/user');


//ROOT ROUTE
router.get('/', function (req, res) {
    res.render('landing');
});

//SHOW REGISTER FORM
router.get('/register', function (req, res) {
    res.render('authenticate/register');
});
//REGISTER LOGIC
router.post('/register', function (req, res) {
    const newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            req.flash('error', "User already exists.");
            return res.render('authenticate/register');
        }
        passport.authenticate('local')(req, res, function () {
            req.flash('success', 'Sign Up Successful');
            res.redirect('/campgrounds');
        });
    });
});

//SHOW LOGIN FORM 
router.get('/login', function (req, res) {
    res.render('authenticate/login');
});
//LOGIN LOGIC
router.post('/login', passport.authenticate('local', {
    successRedirect: '/campgrounds',
    failureRedirect: '/login'
}), function (req, res) {
});

//LOGOUT ROUTE/ LOGOUT LOGIC
router.get('/logout', function (req, res) {
    req.logout();
    req.flash('success', 'You have been logged out.');
    res.redirect('/campgrounds');
});


//INVALID ROUTE
router.get('*', function (req, res) {
    res.send('* ERROR 404, PAGE NOT FOUND * ( ͡° ͜ʖ ͡°)');
});

module.exports = router;