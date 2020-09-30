var http = require('http');

var server = http.createServer(function (req, res) {
    console.log("new request recevied");
    var url = req.url;
    if (url == "/books")
        res.end("list of books")
    if (url == "/checkout")
        res.end("it is checkout")
    if (url == "/favicon.ico") {
        console.log("404 favicon")
        res.writeHead(404)
        res.end()
    }

    console.log("ani" + url)
    res.end("Online")
});

server.listen(8080);

console.log("hi")