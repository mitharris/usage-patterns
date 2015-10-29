var url = require('url');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var components = {};


components.parse = function (uri){
    // Returns a parsed URL parameter into an object
    var obj = url.parse(uri);
    return obj.path
};

components.basic = request(url, function(err, response, html){
    if(!error){
        var $ = cheerio.load(html);
        var head = {};

        head.title = $("head title").text();
        head.meta = {
            description: '',
            keywords: '',
            subject: '',
            robots: '',
            language: '',
            abstract: '',
            topic: '',
            target: '',
            summary: '',
            subject: '',
            Classification: '',
            author: '',
            designer: '',
            owner: '',
            pagename: '',
            subject: '',
            repyto: '',
            category: '',
            coverage: '',
            distribution: '',
            rating: '',
            subtitle: '',
            HandheldFriendly: '',
            MobileOptimized: '',
            medium: '',
            subject: '',
        };

        // Set the meta object values
        $.each(head.meta, function(key, value){
            var input = "meta[name=" + key + "]";
            value = $(input).attr('content');
            head.meta[key] = value;
        });

        // Set the meta object values
        $.each(head.meta, function(key, value){
            var input = "meta[name=" + key + "]";
            value = $(input).attr('content');
            head.meta[key] = value;
        });

        // Convert keyword string to array
        function kArray(){
            var str = head.meta.keywords;
            var keywords = str.split(/\s*,\s*/);
            head.meta.keywords = keywords;
        };

        // Setting the reply-to attribute
        function reply(){
            var email = $('meta[name=reply-to]').attr("content");
            head.meta.repyto = email;
        };


    };
});

components.twitter = function (){
    var meta = {
            summary: '',
            username: '',
            site_id: '',
            creator_username: '',
            creator_id: '',
            description: '',
            content_title: '',
            image: {},
            player_iframe: '',
            media_stream: '',
            iphone_app_name: '',
            iphone_app_id: '',
            iphone_app_url_scheme: '',
            ipad_app: '',
            app_id_itunes: '',
            app_url_ipad: '',
            app_name_andriod: '',
            app_id_andriod: '',
            app_url_andriod: ''
    };

    // Set the meta object values
    $.each(meta, function(key, value){
        var input = "meta[name=" + "twitter\\:" + key + "]";
            value = $(input).attr('content');
            meta[key] = value;
    });
    return meta;
};

components.opengraph = function (){
    var meta = {
            title: '',
            type: '',
            url: '',
            audio: {},
            locale: '',
            description: '',
            content_title: '',
            image: {},
            site_name: '',
            video: '',
            secure_url: '',
            type: ''
    };

    // Set the meta object values
    $.each(meta, function(key, value){
        var input = "meta[property=" + "og\\:" + key + "]";
            value = $(input).attr('content');
            meta[key] = value;
    });

    return meta;
};

module.exports = components;