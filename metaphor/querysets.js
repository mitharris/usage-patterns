#!/usr/bin/env node
var Website = require('./schema');
var objects = {};


queryset.get = function(pk){
    // db.websites.find( pk: { pk: pk}.sort( {score: -1 } ))
    // db.collection.createIndex( {"pk": pk}, {unique: true})
    var query = Website.where({ pk: pk });
    query.findOne(function (err, website) {
        if (err) return handleError(err);
        if (website) {
            console.log(website);
        }
    });
};

module.exports = objects;