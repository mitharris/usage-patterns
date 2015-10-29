var mongoose  = require('mongoose');
var Address = require('../models');
var parse = require('../parser');


function create (params){
    // create it baby
    head.name = path;
    var created = new Address({ name: 'Silence' });
    created.save();
};

module.exports = function (request, reply){

    // 1. Convert the user submitted URL into an object
    var obj = parse.parse(request.params.uri);

    // Figure out if the document currently exists
    var query = Address.where({ _id: obj.path});
    query.findOne(function(err, address) {

        // 2. If the document doesnt exist create one
        if (err) {
            // Create the object
            var params = {};
            var html = parse.html(obj.path);

            params.basic = parse.basic(html);
            params.twitter = parse.twitter(html);
            params.opengraph = parse.opengraph(html);
            create(params);

            // Return the saved object
            reply(params);
        };

        // If the document does exit then return the document
        if (address) {
            reply(address);
        }
    });
};
