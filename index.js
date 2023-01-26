var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

//Home page
app.get('/', function(req, res) {
  res.render('pages/home');
});

// News page
app.get('/news/:newsId', function(req, res) {
    res.render('pages/news');
});


//redirect invalid urls to home
app.all('*', function(req, res) {
    res.redirect("/");
});

app.listen(8080);
console.log('Server is listening on port 8080');