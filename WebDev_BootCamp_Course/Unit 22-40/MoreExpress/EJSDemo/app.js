var express = require('express');
var app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('home');
});


app.get('/brotherhood/:user', function(req, res) {
	var usr = req.params.user;
	res.render('brotherhood', { usrVar: usr });

});

app.get('/brotherhood/:user/contracts', function(req, res) {
	var usr = req.params.user;
	var contractz = [
		{
			title: 'Remove Husband',
			author: 'Lady Mary'
		},
		{
			title: 'Kill Chef Garret',
			author: 'Hot Dog'
		},
		{
			title: 'Please Kill Harry Potter',
			author: 'Voldermort'
		}
		];

	res.render('contracts', { contractz: contractz, usrVar: usr });
});


app.get('*', function(req, res) {
	res.send("Error 404, we do not accept that route...");
});


app.listen(process.env.PORT, process.env.IP, function() {
	console.log('Server is listening!!');
});
