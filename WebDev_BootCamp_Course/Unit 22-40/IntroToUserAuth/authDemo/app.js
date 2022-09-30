const http = require('http'),
    hostname = '127.0.0.1',
    // hostname           = '192.168.20.2',
    port = 3000,
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    User = require('./models/user'),
    passportLocalMongoose = require('passport-local-mongoose');

//SERVER CREATE
http.createServer((req, res) => {
    res.statusCode = 200;
});

//MONGOOSE
mongoose.connect("mongodb://localhost/UserAuthDemoDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to UserAuth DB!'))
    .catch(error => console.log(error.message));


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
    secret: "I have a huge penis",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//===============
//ROUTES
//===============

//INDEX ROUTE
app.get('/', function (req, res) {
    res.render('home');
});

//SUCCESSFUL LOG IN ROUTE
app.get('/secret', isLoggedIn, function (req, res) {
    res.render('secret');
});

//AUTHENTICATION ROUTES
//SHOW SIGN UP FORM
app.get('/register', function(req, res) {
    res.render('register');
});

//HANDLING USER SIGN UP
app.post('/register', function(req, res) {
    req.body.username
    req.body.password
    User.register(new User ({username: req.body.username}), req.body.password, function(err, user) {
        if(err) {
            console.log(err)
            return res.render('register');
        } else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/secret');
            });
        };
    });
});

//LOGIN ROUTES
//RENDER LOGIN FORM
app.get('/login', function(req, res) {
    res.render('login');
});

//LOGIN LOGIC
//MIDDLEWARE
app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), function(req, res) {
});


//LOGOUT ROUTE
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// //INVALID ROUTE
app.get('*', function (req, res) {
    res.send('* ERROR 404, PAGE NOT FOUND * ( ͡° ͜ʖ ͡°)');
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    };
};


//RUN SERVER ON LOCAL PORT
app.listen(port, hostname, () => {
    console.log(`User Auth Server running at http://${hostname}:${port}/`);
});


