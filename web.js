var express = require('express');
var fs = require('fs');
app = express();
//var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html').toString());
});

app.get('/background.jpg', function(request, response) {
  response.send(fs.readFileSync('background.jpg'));
});
 
app.get('/channel.html', function(request, response) {
  response.send(fs.readFileSync('channel.html').toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
