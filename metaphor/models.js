var mongoose = require('mongoose');
var Schema = Mongoose.Schema;



var AddressSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    categories: {
        type: Array
    },
    nouns: {
        type: Array
    },
    alternateName: {
        type: String
    },
    screenshot: {},
    potentialAction: {},
});

AddressSchema.methods = {
    _id: function(path){
        return path;
    },
    setScreenshot: Queryset.get,
    setPotentialAction: Queryset.create,
};

module.exports = mongoose.model('Address', AddressSchema);


