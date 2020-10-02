var express = require('express')
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json())
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

app.get('/Selectedbooks', (req, res) => {
    var movieID = req.query.movieId;
    console.log("id ", movieID)
    var selectedMovies = moviesDetails.filter(movie => movie.movieID == movieID)
    // res.json(moviesDetails);
    res.send(selectedMovies)
    res.sendStatus(200)
})

app.get('/books', (req, res) => {
    res.json(moviesDetails);
    res.sendStatus(200)
})

app.post('/submitMovie', (req, res) => {
    console.log(req.body)
    moviesDetails.push(req.body)
    res.sendStatus(201)
})

app.listen(8001, () => { console.log("server started") })