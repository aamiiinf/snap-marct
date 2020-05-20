const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session') ;
const app = express() ;
const path = require('path');
/*const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/SnapChat") ;

const Schema = mongoose.Schema;
var userSchema = new Schema({
    username : String ,
    password : String
}) ;
var snapModel = mongoose.model("User" , userSchema ) ;*/

app.use(morgan('common')) ;
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended:true })) ;
app.use(session({
	cookie: { maxAge: 60000 },
    secret : "secret",
    resave : false,
    saveUninitialized : true
})) ;

app.get('/', function (req, res, next){
	res.sendFile(__dirname + "/public/html/MainPage.html");
});
app.post('/', function (req, res, next){
    //res.sendFile(__dirname + "/public/html/MainPage.html");
    console.log('post')
});

app.listen(3000);
console.log("app running on port 3000") ;