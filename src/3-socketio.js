var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

// use this io.configure() for Cloud9 to skip websockets
/*io.configure(function () {
    io.set('transports', ['xhr-polling']);
});*/

io.sockets.on('connection', function (socket) {
    setInterval(function() {
        var timestamp = Date.now();
        console.log('Emitted: ' + timestamp);
        socket.emit('timer', timestamp);
    }, 1024);
    socket.on('submit', function(data) {
        console.log('Submitted: ' + data);
    });
});

var port = 8080;
var ip ='127.0.0.1';

app.listen(port,ip );

console.log('Server is running on '+ 'http://'+ip+':'+port);
