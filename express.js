var express = require('express');
var fs = require('fs');
var app = express.createServer();
app.set('view engine', 'html');

app.use(express.favicon());
app.use(express.logger('dev'));


app.configure('development', function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.listen(process.env.C9_PORT);