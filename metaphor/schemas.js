var Mongoose = require('mongoose');
var Schema = mongoose.Schema;



var websiteSchema = new Schema({
    pk: {type: String, required: true},
    websiteCategory: {type: Array},
    websiteSubCategory: {type: Array},
    nouns: {type: Array},
    additionalType: ObjectId,
    alternateName: {type: String},
    description: {type: String},
    screenshot: ObjectId,
    mainEntityofPage: ObjectId,
    name: {type: String},
    potentialAction: ObjectId,
    sameAs: {type: String},
    dateCreated: { type: Date, required: true, default: Date.now}
});

var website = mongoose.model('website_schema', websiteSchema);

module.exports = {WebsiteSchema: websiteSchema};
