(function() {
    var config = {

        DEBUG: false,
        RICH_LOG_ENABLED: false,

        // For embeds that require render, baseAppUrl will be used as the host.
        baseAppUrl: "iframely.eos.io",
        relativeStaticUrl: "/r",

        port: process.env.PORT || 8061,

        // You can set your unique whitelist access url here.
        // Iframely will periodically load WL updates from remote file.
        // To get one - go to http://iframely.com/qa
        WHITELIST_URL: 'http://iframely.com/qa/sample.json',

        // Optional SSL cert, if you serve under HTTPS.
        /*
        ssl: {
            key: require('fs').readFileSync(__dirname + '/key.pem'),
            cert: require('fs').readFileSync(__dirname + '/cert.pem'),
            port: 443
        },
        */

        /*
        Supported cache engines:
        - no-cache - no caching will be used.
        - node-cache - good for debug, node memory will be used (https://github.com/tcs-de/nodecache).
        - redis - https://github.com/mranney/node_redis.
        - memcached - https://github.com/3rd-Eden/node-memcached
        */
        CACHE_ENGINE: 'node-cache',
        CACHE_TTL: 0, // In milliseconds. 0 for 'never expire' to let cache engine decide itself when to evict the record

        /*
        // Redis cache options.
        REDIS_OPTIONS: {
            host: '127.0.0.1',
            port: 6379
        },
        */

        /*
        // Memcached options. See https://github.com/3rd-Eden/node-memcached#server-locations
        MEMCACHED_OPTIONS: {
            locations: "127.0.0.1:11211"
        }
        */


        // Access-Control-Allow-Origin list.
        allowedOrigins: [
            "*"
        ],


        /*
        // Uncomment to enable plugin testing framework.
        tests: {
            mongodb: 'mongodb://localhost:27017/iframely-tests',
            single_test_timeout: 10 * 1000,
            plugin_test_period: 2 * 60 * 60 * 1000,
            relaunch_script_period: 5 * 60 * 1000
        },
        */

        // If there's no response from remote server, the timeout will occur after
        metaLoadingTimeout: 5 * 1000, //ms


        // Customize API calls to 3rd parties. At the very least - configure required keys.
        providerOptions: {
            "twitter.status": {
                "max-width": 550,
                "min-width": 250,
                consumer_key: 'INSERT YOUR VALUE',
                consumer_secret: 'INSERT YOUR VALUE',
                access_token: 'INSERT YOUR VALUE',
                access_token_secret: 'INSERT YOUR VALUE',
                hide_media: false,
                hide_thread: false,
                omit_script: false
            },
            flickr: {
                apiKey: 'INSERT YOUR VALUE'
            },
            "google.maps": {
            //  apiKey: 'INSERT YOUR VALUE' // not required, but recommended
            },
            readability: {
                enabled: false
            },
            images: {
                loadSize: true, // if true, will try an load first bytes of all images to get/confirm the sizes
                checkFavicon: true // if true, will verify all favicons
            },
            tumblr: {
                consumer_key: "w3Iuly7wcJzrNWgDq0homJJT9MsA0KUq3Wx2PsBOjCEMmOIL9J"
            },

            // List of query parameters to add to YouTube and Vimeo frames
            // Start it with leading "?". Or omit alltogether for default values
            youtube: {
                get_params: "?rel=0&showinfo=1&autoplay=1"     // https://developers.google.com/youtube/player_parameters
            },
            vimeo: {
                get_params: "?byline=0&badge=0&autoplay=1"     // http://developer.vimeo.com/player/embedding
            }
        },

        // WHITELIST_WILDCARD, if present, will be added to whitelist (even absent one) as record for top level domain: "*"
        // you can change default behavior of the system using this setting.
        // E.g. allowing all open-graph players, denying twitter photos, etc.
        // If absent or empty, all generic media parsers will be disabled by default (only domain plugins will work)
        // More about format: http://iframely.com/qa/format

        WHITELIST_WILDCARD: {
              "twitter": {
                "player": "allow",
                "photo": "allow"
              },
              "oembed": {
                "video": "allow",
                "photo": "allow",
                "rich": "deny",
                "link": "deny"
              },
              "og": {
                "video": ["allow", "ssl"]
              },
              "iframely": {
                "survey": "allow",
                "reader": "allow",
                "player": "allow",
                "image": "allow",
              },
              "html-meta": {
                "video": ["allow", "responsive"],
                "image": "allow"
              }
        }
    };

    module.exports = config;
})();
