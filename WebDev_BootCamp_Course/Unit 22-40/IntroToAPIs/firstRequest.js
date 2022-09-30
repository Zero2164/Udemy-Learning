// var request = require('request');
// request('https://www.flickr.com/services/rest/', function(error, response, body) {
// 	if (error) {
// 		console.log('Something Went Wrong');
// 		console.log(error);
// 	}
// 	else {
// 		if (response.statusCode == 200) {
// 			console.log(body);
// 		}
// 	}
// });


const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/todos/1')
	.then(function(response) {
		// handle success
		console.log('Title of Object 1 of example code is: "' + response.data.title + '"')
	})
	.catch(function(error) {
		// handle error
		console.log("SOMETHING WENT WRONG!!!");
		console.log(error);
	})
	.finally(function() {
		// always executed
	});
