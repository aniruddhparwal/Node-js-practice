var http = require('http');

var server = http.createServer(function (req, res) {
    console.log("new request recevied");
    var url = req.url;
    console.log("ani" + url)
    res.end("Online")
});

server.listen(8080);

console.log("hi")