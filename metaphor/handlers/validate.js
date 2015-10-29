var Joi = require('joi');
var url = require('url');

var validate = {};

    //
    //    var is_valid = false;
    //var uriSchema = Joi.object().keys({
    //        uri: Joi.string().uri({scheme: ['git', /git\+https?/]})
    //    });
    //
    //Joi.validate({uri: request.params.uri}, uriSchema, function(err, value){
    //    if(err){
    //        Hoek.assert(!err, err);
    //        return is_valid
    //    }
    //    else {
    //        is_valid = true;
    //    }
    //    });

validate.params = {
    uri: Joi.string().uri({
        scheme: [
            'mailto',
            'http',
            'https',
            'gtalk',
            'file',
            'filesystem',
            'fax',
            'facetime',
            'xmpp',
            'chat',
            'data',
            'tel',
            'feed',
            'icon'
        ]
    })
};

module.exports = validate;