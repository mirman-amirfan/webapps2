var express = require("express"); //basically an import command
var port = 3000;
var app = express(); //result of express is now "app"

app.get("/", function(req, res) { //teaching node server to how to respond to this route
  res.send("Hello from Node!");
});

app.get("/greet/:name", function(req, res){ // :name = this can change using req.params
  var name = req.params.name;
  res.send("<h1>Hi, " + name + "!</h1>");
});

app.use('/static', express.static('public'));

app.listen(port, function() {
  console.log("listening on port " + port.toString());
});
