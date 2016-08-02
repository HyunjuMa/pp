/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var path = require('path');
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var routes = require('./routes');
var mongoose = require('mongoose');


// create a new express server
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));


// router setup
app.use('/', routes);

// // get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
//
// // start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});


// connect to mongod server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log("**** Conneced to mongod server ****");
});

mongoose.connect('mongodb://localhost/users');
var User = require('./models/user');
var router_user = require('./routes/auth/register/index')(app,User);
