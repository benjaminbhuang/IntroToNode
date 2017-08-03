var request = require('request');

var s = request("http://www.benjaminhuang.com");

s.pipe(process.stdout);