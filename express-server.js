var express = require("express");
var favicon = require("serve-favicon");

var app = express();

app.use("/static", express.static("static"));
app.use(favicon(__dirname + "/static/favicon.ico"));

app.get("/", function (request, response) {
	response.end("Hello world from express!");
});

app.get("/Chris", function (request, response) {
	response.end("Hello Chris from express!");
});

app.listen(3000, "127.0.0.1", function(){
	console.log('Server is listening on localhost port 3000');
});

