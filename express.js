var express = require('express');
var fs = require('fs');
var app = express.createServer();
app.set('view engine', 'html');

app.use(express.favicon());
app.use(express.logger('dev'));

app.get('/', function(req, response){
  fs.readFile(__dirname + '/public/index.htm', function(error, content) {
    if (error) {
        response.writeHead(500);
        response.end();
    }
    else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content, 'utf-8');
    }
  });
});

app.get('/:file', function(req,res){
  var file = req.params.file
    , path = __dirname + '/public/' + file;

  res.send(path);
});

app.listen(process.env.C9_PORT);