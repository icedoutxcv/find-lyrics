var request = require('request')
var cheerio = require('cheerio')
var genius = require("node-genius")

let key = 'HFCCPHtUjOl4LR6ulBjWStl5onHkm8DZ60ur9E48-zN-YAFipT-L0nIS4vXoZIzP'
let geniusClient = new genius(key)
let log = console.log

function scrapLyrics(url) {
    request({
        method: 'GET',
        url: url
    }, function (err, response, body) {
        if (err) return console.error(err)

        $ = cheerio.load(body)
        var lyrics = $('.lyrics').text()
        log(lyrics)
    });
}

function getUrl(song){
    geniusClient.search(song, function 
    (error, results) {
            var result = JSON.parse(results)
            try {
                var url = result['response']['hits'][0]['result']['url']
                scrapLyrics(url)
            } catch(e){
                log("Cannot find that song.")
            }
    });
}

const song = (name) => {
    getUrl(name)
};

module.exports = {
    song
};
