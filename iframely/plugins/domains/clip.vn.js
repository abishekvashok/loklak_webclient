module.exports = {

    re: /^http:\/\/clip\.vn\/watch\/(?:[\w-]+,)?([\w-]+)\/?/i,

    mixins: ["*"],
    highestPriority: true,    

    getLink: function(urlMatch) {
        return {
            href: 'http://clip.vn/embed/' + urlMatch[1],
            type: CONFIG.T.text_html,
            rel: CONFIG.R.player,
            'aspect-ratio': 640/389
        };
    },

    getMeta: function(urlMatch) {
        return {
            "media": "player"
        };
    },    

    tests: [{
        pageWithFeed: "http://clip.vn/"
    },
        "http://clip.vn/watch/Mot-ngay-truc-chien-cung-tiep-suc-mua-thi-2014,28mJ/"
    ]
};