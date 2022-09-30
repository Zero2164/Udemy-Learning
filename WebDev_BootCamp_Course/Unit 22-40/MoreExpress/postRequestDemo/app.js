var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

var frendz = [
		"Tony",
		"Miranda",
		"Joey",
		"Gilgamesh",
		"Justin"
		];

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/frinds', function(req, res) {
	res.render('frinds', { frendz: frendz });
});

app.post('/addFrind', function(req, res) {
	var newFrind = req.body.newFrind;
	frendz.push(newFrind);
	res.redirect('/frinds')
});

app.get('*', function(req, res) {
	res.send('Error 404, Page Not Found !!!');
});


app.listen(process.env.PORT, process.env.IP, function() {
	console.log('SERVER HAS STARTED!!');
});
