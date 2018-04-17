var portNumber = 1001

// ExpressJS
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var redis = require('redis');
var helmet = require('helmet');

// ExpressJS application
var app = new express();

// Express Middleware Configuration
app.use(helmet());
app.use(helmet.noCache());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

global.redisClient = redis.createClient(
    {
        host: '127.0.0.1', //172.17.141.65
        port: 6379
    }
)
// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // EJS = Embedded JavaScript

app.use(
    "",
    (req, res, next) => {
        console.time("HTTP");
        next();
    }
)
// auth middleware
app.use(
    "",
    function AuthenticateUser(req, res, next) {
        if (req.url == '/login') {
            next();
        }
        else {
            global.redisClient.exists('LOGGED_USER_ID'
                , function (err, isExists) {
                    if (!err) {
                        if (isExists == 0) {
                            res.redirect('login')
                            console.log("USER NOT LOGGED IN (52)")
                        }
                        else {
                            next();
                        }
                    } else {
                        res.end("Server Error")
                    }
                }

            )
        }
    }
)

app.use('/', require('./controllers/login'));   // Default Route
app.use('/login', require('./controllers/login'));
app.use('/home', require('./controllers/home'));

app.use(
    "",
    (req, res, next) => {
        console.timeEnd("HTTP");
        next();
    }
)

app.listen(
    portNumber,
    () => {
        console.log("Server Started :" + new Date().toLocaleDateString())
    }

)