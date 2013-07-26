var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html');
  var buf  = new Buffer(128)
  buf.write(data); 
  response.send(buf.toString());
  //response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
