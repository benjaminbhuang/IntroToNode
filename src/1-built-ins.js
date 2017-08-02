var os = require('os');
var one = require('./one');

var toMb = function (f) {
    return(Math.round((f/1024/1024)*100/100));
}

console.log('Host: '+os.hostname());
console.log('15 min. load average: '+os.loadavg()[2]);
console.log(toMb(os.freemem())+' of '+toMb(os.totalmem())+' Mb free');

one.doIt(23, function (err, result) {
    console.log(result);
});

console.log(one.foo);
console.log(one.count);