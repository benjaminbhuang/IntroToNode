var request = require('request');
var fs = require('fs');
var zlib = require('zlib');


var s = request("http://www.benjaminhuang.com");

s.pipe(process.stdout);

s.pipe(fs.createWriteStream('benjaminhuang.html'));

s.pipe(zlib.createGzip()).pipe(fs.createWriteStream('benjaminhuang.html.gz'));