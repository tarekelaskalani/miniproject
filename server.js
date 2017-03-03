var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ejs = require('ejs');
var User = require('./datasets/users');

var app = express();

mongoose.connect('mongodb://localhost:27017/website2');
//app.use(require("./app/routes.js"));
app.use('/app',express.static(__dirname +"/app"));
app.use('/node_modules',express.static(__dirname + "/node_modules"))

app.listen('3000',function(){
console.log("listening for local host 3000");

});

app.get("/",function(req,res){
  res.render("homepage.ejs");
});

app.get("/login",function(req,res){
  res.render("login.ejs");
});

app.get("/signup",function(req,res){
  res.render("signup.ejs");
});

app.get("/profile",function(req,res){
  res.render("profile.ejs");
});

app.get("/homepage",function(req,res){
  res.render("homepage.ejs");
});

app.get("/works",function(req,res){
  res.render("works.ejs");
});
