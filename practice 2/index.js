var express = require('express')

var app = express();

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

app.get('/books', (req, res) => {
    var movieID = req.query.movieId;
    console.log("id ", movieID)
    var selectedMovies = moviesDetails.filter(movie => movie.movieID == movieID)
    // res.json(moviesDetails);
    res.send(selectedMovies)
    res.sendStatus(200)
})

app.listen(8001, () => { console.log("server started") })