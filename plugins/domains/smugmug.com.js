var jquery = require('jquery');

module.exports = {

    mixins: [
        "canonical",
        "oembed-site",
        "oembed-author",
        "og-image", // fallback for the thumbnails
        "favicon"
    ],

    getMeta: function(oembed) {
        return {
            title: oembed.title || oembed.gallery_title,
        };
    },

    getLink: function (oembed) {

        var links = [];

        if (oembed.type === "photo") {

            var size_M_src = oembed.url;
            var size_X_src = size_M_src.replace("/M/", "/X3/");

            //thumbnail
            links.push({
                href: size_M_src,
                type: CONFIG.T.image,
                rel: CONFIG.R.thumbnail,
                width: oembed.width,
                height: oembed.height
            });

            //photo
            links.push({
                href: size_X_src,
                type: CONFIG.T.image,
                rel: CONFIG.R.image
            });

        } else if (oembed.type === "rich") {
            // iframe'd gallery

            var $container = jquery('<div>');

            try {
                $container.html(oembed.html);
            } catch(ex) {}

            var $iframe = $container.find('iframe');

            if ($iframe.length == 1) {
                links.push({
                    href: $iframe.attr('src') + "?width=100%&height=100%",
                    type: CONFIG.T.text_html,
                    rel: [CONFIG.R.player, CONFIG.R.oembed]
                });
            }

        } // else it's oembed link with no thumnbnail or other useful info

        return links;
    },

    tests: [{
        pageWithFeed: "http://www.smugmug.com/popular/today"
    },
        "http://www.smugmug.com/popular/all#!i=789708429&k=sPdffjw",
        "http://normbetzphotos.smugmug.com/BASKETBALL-201314/HS-VS-MAUMELLE-1-23-14",
        {
        skipMixins: [
            "og-title",
            "oembed-title",
            "canonical"
        ]
    }]
};