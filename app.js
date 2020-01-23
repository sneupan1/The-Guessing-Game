var express = require("express");
var app = express(); 

app.use(express.static("public"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/colorGame.html");
});

app.get("*", function(req, res){
	res.redirect("/");
});
var connectPORT = process.env.PORT || 3000;
app.listen(connectPORT, process.env.IP, function(){
	console.log("Server has started!");
});