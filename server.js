#!/usr/bin/env node

require('dotenv').load();

var Hapi = require('hapi');
var server = new Hapi.Server();
var Mongoose    = require('mongoose');
var config = require('./config');


server.connection(config.server);

// MongoDB Connection
Mongoose.connect(config.mongo.host + config.mongo.name);
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){console.log('MongoDB running at: '
    + config.mongo.host + '' + config.mongo.name)});

// Adding the routes
server.route(require('./metaphor/routes'));


// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
