var fs = require('fs'),
    request = require('request');
const cheerio = require('cheerio');

var urlToDownload;

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
  
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };

request({
    method: 'GET',
    url: 'http://explosm.net/comics/5639/'
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let comicURL = $('#main-comic').attr('src');

    urlToDownload = `http:${comicURL}`;

    download(urlToDownload, './images/comic.png', function(){
        console.log('done');
      });
    
});

