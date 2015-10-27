#!/usr/bin/env node

require('dotenv').load();

var Hapi = require('hapi');
var server = new Hapi.Server();
var Mongoose    = require('mongoose');

server.connection({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '8000'
});

// MongoDB Connection
Mongoose.connect('mongodb://localhost/' + process.env.DB_NAME);

// Adding the entrypoint
server.route({
    method: 'GET',
    path: '/',
    handler: require('./metaphor/core')()
});


// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
