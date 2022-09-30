const
    http = require('https'),
    hostname = '127.0.0.1',
    port = 3000,
    express = require('express'),
    app = express();

//Server Create
http.createServer((req, res) => {
    res.statusCode = 200;
});
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('*', (req, res) => {
    res.send('Unable to locate that page :(');
});

//RUN SERVER ON LOCAL PORT
app.listen(port, hostname, () => {
    console.log(`DemoApp Server running at http://${hostname}:${port}/`);
});
