var http = require('http')
const express = require('express')

var app = express()

app.get('/books', (req, res) => {
    res.status(200).json({})
})

app.listen(8080)