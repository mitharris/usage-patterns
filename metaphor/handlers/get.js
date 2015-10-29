var mongoose  = require('mongoose');
var Address = require('../models');
var parse = require('./parser');


function create (path){
    // create it baby
    var schema = {};
    schema.id = scrape(path);
    head.name = path;
    var created = new Address({ name: 'Silence' });
    created.save();
};

module.exports = function (request, reply){

    // Convert the user submitted URL into an object
    var obj = parse.parse(request.params.uri);

    // Figure out if the document currently exists
    var query = Address.where({ _id: obj.path});
    query.findOne(function(err, address) {

        // If the document doesnt exist create one
        if (err) {
            var params = {};
            params.basic = parse.basic(obj.path);
            // Create the object
            // Return the saved object
            reply(address);
        };

        // If the document does exit then return the document
        if (address) {
            reply(address);
        }
    });
};
