var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
var things = require('./things')
app.use('/things', things);

app.use(bodyParser.json())
// app.use(cors)
var moviesDetails = [
    {
        movieID: 1,
        movieTitle: "IronMan1"
    },
    {
        movieID: 2,
        movieTitle: "IronMan2"
    },
    {
        movieID: 3,
        movieTitle: "SuperMan"
    },
    {
        movieID: 4,
        movieTitle: "BatMan"
    }
]
// app.get('/books', (req, res) => {
//     console.log("working")
//     res.json(moviesDetails)
// })
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.get('/', function (req, res) {
    res.send("First Hello world!!");
});
app.post('/', function (req, res) {
    res.send("Second Hello world!!");
});
app.get('/books', (req, res) => {
    res.json(moviesDetails);
    res.sendStatus(200)
})

app.get('/:id', function (req, res) {
    res.send('The id you specified is ' + req.params.id);
});

app.get('/things/:name/:id', (req, res) => {
    res.send('id:' + req.params.id + ' and name: ' + req.params.name)
})

app.get('/things/:id([0-9]{5})', function (req, res) {
    res.send('id: ' + req.params.id);
});
app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});
app.listen(8080, () => { console.log("server started") })