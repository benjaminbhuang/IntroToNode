var request = require('request');
var fs = require('fs');


var s = request("http://www.benjaminhuang.com");

s.pipe(process.stdout);

s.pipe(fs.createWriteStream('benjaminhuang.html'));