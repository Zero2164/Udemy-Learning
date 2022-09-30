var express = require("express");
var app = express();

// When you go to "/" : you will receive a message that says "Hi"
app.get('/', function(req, res) {
    res.send("Hi There!");
});

//When you go to "/bye": you will get a message that says "bye"
app.get('/bye', function(req, res) {
    res.send("Goodbye!");
});

//When you go to "/cat": you will get a message that says "fatgirl: *screams*"
app.get('/cat', function(req, res) {
    res.send("FatGirl: *Screams*");
});

//When you go to "/bro/:subpage" you will get a message that says "Welcome to the -InsertNameOfBroHere SUBPAGE!"
app.get('/bro/:subpage/id:21', function(req, res) {
    var subpage = req.params.subpage;
    res.send("Welcome Brother " + subpage.toUpperCase())
});

//When you go to "Undefined route" present error page
app.get('*', function(req, res) {
    res.send("Error 404 Page Not Found :(");
});




//Tell Exxpress.js to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER HAS STARTED!!");
});
