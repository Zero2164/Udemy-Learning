var express = require('express');
const axios = require('axios'),
http                = require('https'),
hostname            = '127.0.0.1',
port                = 3000;

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('search');
});

app.get('/results', function(req, res) {
	const input = req.query.srch;
	const urlz = "https://www.omdbapi.com/?s=" + input;
	axios.get(urlz + "&apikey=thewdb")
		.then(function(response) {
			const MDBdata = response.data.Search;
			// handle success
			if (!MDBdata) {
				console.log('Search UnSuccessful!');
				res.render('resultFail');
			}
			else {
				res.render('results', { MDBdata: MDBdata });
			}
		})
		.catch(function(error) {
			// handle error
			console.log("Error!", error);
		});
});

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Movie App has started !!");
});

//RUN SERVER ON LOCAL PORT
app.listen(port, hostname, () => {
    console.log(`Movie App Server running at http://${hostname}:${port}/`);
});
