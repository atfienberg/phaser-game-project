// Hello! This is a test to see if I can get jquery and phaser workin

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/PongStuff'));

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/favicon/favicon.ico'));

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/other',function(req, res) {
    res.render('other');
});

app.get('/game',function(req, res) {
    res.render('game');
});

http.listen(3000, function(){
    console.log('listening on 3000');
});
