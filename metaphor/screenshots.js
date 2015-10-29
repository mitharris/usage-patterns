var fs = require('fs');
var Grid = require('gridfs-stream');
var mongoose = require('mongoose');
var mongoose = require('mongoose');
var conn = mongoose.connection;
var webshot = require('webshot');


Grid.mongo = mongoose.mongo;

//conn.once('', function() {
//    console.log('open');
//    var gfs = Grid(conn.db);
//
//    // streaming to gridfs
//    // filename to store in mongodb
//
//    var writestream = gfs.createWriteStream({
//        filename: filename // todo add filename
//    });
//    fs.createReadStream(())
//})