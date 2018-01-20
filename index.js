var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Laf 2 Luv"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var express = require("express")
var usersRouter = express.Router()

var app = express()

usersRouter.get("/",function(req,res){
  res.json({"message":"Hello world"});
});

app.use("/users",usersRouter);
app.listen(3000,"0.0.0.0",function(){
  console.log("Started at "+3000);
})