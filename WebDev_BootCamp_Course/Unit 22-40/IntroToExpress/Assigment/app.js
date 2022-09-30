function assignment() {
	var express = require("express");
	var app = express();

	app.get('/', function(req, res) {
		res.send('Hi there, welcome to my assignment!');
	});

	app.get('/speak/:animal', function(req, res) {
		function speakLogic() {
			var anim = req.params.animal.toLowerCase();
			var sounds = {
				pig: "Oink",
				snake: "esss",
				cow: "Moo",
				cat: "Meow",
				goldfish: "...",
				dog: "Woof!",
				whale: "*insert Dory's voice from Finding Nemo*"
			};

			var sound = sounds[anim];
			if (sound === undefined) {
				res.send('Could not find "' + anim + '" in the database. Please enter another animal to hear it speak!');
				console.log('Failed speak database search. Unable to find "' + anim + '"');
			}
			else {
				res.send('The ' + anim + ' says: "' + sound + '"');
			}
			// var voiceDB = [
			// 	{
			// 		name: "cat",
			// 		voice: "Meow"
			// 	},
			// 	{
			// 		name: "dog",
			// 		voice: "Woof Woof!"
			// 	},
			// 	{
			// 		name: "eagle",
			// 		voice: "Sqwark!"
			// 	},
			// 	{
			// 		name: "pig",
			// 		voice: "Oink!"
			// 	},
			// 	{
			// 		name: "cow",
			// 		voice: "Moo!"
			// 	},
			// 	{
			// 		name: "whale",
			// 		voice: "*insert Dory's voice from Finding Nemo*"
			// 	},
			// 	{
			// 		name: "bat",
			// 		voice: "Screech!"
			// 	},
			// 	{
			// 		name: "elephant",
			// 		voice: "FROAHHHH!"
			// 	},
			// 	{
			// 		name: "crocodile",
			// 		voice: "Grumble-SNAP!"
			// 	},
			// 	{
			// 		name: "sheep",
			// 		voice: "Bahh Bahh!"
			// 	},
			// 	{
			// 		name: "human",
			// 		voice: "My Name is John, I am a classic example of the most ignorant, obnoxious species on the planet. - Don't be like John"
			// 	},
			// ];

			// function tru() {
			// 	res.send('The ' + anim + ' says: ' + voiceDB[i].voice);
			// 	console.log(i);
			// 	return true;
			// }

			// function fail() {
			// 	i + 1;
			// 	if (i === voiceDB.length - 1 && anim !== voiceDB[i].name) {
			// 		res.send('Could not find "' + anim + '" in the database. Please enter another animal to hear it speak !');
			// 		console.log('Failed speak database search. Unable to find "' + anim + '"');
			// 		return false;
			// 	}
			// }

			// for (var i = 0; i < voiceDB.length; i++) {
			// 	if (anim === voiceDB[i].name) {
			// 		tru();
			// 	}
			// 	else if (i < voiceDB.length && anim !== voiceDB[i].name) {
			// 		fail();
			// 	}
			// }
		}
		speakLogic();
	});



	app.get('/repeat/:keyword/:num', function(req, res) {
		function repeatLogic() {
			var word = req.params.keyword;
			var num = Number(req.params.num);
			var result = [];
			for (var i = 0; i < num; i++) {
				result += word + " ";
			}
			res.send(result);
		}
		repeatLogic();

	});

	app.get('*', function(req, res) {
		res.send("Sorry, page not found.... What are you doing with your life?");
	});

	//Tell Exxpress.js to listen for requests (start server)
	app.listen(process.env.PORT, process.env.IP, function() {
		console.log("SERVER HAS STARTED!!");
	});
}

assignment();
