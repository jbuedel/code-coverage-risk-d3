var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
  res.send(__dirname + '/public/index.html');
});

app.get('/:file', function(req,res){
  var file = req.params.file
    , path = __dirname + '/public/' + file;

  res.send(path);
});

app.listen(process.env.C9_PORT);