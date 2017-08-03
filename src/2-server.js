var fs = require('fs');

var http = require('http');

var port = 3000;
var ip ='127.0.0.1';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if(req.url == '/file.txt'){
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    }else{
        res.end("Hello world");
    }
}).listen(port, ip);
console.log('Server running');