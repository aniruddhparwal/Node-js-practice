var express = require('express')
var bodyParser = require('body-parser')
// app.use(bodyParser.json())
const cors = require('cors')
const app = express()
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

app.get('/books', (req, res) => {
    res.json(moviesDetails);
    res.sendStatus(200)
})

app.listen(8080, () => { console.log("server started") })