var request = require('request');
var cache = require('./cache');

module.exports = function(uri, options, callback) {

    //cache.withCache("request")
    request(uri, options, callback);

};