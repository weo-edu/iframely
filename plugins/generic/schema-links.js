var _ = require('underscore');
module.exports = {
  getLinks: function(schema) {
    if(! schema)
      return;

    var links = [];
    _.each(schema, function(obj) {
      if(obj.image)
        links.push({href: obj.image, rel: ['image'], type: CONFIG.T.image});
    });
    return links;
  }
};