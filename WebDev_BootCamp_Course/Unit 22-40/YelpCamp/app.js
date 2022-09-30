require('dotenv').config();
const 
    http                = require('https'),
    hostname            = '127.0.0.1',
    // hostname         = '192.168.20.2',
    port                = 3000, 
    express             = require('express'),
    app                 = express(),
    bodyParser          = require('body-parser'),
    mongoose            = require('mongoose'),
    passport            = require('passport'),
    LocalStrategy       = require('passport-local'),
    User                = require('./models/user'),
    methOverride        = require('method-override'),
    //Requiring Routes
    commentRoutes       = require('./routes/comments'),
    campgroundRoutes    = require('./routes/campgrounds'),
    indexRoutes         = require('./routes/index'),
    flash               = require('connect-flash');
    // seedDB           = require('./seeds.js');     //Seed the database


mongoose.connect("mongodb://localhost/YelpCampDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to YelpCamp DB!'))
    .catch(error => console.log(error.message));

//Server Create
http.createServer((req, res) => {
    res.statusCode = 200;
});

mongoose.set('useFindAndModify', false);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));
app.use(methOverride('_method'));
app.use(flash());
app.set('view engine', 'ejs');
//require moment
app.locals.moment = require('moment');
// seedDB(); //seed the database


//PASSPORT CONFIG
app.use(require('express-session')({
    secret: "Ace is my fav kitty",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    res.locals.warning = req.flash('warning');
    next();
});

app.use('/campgrounds/:id/comments', commentRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/', indexRoutes);



//RUN SERVER ON LOCAL PORT
app.listen(port, hostname, () => {
    console.log(`YelpCamp Server running at http://${hostname}:${port}/`);
});



