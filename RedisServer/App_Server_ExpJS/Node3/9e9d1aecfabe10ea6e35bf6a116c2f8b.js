// ExpressJS
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');

// ExpressJS application
var app = new express();

// Express Middleware Configuration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // EJS = Embedded JavaScript

app.use('/', require('./controllers/login') );   // Default Route
app.use('/login', require('./controllers/login') );  
app.use('/home', require('./controllers/home') ); 


app.listen(
    9000,
    () =>{
        console.log("Server Started :" + new Date().toLocaleDateString())
    }

)