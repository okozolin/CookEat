var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var controllers = require("./controllers");

//Map the routes
controllers.init(app);


//app.get("/api/users",
//	function(req, res) {
//		res.set("Content-Type", "application/json");
//		res.send({ name: "Shawn", isValid: true, group: "admin" });
//	});

//Start server
var server = http.createServer(app);
server.listen(port);












//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);




