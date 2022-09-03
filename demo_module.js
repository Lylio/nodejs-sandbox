var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
}).listen(8088);
