var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
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
app.get('/books', (req, res) => {
    res.json(moviesDetails);
    res.sendStatus(200)
})

app.listen(8080, () => { console.log("server started") })