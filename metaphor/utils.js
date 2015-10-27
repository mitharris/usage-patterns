var url = require('url');


module.exports = {
    all: function(address){
            var obj = url.parse(address);
            return obj;
          },
    host: function(obj){
            return obj.host;
          },
    port: function(obj){
            return obj.port;
          },
    href: function(obj){
            return obj.href;
          },
    protocol: function(obj){
            return obj.protocol;
          },
    search: function(obj){
            return obj.search;
          },
    auth: function(obj){
            return obj.auth;
          }
};
