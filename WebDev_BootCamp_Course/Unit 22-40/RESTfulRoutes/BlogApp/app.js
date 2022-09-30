const http = require('https'),
    hostname = '192.168.20.4',
    port = 3000,
    methodOverride = require('method-override'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    expressSanitizer = require('express-sanitizer');


//APP CONFIG
mongoose.connect("mongodb://localhost/restfulBlogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to BlogApp DB!'))
    .catch(error => console.log(error.message));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(express.static('public'));
app.use(methodOverride("_method"));

//MONGOOSE/MODEL CONFIG
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});
const Blog = mongoose.model('Blog', blogSchema);


//RESTFUL ROUTES
app.get('/', function (req, res) {
    res.redirect('/blogs');
});
//INDEX ROUTE
app.get('/blogs', function (req, res) {
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log('Error!');
        } else {
            res.render('index', { blogs: blogs });
        }
    });
});
//NEW ROUTE
app.get('/blogs/new', function (req, res) {
    res.render('new');
});

//CREATE ROUTE
app.post('/blogs', function (req, res) {
    //Sanitize input
    req.body.blog.body = req.sanitize(req.body.blog.body);
    //create blog
    Blog.create(req.body.blog, function (err, newBlog) {
        if (err) {
            res.render('new');
        } else {
            //then, redirect to the index
            res.redirect('/blogs');
        }
    });
});

//SHOW ROUTE
app.get('/blogs/:id', function (req, res) {
    Blog.findById(req.params.id, function (err, blogInfo) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.render('show', { blog: blogInfo });
        }
    });
});

//EDIT ROUTE
app.get('/blogs/:id/edit', function (req, res) {
    Blog.findById(req.params.id, function (err, blogInfo) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.render('edit', { blog: blogInfo });
        }
    });
});

//UPDATE ROUTE
app.put('/blogs/:id', function (req, res) {
    //Sanitize input
    req.body.blog.body = req.sanitize(req.body.blog.body);
    //update blog
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedBlog) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    });
});

//DELETE ROUTE
app.delete('/blogs/:id', function (req, res) {
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/');
        }
    });
    //then redirect somewhere
});

app.listen(port, hostname, () => {
    console.log(`BlogApp Server running at https://${hostname}:${port}/`);
});
