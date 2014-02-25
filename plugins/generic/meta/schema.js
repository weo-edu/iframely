var schema = require('schema-microdata')
  , _ = require('underscore');

module.exports = {
  getData: function(html) {
    return {schema: schema(html)};
  }
};